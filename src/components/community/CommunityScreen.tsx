"use client";

import { useState } from "react";
import Icon from "../ui/Icon";
import ChatRoom from "./ChatRoom";
import {
  textRooms,
  events,
  typeBadge,
  type CommunityEvent,
} from "@/lib/community";

type Tab = "chat" | "events";

const chipAccent: Record<string, string> = {
  pink: "bg-pink-soft/70 text-pink-ink",
  blue: "bg-blue-soft/70 text-blue-deep",
  mint: "bg-[#dff7ec] text-[#2f9d77]",
  gold: "bg-[#fff2cc] text-gold-deep",
  lilac: "bg-[#efe7ff] text-[#7a5bd6]",
};

function downloadIcs(e: CommunityEvent) {
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Sakura Speak//Community//EN",
    "BEGIN:VEVENT",
    `UID:${e.id}@sakura-speak`,
    `DTSTART:${e.dtStart}`,
    `DTEND:${e.dtEnd}`,
    `SUMMARY:${e.title}`,
    `DESCRIPTION:${e.desc} (Host: ${e.host})`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
  const blob = new Blob([ics], { type: "text/calendar" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${e.id}.ics`;
  a.click();
  URL.revokeObjectURL(url);
}

export default function CommunityScreen() {
  const [tab, setTab] = useState<Tab>("chat");
  const [chatId, setChatId] = useState<string | null>(null);
  const [rsvp, setRsvp] = useState<Set<string>>(new Set());
  const [toast, setToast] = useState<string | null>(null);

  const flash = (m: string) => {
    setToast(m);
    window.setTimeout(() => setToast(null), 1900);
  };

  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: "chat", label: "Chatrooms", icon: "chat" },
    { id: "events", label: "Events", icon: "calendar" },
  ];

  const activeChat = chatId ? textRooms.find((r) => r.id === chatId)! : null;

  return (
    <div>
      {/* tabs (hidden while inside a room) */}
      {!activeChat && (
        <div className="mb-5 flex gap-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex flex-1 items-center justify-center gap-2 rounded-full py-2.5 text-sm font-bold transition-all ${
                tab === t.id
                  ? "bg-gradient-to-r from-pink-deep to-pink text-white shadow-soft"
                  : "bg-white text-ink-soft ring-1 ring-pink-soft/60 hover:bg-pink-soft/30"
              }`}
            >
              <Icon name={t.icon} className="h-4 w-4" />
              {t.label}
            </button>
          ))}
        </div>
      )}

      {/* ---- CHAT ---- */}
      {tab === "chat" &&
        (activeChat ? (
          <ChatRoom room={activeChat} onBack={() => setChatId(null)} onToast={flash} />
        ) : (
          <ul className="space-y-3">
            {textRooms.map((r) => (
              <li key={r.id}>
                <button
                  onClick={() => setChatId(r.id)}
                  className="flex w-full items-center gap-3 rounded-2xl bg-white p-4 text-left shadow-card ring-1 ring-pink-soft/40 transition-all hover:-translate-y-0.5 hover:shadow-pop"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-cream text-2xl">
                    {r.emoji}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-2">
                      <span className="font-bold text-ink">{r.name}</span>
                      <span className={`rounded-full px-2 py-0.5 text-[0.6rem] font-bold ${chipAccent[r.accent]}`}>
                        {r.online} online
                      </span>
                    </span>
                    <span className="block truncate text-xs text-ink-soft">{r.topic}</span>
                  </span>
                  <Icon name="chevron" className="h-4 w-4 shrink-0 text-ink-mute" />
                </button>
              </li>
            ))}
          </ul>
        ))}

      {/* ---- EVENTS ---- */}
      {tab === "events" && (
        <ul className="space-y-3">
          {events.map((e) => {
            const going = rsvp.has(e.id);
            return (
              <li
                key={e.id}
                className="rounded-2xl bg-white p-4 shadow-card ring-1 ring-pink-soft/40"
              >
                <div className="flex items-start gap-3">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-pink-soft to-blue-soft text-pink-ink">
                    <Icon name="calendar" className="h-6 w-6" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-bold text-ink">{e.title}</p>
                      <span className={`rounded-full px-2 py-0.5 text-[0.6rem] font-bold ${typeBadge[e.type]}`}>
                        {e.type}
                      </span>
                    </div>
                    <p className="text-xs text-ink-soft">
                      {e.when} · {e.host} · {e.going + (going ? 1 : 0)} going
                    </p>
                    <p className="mt-1.5 text-sm text-ink-soft">{e.desc}</p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      <button
                        onClick={() => {
                          setRsvp((s) => {
                            const n = new Set(s);
                            if (n.has(e.id)) {
                              n.delete(e.id);
                              flash("RSVP cancelled");
                            } else {
                              n.add(e.id);
                              flash("You're going! 🌸");
                            }
                            return n;
                          });
                        }}
                        className={`rounded-full px-4 py-2 text-xs font-extrabold shadow-soft transition-transform hover:-translate-y-0.5 ${
                          going
                            ? "bg-white text-pink-ink ring-1 ring-pink-deep"
                            : "bg-gradient-to-r from-pink-deep to-pink text-white"
                        }`}
                      >
                        {going ? "✓ Going" : "RSVP"}
                      </button>
                      <button
                        onClick={() => {
                          downloadIcs(e);
                          flash("Calendar file downloaded 📅");
                        }}
                        className="rounded-full bg-white px-4 py-2 text-xs font-bold text-ink-soft shadow-card ring-1 ring-pink-soft/60 hover:text-pink-ink"
                      >
                        + Add to Calendar
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      {toast && (
        <div className="fixed bottom-24 left-1/2 z-50 -translate-x-1/2 rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-white shadow-pop lg:bottom-8">
          {toast}
        </div>
      )}
    </div>
  );
}
