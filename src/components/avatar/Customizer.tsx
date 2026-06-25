"use client";

import { useEffect, useState } from "react";
import MeemiAvatar from "./MeemiAvatar";
import Icon from "../ui/Icon";
import {
  AvatarConfig,
  defaultConfig,
  furColors,
  eyeColors,
  cheekColors,
  clothColors,
  shoeColors,
  coinHair,
  hairColors,
  coinAccessories,
  coinFrames,
  profileVariations,
  type CoinItem,
} from "@/lib/avatar";

const START_COINS = 1280;
const STORAGE_KEY = "sakura-meemi-avatar";

type Cat =
  | "fur"
  | "eye"
  | "lashes"
  | "cheek"
  | "top"
  | "bottom"
  | "socks"
  | "shoes"
  | "hair"
  | "accessory"
  | "frame";

const categories: { id: Cat; label: string; icon: string; coin?: boolean }[] = [
  { id: "fur", label: "Fur", icon: "spark" },
  { id: "eye", label: "Eyes", icon: "profile" },
  { id: "lashes", label: "Lashes", icon: "spark" },
  { id: "cheek", label: "Cheeks", icon: "love" },
  { id: "top", label: "Top", icon: "vocab" },
  { id: "bottom", label: "Bottom", icon: "vocab" },
  { id: "socks", label: "Socks", icon: "vocab" },
  { id: "shoes", label: "Shoes", icon: "vocab" },
  { id: "hair", label: "Hair", icon: "spark", coin: true },
  { id: "accessory", label: "Accessory", icon: "gem", coin: true },
  { id: "frame", label: "Frame", icon: "gem", coin: true },
];

function Coin({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <circle cx="12" cy="12" r="10" fill="#f5a623" />
      <circle cx="12" cy="12" r="10" fill="none" stroke="#d98a12" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="6.5" fill="none" stroke="#ffe08a" strokeWidth="1.8" />
      <text x="12" y="16.5" textAnchor="middle" fontSize="9" fontWeight="800" fill="#fff8e1">
        S
      </text>
    </svg>
  );
}

export default function Customizer() {
  const [config, setConfig] = useState<AvatarConfig>(defaultConfig);
  const [coins, setCoins] = useState(START_COINS);
  const [owned, setOwned] = useState<string[]>([]);
  const [cat, setCat] = useState<Cat>("fur");
  const [profile, setProfile] = useState("smile");
  const [saved, setSaved] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  // load persisted state
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const s = JSON.parse(raw);
        if (s.config) setConfig({ ...defaultConfig, ...s.config });
        if (typeof s.coins === "number") setCoins(s.coins);
        if (Array.isArray(s.owned)) setOwned(s.owned);
        if (s.profile) setProfile(s.profile);
      }
    } catch {
      /* ignore */
    }
  }, []);

  const set = (patch: Partial<AvatarConfig>) =>
    setConfig((c) => ({ ...c, ...patch }));

  const flashToast = (msg: string) => {
    setToast(msg);
    window.setTimeout(() => setToast(null), 1800);
  };

  const currentMood =
    profileVariations.find((v) => v.id === profile)?.mood ?? "happy";

  // try to equip a coin item (purchase if needed)
  const equipCoinItem = (
    key: "hair" | "accessory" | "frame",
    item: CoinItem | { id: string; price: number; label: string }
  ) => {
    const isOwned = owned.includes(item.id);
    if (config[key] === item.id) {
      set({ [key]: null } as Partial<AvatarConfig>); // toggle off
      return;
    }
    if (isOwned) {
      set({ [key]: item.id } as Partial<AvatarConfig>);
      return;
    }
    if (coins < item.price) {
      flashToast(`Need ${item.price - coins} more coins for ${item.label}`);
      return;
    }
    setCoins((c) => c - item.price);
    setOwned((o) => [...o, item.id]);
    set({ [key]: item.id } as Partial<AvatarConfig>);
    flashToast(`Unlocked ${item.label}! 🎉`);
  };

  const randomize = () => {
    const pick = <T,>(a: T[]) => a[Math.floor(Math.random() * a.length)];
    set({
      fur: pick(furColors).color,
      eye: pick(eyeColors).color,
      cheek: pick(cheekColors).color,
      lashes: Math.random() > 0.5,
      top: pick(clothColors).color,
      bottom: pick(clothColors).color,
      socks: pick(clothColors).color,
      shoes: pick(shoeColors).color,
    });
  };

  const reset = () => setConfig(defaultConfig);

  const save = () => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ config, coins, owned, profile })
      );
    } catch {
      /* ignore */
    }
    setSaved(true);
    window.setTimeout(() => setSaved(false), 1800);
  };

  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,400px)_minmax(0,1fr)]">
      {/* ---------- Preview ---------- */}
      <div className="min-w-0 lg:sticky lg:top-24 lg:self-start">
        <div className="rounded-[2rem] bg-gradient-to-br from-pink-soft/60 via-white to-blue-soft/50 p-5 shadow-card ring-1 ring-white">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-lg font-extrabold text-ink">
              Your Meemi
            </h2>
            <span className="flex items-center gap-1.5 rounded-full bg-[#fff6d6] px-3 py-1.5 text-sm font-extrabold text-gold-deep">
              <Coin />
              {coins.toLocaleString()}
            </span>
          </div>

          <div className="relative mx-auto mt-3 grid max-w-[300px] place-items-center">
            <div className="absolute inset-0 -z-10 m-6 animate-blob bg-white/60" />
            <MeemiAvatar config={config} mood={currentMood} uid="main" className="w-full drop-shadow-xl" />
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2">
            <button
              onClick={randomize}
              className="rounded-full bg-white py-2.5 text-sm font-bold text-pink-ink shadow-card ring-1 ring-pink-soft/60 hover:bg-cream"
            >
              🎲 Random
            </button>
            <button
              onClick={reset}
              className="rounded-full bg-white py-2.5 text-sm font-bold text-ink-soft shadow-card ring-1 ring-pink-soft/60 hover:bg-cream"
            >
              ↺ Reset
            </button>
            <button
              onClick={save}
              className="rounded-full bg-gradient-to-r from-pink-deep to-pink py-2.5 text-sm font-extrabold text-white shadow-soft hover:-translate-y-0.5 transition-transform"
            >
              {saved ? "Saved ✓" : "Save"}
            </button>
          </div>
        </div>

        {/* Profile picture variations */}
        <div className="mt-4 rounded-[1.5rem] bg-white p-5 shadow-card ring-1 ring-pink-soft/40">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-base font-extrabold text-ink">
              Profile picture
            </h3>
            <span className="text-xs font-semibold text-ink-mute">
              Uses your Meemi
            </span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2.5 sm:grid-cols-6 lg:grid-cols-3">
            {profileVariations.map((v) => {
              const active = profile === v.id;
              return (
                <button
                  key={v.id}
                  onClick={() => setProfile(v.id)}
                  className={`group relative aspect-square overflow-hidden rounded-2xl ring-2 transition-all ${
                    active
                      ? "ring-pink-deep"
                      : "ring-transparent hover:ring-pink-soft"
                  }`}
                  style={{ background: v.bg }}
                  title={v.label}
                  aria-pressed={active}
                >
                  <MeemiAvatar
                    config={config}
                    mood={v.mood}
                    uid={`pv-${v.id}`}
                    className="h-full w-full translate-y-[14%] scale-[1.7]"
                  />
                  {active && (
                    <span className="absolute bottom-1 right-1 grid h-5 w-5 place-items-center rounded-full bg-pink-deep text-[0.6rem] font-bold text-white">
                      ✓
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ---------- Options ---------- */}
      <div className="min-w-0">
        {/* category tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setCat(c.id)}
              className={`flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold transition-all ${
                cat === c.id
                  ? "bg-gradient-to-r from-pink-deep to-pink text-white shadow-soft"
                  : "bg-white text-ink-soft ring-1 ring-pink-soft/60 hover:bg-pink-soft/30"
              }`}
            >
              {c.label}
              {c.coin && (
                <Coin className={`h-3.5 w-3.5 ${cat === c.id ? "opacity-90" : ""}`} />
              )}
            </button>
          ))}
        </div>

        <div className="mt-4 rounded-[1.5rem] bg-white p-5 shadow-card ring-1 ring-pink-soft/40">
          {/* free color categories */}
          {cat === "fur" && (
            <SwatchGrid
              items={furColors}
              selected={config.fur}
              onPick={(c) => c && set({ fur: c })}
            />
          )}
          {cat === "eye" && (
            <SwatchGrid
              items={eyeColors}
              selected={config.eye}
              onPick={(c) => c && set({ eye: c })}
            />
          )}
          {cat === "cheek" && (
            <SwatchGrid
              items={cheekColors}
              selected={config.cheek}
              onPick={(c) => set({ cheek: c })}
              allowNone
            />
          )}
          {cat === "top" && (
            <SwatchGrid items={clothColors} selected={config.top} onPick={(c) => set({ top: c })} allowNone />
          )}
          {cat === "bottom" && (
            <SwatchGrid items={clothColors} selected={config.bottom} onPick={(c) => set({ bottom: c })} allowNone />
          )}
          {cat === "socks" && (
            <SwatchGrid items={clothColors} selected={config.socks} onPick={(c) => set({ socks: c })} allowNone />
          )}
          {cat === "shoes" && (
            <SwatchGrid items={shoeColors} selected={config.shoes} onPick={(c) => set({ shoes: c })} allowNone />
          )}

          {cat === "lashes" && (
            <div className="flex gap-3">
              {[
                { v: false, label: "Off" },
                { v: true, label: "Cute lashes" },
              ].map((o) => (
                <button
                  key={o.label}
                  onClick={() => set({ lashes: o.v })}
                  className={`flex-1 rounded-2xl py-4 text-sm font-bold ring-2 transition-all ${
                    config.lashes === o.v
                      ? "bg-pink-soft/40 text-pink-ink ring-pink-deep"
                      : "bg-cream text-ink-soft ring-transparent hover:ring-pink-soft"
                  }`}
                >
                  {o.label}
                </button>
              ))}
            </div>
          )}

          {/* coin categories */}
          {cat === "hair" && (
            <>
              <CoinGrid
                items={coinHair}
                equippedId={config.hair}
                owned={owned}
                coins={coins}
                onSelect={(it) => equipCoinItem("hair", it)}
                onNone={() => set({ hair: null })}
              />
              {config.hair && (
                <div className="mt-5 border-t border-pink-soft/40 pt-4">
                  <p className="mb-2.5 text-sm font-bold text-ink">Hair color</p>
                  <SwatchGrid
                    items={hairColors}
                    selected={config.hairColor}
                    onPick={(c) => c && set({ hairColor: c })}
                  />
                </div>
              )}
            </>
          )}
          {cat === "accessory" && (
            <CoinGrid
              items={coinAccessories}
              equippedId={config.accessory}
              owned={owned}
              coins={coins}
              onSelect={(it) => equipCoinItem("accessory", it)}
              onNone={() => set({ accessory: null })}
            />
          )}
          {cat === "frame" && (
            <CoinGrid
              items={coinFrames}
              equippedId={config.frame}
              owned={owned}
              coins={coins}
              onSelect={(it) => equipCoinItem("frame", it)}
              onNone={() => set({ frame: null })}
            />
          )}
        </div>

        <p className="mt-3 px-1 text-xs text-ink-mute">
          Fur, eyes, lashes, cheeks and basic clothing are free. Hair,
          accessories and frames are unlocked with coins 🪙 — earned through
          achievements, daily use, or purchase.
        </p>
      </div>

      {/* toast */}
      {toast && (
        <div className="fixed bottom-24 left-1/2 z-50 -translate-x-1/2 rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-white shadow-pop lg:bottom-8">
          {toast}
        </div>
      )}
    </div>
  );
}

/* ---------- swatch grid (free colors) ---------- */
function SwatchGrid({
  items,
  selected,
  onPick,
  allowNone,
}: {
  items: { id: string; label: string; color: string | null }[];
  selected: string | null;
  onPick: (color: string | null) => void;
  allowNone?: boolean;
}) {
  return (
    <div className="grid grid-cols-4 gap-3 sm:grid-cols-6">
      {allowNone && (
        <SwatchButton
          color={null}
          label="None"
          active={selected === null}
          onClick={() => onPick(null)}
        />
      )}
      {items.map((it) => (
        <SwatchButton
          key={it.id}
          color={it.color}
          label={it.label}
          active={selected === it.color}
          onClick={() => onPick(it.color)}
        />
      ))}
    </div>
  );
}

function SwatchButton({
  color,
  label,
  active,
  onClick,
}: {
  color: string | null;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      title={label}
      aria-pressed={active}
      className="flex flex-col items-center gap-1.5"
    >
      <span
        className={`grid h-12 w-12 place-items-center rounded-2xl ring-2 transition-all ${
          active ? "ring-pink-deep scale-105" : "ring-pink-soft/50 hover:ring-pink"
        }`}
        style={{
          background: color ?? "#ffffff",
          boxShadow: color ? "inset 0 -4px 8px rgba(0,0,0,0.06)" : undefined,
        }}
      >
        {color === null && <span className="text-lg text-ink-mute">∅</span>}
        {active && (
          <span
            className="text-sm font-extrabold"
            style={{ color: color && isLight(color) ? "#b14a72" : "#ffffff" }}
          >
            ✓
          </span>
        )}
      </span>
      <span className="text-[0.65rem] font-semibold text-ink-soft">{label}</span>
    </button>
  );
}

function isLight(hex: string) {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 150;
}

/* ---------- coin grid (premium items) ---------- */
function CoinGrid({
  items,
  equippedId,
  owned,
  coins,
  onSelect,
  onNone,
}: {
  items: { id: string; label: string; price: number; emoji?: string }[];
  equippedId: string | null;
  owned: string[];
  coins: number;
  onSelect: (it: { id: string; label: string; price: number }) => void;
  onNone: () => void;
}) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      <button
        onClick={onNone}
        className={`flex flex-col items-center justify-center gap-1 rounded-2xl py-5 text-sm font-bold ring-2 transition-all ${
          equippedId === null
            ? "bg-pink-soft/40 text-pink-ink ring-pink-deep"
            : "bg-cream text-ink-soft ring-transparent hover:ring-pink-soft"
        }`}
      >
        <span className="text-xl">∅</span>
        None
      </button>

      {items.map((it) => {
        const isOwned = owned.includes(it.id);
        const equipped = equippedId === it.id;
        const affordable = coins >= it.price;
        return (
          <button
            key={it.id}
            onClick={() => onSelect(it)}
            aria-pressed={equipped}
            className={`relative flex flex-col items-center justify-center gap-1.5 rounded-2xl py-5 text-sm font-bold ring-2 transition-all ${
              equipped
                ? "bg-pink-soft/40 text-pink-ink ring-pink-deep"
                : isOwned
                ? "bg-cream text-ink ring-transparent hover:ring-pink-soft"
                : affordable
                ? "bg-cream text-ink ring-transparent hover:ring-pink-soft"
                : "bg-gray-soft/70 text-ink-mute ring-transparent opacity-80"
            }`}
          >
            <span className="text-2xl">{(it as { emoji?: string }).emoji ?? "✨"}</span>
            {it.label}
            {isOwned ? (
              <span className="rounded-full bg-mint/40 px-2 py-0.5 text-[0.65rem] font-bold text-[#2f9d77]">
                {equipped ? "Equipped" : "Owned"}
              </span>
            ) : (
              <span
                className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-[0.65rem] font-extrabold ${
                  affordable ? "bg-[#fff6d6] text-gold-deep" : "bg-white text-ink-mute"
                }`}
              >
                <Coin className="h-3 w-3" />
                {it.price}
              </span>
            )}
            {!isOwned && !affordable && (
              <span className="absolute right-2 top-2 text-ink-mute">
                <Icon name="lock" className="h-3.5 w-3.5" />
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
