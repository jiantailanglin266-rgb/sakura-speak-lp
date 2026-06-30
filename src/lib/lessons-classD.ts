/* Class D — Toward Fluent. Authored lessons (playable).
   Batch 1: Lessons 61–65. Upper-intermediate (≈N3). Standard pro template. */

import type { Lesson } from "./lesson";

export const classDLessons: Lesson[] = [
  /* ---------------- D-61 Nuance & politeness ---------------- */
  {
    id: "d-61",
    cls: "D",
    number: 61,
    title: "Nuance & politeness",
    jpTitle: "ニュアンスと丁寧さ",
    xp: 18,
    coins: 18,
    steps: [
      {
        type: "intro",
        title: "Nuance & politeness",
        objectives: ["Add nuance with 〜んです", "Hedge with かもしれません / でしょう", "Decline softly with ちょっと"],
      },
      { type: "teach", label: "Grammar", jp: "つかれたんです", romaji: "tsukareta n desu", en: "(It's that) I'm tired", note: "〜んです adds explanation / nuance." },
      { type: "teach", label: "Nuance", jp: "ちょっと", romaji: "chotto…", en: "well, a bit… (soft refusal)", note: "Trailing off with ちょっと softly declines." },
      { type: "teach", label: "Grammar", jp: "あめかもしれません", romaji: "ame kamoshiremasen", en: "it might rain", note: "〜かもしれません = “might / maybe”." },
      {
        type: "choice",
        prompt: "A soft way to decline:",
        options: [{ label: "ちょっと…", correct: true }, { label: "だめです" }, { label: "いいですよ" }],
      },
      { type: "teach", label: "Grammar", jp: "たかいでしょう", romaji: "takai deshō", en: "probably expensive", note: "〜でしょう = “probably / right?”." },
      { type: "teach", label: "Phrase", jp: "よろしければ", romaji: "yoroshikereba", en: "if you don't mind", note: "A polite preface." },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "It might rain tomorrow.",
        tiles: ["あした", "あめ", "かもしれません"],
        answer: ["あした", "あめ", "かもしれません"],
      },
      {
        type: "listen",
        audio: "たかいでしょう",
        prompt: "What did you hear?",
        options: [{ label: "たかいでしょう (probably expensive)", correct: true }, { label: "あめかもしれません" }, { label: "つかれたんです" }],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "んです", en: "explanation" },
          { jp: "かもしれません", en: "might" },
          { jp: "でしょう", en: "probably" },
          { jp: "よろしければ", en: "if you don't mind" },
        ],
      },
      {
        type: "choice",
        prompt: "“it might rain” = あめ ___",
        options: [{ label: "かもしれません", correct: true }, { label: "でしょう" }, { label: "んです" }],
      },
    ],
  },

  /* ---------------- D-62 Storytelling ---------------- */
  {
    id: "d-62",
    cls: "D",
    number: 62,
    title: "Storytelling",
    jpTitle: "ストーリーテリング",
    xp: 18,
    coins: 18,
    steps: [
      {
        type: "intro",
        title: "Storytelling",
        objectives: ["Narrate in plain past", "Report what someone said", "Connect a longer story"],
      },
      { type: "teach", label: "Grammar", jp: "いった", romaji: "itta", en: "went (plain past)", note: "Plain past for casual narration." },
      { type: "teach", label: "Grammar", jp: "くるといっていた", romaji: "kuru to itteita", en: "(he) said he would come", note: "〜と言っていた = reported speech." },
      { type: "teach", label: "Connector", jp: "それで", romaji: "sorede", en: "and so / therefore" },
      {
        type: "choice",
        prompt: "“and so / therefore” =",
        options: [{ label: "それで", correct: true }, { label: "ところが" }, { label: "きゅうに" }],
      },
      { type: "teach", jp: "きゅうに", romaji: "kyū ni", en: "suddenly" },
      { type: "teach", label: "Connector", jp: "ところが", romaji: "tokoroga", en: "however (unexpectedly)" },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "Suddenly, it started raining.",
        tiles: ["きゅうに", "あめが", "ふってきた"],
        answer: ["きゅうに", "あめが", "ふってきた"],
      },
      {
        type: "listen",
        audio: "くるといっていた",
        prompt: "What did you hear?",
        options: [{ label: "くるといっていた (said he'd come)", correct: true }, { label: "きゅうにふってきた" }, { label: "それで" }],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "いった", en: "went (plain)" },
          { jp: "と言っていた", en: "said that" },
          { jp: "それで", en: "and so" },
          { jp: "ところが", en: "however" },
        ],
      },
      {
        type: "choice",
        prompt: "“however (unexpectedly)” =",
        options: [{ label: "ところが", correct: true }, { label: "それで" }, { label: "きゅうに" }],
      },
    ],
  },

  /* ---------------- D-63 Giving presentations ---------------- */
  {
    id: "d-63",
    cls: "D",
    number: 63,
    title: "Giving presentations",
    jpTitle: "プレゼン",
    xp: 18,
    coins: 18,
    steps: [
      {
        type: "intro",
        title: "Giving presentations",
        objectives: ["Open and close a talk", "Give examples", "Invite questions"],
      },
      { type: "teach", jp: "はっぴょう", romaji: "happyō", en: "presentation" },
      { type: "teach", label: "Phrase", jp: "これからはなします", romaji: "kore kara hanashimasu", en: "I'll now talk (about…)", note: "An opening line." },
      { type: "teach", jp: "まとめ", romaji: "matome", en: "summary / conclusion" },
      { type: "teach", label: "Phrase", jp: "しつもんはありますか", romaji: "shitsumon wa arimasu ka", en: "Are there any questions?" },
      {
        type: "choice",
        prompt: "Ask “Any questions?”",
        options: [{ label: "しつもんはありますか", correct: true }, { label: "これからはなします" }, { label: "まとめ" }],
      },
      { type: "teach", label: "Connector", jp: "たとえば", romaji: "tatoeba", en: "for example" },
      { type: "teach", label: "Phrase", jp: "いじょうです", romaji: "ijō desu", en: "That's all / I'm done", note: "A closing line." },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "Are there any questions?",
        tiles: ["なにか", "しつもんは", "ありますか"],
        answer: ["なにか", "しつもんは", "ありますか"],
      },
      {
        type: "listen",
        audio: "いじょうです",
        prompt: "What did you hear?",
        options: [{ label: "いじょうです (That's all.)", correct: true }, { label: "たとえば" }, { label: "まとめ" }],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "はっぴょう", en: "presentation" },
          { jp: "まとめ", en: "summary" },
          { jp: "たとえば", en: "for example" },
          { jp: "いじょうです", en: "that's all" },
        ],
      },
      {
        type: "choice",
        prompt: "Close a presentation:",
        options: [{ label: "いじょうです", correct: true }, { label: "これからはなします" }, { label: "たとえば" }],
      },
    ],
  },

  /* ---------------- D-64 Persuading ---------------- */
  {
    id: "d-64",
    cls: "D",
    number: 64,
    title: "Persuading",
    jpTitle: "説得する",
    xp: 18,
    coins: 18,
    steps: [
      {
        type: "intro",
        title: "Persuading",
        objectives: ["Advise with 〜たほうがいい", "Say “should” with べき", "Recommend strongly"],
      },
      { type: "teach", label: "Grammar", jp: "やすんだほうがいい", romaji: "yasunda hō ga ii", en: "you'd better rest", note: "〜たほうがいい = “had better / should”." },
      { type: "teach", label: "Grammar", jp: "するべきです", romaji: "suru beki desu", en: "(you) should do it", note: "〜べき = “should” (stronger, more formal)." },
      { type: "teach", jp: "ぜひ", romaji: "zehi", en: "by all means / definitely" },
      {
        type: "choice",
        prompt: "“you'd better rest” = やすんだ ___",
        options: [{ label: "ほうがいい", correct: true }, { label: "べき" }, { label: "かもしれません" }],
      },
      { type: "teach", label: "Phrase", jp: "おすすめです", romaji: "osusume desu", en: "I recommend it" },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "You'd better go.",
        tiles: ["いった", "ほうが", "いいです"],
        answer: ["いった", "ほうが", "いいです"],
      },
      {
        type: "listen",
        audio: "いったほうがいいです",
        prompt: "What did you hear?",
        options: [{ label: "いったほうがいいです (You'd better go.)", correct: true }, { label: "するべきです" }, { label: "ぜひどうぞ" }],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "べき", en: "should" },
          { jp: "たほうがいい", en: "had better" },
          { jp: "ぜひ", en: "by all means" },
          { jp: "おすすめ", en: "recommend" },
        ],
      },
      {
        type: "choice",
        prompt: "Strongly: “You should do it.”",
        options: [{ label: "するべきです", correct: true }, { label: "やすんだほうがいい" }, { label: "ぜひ" }],
      },
    ],
  },

  /* ---------------- D-65 Idioms & set phrases ---------------- */
  {
    id: "d-65",
    cls: "D",
    number: 65,
    title: "Idioms & set phrases",
    jpTitle: "慣用句",
    xp: 18,
    coins: 18,
    steps: [
      {
        type: "intro",
        title: "Idioms & set phrases",
        objectives: ["Use everyday set phrases", "Encourage & console", "Sound natural"],
      },
      { type: "teach", label: "Idiom", jp: "きをつけて", romaji: "ki o tsukete", en: "take care / be careful" },
      { type: "teach", label: "Idiom", jp: "がんばって", romaji: "ganbatte", en: "do your best / good luck" },
      { type: "teach", label: "Idiom", jp: "しかたがない", romaji: "shikata ga nai", en: "it can't be helped" },
      {
        type: "choice",
        prompt: "Wish someone luck:",
        options: [{ label: "がんばって", correct: true }, { label: "きをつけて" }, { label: "しかたがない" }],
      },
      { type: "teach", label: "Idiom", jp: "きがあう", romaji: "ki ga au", en: "to get along well", note: "Literally “spirits match”." },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "Please take care.",
        tiles: ["きを", "つけて", "ください"],
        answer: ["きを", "つけて", "ください"],
      },
      {
        type: "listen",
        audio: "がんばってください",
        prompt: "What did you hear?",
        options: [{ label: "がんばってください (Do your best!)", correct: true }, { label: "きをつけて" }, { label: "しかたがない" }],
      },
      {
        type: "match",
        prompt: "Match the idioms",
        pairs: [
          { jp: "きをつけて", en: "take care" },
          { jp: "がんばって", en: "do your best" },
          { jp: "しかたがない", en: "can't be helped" },
          { jp: "きがあう", en: "get along" },
        ],
      },
      {
        type: "choice",
        prompt: "Console someone: “It can't be helped.”",
        options: [{ label: "しかたがない", correct: true }, { label: "がんばって" }, { label: "きがあう" }],
      },
    ],
  },
];
