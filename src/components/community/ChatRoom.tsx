"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "../ui/Icon";
import {
  chatMessages,
  defaultChat,
  cannedReplies,
  type ChatMsg,
  type TextRoom,
} from "@/lib/community";

function initials(name: string) {
  return name.split(/\s+/).map((w) => w[0]).slice(0, 2).join("").toUpperCase();
}

export default function ChatRoom({
  room,
  onBack,
  onToast,
}: {
  room: TextRoom;
  onBack: () => void;
  onToast: (m: string) => void;
}) {
  const [msgs, setMsgs] = useState<ChatMsg[]>(chatMessages[room.id] ?? defaultChat);
  const [input, setInput] = useState("");
  const [menu, setMenu] = useState<number | null>(null);
  const lastSent = useRef(0);
  const replyTick = useRef(0);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end" });
  }, [msgs]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    if (/https?:\/\/|www\./i.test(text)) {
      onToast("Links aren't allowed in chat 🔒");
      return;
    }
    // simple cooldown (timestamp-free: monotonic counter via performance)
    const now = performance.now();
    if (now - lastSent.current < 1200) {
      onToast("Slow down a little 🌸");
      return;
    }
    lastSent.current = now;
    setMsgs((m) => [...m, { user: "You", me: true, text, time: "now" }]);
    setInput("");

    // canned "alive" reply
    const reply = cannedReplies[replyTick.current % cannedReplies.length];
    replyTick.current++;
    const who = ["Aiko", "Marco", "Lena", "Sora"][replyTick.current % 4];
    window.setTimeout(() => {
      setMsgs((m) => [...m, { user: who, text: reply, time: "now" }]);
    }, 900);
  };

  return (
    <div className="flex h-[calc(100vh-13rem)] min-h-[420px] flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-card ring-1 ring-pink-soft/40">
      {/* header */}
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
          <p className="text-xs text-ink-soft">
            <span className="text-[#2f9d77]">●</span> {room.online} online · {room.members.toLocaleString()} members
          </p>
        </div>
      </div>

      {/* messages */}
      <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
        {msgs.map((m, i) => (
          <div key={i} className={`flex gap-2.5 ${m.me ? "flex-row-reverse" : ""}`}>
            {!m.me && (
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-pink-soft to-blue-soft text-xs font-extrabold text-pink-ink">
                {initials(m.user)}
              </span>
            )}
            <div className={`relative max-w-[78%] ${m.me ? "text-right" : ""}`}>
              {!m.me && (
                <p className="mb-0.5 flex items-center gap-1.5 text-xs font-bold text-ink-soft">
                  {m.user}
                  {m.role && (
                    <span className="rounded-full bg-pink-soft/70 px-1.5 py-0.5 text-[0.6rem] font-bold text-pink-ink">
                      {m.role}
                    </span>
                  )}
                </p>
              )}
              <div
                className={`inline-block rounded-2xl px-3.5 py-2 text-sm ${
                  m.me
                    ? "rounded-tr-sm bg-gradient-to-r from-pink-deep to-pink text-white"
                    : "rounded-tl-sm bg-cream text-ink"
                }`}
              >
                {m.text}
              </div>
              {!m.me && (
                <button
                  onClick={() => setMenu(menu === i ? null : i)}
                  aria-label="Message options"
                  className="ml-1 text-ink-mute hover:text-pink-ink"
                >
                  ⋯
                </button>
              )}
              {menu === i && (
                <div className="absolute z-10 mt-1 flex gap-1 rounded-xl bg-white p-1 shadow-pop ring-1 ring-pink-soft/50">
                  {["Report", "Mute", "Block"].map((a) => (
                    <button
                      key={a}
                      onClick={() => {
                        onToast(`${a === "Report" ? "Reported" : a + "d"} ${m.user}`);
                        setMenu(null);
                      }}
                      className="rounded-lg px-2.5 py-1 text-xs font-bold text-ink-soft hover:bg-pink-soft/40 hover:text-pink-ink"
                    >
                      {a}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
        <div ref={endRef} />
      </div>

      {/* composer */}
      <div className="flex items-center gap-2 border-t border-pink-soft/40 px-3 py-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Type a message…"
          className="flex-1 rounded-full border border-pink-soft/60 bg-cream px-4 py-2.5 text-sm text-ink placeholder:text-ink-mute focus:border-pink focus:outline-none focus:ring-4 focus:ring-pink/20"
        />
        <button
          onClick={send}
          aria-label="Send"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-r from-pink-deep to-pink text-white shadow-soft transition-transform hover:scale-105 active:scale-95"
        >
          <Icon name="play" className="h-5 w-5 fill-current" />
        </button>
      </div>
    </div>
  );
}
