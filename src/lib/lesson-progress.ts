/* Lesson completion progress (client-only, localStorage). */

const KEY = "sakura-lesson-progress";

export function getCompleted(): string[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}

export function markComplete(id: string): void {
  try {
    const set = new Set(getCompleted());
    set.add(id);
    localStorage.setItem(KEY, JSON.stringify([...set]));
  } catch {
    /* ignore */
  }
}
