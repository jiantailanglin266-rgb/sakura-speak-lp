/* Review tracking (client-only, localStorage): when each sheet was last reviewed,
   plus simple spaced-repetition "due" logic. */

const KEY = "sakura-review-progress";
const DUE_AFTER_DAYS = 3;

export function getReviewed(): Record<string, string> {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "{}");
  } catch {
    return {};
  }
}

export function markReviewed(id: string): void {
  try {
    const m = getReviewed();
    m[id] = new Date().toISOString();
    localStorage.setItem(KEY, JSON.stringify(m));
  } catch {
    /* ignore */
  }
}

/** A completed lesson is "due" if never reviewed, or reviewed > 3 days ago. */
export function isDue(id: string, reviewed: Record<string, string>): boolean {
  const t = reviewed[id];
  if (!t) return true;
  return Date.now() - new Date(t).getTime() > DUE_AFTER_DAYS * 86_400_000;
}
