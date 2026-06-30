/* Class B — Everyday Japanese. Authored lessons (playable).
   Batch 1: Lessons 21–25. Standard pro template. */

import type { Lesson } from "./lesson";

export const classBLessons: Lesson[] = [
  /* ---------------- B-21 Telling time ---------------- */
  {
    id: "b-21",
    cls: "B",
    number: 21,
    title: "Telling time",
    jpTitle: "時間を言う",
    xp: 15,
    coins: 15,
    steps: [
      {
        type: "intro",
        title: "Telling time",
        objectives: ["Say the hour with じ", "Say minutes and “half past”", "Tell a.m. and p.m."],
      },
      { type: "teach", label: "Time", jp: "いちじ", romaji: "ichi-ji", en: "one o'clock", note: "number + じ = o'clock." },
      { type: "teach", label: "Time", jp: "さんじ", romaji: "san-ji", en: "three o'clock" },
      { type: "teach", label: "Time", jp: "ごふん", romaji: "go-fun", en: "five minutes", note: "number + ふん/ぷん = minutes." },
      { type: "teach", label: "Time", jp: "はん", romaji: "han", en: "half past (:30)", note: "にじはん = 2:30." },
      {
        type: "choice",
        prompt: "“3 o'clock” = ?",
        options: [{ label: "さんじ", correct: true }, { label: "いちじ" }, { label: "ごじ" }],
      },
      { type: "teach", jp: "ごご", romaji: "gogo", en: "p.m. / afternoon", note: "ごぜん = a.m." },
      { type: "teach", label: "Phrase", jp: "いまなんじですか", romaji: "ima nanji desu ka", en: "What time is it now?" },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "It's 2:30.",
        tiles: ["にじ", "はん", "です"],
        answer: ["にじ", "はん", "です"],
      },
      {
        type: "listen",
        audio: "いまなんじですか",
        prompt: "What did you hear?",
        options: [{ label: "いまなんじですか (What time is it?)", correct: true }, { label: "きょうはなんようびですか" }, { label: "これはいくらですか" }],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "いちじ", en: "1:00" },
          { jp: "はん", en: "half past" },
          { jp: "ごぜん", en: "a.m." },
          { jp: "ごご", en: "p.m." },
        ],
      },
      {
        type: "choice",
        prompt: "“It's 2:30” = にじ ___ です",
        options: [{ label: "はん", correct: true }, { label: "ごぜん" }, { label: "ふん" }],
      },
    ],
  },

  /* ---------------- B-22 Daily routine ---------------- */
  {
    id: "b-22",
    cls: "B",
    number: 22,
    title: "Daily routine",
    jpTitle: "一日の流れ",
    xp: 15,
    coins: 15,
    steps: [
      {
        type: "intro",
        title: "Daily routine",
        objectives: ["Talk about daily activities", "Use time + に = “at”", "Describe your day"],
      },
      { type: "teach", jp: "おきます", romaji: "okimasu", en: "wake up / get up" },
      { type: "teach", jp: "ねます", romaji: "nemasu", en: "sleep / go to bed" },
      { type: "teach", jp: "はたらきます", romaji: "hatarakimasu", en: "work" },
      { type: "teach", jp: "べんきょうします", romaji: "benkyō shimasu", en: "study" },
      { type: "teach", label: "Grammar", jp: "しちじにおきます", romaji: "shichi-ji ni okimasu", en: "(I) get up at 7", note: "time + に = “at (a time)”." },
      {
        type: "choice",
        prompt: "Which means “wake up”?",
        options: [{ label: "おきます", correct: true }, { label: "ねます" }, { label: "はたらきます" }],
      },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "I sleep at 11.",
        tiles: ["じゅういちじ", "に", "ねます"],
        answer: ["じゅういちじ", "に", "ねます"],
      },
      {
        type: "listen",
        audio: "しちじにおきます",
        prompt: "What did you hear?",
        options: [{ label: "しちじにおきます (I get up at 7.)", correct: true }, { label: "じゅういちじにねます" }, { label: "にほんごをべんきょうします" }],
      },
      {
        type: "match",
        prompt: "Match the verbs",
        pairs: [
          { jp: "おきます", en: "wake up" },
          { jp: "ねます", en: "sleep" },
          { jp: "はたらきます", en: "work" },
          { jp: "べんきょうします", en: "study" },
        ],
      },
      {
        type: "choice",
        prompt: "“I study Japanese” = にほんごを ___",
        options: [{ label: "べんきょうします", correct: true }, { label: "おきます" }, { label: "ねます" }],
      },
    ],
  },

  /* ---------------- B-23 At the station ---------------- */
  {
    id: "b-23",
    cls: "B",
    number: 23,
    title: "At the station",
    jpTitle: "駅で",
    xp: 15,
    coins: 15,
    steps: [
      {
        type: "intro",
        title: "At the station",
        objectives: ["Know station vocabulary", "Find exits & platforms", "Ask about the next train"],
      },
      { type: "teach", jp: "えき", romaji: "eki", en: "station" },
      { type: "teach", jp: "でんしゃ", romaji: "densha", en: "train" },
      { type: "teach", jp: "きっぷ", romaji: "kippu", en: "ticket" },
      { type: "teach", jp: "ホーム", romaji: "hōmu", en: "platform" },
      { type: "teach", jp: "でぐち", romaji: "deguchi", en: "exit", note: "いりぐち = entrance." },
      {
        type: "choice",
        prompt: "Which means “train”?",
        options: [{ label: "でんしゃ", correct: true }, { label: "えき" }, { label: "きっぷ" }, { label: "ホーム" }],
      },
      { type: "teach", label: "Phrase", jp: "つぎのでんしゃ", romaji: "tsugi no densha", en: "the next train", note: "つぎ = next." },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "Where is the exit?",
        tiles: ["でぐち", "は", "どこ", "ですか"],
        answer: ["でぐち", "は", "どこ", "ですか"],
      },
      {
        type: "listen",
        audio: "でんしゃ",
        prompt: "What did you hear?",
        options: [{ label: "train", correct: true }, { label: "station" }, { label: "ticket" }],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "えき", en: "station" },
          { jp: "でんしゃ", en: "train" },
          { jp: "きっぷ", en: "ticket" },
          { jp: "ホーム", en: "platform" },
        ],
      },
      {
        type: "choice",
        prompt: "“the next train” = つぎの ___",
        options: [{ label: "でんしゃ", correct: true }, { label: "えき" }, { label: "きっぷ" }],
      },
    ],
  },

  /* ---------------- B-24 Buying a ticket ---------------- */
  {
    id: "b-24",
    cls: "B",
    number: 24,
    title: "Buying a ticket",
    jpTitle: "切符を買う",
    xp: 15,
    coins: 15,
    steps: [
      {
        type: "intro",
        title: "Buying a ticket",
        objectives: ["Say a destination with まで", "Ask the fare", "Buy adult / child tickets"],
      },
      { type: "teach", jp: "きっぷ", romaji: "kippu", en: "ticket" },
      { type: "teach", label: "Grammar", jp: "とうきょうまで", romaji: "tōkyō made", en: "to Tokyo", note: "place + まで = “to / as far as (destination)”." },
      { type: "teach", jp: "おとな", romaji: "otona", en: "adult", note: "こども = child." },
      { type: "teach", jp: "こども", romaji: "kodomo", en: "child" },
      {
        type: "choice",
        prompt: "“to Tokyo” = とうきょう ___",
        options: [{ label: "まで", correct: true }, { label: "から" }, { label: "を" }],
      },
      { type: "teach", label: "Phrase", jp: "きっぷをかいます", romaji: "kippu o kaimasu", en: "buy a ticket" },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "A ticket, please.",
        tiles: ["きっぷ", "を", "ください"],
        answer: ["きっぷ", "を", "ください"],
      },
      {
        type: "listen",
        audio: "とうきょうまでいくらですか",
        prompt: "What did you hear?",
        options: [{ label: "とうきょうまでいくらですか (How much to Tokyo?)", correct: true }, { label: "きっぷをください" }, { label: "つぎのでんしゃ" }],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "きっぷ", en: "ticket" },
          { jp: "おとな", en: "adult" },
          { jp: "こども", en: "child" },
          { jp: "まで", en: "to (destination)" },
        ],
      },
      {
        type: "choice",
        prompt: "Ask “How much to Tokyo?”",
        options: [{ label: "とうきょうまでいくらですか", correct: true }, { label: "これはなんですか" }, { label: "つぎのでんしゃ" }],
      },
    ],
  },

  /* ---------------- B-25 Taking the train ---------------- */
  {
    id: "b-25",
    cls: "B",
    number: 25,
    title: "Taking the train",
    jpTitle: "電車に乗る",
    xp: 15,
    coins: 15,
    steps: [
      {
        type: "intro",
        title: "Taking the train",
        objectives: ["Get on and off with に のります", "Transfer trains", "Understand station announcements"],
      },
      { type: "teach", jp: "のります", romaji: "norimasu", en: "get on / ride" },
      { type: "teach", jp: "おります", romaji: "orimasu", en: "get off" },
      { type: "teach", label: "Grammar", jp: "でんしゃにのります", romaji: "densha ni norimasu", en: "get on the train", note: "vehicle + に のります." },
      { type: "teach", jp: "のりかえ", romaji: "norikae", en: "transfer (trains)" },
      {
        type: "choice",
        prompt: "Which means “get off”?",
        options: [{ label: "おります", correct: true }, { label: "のります" }, { label: "のりかえ" }],
      },
      { type: "teach", label: "Phrase", jp: "つぎはとうきょうです", romaji: "tsugi wa tōkyō desu", en: "Next is Tokyo", note: "Station-announcement style." },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "I get on the train.",
        tiles: ["でんしゃ", "に", "のります"],
        answer: ["でんしゃ", "に", "のります"],
      },
      {
        type: "listen",
        audio: "つぎはとうきょうです",
        prompt: "What did you hear?",
        options: [{ label: "つぎはとうきょうです (Next is Tokyo.)", correct: true }, { label: "でんしゃにのります" }, { label: "きっぷをください" }],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "のります", en: "get on" },
          { jp: "おります", en: "get off" },
          { jp: "のりかえ", en: "transfer" },
          { jp: "でんしゃ", en: "train" },
        ],
      },
      {
        type: "choice",
        prompt: "Announcement: “The next stop is Tokyo.”",
        options: [{ label: "つぎはとうきょうです", correct: true }, { label: "とうきょうまでいくらですか" }, { label: "でんしゃにのります" }],
      },
    ],
  },
];
