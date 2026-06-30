/* Saved words/phrases from Anime Learning (client-only, localStorage).
   This is the "Save to Vocabulary" store — a per-device word bank for now,
   structured so it can later sync to a per-user DB (Supabase profiles/words). */

import type { SavedWord } from "@/types/animeLearning";

const KEY = "sakura-saved-vocab";

export function getSavedWords(): SavedWord[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}

export function isSaved(jp: string): boolean {
  return getSavedWords().some((w) => w.jp === jp);
}

export function saveWord(w: Omit<SavedWord, "savedAt">): void {
  try {
    const all = getSavedWords();
    if (all.some((x) => x.jp === w.jp)) return;
    all.push({ ...w, savedAt: new Date().toISOString() });
    localStorage.setItem(KEY, JSON.stringify(all));
  } catch {
    /* ignore */
  }
}
