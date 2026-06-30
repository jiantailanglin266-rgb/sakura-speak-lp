"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Icon from "../ui/Icon";
import { useAuth } from "../auth/AuthProvider";
import { speak } from "@/lib/speak";
import { connectChat, type ChatConnection, type ChatMessage, type Me, type PresenceUser } from "@/lib/chat";
import type { TextRoom } from "@/lib/community";

const EMOJIS = ["👍", "❤️", "😂", "🎉", "🌸", "🙏", "🔥", "😮"];
const MAX = 500;
const SLOW_MS = 1000;
const BANNED = ["idiot", "stupid", "shut up", "hate you"]; // tiny demo filter

const AVATAR_STYLES = [
  "bg-pink-soft text-pink-ink",
  "bg-blue-soft text-blue-deep",
  "bg-[#dff7ec] text-[#2f9d77]",
  "bg-[#fff2cc] text-gold-deep",
  "bg-[#efe7ff] text-[#7a5bd6]",
];

function hash(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}
const avatarStyle = (id: string) => AVATAR_STYLES[hash(id) % AVATAR_STYLES.length];
const initials = (name: string) =>
  name.split(/\s+/).map((w) => w[0]).slice(0, 2).join("").toUpperCase();
const isJP = (t: string) => /[぀-ヿ㐀-龿ｦ-ﾟ]/.test(t);
const hasLink = (t: string) => /https?:\/\/|www\.|\.[a-z]{2,}\/\S/i.test(t);
const hasBanned = (t: string) => BANNED.some((w) => t.toLowerCase().includes(w));

const timeLabel = (iso: string) =>
  new Date(iso).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
const dayKey = (iso: string) => {
  const d = new Date(iso);
  return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
};
function dayLabel(iso: string) {
  const d = new Date(iso);
  const now = new Date();
  const t = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const diff = Math.round((t.getTime() - new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime()) / 86_400_000);
  if (diff === 0) return "Today";
  if (diff === 1) return "Yesterday";
  return d.toLocaleDateString([], { weekday: "long", month: "short", day: "numeric" });
}

type Row =
  | { type: "day"; id: string; label: string }
  | { type: "msg"; m: ChatMessage; grouped: boolean };

const MUTE_KEY = "sakura-chat-muted";

export default function ChatRoom({
  room,
  onBack,
  onToast,
}: {
  room: TextRoom;
  onBack: () => void;
  onToast: (m: string) => void;
}) {
  const { user } = useAuth();
  const me: Me = useMemo(
    () => ({ id: user?.id ?? "me", username: user?.username ?? "You" }),
    [user?.id, user?.username]
  );

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [presence, setPresence] = useState<PresenceUser[]>([]);
  const [typing, setTyping] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [replyTo, setReplyTo] = useState<ChatMessage | null>(null);
  const [muted, setMuted] = useState<Set<string>>(new Set());
  const [showRules, setShowRules] = useState(false);
  const [emojiFor, setEmojiFor] = useState<string | null>(null); // message id, or "composer"
  const [menuFor, setMenuFor] = useState<string | null>(null);
  const [atBottom, setAtBottom] = useState(true);
  const [unread, setUnread] = useState(0);
  const [highlight, setHighlight] = useState<string | null>(null);

  const connRef = useRef<ChatConnection | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const taRef = useRef<HTMLTextAreaElement>(null);
  const msgRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const atBottomRef = useRef(true);
  const prevLen = useRef(0);
  const inited = useRef(false);
  const lastSent = useRef(0);
  const typingTimer = useRef<number | undefined>(undefined);

  const backend = connRef.current?.backend ?? "mock";

  // load muted list
  useEffect(() => {
    try {
      setMuted(new Set(JSON.parse(localStorage.getItem(MUTE_KEY) || "[]")));
    } catch {
      /* ignore */
    }
  }, []);

  // connect on mount / room change
  useEffect(() => {
    inited.current = false;
    prevLen.current = 0;
    setMessages([]);
    const conn = connectChat(room.id, me, {
      onSync: (all) => setMessages(all),
      onMessage: (m) => setMessages((prev) => (prev.some((x) => x.id === m.id) ? prev : [...prev, m])),
      onUpdate: (m) => setMessages((prev) => prev.map((x) => (x.id === m.id ? m : x))),
      onPresence: (p) => setPresence(p),
      onTyping: (u) => setTyping(u),
      onError: (msg) => onToast(msg),
    });
    connRef.current = conn;
    conn.history().then((h) => setMessages((prev) => (prev.length ? prev : h)));
    return () => {
      conn.dispose();
      connRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [room.id, me.id]);

  // scroll behaviour on new messages
  useEffect(() => {
    const prev = prevLen.current;
    prevLen.current = messages.length;
    if (!inited.current && messages.length) {
      inited.current = true;
      requestAnimationFrame(() => endRef.current?.scrollIntoView());
      return;
    }
    if (atBottomRef.current) {
      requestAnimationFrame(() => endRef.current?.scrollIntoView({ behavior: "smooth" }));
      setUnread(0);
    } else if (messages.length > prev) {
      setUnread((u) => u + (messages.length - prev));
    }
  }, [messages]);

  // Close any open emoji popover / message menu on outside-click or Escape.
  useEffect(() => {
    if (!emojiFor && !menuFor) return;
    const close = () => {
      setEmojiFor(null);
      setMenuFor(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("click", close);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", close);
      document.removeEventListener("keydown", onKey);
    };
  }, [emojiFor, menuFor]);

  const onScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const bottom = el.scrollHeight - el.scrollTop - el.clientHeight < 80;
    atBottomRef.current = bottom;
    setAtBottom(bottom);
    if (bottom) setUnread(0);
  };

  const jumpToLatest = () => {
    atBottomRef.current = true;
    setAtBottom(true);
    setUnread(0);
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const signalTyping = () => {
    connRef.current?.setTyping(true);
    window.clearTimeout(typingTimer.current);
    typingTimer.current = window.setTimeout(() => connRef.current?.setTyping(false), 1500);
  };

  const send = () => {
    const text = input.trim();
    if (!text) return;
    if (text.length > MAX) return onToast(`Messages are limited to ${MAX} characters`);
    if (hasLink(text)) return onToast("Links aren't allowed in chat 🔒");
    if (hasBanned(text)) return onToast("Let's keep it kind to each other 🌸");
    const now = performance.now();
    if (now - lastSent.current < SLOW_MS) return onToast("Slow down a little 🌸");
    lastSent.current = now;

    connRef.current?.send(text, replyTo?.id ?? null);
    setInput("");
    setReplyTo(null);
    setEmojiFor(null);
    connRef.current?.setTyping(false);
    if (taRef.current) taRef.current.style.height = "auto";
    jumpToLatest();
  };

  const react = (id: string, emoji: string) => {
    connRef.current?.react(id, emoji);
    setEmojiFor(null);
  };

  const toggleMute = (uid: string, name: string) => {
    setMuted((prev) => {
      const n = new Set(prev);
      if (n.has(uid)) {
        n.delete(uid);
        onToast(`Unmuted ${name}`);
      } else {
        n.add(uid);
        onToast(`Muted ${name}`);
      }
      try {
        localStorage.setItem(MUTE_KEY, JSON.stringify([...n]));
      } catch {
        /* ignore */
      }
      return n;
    });
    setMenuFor(null);
  };

  const scrollToMsg = (id: string) => {
    msgRefs.current[id]?.scrollIntoView({ block: "center", behavior: "smooth" });
    setHighlight(id);
    window.setTimeout(() => setHighlight((h) => (h === id ? null : h)), 1300);
  };

  const byId = useMemo(() => {
    const o: Record<string, ChatMessage> = {};
    for (const m of messages) o[m.id] = m;
    return o;
  }, [messages]);

  const rows = useMemo<Row[]>(() => {
    const out: Row[] = [];
    let lastDay = "";
    let lastUser = "";
    let lastT = 0;
    for (const m of messages) {
      const dk = dayKey(m.createdAt);
      if (dk !== lastDay) {
        out.push({ type: "day", id: `day-${dk}`, label: dayLabel(m.createdAt) });
        lastDay = dk;
        lastUser = "";
        lastT = 0;
      }
      const t = new Date(m.createdAt).getTime();
      const grouped = m.userId === lastUser && t - lastT < 5 * 60_000;
      out.push({ type: "msg", m, grouped });
      lastUser = m.userId;
      lastT = t;
    }
    return out;
  }, [messages]);

  const onlineCount = presence.length || room.online;

  return (
    <div className="relative flex h-[calc(100vh-13rem)] min-h-[440px] flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-card ring-1 ring-pink-soft/40">
      {/* ---- header ---- */}
      <div className="flex items-center gap-3 border-b border-pink-soft/40 px-4 py-3">
        <button
          onClick={onBack}
          aria-label="Back"
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-cream text-ink-soft hover:text-pink-ink"
        >
          <Icon name="chevron" className="h-5 w-5 rotate-180" />
        </button>
        <span className="text-2xl">{room.emoji}</span>
        <div className="min-w-0 flex-1">
          <p className="truncate font-display font-extrabold text-ink">{room.name}</p>
          <p className="flex items-center gap-1.5 text-xs text-ink-soft">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[#2f9d77]" />
            {onlineCount} online · {room.members.toLocaleString()} members
          </p>
        </div>
        <span
          title={backend === "supabase" ? "Connected to live chat" : "Demo mode — simulated learners (no backend keys set)"}
          className={`hidden shrink-0 rounded-full px-2.5 py-1 text-[0.6rem] font-bold sm:inline ${
            backend === "supabase" ? "bg-[#dff7ec] text-[#2f9d77]" : "bg-cream text-ink-mute"
          }`}
        >
          {backend === "supabase" ? "● Live" : "Demo"}
        </span>
        <button
          onClick={() => setShowRules((v) => !v)}
          aria-label="Room info"
          className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition-colors ${
            showRules ? "bg-pink-soft/70 text-pink-ink" : "bg-cream text-ink-soft hover:text-pink-ink"
          }`}
        >
          <Icon name="info" className="h-5 w-5" />
        </button>
      </div>

      {/* ---- rules banner ---- */}
      {showRules && (
        <div className="border-b border-pink-soft/40 bg-cream/60 px-4 py-3 text-xs text-ink-soft">
          <p className="font-bold text-ink">{room.topic}</p>
          <ul className="mt-1.5 space-y-1">
            <li>🌸 Be kind — practice mistakes are welcome here.</li>
            <li>🗣️ Mix Japanese and English freely. Tap 🔊 to hear any message.</li>
            <li>🔒 No links or personal info. Use ⋯ to report anything off.</li>
          </ul>
        </div>
      )}

      {/* ---- messages ---- */}
      <div ref={scrollRef} onScroll={onScroll} className="flex-1 space-y-1 overflow-y-auto px-3 py-4 sm:px-4">
        {rows.map((row) => {
          if (row.type === "day")
            return (
              <div key={row.id} className="flex items-center justify-center py-3">
                <span className="rounded-full bg-cream px-3 py-1 text-[0.65rem] font-bold text-ink-mute">
                  {row.label}
                </span>
              </div>
            );

          const { m, grouped } = row;
          const mine = m.userId === me.id;
          const isMuted = muted.has(m.userId) && !mine;
          const rt = m.replyToId ? byId[m.replyToId] : null;
          const reactions = Object.entries(m.reactions).filter(([, ids]) => ids.length);

          if (isMuted)
            return (
              <div key={m.id} className="flex justify-center py-1">
                <button
                  onClick={() => toggleMute(m.userId, m.username)}
                  className="rounded-full bg-cream px-3 py-1 text-[0.65rem] font-bold text-ink-mute hover:text-pink-ink"
                >
                  Message from {m.username} hidden · Unmute
                </button>
              </div>
            );

          return (
            <div
              key={m.id}
              ref={(el) => {
                msgRefs.current[m.id] = el;
              }}
              className={`group flex gap-2.5 ${grouped ? "mt-0.5" : "mt-3"} ${mine ? "flex-row-reverse" : ""} ${
                highlight === m.id ? "rounded-2xl bg-gold/15 ring-2 ring-gold/40" : ""
              } px-0.5 py-0.5`}
            >
              {/* avatar / spacer */}
              {!mine &&
                (grouped ? (
                  <span className="w-9 shrink-0" />
                ) : (
                  <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-xs font-extrabold ${avatarStyle(m.userId)}`}>
                    {initials(m.username)}
                  </span>
                ))}

              <div className={`relative max-w-[80%] ${mine ? "items-end text-right" : ""} flex flex-col`}>
                {!mine && !grouped && (
                  <p className="mb-0.5 flex items-center gap-1.5 px-1 text-xs font-bold text-ink-soft">
                    {m.username}
                    {m.role && (
                      <span className="rounded-full bg-pink-soft/70 px-1.5 py-0.5 text-[0.55rem] font-bold text-pink-ink">
                        {m.role}
                      </span>
                    )}
                    <span className="font-medium text-ink-mute">{timeLabel(m.createdAt)}</span>
                  </p>
                )}

                {/* reply quote */}
                {rt && (
                  <button
                    onClick={() => scrollToMsg(rt.id)}
                    className={`mb-0.5 max-w-full truncate rounded-lg border-l-2 border-pink/60 bg-cream/80 px-2 py-1 text-left text-[0.7rem] text-ink-soft hover:bg-cream ${
                      mine ? "self-end" : ""
                    }`}
                  >
                    <span className="font-bold text-pink-ink">↩ {rt.username}</span>{" "}
                    <span className="text-ink-mute">{rt.text.slice(0, 60)}</span>
                  </button>
                )}

                <div className={`flex items-end gap-1 ${mine ? "flex-row-reverse" : ""}`}>
                  <div
                    className={`inline-block whitespace-pre-wrap break-words rounded-2xl px-3.5 py-2 text-sm ${
                      mine
                        ? "rounded-br-sm bg-gradient-to-r from-pink-deep to-pink text-left text-white"
                        : "rounded-bl-sm bg-cream text-ink"
                    }`}
                  >
                    {m.text}
                  </div>

                  {/* hover action bar */}
                  <div className="flex shrink-0 items-center gap-0.5 opacity-0 transition-opacity group-hover:opacity-100">
                    <button
                      onClick={(ev) => { ev.stopPropagation(); setEmojiFor(emojiFor === m.id ? null : m.id); }}
                      aria-label="React"
                      className="grid h-7 w-7 place-items-center rounded-full text-ink-mute hover:bg-pink-soft/40 hover:text-pink-ink"
                    >
                      <Icon name="smile" className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => {
                        setReplyTo(m);
                        taRef.current?.focus();
                      }}
                      aria-label="Reply"
                      className="grid h-7 w-7 place-items-center rounded-full text-ink-mute hover:bg-pink-soft/40 hover:text-pink-ink"
                    >
                      <Icon name="reply" className="h-4 w-4" />
                    </button>
                    {isJP(m.text) && (
                      <button
                        onClick={() => speak(m.text)}
                        aria-label="Play audio"
                        className="grid h-7 w-7 place-items-center rounded-full text-ink-mute hover:bg-blue-soft/60 hover:text-blue-deep"
                      >
                        <Icon name="sound" className="h-4 w-4" />
                      </button>
                    )}
                    {!mine && (
                      <button
                        onClick={(ev) => { ev.stopPropagation(); setMenuFor(menuFor === m.id ? null : m.id); }}
                        aria-label="More"
                        className="grid h-7 w-7 place-items-center rounded-full text-ink-mute hover:bg-pink-soft/40 hover:text-pink-ink"
                      >
                        ⋯
                      </button>
                    )}
                  </div>
                </div>

                {/* reactions */}
                {reactions.length > 0 && (
                  <div className={`mt-1 flex flex-wrap gap-1 ${mine ? "justify-end" : ""}`}>
                    {reactions.map(([emoji, ids]) => {
                      const active = ids.includes(me.id);
                      return (
                        <button
                          key={emoji}
                          onClick={() => react(m.id, emoji)}
                          className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-bold ring-1 transition-colors ${
                            active
                              ? "bg-pink-soft/70 text-pink-ink ring-pink/50"
                              : "bg-white text-ink-soft ring-pink-soft/50 hover:bg-cream"
                          }`}
                        >
                          <span>{emoji}</span>
                          <span>{ids.length}</span>
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* emoji popover */}
                {emojiFor === m.id && (
                  <div
                    onClick={(ev) => ev.stopPropagation()}
                    className={`absolute top-full z-20 mt-1 flex gap-0.5 rounded-2xl bg-white p-1.5 shadow-pop ring-1 ring-pink-soft/50 ${mine ? "right-0" : "left-0"}`}
                  >
                    {EMOJIS.map((e) => (
                      <button
                        key={e}
                        onClick={() => react(m.id, e)}
                        aria-label={`React with ${e}`}
                        className="grid h-8 w-8 place-items-center rounded-full text-lg hover:bg-pink-soft/40"
                      >
                        {e}
                      </button>
                    ))}
                  </div>
                )}

                {/* more menu */}
                {menuFor === m.id && (
                  <div
                    onClick={(ev) => ev.stopPropagation()}
                    className={`absolute top-full z-20 mt-1 flex flex-col rounded-xl bg-white p-1 shadow-pop ring-1 ring-pink-soft/50 ${mine ? "right-0" : "left-0"}`}
                  >
                    <button
                      onClick={() => toggleMute(m.userId, m.username)}
                      className="rounded-lg px-3 py-1.5 text-left text-xs font-bold text-ink-soft hover:bg-pink-soft/40 hover:text-pink-ink"
                    >
                      {muted.has(m.userId) ? "Unmute" : "Mute"} {m.username}
                    </button>
                    <button
                      onClick={() => {
                        onToast("Reported. Our team will review 🙏");
                        setMenuFor(null);
                      }}
                      className="rounded-lg px-3 py-1.5 text-left text-xs font-bold text-ink-soft hover:bg-pink-soft/40 hover:text-pink-ink"
                    >
                      Report message
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
        <div ref={endRef} />
      </div>

      {/* ---- typing indicator ---- */}
      {typing.length > 0 && (
        <div className="flex items-center gap-2 px-4 pb-1 text-xs text-ink-mute">
          <span className="flex gap-0.5">
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink-mute [animation-delay:-0.2s]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink-mute [animation-delay:-0.1s]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink-mute" />
          </span>
          {typing.length === 1 ? `${typing[0]} is typing…` : `${typing.length} people are typing…`}
        </div>
      )}

      {/* ---- jump to latest ---- */}
      {!atBottom && (
        <button
          onClick={jumpToLatest}
          className="absolute bottom-24 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-ink px-3.5 py-2 text-xs font-bold text-white shadow-pop"
        >
          {unread > 0 ? `${unread} new message${unread > 1 ? "s" : ""}` : "Jump to latest"}
          <Icon name="arrow-down" className="h-4 w-4" />
        </button>
      )}

      {/* ---- reply preview ---- */}
      {replyTo && (
        <div className="flex items-center gap-2 border-t border-pink-soft/40 bg-cream/60 px-4 py-2 text-xs">
          <Icon name="reply" className="h-4 w-4 shrink-0 text-pink-ink" />
          <span className="min-w-0 flex-1 truncate text-ink-soft">
            Replying to <span className="font-bold text-pink-ink">{replyTo.username}</span> · {replyTo.text.slice(0, 50)}
          </span>
          <button onClick={() => setReplyTo(null)} aria-label="Cancel reply" className="text-ink-mute hover:text-pink-ink">
            <Icon name="close" className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* ---- composer ---- */}
      <div className="relative border-t border-pink-soft/40 px-3 py-3">
        {emojiFor === "composer" && (
          <div
            onClick={(ev) => ev.stopPropagation()}
            className="absolute bottom-full left-3 z-20 mb-2 flex gap-0.5 rounded-2xl bg-white p-1.5 shadow-pop ring-1 ring-pink-soft/50"
          >
            {EMOJIS.map((e) => (
              <button
                key={e}
                onClick={() => {
                  setInput((v) => (v + e).slice(0, MAX));
                  taRef.current?.focus();
                }}
                aria-label={`Insert ${e}`}
                className="grid h-8 w-8 place-items-center rounded-full text-lg hover:bg-pink-soft/40"
              >
                {e}
              </button>
            ))}
          </div>
        )}
        <div className="flex items-end gap-2">
          <button
            onClick={(ev) => { ev.stopPropagation(); setEmojiFor(emojiFor === "composer" ? null : "composer"); }}
            aria-label="Emoji"
            className={`grid h-11 w-11 shrink-0 place-items-center rounded-full transition-colors ${
              emojiFor === "composer" ? "bg-pink-soft/70 text-pink-ink" : "bg-cream text-ink-soft hover:text-pink-ink"
            }`}
          >
            <Icon name="smile" className="h-5 w-5" />
          </button>
          <div className="flex flex-1 flex-col">
            <textarea
              ref={taRef}
              value={input}
              rows={1}
              onChange={(e) => {
                setInput(e.target.value.slice(0, MAX));
                const el = e.target;
                el.style.height = "auto";
                el.style.height = `${Math.min(el.scrollHeight, 120)}px`;
                signalTyping();
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  send();
                } else if (e.key === "Escape") {
                  setReplyTo(null);
                }
              }}
              placeholder="Type a message…  (Enter to send, Shift+Enter for a new line)"
              className="max-h-[120px] flex-1 resize-none rounded-2xl border border-pink-soft/60 bg-cream px-4 py-2.5 text-sm text-ink placeholder:text-ink-mute focus:border-pink focus:outline-none focus:ring-4 focus:ring-pink/20"
            />
            {input.length > MAX - 80 && (
              <span className={`mt-0.5 self-end text-[0.65rem] font-bold ${input.length >= MAX ? "text-pink-deep" : "text-ink-mute"}`}>
                {input.length}/{MAX}
              </span>
            )}
          </div>
          <button
            onClick={send}
            disabled={!input.trim()}
            aria-label="Send"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-r from-pink-deep to-pink text-white shadow-soft transition-transform hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Icon name="send" className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
