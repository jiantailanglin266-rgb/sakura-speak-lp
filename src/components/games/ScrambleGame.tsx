"use client";

import { useState } from "react";
import GameTopBar from "./GameTopBar";
import StartScreen from "./StartScreen";
import GameResult from "./GameResult";
import Icon from "../ui/Icon";
import { speak } from "@/lib/speak";
import {
  sentences,
  sample,
  shuffle,
  scrambleRounds,
  scrambleMaxLen,
  type Difficulty,
  type Sentence,
} from "@/lib/games";

type Token = { id: number; text: string };
type Phase = "start" | "playing" | "result";

export default function ScrambleGame() {
  const [phase, setPhase] = useState<Phase>("start");
  const [rounds, setRounds] = useState<Sentence[]>([]);
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);

  const [bank, setBank] = useState<Token[]>([]); // not yet placed
  const [built, setBuilt] = useState<Token[]>([]); // placed in order
  const [checked, setChecked] = useState(false);
  const [correct, setCorrect] = useState(false);

  const loadRound = (s: Sentence) => {
    const tokens: Token[] = s.tokens.map((text, i) => ({ id: i, text }));
    // re-shuffle until the order differs (when possible)
    let scrambled = shuffle(tokens);
    if (tokens.length > 1) {
      let tries = 0;
      while (scrambled.every((t, i) => t.id === i) && tries < 8) {
        scrambled = shuffle(tokens);
        tries++;
      }
    }
    setBank(scrambled);
    setBuilt([]);
    setChecked(false);
    setCorrect(false);
  };

  const start = (d: Difficulty) => {
    const pool = sentences.filter((s) => s.tokens.length <= scrambleMaxLen[d]);
    const picked = sample(pool.length >= scrambleRounds ? pool : sentences, scrambleRounds);
    setRounds(picked);
    setIdx(0);
    setScore(0);
    setPhase("playing");
    loadRound(picked[0]);
  };

  const place = (t: Token) => {
    if (checked) return;
    setBank((b) => b.filter((x) => x.id !== t.id));
    setBuilt((b) => [...b, t]);
  };

  const unplace = (t: Token) => {
    if (checked) return;
    setBuilt((b) => b.filter((x) => x.id !== t.id));
    setBank((b) => [...b, t]);
  };

  const clear = () => {
    if (checked) return;
    setBank((b) => [...b, ...built]);
    setBuilt([]);
  };

  const check = () => {
    const target = rounds[idx].tokens.join("");
    const answer = built.map((t) => t.text).join("");
    const ok = target === answer;
    setCorrect(ok);
    setChecked(true);
    if (ok) {
      setScore((s) => s + 1);
      speak(target);
    }
  };

  const next = () => {
    if (idx + 1 >= rounds.length) {
      setPhase("result");
    } else {
      const n = idx + 1;
      setIdx(n);
      loadRound(rounds[n]);
    }
  };

  if (phase === "start")
    return (
      <Shell>
        <StartScreen
          title="Sentence Scramble"
          jp="文ならべ"
          how="Tap the scrambled words to place them in order and rebuild each Japanese sentence. Tap a placed word to send it back."
          onStart={start}
        />
      </Shell>
    );

  if (phase === "result")
    return (
      <Shell>
        <GameResult
          headline={`${score} / ${rounds.length}`}
          stats={[
            {
              icon: "target",
              label: "Accuracy",
              value: `${Math.round((score / rounds.length) * 100)}%`,
            },
            { icon: "vocab", label: "Sentences", value: `${rounds.length}` },
          ]}
          onReplay={() => setPhase("start")}
        />
      </Shell>
    );

  const r = rounds[idx];
  return (
    <Shell
      hud={
        <span className="text-sm font-bold text-ink-soft">
          {idx + 1}/{rounds.length}
        </span>
      }
    >
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col px-4 py-6">
        <h2 className="text-center font-display text-xl font-extrabold text-ink">
          Rebuild the sentence
        </h2>
        <p className="mt-1 text-center text-sm text-ink-soft">“{r.en}”</p>

        {/* build area */}
        <div className="mt-5 min-h-[5.5rem] rounded-2xl border-2 border-dashed border-pink-soft bg-white/70 p-3">
          {built.length === 0 ? (
            <p className="grid h-[3.5rem] place-items-center text-sm text-ink-mute">
              Tap the words below ↓
            </p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {built.map((t) => {
                let cls = "bg-white text-ink ring-pink-soft/60 hover:ring-pink";
                if (checked)
                  cls = correct
                    ? "bg-[#e7f7ee] text-[#2f9d77] ring-[#9fe3c5]"
                    : "bg-[#ffe6ea] text-[#d6557a] ring-[#ffb3c4]";
                return (
                  <button
                    key={t.id}
                    onClick={() => unplace(t)}
                    disabled={checked}
                    className={`rounded-xl px-3.5 py-2 font-display text-lg font-bold ring-2 transition-all ${cls}`}
                  >
                    {t.text}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* answer reveal */}
        {checked && (
          <div className="mt-3 rounded-2xl bg-white p-3 text-center shadow-card ring-1 ring-pink-soft/40">
            <p className={`font-display text-lg font-extrabold ${correct ? "text-[#2f9d77]" : "text-[#d6557a]"}`}>
              {correct ? "Correct! 🌸" : "Not quite —"}
            </p>
            <button
              onClick={() => speak(r.tokens.join(""))}
              className="mt-1 inline-flex items-center gap-1.5 font-display text-lg font-bold text-ink hover:text-pink-ink"
            >
              <Icon name="play" className="h-4 w-4" /> {r.tokens.join("")}
            </button>
            <p className="text-sm text-ink-mute">{r.romaji}</p>
          </div>
        )}

        {/* word bank */}
        {!checked && (
          <div className="mt-4 flex min-h-[3rem] flex-wrap justify-center gap-2">
            {bank.map((t) => (
              <button
                key={t.id}
                onClick={() => place(t)}
                className="rounded-xl bg-gradient-to-br from-[#dff7ec] to-white px-3.5 py-2 font-display text-lg font-bold text-[#2f9d77] shadow-soft ring-1 ring-[#bdeed7] transition-transform hover:-translate-y-0.5 active:scale-95"
              >
                {t.text}
              </button>
            ))}
          </div>
        )}

        {/* actions */}
        <div className="mt-6">
          {checked ? (
            <button
              onClick={next}
              className="w-full rounded-full bg-gradient-to-r from-pink-deep to-pink py-4 text-base font-extrabold text-white shadow-pop transition-transform hover:-translate-y-0.5"
            >
              {idx + 1 >= rounds.length ? "Finish" : "Next"}
            </button>
          ) : (
            <div className="flex gap-3">
              <button
                onClick={clear}
                disabled={built.length === 0}
                className="rounded-full bg-white px-5 py-3.5 text-sm font-bold text-ink-soft shadow-card ring-1 ring-pink-soft/60 transition-colors hover:bg-cream disabled:opacity-40"
              >
                Clear
              </button>
              <button
                onClick={check}
                disabled={bank.length > 0}
                className="flex-1 rounded-full bg-gradient-to-r from-pink-deep to-pink py-3.5 text-base font-extrabold text-white shadow-pop transition-transform hover:-translate-y-0.5 disabled:opacity-40 disabled:hover:translate-y-0"
              >
                Check
              </button>
            </div>
          )}
        </div>
      </div>
    </Shell>
  );
}

function Shell({ children, hud }: { children: React.ReactNode; hud?: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-cream to-pink-soft/25">
      <GameTopBar title="Sentence Scramble" right={hud} />
      {children}
    </div>
  );
}
