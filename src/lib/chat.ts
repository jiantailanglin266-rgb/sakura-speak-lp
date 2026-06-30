/* Chatroom backend — one API, two interchangeable implementations.

   - Supabase Realtime (when configured): a `messages` table read via
     postgres_changes (INSERT for new messages, UPDATE for reactions), Presence
     for the live online list, and a broadcast channel for typing indicators.
     See supabase/schema.sql.
   - Mock (fallback): localStorage-persisted history plus a few simulated learners
     who come online, type, and reply — so the static GitHub Pages preview feels
     alive with zero backend. Same shape, so ChatRoom.tsx never branches.

   Which one runs is decided by `supabaseEnabled`; no call site changes. */

import { supabase, supabaseEnabled } from "./supabase";
import { chatMessages, defaultChat, cannedReplies } from "./community";

export type Reactions = Record<string, string[]>; // emoji -> userIds

export type ChatMessage = {
  id: string;
  roomId: string;
  userId: string;
  username: string;
  text: string;
  createdAt: string; // ISO
  replyToId?: string | null;
  reactions: Reactions;
  role?: string; // e.g. "Mod" (mock only)
};

export type PresenceUser = { userId: string; username: string };

export type ChatHandlers = {
  /** Mock replaces the whole list (localStorage is the source of truth). */
  onSync?: (all: ChatMessage[]) => void;
  /** Realtime: a new message arrived. */
  onMessage?: (m: ChatMessage) => void;
  /** Realtime: an existing message changed (reactions). */
  onUpdate?: (m: ChatMessage) => void;
  onPresence?: (users: PresenceUser[]) => void;
  onTyping?: (usernames: string[]) => void;
};

export type Me = { id: string; username: string };

export type ChatConnection = {
  backend: "supabase" | "mock";
  history: () => Promise<ChatMessage[]>;
  send: (text: string, replyToId?: string | null) => Promise<void>;
  react: (messageId: string, emoji: string) => Promise<void>;
  setTyping: (isTyping: boolean) => void;
  dispose: () => void;
};

export const chatBackend: "supabase" | "mock" = supabaseEnabled ? "supabase" : "mock";

/* ============================================================== shared ===== */
const pick = <T>(a: T[]): T => a[Math.floor(Math.random() * a.length)];
const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, "").slice(0, 8) || "user";

/* ================================================================ MOCK ===== */
type Bot = { id: string; username: string; role?: string };
const BOTS: Bot[] = [
  { id: "bot:mod", username: "Meemi Team", role: "Mod" },
  { id: "bot:aiko", username: "Aiko" },
  { id: "bot:marco", username: "Marco" },
  { id: "bot:lena", username: "Lena" },
  { id: "bot:sora", username: "Sora" },
  { id: "bot:yuki", username: "Yuki" },
];

const AMBIENT = [
  "こんにちは！ How's everyone's studying going? 😄",
  "I just finished Class A 🎉",
  "Quick q — when do you use は vs が?",
  "今日はいい天気ですね ☀️",
  "がんばって、みんな！ 🌸",
  "What's your favourite kanji so far?",
  "また明日ね 👋",
  "This room is so helpful, thanks everyone 🙏",
  "Just learned「いただきます」— love it",
  "どこから来ましたか？ Where's everyone from?",
];

function mockConnect(roomId: string, me: Me, handlers: ChatHandlers): ChatConnection {
  const KEY = `sakura-chat-${roomId}`;
  const timers: number[] = [];
  let disposed = false;

  const read = (): ChatMessage[] => {
    try {
      return JSON.parse(localStorage.getItem(KEY) || "[]");
    } catch {
      return [];
    }
  };
  const write = (arr: ChatMessage[]) => {
    try {
      localStorage.setItem(KEY, JSON.stringify(arr.slice(-200)));
    } catch {
      /* ignore */
    }
  };

  const seed = (): ChatMessage[] => {
    const base = chatMessages[roomId] ?? defaultChat;
    const step = 4 * 60_000;
    const t0 = Date.now() - base.length * step;
    const arr: ChatMessage[] = base
      .filter((m) => !m.me)
      .map((m, i) => ({
        id: `seed-${roomId}-${i}`,
        roomId,
        userId: m.role === "Mod" ? "bot:mod" : `bot:${slug(m.user)}`,
        username: m.user,
        role: m.role,
        text: m.text,
        createdAt: new Date(t0 + i * step).toISOString(),
        reactions: {},
      }));
    write(arr);
    return arr;
  };

  if (!read().length) seed();

  const emitSync = () => handlers.onSync?.(read());

  const emitPresence = () => {
    const n = 2 + Math.floor(Math.random() * 4); // 2–5 bots online
    const online = [...BOTS]
      .sort(() => Math.random() - 0.5)
      .slice(0, n)
      .map((b) => ({ userId: b.id, username: b.username }));
    handlers.onPresence?.([{ userId: me.id, username: me.username }, ...online]);
  };

  const botSays = (text: string, role?: string, bot?: Bot) => {
    if (disposed) return;
    const b = bot ?? pick(BOTS);
    handlers.onTyping?.([b.username]);
    const t = window.setTimeout(() => {
      if (disposed) return;
      handlers.onTyping?.([]);
      const arr = read();
      arr.push({
        id: `m-${Date.now()}-${Math.floor(Math.random() * 1e4)}`,
        roomId,
        userId: b.id,
        username: b.username,
        role: role ?? b.role,
        text,
        createdAt: new Date().toISOString(),
        reactions: {},
      });
      write(arr);
      emitSync();
    }, 1400 + Math.random() * 800);
    timers.push(t);
  };

  const scheduleAmbient = () => {
    const t = window.setTimeout(() => {
      if (disposed) return;
      botSays(pick(AMBIENT));
      scheduleAmbient();
    }, 11_000 + Math.random() * 14_000);
    timers.push(t);
  };

  const onStorage = (e: StorageEvent) => {
    if (e.key === KEY) emitSync();
  };
  window.addEventListener("storage", onStorage);

  // Let the caller register state setters before the first emit.
  const boot = window.setTimeout(() => {
    emitSync();
    emitPresence();
    scheduleAmbient();
  }, 0);
  timers.push(boot);
  const presenceTimer = window.setInterval(emitPresence, 9000);

  return {
    backend: "mock",
    history: async () => read(),
    send: async (text, replyToId) => {
      const arr = read();
      arr.push({
        id: `me-${Date.now()}`,
        roomId,
        userId: me.id,
        username: me.username,
        text,
        createdAt: new Date().toISOString(),
        replyToId: replyToId ?? null,
        reactions: {},
      });
      write(arr);
      emitSync();
      // A learner replies a beat later, so the room feels responsive.
      const t = window.setTimeout(() => botSays(pick(cannedReplies), undefined, pick(BOTS.slice(1))), 600 + Math.random() * 500);
      timers.push(t);
    },
    react: async (id, emoji) => {
      const arr = read();
      const m = arr.find((x) => x.id === id);
      if (!m) return;
      const cur = m.reactions[emoji] ?? [];
      m.reactions[emoji] = cur.includes(me.id) ? cur.filter((u) => u !== me.id) : [...cur, me.id];
      if (!m.reactions[emoji].length) delete m.reactions[emoji];
      write(arr);
      emitSync();
    },
    setTyping: () => {
      /* no peers to notify in mock */
    },
    dispose: () => {
      disposed = true;
      timers.forEach((t) => window.clearTimeout(t));
      window.clearInterval(presenceTimer);
      window.removeEventListener("storage", onStorage);
    },
  };
}

/* ============================================================ SUPABASE ===== */
/* eslint-disable @typescript-eslint/no-explicit-any */
function realConnect(roomId: string, me: Me, handlers: ChatHandlers): ChatConnection {
  const sb = supabase!;
  const channel = sb.channel(`room:${roomId}`, { config: { presence: { key: me.id } } });

  const typingClear: Record<string, ReturnType<typeof setTimeout>> = {};
  let typingUsers: string[] = [];
  const emitTyping = () => handlers.onTyping?.([...typingUsers]);

  const mapRow = (r: any): ChatMessage => ({
    id: r.id,
    roomId: r.room_id,
    userId: r.user_id,
    username: r.username,
    text: r.text,
    createdAt: r.created_at,
    replyToId: r.reply_to,
    reactions: (r.reactions ?? {}) as Reactions,
  });

  channel
    .on(
      "postgres_changes",
      { event: "INSERT", schema: "public", table: "messages", filter: `room_id=eq.${roomId}` },
      ({ new: row }: any) => handlers.onMessage?.(mapRow(row))
    )
    .on(
      "postgres_changes",
      { event: "UPDATE", schema: "public", table: "messages", filter: `room_id=eq.${roomId}` },
      ({ new: row }: any) => handlers.onUpdate?.(mapRow(row))
    )
    .on("presence", { event: "sync" }, () => {
      const state = channel.presenceState() as Record<string, any[]>;
      const seen = new Set<string>();
      const list: PresenceUser[] = [];
      for (const arr of Object.values(state))
        for (const p of arr)
          if (p.userId && !seen.has(p.userId)) {
            seen.add(p.userId);
            list.push({ userId: p.userId, username: p.username });
          }
      handlers.onPresence?.(list);
    })
    .on("broadcast", { event: "typing" }, ({ payload }: any) => {
      const { username, typing } = payload ?? {};
      if (!username || username === me.username) return;
      if (typing) {
        if (!typingUsers.includes(username)) {
          typingUsers.push(username);
          emitTyping();
        }
        clearTimeout(typingClear[username]);
        typingClear[username] = setTimeout(() => {
          typingUsers = typingUsers.filter((u) => u !== username);
          emitTyping();
        }, 3500);
      } else {
        typingUsers = typingUsers.filter((u) => u !== username);
        emitTyping();
      }
    })
    .subscribe(async (status) => {
      if (status === "SUBSCRIBED") await channel.track({ userId: me.id, username: me.username });
    });

  return {
    backend: "supabase",
    history: async () => {
      const { data } = await sb
        .from("messages")
        .select("*")
        .eq("room_id", roomId)
        .order("created_at", { ascending: true })
        .limit(200);
      return (data ?? []).map(mapRow);
    },
    send: async (text, replyToId) => {
      await sb.from("messages").insert({
        room_id: roomId,
        user_id: me.id,
        username: me.username,
        text,
        reply_to: replyToId ?? null,
      });
    },
    react: async (id, emoji) => {
      // Prototype: read-modify-write on a jsonb column. Production should move
      // reactions to a dedicated table or an RPC to avoid lost updates.
      const { data } = await sb.from("messages").select("reactions").eq("id", id).single();
      const reactions = ((data?.reactions ?? {}) as Reactions);
      const cur = reactions[emoji] ?? [];
      reactions[emoji] = cur.includes(me.id) ? cur.filter((u) => u !== me.id) : [...cur, me.id];
      if (!reactions[emoji].length) delete reactions[emoji];
      await sb.from("messages").update({ reactions }).eq("id", id);
    },
    setTyping: (isTyping) => {
      channel.send({ type: "broadcast", event: "typing", payload: { username: me.username, typing: isTyping } });
    },
    dispose: () => {
      Object.values(typingClear).forEach((t) => clearTimeout(t));
      sb.removeChannel(channel);
    },
  };
}
/* eslint-enable @typescript-eslint/no-explicit-any */

/* ============================================================ dispatch ===== */
export function connectChat(roomId: string, me: Me, handlers: ChatHandlers): ChatConnection {
  return supabaseEnabled ? realConnect(roomId, me, handlers) : mockConnect(roomId, me, handlers);
}
