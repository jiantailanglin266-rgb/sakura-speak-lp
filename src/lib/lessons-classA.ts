/* Class A — Foundations. Authored lessons (playable).
   Batch 1: Lessons 1–5. Standard pro template per lesson:
   intro → new vocab/phrases → grammar point → mixed exercises → recap. */

import type { Lesson } from "./lesson";

export const classALessons: Lesson[] = [
  /* ---------------- A-1 Greetings ---------------- */
  {
    id: "a-1",
    cls: "A",
    number: 1,
    title: "Greetings",
    jpTitle: "あいさつ",
    xp: 15,
    coins: 15,
    steps: [
      {
        type: "intro",
        title: "Greetings",
        objectives: [
          "Greet people at any time of day",
          "Say good morning, evening and night",
          "Say goodbye and “nice to meet you”",
        ],
      },
      { type: "teach", label: "Phrase", jp: "こんにちは", romaji: "konnichiwa", en: "Hello / Good afternoon", note: "Used from late morning through the afternoon." },
      { type: "teach", label: "Phrase", jp: "おはようございます", romaji: "ohayō gozaimasu", en: "Good morning", note: "Polite. Casually just おはよう." },
      {
        type: "choice",
        prompt: "Which means “Good morning”?",
        options: [
          { label: "おはようございます", correct: true },
          { label: "こんにちは" },
          { label: "さようなら" },
          { label: "こんばんは" },
        ],
      },
      { type: "teach", label: "Phrase", jp: "こんばんは", romaji: "konbanwa", en: "Good evening" },
      { type: "teach", label: "Phrase", jp: "さようなら", romaji: "sayōnara", en: "Goodbye", note: "A more final goodbye. Casually: じゃあね / バイバイ." },
      {
        type: "listen",
        audio: "さようなら",
        prompt: "Tap to listen — what did you hear?",
        options: [
          { label: "さようなら", correct: true },
          { label: "こんにちは" },
          { label: "おはよう" },
        ],
      },
      { type: "teach", label: "Phrase", jp: "おやすみなさい", romaji: "oyasuminasai", en: "Good night", note: "Said before sleeping. Casually: おやすみ." },
      {
        type: "choice",
        prompt: "It's 8 a.m. — what do you say?",
        options: [
          { label: "おはようございます", correct: true },
          { label: "こんばんは" },
          { label: "おやすみなさい" },
        ],
      },
      {
        type: "match",
        prompt: "Match the greetings",
        pairs: [
          { jp: "こんにちは", en: "Hello" },
          { jp: "おはよう", en: "Good morning" },
          { jp: "こんばんは", en: "Good evening" },
          { jp: "さようなら", en: "Goodbye" },
        ],
      },
      { type: "teach", label: "Phrase", jp: "はじめまして", romaji: "hajimemashite", en: "Nice to meet you", note: "Said when meeting someone for the first time." },
      {
        type: "choice",
        prompt: "Meeting someone for the first time, you say…",
        options: [
          { label: "はじめまして", correct: true },
          { label: "さようなら" },
          { label: "おやすみなさい" },
        ],
      },
    ],
  },

  /* ---------------- A-2 Polite basics ---------------- */
  {
    id: "a-2",
    cls: "A",
    number: 2,
    title: "Polite basics",
    jpTitle: "基本のていねい語",
    xp: 15,
    coins: 15,
    steps: [
      {
        type: "intro",
        title: "Polite basics",
        objectives: ["Say yes and no", "Say thank you and you're welcome", "Apologize and excuse yourself"],
      },
      { type: "teach", jp: "はい", romaji: "hai", en: "Yes" },
      { type: "teach", jp: "いいえ", romaji: "iie", en: "No" },
      {
        type: "choice",
        prompt: "Which means “No”?",
        options: [
          { label: "いいえ", correct: true },
          { label: "はい" },
          { label: "どうも" },
        ],
      },
      { type: "teach", label: "Phrase", jp: "ありがとうございます", romaji: "arigatō gozaimasu", en: "Thank you", note: "Polite. Casually: ありがとう." },
      { type: "teach", label: "Phrase", jp: "どういたしまして", romaji: "dōitashimashite", en: "You're welcome" },
      {
        type: "listen",
        audio: "ありがとうございます",
        prompt: "What did you hear?",
        options: [
          { label: "ありがとうございます", correct: true },
          { label: "どういたしまして" },
          { label: "ごめんなさい" },
        ],
      },
      { type: "teach", label: "Phrase", jp: "すみません", romaji: "sumimasen", en: "Excuse me / Sorry", note: "Also used to get someone's attention." },
      { type: "teach", label: "Phrase", jp: "ごめんなさい", romaji: "gomennasai", en: "I'm sorry", note: "A sincere apology. Casually: ごめん." },
      {
        type: "choice",
        prompt: "Someone thanks you. You reply…",
        options: [
          { label: "どういたしまして", correct: true },
          { label: "はい" },
          { label: "すみません" },
        ],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "はい", en: "Yes" },
          { jp: "いいえ", en: "No" },
          { jp: "ありがとう", en: "Thank you" },
          { jp: "すみません", en: "Excuse me" },
        ],
      },
      {
        type: "choice",
        prompt: "To get a server's attention, you say…",
        options: [
          { label: "すみません", correct: true },
          { label: "いいえ" },
          { label: "どういたしまして" },
        ],
      },
    ],
  },

  /* ---------------- A-3 Self-introduction ---------------- */
  {
    id: "a-3",
    cls: "A",
    number: 3,
    title: "Self-introduction",
    jpTitle: "自己紹介",
    xp: 15,
    coins: 15,
    steps: [
      {
        type: "intro",
        title: "Self-introduction",
        objectives: ["Say your name with です", "Use は to mark the topic", "Introduce yourself politely"],
      },
      { type: "teach", jp: "わたし", romaji: "watashi", en: "I / me" },
      { type: "teach", label: "Grammar", jp: "わたしは", romaji: "watashi wa", en: "I (topic: “as for me”)", note: "は after a word marks the topic. Written は, pronounced “wa”." },
      { type: "teach", label: "Grammar", jp: "です", romaji: "desu", en: "am / is / are (polite)", note: "Attach after a noun. e.g. がくせいです = (I) am a student." },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "I am Tanaka.",
        tiles: ["わたし", "は", "たなか", "です"],
        answer: ["わたし", "は", "たなか", "です"],
      },
      {
        type: "choice",
        prompt: "Which particle marks the topic (“as for…”)?",
        options: [
          { label: "は", correct: true },
          { label: "です" },
          { label: "から" },
          { label: "を" },
        ],
      },
      { type: "teach", label: "Grammar", jp: "アメリカから", romaji: "amerika kara", en: "from America", note: "place + から = “from (place)”." },
      {
        type: "choice",
        prompt: "“I'm from Japan” = わたしは にほん ___ きました",
        options: [
          { label: "から", correct: true },
          { label: "は" },
          { label: "です" },
        ],
      },
      { type: "teach", label: "Phrase", jp: "よろしくおねがいします", romaji: "yoroshiku onegaishimasu", en: "Nice to meet you (please treat me well)", note: "Said at the end of an introduction." },
      {
        type: "listen",
        audio: "よろしくおねがいします",
        prompt: "What did you hear?",
        options: [
          { label: "よろしくおねがいします", correct: true },
          { label: "はじめまして" },
          { label: "ありがとうございます" },
        ],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "わたし", en: "I / me" },
          { jp: "です", en: "am / is" },
          { jp: "は", en: "topic marker" },
          { jp: "から", en: "from" },
        ],
      },
    ],
  },

  /* ---------------- A-4 Numbers 1–10 ---------------- */
  {
    id: "a-4",
    cls: "A",
    number: 4,
    title: "Numbers 1–10",
    jpTitle: "数字 1〜10",
    xp: 15,
    coins: 15,
    steps: [
      {
        type: "intro",
        title: "Numbers 1–10",
        objectives: ["Count from 1 to 10", "Recognize each number by sound", "Recall numbers quickly"],
      },
      { type: "teach", label: "Number", jp: "いち", romaji: "ichi", en: "1 — one" },
      { type: "teach", label: "Number", jp: "に", romaji: "ni", en: "2 — two" },
      { type: "teach", label: "Number", jp: "さん", romaji: "san", en: "3 — three" },
      { type: "teach", label: "Numbers", jp: "よん、ご", romaji: "yon, go", en: "4, 5 — four, five", note: "Four is also し (shi)." },
      { type: "teach", label: "Numbers", jp: "ろく、なな、はち", romaji: "roku, nana, hachi", en: "6, 7, 8 — six, seven, eight", note: "Seven is also しち (shichi)." },
      { type: "teach", label: "Numbers", jp: "きゅう、じゅう", romaji: "kyū, jū", en: "9, 10 — nine, ten", note: "Nine is also く (ku)." },
      {
        type: "choice",
        prompt: "Which is “three”?",
        options: [
          { label: "さん", correct: true },
          { label: "に" },
          { label: "ご" },
          { label: "じゅう" },
        ],
      },
      {
        type: "listen",
        audio: "ご",
        prompt: "What number did you hear?",
        options: [
          { label: "5 — five", correct: true },
          { label: "2 — two" },
          { label: "10 — ten" },
        ],
      },
      {
        type: "choice",
        prompt: "How do you say “seven”?",
        options: [
          { label: "なな", correct: true },
          { label: "さん" },
          { label: "きゅう" },
          { label: "に" },
        ],
      },
      {
        type: "match",
        prompt: "Match the numbers",
        pairs: [
          { jp: "いち", en: "1" },
          { jp: "さん", en: "3" },
          { jp: "ご", en: "5" },
          { jp: "じゅう", en: "10" },
        ],
      },
      {
        type: "choice",
        prompt: "Counting to ten ends with…",
        options: [
          { label: "じゅう", correct: true },
          { label: "きゅう" },
          { label: "いち" },
        ],
      },
    ],
  },

  /* ---------------- A-5 This & that ---------------- */
  {
    id: "a-5",
    cls: "A",
    number: 5,
    title: "This & that",
    jpTitle: "これ・それ・あれ",
    xp: 15,
    coins: 15,
    steps: [
      {
        type: "intro",
        title: "This & that",
        objectives: ["Use これ / それ / あれ", "Ask “What is this?”", "Point things out naturally"],
      },
      { type: "teach", jp: "これ", romaji: "kore", en: "this (near me)" },
      { type: "teach", jp: "それ", romaji: "sore", en: "that (near you)" },
      { type: "teach", jp: "あれ", romaji: "are", en: "that (over there)" },
      {
        type: "choice",
        prompt: "Something near the listener (you) is…",
        options: [
          { label: "それ", correct: true },
          { label: "これ" },
          { label: "あれ" },
        ],
      },
      { type: "teach", label: "Grammar", jp: "なんですか", romaji: "nan desu ka", en: "What is it?", note: "なに / なん = “what”; か makes it a question." },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "What is this?",
        tiles: ["これ", "は", "なん", "ですか"],
        answer: ["これ", "は", "なん", "ですか"],
      },
      { type: "teach", jp: "ほん", romaji: "hon", en: "book" },
      {
        type: "listen",
        audio: "これはほんです",
        prompt: "What did you hear?",
        options: [
          { label: "これはほんです (This is a book.)", correct: true },
          { label: "それはなんですか" },
          { label: "あれはほんです" },
        ],
      },
      {
        type: "choice",
        prompt: "Ask: “What is that over there?”",
        options: [
          { label: "あれはなんですか", correct: true },
          { label: "これはなんですか" },
          { label: "それはほんです" },
        ],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "これ", en: "this" },
          { jp: "それ", en: "that (near you)" },
          { jp: "あれ", en: "that (over there)" },
          { jp: "ほん", en: "book" },
        ],
      },
    ],
  },

  /* ---------------- A-6 Days & time basics ---------------- */
  {
    id: "a-6",
    cls: "A",
    number: 6,
    title: "Days & time basics",
    jpTitle: "曜日と時間",
    xp: 15,
    coins: 15,
    steps: [
      {
        type: "intro",
        title: "Days & time basics",
        objectives: ["Say morning, noon and night", "Say today, tomorrow, yesterday", "Ask what time it is"],
      },
      { type: "teach", jp: "あさ", romaji: "asa", en: "morning" },
      { type: "teach", jp: "ひる", romaji: "hiru", en: "noon / daytime" },
      { type: "teach", jp: "よる", romaji: "yoru", en: "night" },
      {
        type: "choice",
        prompt: "Which means “night”?",
        options: [{ label: "よる", correct: true }, { label: "あさ" }, { label: "ひる" }],
      },
      { type: "teach", jp: "きょう", romaji: "kyō", en: "today" },
      { type: "teach", jp: "あした", romaji: "ashita", en: "tomorrow" },
      { type: "teach", jp: "きのう", romaji: "kinō", en: "yesterday" },
      {
        type: "listen",
        audio: "あした",
        prompt: "What did you hear?",
        options: [{ label: "あした (tomorrow)", correct: true }, { label: "きのう (yesterday)" }, { label: "きょう (today)" }],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "あさ", en: "morning" },
          { jp: "よる", en: "night" },
          { jp: "きょう", en: "today" },
          { jp: "あした", en: "tomorrow" },
        ],
      },
      { type: "teach", label: "Phrase", jp: "いまなんじですか", romaji: "ima nanji desu ka", en: "What time is it now?", note: "いま = now, なんじ = what time." },
      {
        type: "choice",
        prompt: "Ask “What time is it now?”",
        options: [{ label: "いまなんじですか", correct: true }, { label: "きょうはなんですか" }, { label: "あれはなんですか" }],
      },
    ],
  },

  /* ---------------- A-7 What is this? ---------------- */
  {
    id: "a-7",
    cls: "A",
    number: 7,
    title: "What is this?",
    jpTitle: "これは何ですか",
    xp: 15,
    coins: 15,
    steps: [
      {
        type: "intro",
        title: "What is this?",
        objectives: ["Name common objects", "Answer “What is this?”", "Use the “N は N です” pattern"],
      },
      { type: "teach", jp: "つくえ", romaji: "tsukue", en: "desk" },
      { type: "teach", jp: "いす", romaji: "isu", en: "chair" },
      { type: "teach", jp: "かばん", romaji: "kaban", en: "bag" },
      { type: "teach", jp: "とけい", romaji: "tokei", en: "clock / watch" },
      {
        type: "choice",
        prompt: "Which means “bag”?",
        options: [{ label: "かばん", correct: true }, { label: "いす" }, { label: "とけい" }, { label: "つくえ" }],
      },
      { type: "teach", label: "Grammar", jp: "これはかばんです", romaji: "kore wa kaban desu", en: "This is a bag.", note: "Answer pattern: [thing] は [noun] です." },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "This is a clock.",
        tiles: ["これ", "は", "とけい", "です"],
        answer: ["これ", "は", "とけい", "です"],
      },
      {
        type: "listen",
        audio: "これはいすです",
        prompt: "What did you hear?",
        options: [{ label: "これはいすです (This is a chair.)", correct: true }, { label: "これはつくえです" }, { label: "それはかばんです" }],
      },
      {
        type: "choice",
        prompt: "Answer “What is this?” — (it's a desk)",
        options: [{ label: "これはつくえです", correct: true }, { label: "これはいすです" }, { label: "あれはとけいです" }],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "つくえ", en: "desk" },
          { jp: "いす", en: "chair" },
          { jp: "かばん", en: "bag" },
          { jp: "とけい", en: "clock" },
        ],
      },
    ],
  },

  /* ---------------- A-8 Family ---------------- */
  {
    id: "a-8",
    cls: "A",
    number: 8,
    title: "Family",
    jpTitle: "家族",
    xp: 15,
    coins: 15,
    steps: [
      {
        type: "intro",
        title: "Family",
        objectives: ["Name your family members", "Know humble vs. polite forms", "Talk about your family"],
      },
      { type: "teach", jp: "かぞく", romaji: "kazoku", en: "family" },
      { type: "teach", jp: "ちち", romaji: "chichi", en: "(my) father", note: "Someone else's father: おとうさん." },
      { type: "teach", jp: "はは", romaji: "haha", en: "(my) mother", note: "Someone else's mother: おかあさん." },
      { type: "teach", jp: "あに", romaji: "ani", en: "(my) older brother" },
      { type: "teach", jp: "あね", romaji: "ane", en: "(my) older sister" },
      {
        type: "choice",
        prompt: "Talking about your OWN mother, you say…",
        options: [{ label: "はは", correct: true }, { label: "おかあさん" }, { label: "ちち" }],
      },
      { type: "teach", jp: "おとうと", romaji: "otōto", en: "(my) younger brother" },
      { type: "teach", jp: "いもうと", romaji: "imōto", en: "(my) younger sister" },
      {
        type: "listen",
        audio: "かぞく",
        prompt: "What did you hear?",
        options: [{ label: "かぞく (family)", correct: true }, { label: "ちち (father)" }, { label: "あね (older sister)" }],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "ちち", en: "father" },
          { jp: "はは", en: "mother" },
          { jp: "あに", en: "older brother" },
          { jp: "いもうと", en: "younger sister" },
        ],
      },
      {
        type: "choice",
        prompt: "Which means “family”?",
        options: [{ label: "かぞく", correct: true }, { label: "あに" }, { label: "おとうと" }],
      },
    ],
  },

  /* ---------------- A-9 Likes & dislikes ---------------- */
  {
    id: "a-9",
    cls: "A",
    number: 9,
    title: "Likes & dislikes",
    jpTitle: "好き・きらい",
    xp: 15,
    coins: 15,
    steps: [
      {
        type: "intro",
        title: "Likes & dislikes",
        objectives: ["Say what you like and dislike", "Use the が-particle with すき", "Ask what someone likes"],
      },
      { type: "teach", jp: "すき", romaji: "suki", en: "like / fond of" },
      { type: "teach", jp: "きらい", romaji: "kirai", en: "dislike" },
      { type: "teach", label: "Grammar", jp: "すしがすきです", romaji: "sushi ga suki desu", en: "I like sushi.", note: "Pattern: [thing] が すきです. The particle が marks what you like." },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "I like sushi.",
        tiles: ["すし", "が", "すき", "です"],
        answer: ["すし", "が", "すき", "です"],
      },
      { type: "teach", jp: "だいすき", romaji: "daisuki", en: "love / really like" },
      {
        type: "choice",
        prompt: "“I don't like natto” = なっとうが ___ です",
        options: [{ label: "きらい", correct: true }, { label: "すき" }, { label: "だいすき" }],
      },
      { type: "teach", label: "Phrase", jp: "なにがすきですか", romaji: "nani ga suki desu ka", en: "What do you like?" },
      {
        type: "listen",
        audio: "すしがすきです",
        prompt: "What did you hear?",
        options: [{ label: "すしがすきです (I like sushi.)", correct: true }, { label: "すしがきらいです" }, { label: "おちゃがすきです" }],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "すき", en: "like" },
          { jp: "きらい", en: "dislike" },
          { jp: "だいすき", en: "love" },
          { jp: "なに", en: "what" },
        ],
      },
      {
        type: "choice",
        prompt: "Ask “What do you like?”",
        options: [{ label: "なにがすきですか", correct: true }, { label: "これはなんですか" }, { label: "いまなんじですか" }],
      },
    ],
  },

  /* ---------------- A-10 Colors ---------------- */
  {
    id: "a-10",
    cls: "A",
    number: 10,
    title: "Colors",
    jpTitle: "色",
    xp: 15,
    coins: 15,
    steps: [
      {
        type: "intro",
        title: "Colors",
        objectives: ["Name common colors", "Recognize colors by sound", "Use a color to describe a noun"],
      },
      { type: "teach", jp: "いろ", romaji: "iro", en: "color" },
      { type: "teach", jp: "あか", romaji: "aka", en: "red" },
      { type: "teach", jp: "あお", romaji: "ao", en: "blue" },
      { type: "teach", jp: "しろ", romaji: "shiro", en: "white" },
      { type: "teach", label: "Colors", jp: "くろ、きいろ、みどり", romaji: "kuro, kiiro, midori", en: "black, yellow, green" },
      {
        type: "choice",
        prompt: "Which is “blue”?",
        options: [{ label: "あお", correct: true }, { label: "あか" }, { label: "しろ" }, { label: "くろ" }],
      },
      {
        type: "listen",
        audio: "しろ",
        prompt: "What color did you hear?",
        options: [{ label: "white", correct: true }, { label: "black" }, { label: "red" }],
      },
      {
        type: "match",
        prompt: "Match the colors",
        pairs: [
          { jp: "あか", en: "red" },
          { jp: "あお", en: "blue" },
          { jp: "きいろ", en: "yellow" },
          { jp: "みどり", en: "green" },
        ],
      },
      { type: "teach", label: "Grammar", jp: "あかいはな", romaji: "akai hana", en: "a red flower", note: "Add い to a color to describe a noun: あかい = red (before nouns). The noun form is あか." },
      {
        type: "choice",
        prompt: "“a red flower” = ___ はな",
        options: [{ label: "あかい", correct: true }, { label: "あお" }, { label: "くろ" }],
      },
    ],
  },
];
