/* Unified auth + member API.

   Two interchangeable backends behind one interface:
   - Supabase (when configured) — real auth + a `profiles` table (see supabase/schema.sql).
   - Mock (fallback) — localStorage, so the static preview and credential-free
     local dev keep working with the exact same calls.

   Switching is automatic via `supabaseEnabled`; no call sites change. */

import { supabase, supabaseEnabled } from "./supabase";

export type Role = "member" | "admin";
export type MemberStatus = "active" | "suspended" | "banned";

export type AuthUser = {
  id: string;
  email: string;
  username: string;
  role: Role;
  status: MemberStatus;
  createdAt: string;
  isGuest: boolean;
};

export type SignUpInput = { email: string; username: string; password: string };
export type SignInInput = { email: string; password: string };
// needsConfirmation = account created but no active session yet (email must be confirmed).
export type SignUpResult = { user: AuthUser; needsConfirmation: boolean };

/* ============================================================= MOCK ===== */
const USERS_KEY = "sakura-mock-users";
const SESSION_KEY = "sakura-mock-session";

type MockUser = AuthUser & { password: string };

function readUsers(): MockUser[] {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    /* ignore */
  }
  // Seed a demo admin + a couple of members so the member-management screen
  // has data out of the box. (Mock only — never runs against Supabase.)
  const seed: MockUser[] = [
    mkUser("admin@sakura.dev", "sakura_admin", "password", "admin"),
    mkUser("hana@example.com", "hana_n", "password", "member"),
    mkUser("ken@example.com", "ken_dev", "password", "member"),
  ];
  localStorage.setItem(USERS_KEY, JSON.stringify(seed));
  return seed;
}

function writeUsers(u: MockUser[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(u));
}

function mkUser(
  email: string,
  username: string,
  password: string,
  role: Role,
  isGuest = false
): MockUser {
  return {
    id: `u_${Math.random().toString(36).slice(2, 10)}`,
    email,
    username,
    role,
    status: "active",
    createdAt: new Date().toISOString(),
    isGuest,
    password,
  };
}

const strip = ({ password: _pw, ...u }: MockUser): AuthUser => u;

const mock = {
  async getSession(): Promise<AuthUser | null> {
    const id = localStorage.getItem(SESSION_KEY);
    if (!id) return null;
    const u = readUsers().find((x) => x.id === id);
    return u ? strip(u) : null;
  },
  async signUp({ email, username, password }: SignUpInput): Promise<SignUpResult> {
    const users = readUsers();
    if (users.some((u) => u.email.toLowerCase() === email.toLowerCase()))
      throw new Error("That email is already registered.");
    if (users.some((u) => u.username.toLowerCase() === username.toLowerCase()))
      throw new Error("That username is taken.");
    const u = mkUser(email, username, password, "member");
    users.push(u);
    writeUsers(users);
    localStorage.setItem(SESSION_KEY, u.id);
    return { user: strip(u), needsConfirmation: false };
  },
  async signIn({ email, password }: SignInInput): Promise<AuthUser> {
    const u = readUsers().find((x) => x.email.toLowerCase() === email.toLowerCase());
    if (!u || u.password !== password) throw new Error("Wrong email or password.");
    if (u.status === "banned") throw new Error("This account has been banned.");
    localStorage.setItem(SESSION_KEY, u.id);
    return strip(u);
  },
  async signInAsGuest(): Promise<AuthUser> {
    const u = mkUser(`guest_${Date.now()}@sakura.dev`, "Guest", "", "member", true);
    const users = readUsers();
    users.push(u);
    writeUsers(users);
    localStorage.setItem(SESSION_KEY, u.id);
    return strip(u);
  },
  async upgradeGuest({ email, username, password }: SignUpInput): Promise<SignUpResult> {
    const id = localStorage.getItem(SESSION_KEY);
    const users = readUsers();
    const i = users.findIndex((u) => u.id === id);
    if (i < 0) throw new Error("No active session to upgrade.");
    if (users.some((u) => u.id !== id && u.email.toLowerCase() === email.toLowerCase()))
      throw new Error("That email is already registered.");
    if (users.some((u) => u.id !== id && u.username.toLowerCase() === username.toLowerCase()))
      throw new Error("That username is taken.");
    users[i] = { ...users[i], email, username, password, isGuest: false };
    writeUsers(users);
    return { user: strip(users[i]), needsConfirmation: false };
  },
  async signOut(): Promise<void> {
    localStorage.removeItem(SESSION_KEY);
  },
  async listMembers(): Promise<AuthUser[]> {
    return readUsers().map(strip).sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  },
  async updateMember(id: string, patch: Partial<Pick<AuthUser, "role" | "status">>): Promise<void> {
    const users = readUsers();
    const i = users.findIndex((u) => u.id === id);
    if (i >= 0) {
      users[i] = { ...users[i], ...patch };
      writeUsers(users);
    }
  },
};

/* ========================================================= SUPABASE ===== */
async function profileToUser(authId: string, email: string, isGuest = false): Promise<AuthUser> {
  // profiles row carries username/role/status (created by a signup trigger).
  const { data } = await supabase!
    .from("profiles")
    .select("username, role, status, created_at")
    .eq("id", authId)
    .single();
  return {
    id: authId,
    email,
    username: data?.username ?? email.split("@")[0],
    role: (data?.role as Role) ?? "member",
    status: (data?.status as MemberStatus) ?? "active",
    createdAt: data?.created_at ?? new Date().toISOString(),
    isGuest,
  };
}

const real = {
  async getSession(): Promise<AuthUser | null> {
    const { data } = await supabase!.auth.getSession();
    const s = data.session;
    if (!s?.user) return null;
    const isGuest = Boolean((s.user as { is_anonymous?: boolean }).is_anonymous);
    return profileToUser(s.user.id, s.user.email ?? "", isGuest);
  },
  async signUp({ email, username, password }: SignUpInput): Promise<SignUpResult> {
    const { data, error } = await supabase!.auth.signUp({
      email,
      password,
      options: { data: { username } },
    });
    if (error) throw new Error(error.message);
    const needsConfirmation = !data.session; // email confirmation required
    const user: AuthUser =
      data.user && data.session
        ? await profileToUser(data.user.id, email)
        : {
            id: data.user?.id ?? "pending",
            email,
            username,
            role: "member",
            status: "active",
            createdAt: new Date().toISOString(),
            isGuest: false,
          };
    return { user, needsConfirmation };
  },
  async signIn({ email, password }: SignInInput): Promise<AuthUser> {
    const { data, error } = await supabase!.auth.signInWithPassword({ email, password });
    if (error) throw new Error(error.message);
    return profileToUser(data.user.id, email);
  },
  async signInAsGuest(): Promise<AuthUser> {
    const { data, error } = await supabase!.auth.signInAnonymously();
    if (error) throw new Error(error.message);
    return profileToUser(data.user!.id, "guest", true);
  },
  async upgradeGuest({ email, username, password }: SignUpInput): Promise<SignUpResult> {
    // Convert an anonymous user to a permanent account.
    const { data, error } = await supabase!.auth.updateUser({
      email,
      password,
      data: { username },
    });
    if (error) throw new Error(error.message);
    const u = data.user;
    await supabase!.from("profiles").update({ email, username }).eq("id", u.id);
    return {
      user: {
        id: u.id,
        email,
        username,
        role: "member",
        status: "active",
        createdAt: u.created_at ?? new Date().toISOString(),
        isGuest: false,
      },
      // email change is verified via Supabase's email; session stays active.
      needsConfirmation: false,
    };
  },
  async signOut(): Promise<void> {
    await supabase!.auth.signOut();
  },
  async listMembers(): Promise<AuthUser[]> {
    // RLS lets admins select all profiles; members only see their own row.
    const { data, error } = await supabase!
      .from("profiles")
      .select("id, email, username, role, status, created_at")
      .order("created_at", { ascending: false });
    if (error) throw new Error(error.message);
    return (data ?? []).map((r) => ({
      id: r.id,
      email: r.email ?? "",
      username: r.username,
      role: r.role,
      status: r.status,
      createdAt: r.created_at,
      isGuest: false,
    }));
  },
  async updateMember(id: string, patch: Partial<Pick<AuthUser, "role" | "status">>): Promise<void> {
    const { error } = await supabase!.from("profiles").update(patch).eq("id", id);
    if (error) throw new Error(error.message);
  },
};

/* ===================================================== public API ====== */
export const authApi = supabaseEnabled ? real : mock;
export const authBackend: "supabase" | "mock" = supabaseEnabled ? "supabase" : "mock";
