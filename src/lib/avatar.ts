/* Avatar customization data & types for the Meemi dress-up screen. */

export type AvatarConfig = {
  fur: string;
  eye: string;
  cheek: string | null;
  lashes: boolean;
  top: string | null;
  bottom: string | null;
  socks: string | null;
  shoes: string | null;
  hair: string | null; // hair style id
  hairColor: string;
  accessory: string | null; // accessory id
  frame: string | null; // frame id
};

// Default = Meemi's official look (white fur, blue eyes) + a basic free outfit.
export const defaultConfig: AvatarConfig = {
  fur: "#ffffff",
  eye: "#8fd6ff",
  cheek: "#ffb3cf",
  lashes: false,
  top: "#ffd6e5",
  bottom: "#8fd6ff",
  socks: "#ffffff",
  shoes: "#f7a8c4",
  hair: null,
  hairColor: "#7a5a44",
  accessory: null,
  frame: null,
};

export type Swatch = { id: string; label: string; color: string };

export const furColors: Swatch[] = [
  { id: "white", label: "White", color: "#ffffff" },
  { id: "cream", label: "Cream", color: "#fff0d9" },
  { id: "sand", label: "Sand", color: "#f3d9b1" },
  { id: "pink", label: "Pink", color: "#ffd0e0" },
  { id: "mint", label: "Mint", color: "#cdeedd" },
  { id: "lilac", label: "Lilac", color: "#ddd1ff" },
  { id: "gray", label: "Gray", color: "#d9dde3" },
  { id: "brown", label: "Brown", color: "#c89b6e" },
  { id: "charcoal", label: "Charcoal", color: "#6b6b78" },
  { id: "black", label: "Black", color: "#3a3a42" },
];

export const eyeColors: Swatch[] = [
  { id: "blue", label: "Blue", color: "#8fd6ff" },
  { id: "sky", label: "Sky", color: "#bfeaff" },
  { id: "green", label: "Green", color: "#8fe0a8" },
  { id: "emerald", label: "Emerald", color: "#4cc08a" },
  { id: "amber", label: "Amber", color: "#ffc14d" },
  { id: "brown", label: "Brown", color: "#b07a4a" },
  { id: "pink", label: "Pink", color: "#ff9ec4" },
  { id: "violet", label: "Violet", color: "#b59cff" },
];

export const cheekColors: { id: string; label: string; color: string | null }[] = [
  { id: "pink", label: "Pink", color: "#ffb3cf" },
  { id: "peach", label: "Peach", color: "#ffc6a8" },
  { id: "coral", label: "Coral", color: "#ff9e8a" },
  { id: "none", label: "None", color: null },
];

export const clothColors: Swatch[] = [
  { id: "white", label: "White", color: "#ffffff" },
  { id: "pink", label: "Pink", color: "#f7a8c4" },
  { id: "softpink", label: "Soft Pink", color: "#ffd6e5" },
  { id: "blue", label: "Blue", color: "#8fd6ff" },
  { id: "mint", label: "Mint", color: "#9fe3c5" },
  { id: "lilac", label: "Lilac", color: "#c9b6ff" },
  { id: "yellow", label: "Yellow", color: "#ffd97a" },
  { id: "gray", label: "Gray", color: "#c6c7cc" },
  { id: "navy", label: "Navy", color: "#5b6b9a" },
  { id: "black", label: "Black", color: "#3a3a42" },
];

export const shoeColors: Swatch[] = [
  { id: "white", label: "White", color: "#ffffff" },
  { id: "pink", label: "Pink", color: "#f7a8c4" },
  { id: "blue", label: "Blue", color: "#8fd6ff" },
  { id: "red", label: "Red", color: "#ff7a7a" },
  { id: "yellow", label: "Yellow", color: "#ffd97a" },
  { id: "brown", label: "Brown", color: "#b07a4a" },
  { id: "black", label: "Black", color: "#3a3a42" },
];

// ---------- Coin (premium) items ----------
export type CoinItem = { id: string; label: string; price: number; emoji: string };

export const coinHair: CoinItem[] = [
  { id: "bangs", label: "Bangs", price: 150, emoji: "💇" },
  { id: "bob", label: "Bob", price: 220, emoji: "💁" },
  { id: "ponytail", label: "Ponytail", price: 280, emoji: "🎀" },
  { id: "twin", label: "Twin Buns", price: 320, emoji: "👧" },
];

export const hairColors: Swatch[] = [
  { id: "brown", label: "Brown", color: "#7a5a44" },
  { id: "black", label: "Black", color: "#2f2b30" },
  { id: "blonde", label: "Blonde", color: "#e7c47a" },
  { id: "pink", label: "Pink", color: "#ff9ec4" },
  { id: "blue", label: "Blue", color: "#7db8e8" },
  { id: "lilac", label: "Lilac", color: "#c9b6ff" },
];

export const coinAccessories: CoinItem[] = [
  { id: "bow", label: "Ribbon Bow", price: 120, emoji: "🎀" },
  { id: "glasses", label: "Glasses", price: 180, emoji: "👓" },
  { id: "headphones", label: "Headphones", price: 350, emoji: "🎧" },
  { id: "crown", label: "Flower Crown", price: 420, emoji: "🌸" },
];

export const coinFrames: { id: string; label: string; price: number; color: string }[] = [
  { id: "sakura", label: "Sakura", price: 500, color: "#f7a8c4" },
  { id: "gold", label: "Gold", price: 800, color: "#f5a623" },
  { id: "holo", label: "Hologram", price: 1200, color: "#c9b6ff" },
];

// ---------- Profile picture variations ----------
export type AvatarMood = "happy" | "wink" | "love" | "uwu" | "cool" | "surprised";

export const profileVariations: { id: string; label: string; mood: AvatarMood; bg: string }[] = [
  { id: "smile", label: "Smile", mood: "happy", bg: "#ffe6f0" },
  { id: "wink", label: "Wink", mood: "wink", bg: "#dff0ff" },
  { id: "love", label: "Love", mood: "love", bg: "#ffd6e5" },
  { id: "uwu", label: "Happy", mood: "uwu", bg: "#e7f7ee" },
  { id: "cool", label: "Cool", mood: "cool", bg: "#efe7ff" },
  { id: "wow", label: "Wow", mood: "surprised", bg: "#fff2cc" },
];

// ---------- Selectable avatar presets ----------
// A small fixed set of ready-made Meemi looks (no dress-up). These parametric
// looks are placeholders — the client's supplied artwork will be added here as
// additional selectable avatars later, using the same selection UI.
export type AvatarPreset = {
  id: string;
  label: string;
  mood: AvatarMood;
  bg: string;
  config: AvatarConfig;
};

export const avatarPresets: AvatarPreset[] = [
  { id: "classic", label: "Classic", mood: "happy", bg: "#ffe6f0", config: { ...defaultConfig } },
  {
    id: "sakura", label: "Sakura", mood: "love", bg: "#ffd6e5",
    config: { ...defaultConfig, fur: "#ffd0e0", eye: "#ff9ec4", cheek: "#ff9e8a", top: "#f7a8c4", bottom: "#ffd6e5" },
  },
  {
    id: "mint", label: "Mint", mood: "uwu", bg: "#e7f7ee",
    config: { ...defaultConfig, fur: "#cdeedd", eye: "#4cc08a", top: "#9fe3c5", bottom: "#ffffff" },
  },
  {
    id: "lilac", label: "Lilac", mood: "wink", bg: "#efe7ff",
    config: { ...defaultConfig, fur: "#ddd1ff", eye: "#b59cff", lashes: true, top: "#c9b6ff", bottom: "#efe7ff" },
  },
  {
    id: "cocoa", label: "Cocoa", mood: "cool", bg: "#f6ecdf",
    config: { ...defaultConfig, fur: "#c89b6e", eye: "#ffc14d", cheek: "#ffc6a8", top: "#ffd97a", bottom: "#5b6b9a" },
  },
  {
    id: "midnight", label: "Midnight", mood: "surprised", bg: "#e7ecf7",
    config: { ...defaultConfig, fur: "#6b6b78", eye: "#bfeaff", cheek: null, top: "#3a3a42", bottom: "#8fd6ff" },
  },
];
