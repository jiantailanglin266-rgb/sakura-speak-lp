"use client";

import { useState } from "react";
import MeemiAvatar from "../avatar/MeemiAvatar";
import Icon from "../ui/Icon";
import { typeBadge, type Member, type VoiceRoom as VR } from "@/lib/community";
import { defaultConfig } from "@/lib/avatar";

const roleRing: Record<string, string> = {
  Host: "ring-pink-deep",
  "Co-host": "ring-blue-deep",
  Speaker: "ring-mint",
  Listener: "ring-pink-soft",
};

function SpeakerTile({ m, muted }: { m: Member; muted?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <span className={`relative grid h-20 w-20 place-items-center overflow-hidden rounded-full bg-gradient-to-br from-pink-soft to-blue-soft ring-4 ${roleRing[m.role]}`}>
        <MeemiAvatar config={m.cfg} uid={`vr-${m.name}`} className="w-[150%] translate-y-[18%]" />
        <span className="absolute bottom-0 right-0 grid h-6 w-6 place-items-center rounded-full bg-white text-xs shadow ring-1 ring-pink-soft/50">
          {muted ? "🔇" : "🎙️"}
        </span>
      </span>
      <span className="text-xs font-bold text-ink">{m.name}</span>
      <span className="rounded-full bg-pink-soft/50 px-2 py-0.5 text-[0.6rem] font-bold text-pink-ink">
        {m.role}
      </span>
    </div>
  );
}

export default function VoiceRoom({
  room,
  onBack,
  onToast,
}: {
  room: VR;
  onBack: () => void;
  onToast: (m: string) => void;
}) {
  const [unlocked, setUnlocked] = useState(!room.isPrivate);
  const [code, setCode] = useState("");
  const [handRaised, setHandRaised] = useState(false);
  const [isSpeaker, setIsSpeaker] = useState(false);
  const [micOn, setMicOn] = useState(true);

  // ---- private gate ----
  if (!unlocked) {
    return (
      <div className="mx-auto max-w-sm rounded-[1.75rem] bg-white p-8 text-center shadow-card ring-1 ring-pink-soft/40">
        <p className="text-4xl">🔒</p>
        <h2 className="mt-3 font-display text-xl font-extrabold text-ink">{room.name}</h2>
        <p className="mt-1 text-sm text-ink-soft">
          This is a private room. Enter the access code, or join by invite / followers-only.
        </p>
        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Access code"
          className="mt-5 w-full rounded-full border border-pink-soft/60 bg-cream px-4 py-3 text-center text-lg font-bold tracking-widest text-ink focus:border-pink focus:outline-none focus:ring-4 focus:ring-pink/20"
        />
        <button
          onClick={() => {
            if (code.trim() === room.code) {
              setUnlocked(true);
              onToast("Welcome in! 🌸");
            } else onToast("Wrong code — try again");
          }}
          className="mt-3 w-full rounded-full bg-gradient-to-r from-pink-deep to-pink py-3.5 text-sm font-extrabold text-white shadow-pop"
        >
          Join room
        </button>
        <button onClick={onBack} className="mt-3 text-sm font-bold text-ink-soft hover:text-pink-ink">
          ← Back
        </button>
        <p className="mt-4 text-xs text-ink-mute">(Demo code: 1234)</p>
      </div>
    );
  }

  const speakers: Member[] = isSpeaker
    ? [...room.speakers, { name: "You", role: "Speaker", cfg: defaultConfig }]
    : room.speakers;

  const raiseHand = () => {
    if (isSpeaker) return;
    setHandRaised(true);
    onToast("Hand raised — you're in the queue ✋");
    window.setTimeout(() => {
      setHandRaised(false);
      setIsSpeaker(true);
      onToast("The host invited you to speak! 🎙️");
    }, 1800);
  };

  return (
    <div className="rounded-[1.75rem] bg-white p-5 shadow-card ring-1 ring-pink-soft/40 sm:p-6">
      {/* header */}
      <div className="flex items-center gap-3">
        <button onClick={onBack} aria-label="Leave" className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-cream text-ink-soft hover:text-pink-ink">
          <Icon name="chevron" className="h-5 w-5 rotate-180" />
        </button>
        <div className="min-w-0 flex-1">
          <p className="truncate font-display font-extrabold text-ink">{room.name}</p>
          <p className="flex items-center gap-2 text-xs text-ink-soft">
            <span className={`rounded-full px-2 py-0.5 font-bold ${typeBadge[room.type]}`}>{room.type}</span>
            {room.live && (
              <span className="flex items-center gap-1 rounded-full bg-pink-deep px-2 py-0.5 font-bold text-white">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" /> LIVE
              </span>
            )}
            <span>👂 {room.listeners} listening</span>
          </p>
        </div>
      </div>

      {/* stage */}
      <div className="mt-6">
        <p className="text-xs font-bold uppercase tracking-wider text-ink-mute">On stage</p>
        <div className="mt-4 flex flex-wrap justify-center gap-6">
          {speakers.map((m) => (
            <SpeakerTile key={m.name} m={m} muted={m.name === "You" && !micOn} />
          ))}
        </div>
      </div>

      {/* queue */}
      {handRaised && (
        <div className="mt-6 rounded-2xl bg-blue-soft/40 p-3 text-center text-sm font-semibold text-blue-deep">
          ✋ Speaker queue: You · waiting for the host…
        </div>
      )}

      {/* controls */}
      <div className="mt-7 flex items-center justify-center gap-3 border-t border-pink-soft/40 pt-5">
        {isSpeaker ? (
          <button
            onClick={() => setMicOn((v) => !v)}
            className={`flex items-center gap-2 rounded-full px-5 py-3 text-sm font-extrabold shadow-soft ${
              micOn ? "bg-gradient-to-r from-pink-deep to-pink text-white" : "bg-white text-ink-soft ring-1 ring-pink-soft/60"
            }`}
          >
            {micOn ? "🎙️ Mic on" : "🔇 Muted"}
          </button>
        ) : (
          <button
            onClick={raiseHand}
            disabled={handRaised}
            className={`flex items-center gap-2 rounded-full px-5 py-3 text-sm font-extrabold shadow-soft transition-transform hover:-translate-y-0.5 ${
              handRaised ? "bg-blue-soft/60 text-blue-deep" : "bg-white text-pink-ink ring-2 ring-pink-soft"
            }`}
          >
            ✋ {handRaised ? "Hand raised" : "Raise hand"}
          </button>
        )}
        <button
          onClick={onBack}
          className="rounded-full bg-[#ffe6ea] px-5 py-3 text-sm font-extrabold text-[#d6557a] hover:bg-[#ffd6de]"
        >
          Leave
        </button>
      </div>
      <p className="mt-3 text-center text-xs text-ink-mute">
        Roles: Host · Co-host · Speaker · Listener — no recording, no limits.
      </p>
    </div>
  );
}
