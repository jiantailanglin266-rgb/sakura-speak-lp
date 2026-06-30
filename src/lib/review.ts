/* Review Sheets — concise per-lesson recaps, generated from the actual lesson
   content (intro objectives → key points, grammar/phrase teach steps → grammar,
   vocabulary teach steps → word recap). Stays in sync with the 80 lessons. */

import { getLesson, playableIds, type Step } from "./lesson";

export type RecapWord = { jp: string; romaji: string; en: string };
export type GrammarNote = { point: string; jp: string; romaji: string; en: string };

export type ReviewSheet = {
  id: string;
  cls: string;
  number: number;
  title: string;
  jp: string;
  points: string[];
  grammar: GrammarNote[];
  vocab: RecapWord[];
};

const isTeach = (s: Step): s is Extract<Step, { type: "teach" }> => s.type === "teach";

/** Build a review sheet from a lesson's own content. */
export function buildReviewSheet(id: string): ReviewSheet | null {
  const l = getLesson(id);
  if (!l) return null;

  const intro = l.steps.find((s) => s.type === "intro");
  const points = intro && intro.type === "intro" ? intro.objectives : [];

  const teach = l.steps.filter(isTeach);
  const isGrammar = (t: Extract<Step, { type: "teach" }>) =>
    t.label === "Grammar" || t.label === "Phrase";

  const grammar: GrammarNote[] = teach
    .filter(isGrammar)
    .slice(0, 5)
    .map((t) => ({
      point: t.label === "Phrase" ? "Key phrase" : "Grammar point",
      jp: t.jp,
      romaji: t.romaji,
      en: t.en,
    }));

  const seen = new Set<string>();
  const vocab: RecapWord[] = teach
    .filter((t) => !isGrammar(t))
    .filter((t) => (seen.has(t.jp) ? false : (seen.add(t.jp), true)))
    .slice(0, 8)
    .map((t) => ({ jp: t.jp, romaji: t.romaji, en: t.en }));

  return { id: l.id, cls: l.cls, number: l.number, title: l.title, jp: l.jpTitle, points, grammar, vocab };
}

/** All lessons that have a review sheet (every authored/playable lesson). */
export const reviewableIds: string[] = playableIds;
