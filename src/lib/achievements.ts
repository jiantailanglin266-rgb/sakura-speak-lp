/* Achievement badges computed from real lesson progress + saved vocabulary. */

import { syllabus, type ClassCode } from "./lesson";

export type AchievementTier = "Bronze" | "Silver" | "Gold" | "Sakura" | "Platinum";

export type Achievement = {
  id: string;
  name: string;
  icon: string;
  tier: AchievementTier;
  desc: string;
  earned: boolean;
};

function classComplete(done: Set<string>, cls: ClassCode): boolean {
  const ids = syllabus.filter((s) => s.cls === cls).map((s) => s.id);
  return ids.length > 0 && ids.every((id) => done.has(id));
}

export function computeAchievements(completedIds: string[], savedCount: number): Achievement[] {
  const done = new Set(completedIds);
  const n = done.size;
  const a = (
    id: string,
    name: string,
    icon: string,
    tier: AchievementTier,
    desc: string,
    earned: boolean
  ): Achievement => ({ id, name, icon, tier, desc, earned });

  return [
    a("first", "First Steps", "🌱", "Bronze", "Complete your first lesson", n >= 1),
    a("ten", "10 Lessons", "📘", "Silver", "Complete 10 lessons", n >= 10),
    a("classA", "Class A Master", "🎓", "Gold", "Finish all of Class A", classComplete(done, "A")),
    a("half", "Halfway There", "⛩️", "Silver", "Complete 40 lessons", n >= 40),
    a("classB", "Class B Master", "🎓", "Gold", "Finish all of Class B", classComplete(done, "B")),
    a("classC", "Class C Master", "🏅", "Gold", "Finish all of Class C", classComplete(done, "C")),
    a("classD", "Class D Master", "🏅", "Gold", "Finish all of Class D", classComplete(done, "D")),
    a("words", "Word Collector", "🌸", "Sakura", "Save 10 words to Vocabulary", savedCount >= 10),
    a("all80", "Fluent Path", "🏆", "Platinum", "Complete all 80 lessons", n >= 80),
  ];
}
