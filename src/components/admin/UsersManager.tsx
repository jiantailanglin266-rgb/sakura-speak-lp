"use client";

import { useEffect, useState } from "react";
import { authApi, authBackend, type AuthUser, type MemberStatus } from "@/lib/auth";

const statusBadge: Record<MemberStatus, string> = {
  active: "bg-mint/40 text-[#2f9d77]",
  suspended: "bg-[#fff2cc] text-gold-deep",
  banned: "bg-[#ffe6ea] text-[#d6557a]",
};

export default function UsersManager({ onToast }: { onToast: (m: string) => void }) {
  const [users, setUsers] = useState<AuthUser[]>([]);
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const list = await authApi.listMembers();
        if (alive) setUsers(list);
      } catch (e) {
        onToast(e instanceof Error ? e.message : "Could not load members.");
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => {
      alive = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setStatus = async (id: string, status: MemberStatus, verb: string) => {
    const u = users.find((x) => x.id === id);
    try {
      await authApi.updateMember(id, { status });
      setUsers((l) => l.map((x) => (x.id === id ? { ...x, status } : x)));
      onToast(`${verb} ${u?.username ?? "user"}`);
    } catch (e) {
      onToast(e instanceof Error ? e.message : "Update failed.");
    }
  };

  const toggleAdmin = async (u: AuthUser) => {
    const role = u.role === "admin" ? "member" : "admin";
    try {
      await authApi.updateMember(u.id, { role });
      setUsers((l) => l.map((x) => (x.id === u.id ? { ...x, role } : x)));
      onToast(`${role === "admin" ? "Promoted" : "Demoted"} ${u.username}`);
    } catch (e) {
      onToast(e instanceof Error ? e.message : "Update failed.");
    }
  };

  const filtered = users.filter(
    (u) =>
      !q ||
      u.username.toLowerCase().includes(q.toLowerCase()) ||
      u.email.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <div>
          <h2 className="font-display text-xl font-extrabold text-ink">Members</h2>
          <p className="text-sm text-ink-soft">
            Manage members — suspend, ban, restore or grant admin.
          </p>
        </div>
        <span className="ml-auto rounded-full bg-cream px-3 py-1 text-xs font-bold text-ink-soft ring-1 ring-pink-soft/50">
          {users.length} members · {authBackend === "supabase" ? "live data" : "mock data"}
        </span>
      </div>

      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search by @username or email…"
        className="mb-4 w-full max-w-sm rounded-full border border-pink-soft/60 bg-white px-4 py-2.5 text-sm text-ink placeholder:text-ink-mute focus:border-pink focus:outline-none focus:ring-4 focus:ring-pink/20"
      />

      {loading ? (
        <p className="py-10 text-center text-sm text-ink-soft">Loading members…</p>
      ) : filtered.length === 0 ? (
        <p className="py-10 text-center text-sm text-ink-soft">No members found.</p>
      ) : (
        <ul className="space-y-2.5">
          {filtered.map((u) => (
            <li key={u.id} className="rounded-2xl bg-white p-4 shadow-card ring-1 ring-pink-soft/40">
              <div className="flex flex-wrap items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-pink-soft to-blue-soft text-xs font-extrabold text-pink-ink">
                  {u.username.slice(0, 2).toUpperCase()}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-bold text-ink">{u.username}</span>
                    <span className={`rounded-full px-2 py-0.5 text-[0.6rem] font-bold ${statusBadge[u.status]}`}>
                      {u.status}
                    </span>
                    {u.role === "admin" && (
                      <span className="rounded-full bg-lilac/30 px-2 py-0.5 text-[0.6rem] font-bold text-[#7a5bd6]">
                        admin
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-ink-soft">
                    {u.email} · joined {u.createdAt.slice(0, 10)}
                  </p>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {u.status === "active" && (
                  <>
                    <button onClick={() => setStatus(u.id, "suspended", "Suspended")} className={btnWarn}>Suspend</button>
                    <button onClick={() => setStatus(u.id, "banned", "Banned")} className={btnDanger}>Ban</button>
                  </>
                )}
                {u.status === "suspended" && (
                  <>
                    <button onClick={() => setStatus(u.id, "active", "Reinstated")} className={btnOk}>Reinstate</button>
                    <button onClick={() => setStatus(u.id, "banned", "Banned")} className={btnDanger}>Ban</button>
                  </>
                )}
                {u.status === "banned" && (
                  <button onClick={() => setStatus(u.id, "active", "Unbanned")} className={btnOk}>Unban</button>
                )}
                <button onClick={() => toggleAdmin(u)} className={btnRole}>
                  {u.role === "admin" ? "Revoke admin" : "Make admin"}
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const btnOk = "rounded-full bg-[#e7f7ee] px-3.5 py-1.5 text-xs font-bold text-[#2f9d77]";
const btnWarn = "rounded-full bg-[#fff2cc] px-3.5 py-1.5 text-xs font-bold text-gold-deep";
const btnDanger = "rounded-full bg-[#ffe6ea] px-3.5 py-1.5 text-xs font-bold text-[#d6557a]";
const btnRole = "rounded-full bg-[#efe7ff] px-3.5 py-1.5 text-xs font-bold text-[#7a5bd6]";
