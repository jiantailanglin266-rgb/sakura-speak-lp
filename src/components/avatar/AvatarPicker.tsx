"use client";

import { useEffect, useState } from "react";
import MeemiAvatar from "./MeemiAvatar";
import { avatarPresets, type AvatarPreset } from "@/lib/avatar";

const STORAGE_KEY = "sakura-meemi-avatar";

// Match a stored config back to a preset (by fur+eye) so the current pick is highlighted.
function presetForConfig(fur?: string, eye?: string): string {
  const hit = avatarPresets.find((p) => p.config.fur === fur && p.config.eye === eye);
  return hit ? hit.id : avatarPresets[0].id;
}

export default function AvatarPicker() {
  const [selId, setSelId] = useState<string>(avatarPresets[0].id);
  const [saved, setSaved] = useState(false);

  // Load current selection from storage on mount.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const s = JSON.parse(raw);
        if (s?.config) setSelId(presetForConfig(s.config.fur, s.config.eye));
      }
    } catch {
      /* ignore */
    }
  }, []);

  const sel: AvatarPreset =
    avatarPresets.find((p) => p.id === selId) ?? avatarPresets[0];

  const save = () => {
    let existing: Record<string, unknown> = {};
    try {
      existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    } catch {
      /* ignore */
    }
    const data = {
      coins: 0,
      owned: [] as string[],
      profile: "smile",
      ...existing,
      config: sel.config, // preserve coins/owned/profile; only the look changes
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setSaved(true);
    window.setTimeout(() => setSaved(false), 1800);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
      {/* ---- live preview ---- */}
      <div className="lg:sticky lg:top-6 lg:self-start">
        <div
          className="flex flex-col items-center rounded-[1.75rem] p-6 shadow-card ring-1 ring-white"
          style={{ background: `linear-gradient(160deg, ${sel.bg}, #ffffff)` }}
        >
          <div className="grid h-52 w-52 place-items-center overflow-hidden rounded-full bg-white/60 ring-4 ring-white">
            <MeemiAvatar
              config={sel.config}
              mood={sel.mood}
              uid="preview"
              className="w-[150%] translate-y-[14%]"
            />
          </div>
          <p className="mt-4 font-display text-xl font-extrabold text-ink">{sel.label}</p>
          <p className="text-xs text-ink-soft">Your selected avatar</p>

          <button
            onClick={save}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-deep to-pink py-3.5 text-base font-extrabold text-white shadow-pop transition-transform hover:-translate-y-0.5"
          >
            {saved ? (
              <>
                Saved! <span>🌸</span>
              </>
            ) : (
              <>
                <span className="text-lg leading-none">✓</span> Save avatar
              </>
            )}
          </button>
        </div>
      </div>

      {/* ---- preset grid ---- */}
      <div>
        <h2 className="font-display text-lg font-extrabold text-ink">Choose a look</h2>
        <p className="text-sm text-ink-soft">
          Tap an avatar to select it, then save.
        </p>

        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {avatarPresets.map((p) => {
            const active = p.id === selId;
            return (
              <button
                key={p.id}
                onClick={() => setSelId(p.id)}
                aria-pressed={active}
                className={`group flex flex-col items-center rounded-3xl p-4 ring-2 transition-all ${
                  active
                    ? "ring-pink-deep shadow-pop -translate-y-0.5"
                    : "ring-pink-soft/40 shadow-card hover:-translate-y-0.5 hover:ring-pink"
                }`}
                style={{ background: `linear-gradient(160deg, ${p.bg}, #ffffff)` }}
              >
                <div className="grid h-24 w-24 place-items-center overflow-hidden rounded-full bg-white/60 ring-2 ring-white">
                  <MeemiAvatar
                    config={p.config}
                    mood={p.mood}
                    uid={`p-${p.id}`}
                    className="w-[150%] translate-y-[14%]"
                  />
                </div>
                <span className="mt-2.5 flex items-center gap-1 font-display text-sm font-extrabold text-ink">
                  {p.label}
                  {active && <span className="text-pink-deep">✓</span>}
                </span>
              </button>
            );
          })}
        </div>

        <p className="mt-5 rounded-2xl bg-white/70 p-4 text-xs text-ink-soft ring-1 ring-pink-soft/40">
          🎨 More avatars will be added from your brand artwork — they’ll appear here as
          additional choices using this same screen.
        </p>
      </div>
    </div>
  );
}
