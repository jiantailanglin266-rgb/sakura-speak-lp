"use client";

import { useState } from "react";
import Icon from "../ui/Icon";
import { reportsSeed, type Report } from "@/lib/admin";

export default function Moderation({ onToast }: { onToast: (m: string) => void }) {
  const [queue, setQueue] = useState<Report[]>(reportsSeed);
  const [cooldown, setCooldown] = useState(2);
  const [linkBlock, setLinkBlock] = useState(true);
  const [newUserBlock, setNewUserBlock] = useState(true);

  const resolve = (id: string, msg: string) => {
    setQueue((q) => q.filter((r) => r.id !== id));
    onToast(msg);
  };

  return (
    <div>
      <div className="mb-4">
        <h2 className="font-display text-xl font-extrabold text-ink">Moderation</h2>
        <p className="text-sm text-ink-soft">Review reports and tune anti-spam.</p>
      </div>

      {/* spam settings */}
      <div className="mb-5 rounded-2xl bg-white p-4 shadow-card ring-1 ring-pink-soft/40">
        <p className="flex items-center gap-2 font-bold text-ink">
          <Icon name="shield" className="h-5 w-5 text-pink-deep" /> Anti-spam
        </p>
        <div className="mt-3 space-y-3">
          <div className="flex items-center justify-between gap-3">
            <span className="text-sm text-ink-soft">Message cooldown</span>
            <div className="flex items-center gap-2">
              <button onClick={() => setCooldown((c) => Math.max(0, c - 1))} className={stepBtn}>−</button>
              <span className="w-12 text-center text-sm font-bold text-ink">{cooldown}s</span>
              <button onClick={() => setCooldown((c) => c + 1)} className={stepBtn}>+</button>
            </div>
          </div>
          <Toggle label="Block links in chat" on={linkBlock} onClick={() => { setLinkBlock((v) => !v); onToast("Setting saved"); }} />
          <Toggle label="Restrict links for new users" on={newUserBlock} onClick={() => { setNewUserBlock((v) => !v); onToast("Setting saved"); }} />
        </div>
      </div>

      {/* report queue */}
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-display font-extrabold text-ink">Report queue</h3>
        <span className="rounded-full bg-pink-soft/60 px-2.5 py-0.5 text-xs font-bold text-pink-ink">{queue.length} pending</span>
      </div>

      {queue.length === 0 ? (
        <div className="rounded-2xl bg-white p-10 text-center shadow-card ring-1 ring-pink-soft/40">
          <p className="text-3xl">🎉</p>
          <p className="mt-2 font-bold text-ink">All clear — no pending reports!</p>
        </div>
      ) : (
        <ul className="space-y-3">
          {queue.map((r) => (
            <li key={r.id} className="rounded-2xl bg-white p-4 shadow-card ring-1 ring-pink-soft/40">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[#ffe6ea] px-2 py-0.5 text-[0.6rem] font-bold text-[#d6557a]">{r.reason}</span>
                <span className="rounded-full bg-cream px-2 py-0.5 text-[0.6rem] font-bold text-ink-soft">{r.kind}</span>
                <span className="text-xs text-ink-mute">in {r.where}</span>
              </div>
              <p className="mt-2 text-sm text-ink">
                <span className="font-bold">{r.target}</span> — reported by {r.reporter}
              </p>
              <p className="mt-1 rounded-xl bg-cream px-3 py-2 text-sm italic text-ink-soft">{r.context}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                <button onClick={() => resolve(r.id, "Report dismissed")} className={btnOk}>Dismiss</button>
                <button onClick={() => resolve(r.id, `Warned ${r.target}`)} className={btnNeutral}>Warn</button>
                <button onClick={() => resolve(r.id, `Muted ${r.target}`)} className={btnNeutral}>Mute 24h</button>
                <button onClick={() => resolve(r.id, `Suspended ${r.target}`)} className={btnWarn}>Suspend</button>
                <button onClick={() => resolve(r.id, `Banned ${r.target}`)} className={btnDanger}>Ban</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Toggle({ label, on, onClick }: { label: string; on: boolean; onClick: () => void }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-sm text-ink-soft">{label}</span>
      <button
        onClick={onClick}
        aria-pressed={on}
        className={`relative h-6 w-11 rounded-full transition-colors ${on ? "bg-pink-deep" : "bg-[#cdd0d6]"}`}
      >
        <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all ${on ? "left-[1.4rem]" : "left-0.5"}`} />
      </button>
    </div>
  );
}

const stepBtn = "grid h-7 w-7 place-items-center rounded-full bg-cream font-bold text-ink-soft hover:text-pink-ink";
const btnOk = "rounded-full bg-[#e7f7ee] px-3.5 py-1.5 text-xs font-bold text-[#2f9d77]";
const btnNeutral = "rounded-full bg-cream px-3.5 py-1.5 text-xs font-bold text-ink-soft hover:text-pink-ink";
const btnWarn = "rounded-full bg-[#fff2cc] px-3.5 py-1.5 text-xs font-bold text-gold-deep";
const btnDanger = "rounded-full bg-[#ffe6ea] px-3.5 py-1.5 text-xs font-bold text-[#d6557a]";
