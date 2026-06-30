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

  /* ---------------- A-11 Food & drink basics ---------------- */
  {
    id: "a-11",
    cls: "A",
    number: 11,
    title: "Food & drink basics",
    jpTitle: "食べ物・飲み物",
    xp: 15,
    coins: 15,
    steps: [
      {
        type: "intro",
        title: "Food & drink basics",
        objectives: ["Name everyday food & drink", "Use eat (たべます) and drink (のみます)", "Say what you eat and drink"],
      },
      { type: "teach", jp: "たべもの", romaji: "tabemono", en: "food" },
      { type: "teach", jp: "のみもの", romaji: "nomimono", en: "drink" },
      { type: "teach", jp: "ごはん", romaji: "gohan", en: "rice / meal" },
      { type: "teach", jp: "みず", romaji: "mizu", en: "water" },
      { type: "teach", jp: "おちゃ", romaji: "ocha", en: "tea" },
      {
        type: "choice",
        prompt: "Which means “water”?",
        options: [{ label: "みず", correct: true }, { label: "おちゃ" }, { label: "ごはん" }],
      },
      { type: "teach", label: "Grammar", jp: "たべます", romaji: "tabemasu", en: "eat (polite)", note: "ごはんを たべます = (I) eat rice. を marks the object." },
      { type: "teach", label: "Grammar", jp: "のみます", romaji: "nomimasu", en: "drink (polite)" },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "I drink tea.",
        tiles: ["おちゃ", "を", "のみます"],
        answer: ["おちゃ", "を", "のみます"],
      },
      {
        type: "listen",
        audio: "みずをのみます",
        prompt: "What did you hear?",
        options: [{ label: "みずをのみます (I drink water.)", correct: true }, { label: "おちゃをのみます" }, { label: "ごはんをたべます" }],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "たべもの", en: "food" },
          { jp: "のみもの", en: "drink" },
          { jp: "みず", en: "water" },
          { jp: "おちゃ", en: "tea" },
        ],
      },
    ],
  },

  /* ---------------- A-12 Basic adjectives ---------------- */
  {
    id: "a-12",
    cls: "A",
    number: 12,
    title: "Basic adjectives",
    jpTitle: "基本の形容詞",
    xp: 15,
    coins: 15,
    steps: [
      {
        type: "intro",
        title: "Basic adjectives",
        objectives: ["Describe things (big, small…)", "Learn common opposites", "Put an adjective before a noun"],
      },
      { type: "teach", jp: "おおきい", romaji: "ōkii", en: "big" },
      { type: "teach", jp: "ちいさい", romaji: "chiisai", en: "small" },
      { type: "teach", jp: "あつい", romaji: "atsui", en: "hot" },
      { type: "teach", jp: "さむい", romaji: "samui", en: "cold (weather)", note: "For cold objects/drinks use つめたい." },
      {
        type: "choice",
        prompt: "Which means “big”?",
        options: [{ label: "おおきい", correct: true }, { label: "ちいさい" }, { label: "さむい" }, { label: "あつい" }],
      },
      { type: "teach", jp: "たかい", romaji: "takai", en: "expensive / tall" },
      { type: "teach", jp: "やすい", romaji: "yasui", en: "cheap" },
      { type: "teach", label: "Grammar", jp: "おおきいいぬ", romaji: "ōkii inu", en: "a big dog", note: "i-adjectives go directly before the noun." },
      {
        type: "listen",
        audio: "たかい",
        prompt: "What did you hear?",
        options: [{ label: "たかい (expensive)", correct: true }, { label: "やすい (cheap)" }, { label: "ちいさい (small)" }],
      },
      {
        type: "match",
        prompt: "Match the opposites & words",
        pairs: [
          { jp: "おおきい", en: "big" },
          { jp: "ちいさい", en: "small" },
          { jp: "あつい", en: "hot" },
          { jp: "やすい", en: "cheap" },
        ],
      },
      {
        type: "choice",
        prompt: "Which means “expensive”?",
        options: [{ label: "たかい", correct: true }, { label: "やすい" }, { label: "おおきい" }],
      },
    ],
  },

  /* ---------------- A-13 Where is it? ---------------- */
  {
    id: "a-13",
    cls: "A",
    number: 13,
    title: "Where is it?",
    jpTitle: "場所をたずねる",
    xp: 15,
    coins: 15,
    steps: [
      {
        type: "intro",
        title: "Where is it?",
        objectives: ["Use here / there / over there", "Ask “Where is …?” with どこ", "Say on / under / inside"],
      },
      { type: "teach", jp: "ここ", romaji: "koko", en: "here" },
      { type: "teach", jp: "そこ", romaji: "soko", en: "there (near you)" },
      { type: "teach", jp: "あそこ", romaji: "asoko", en: "over there" },
      { type: "teach", label: "Grammar", jp: "どこ", romaji: "doko", en: "where", note: "Question word for places: トイレは どこですか = Where is the toilet?" },
      {
        type: "choice",
        prompt: "Ask “Where is the station?” = えきは ___ ですか",
        options: [{ label: "どこ", correct: true }, { label: "なに" }, { label: "だれ" }],
      },
      { type: "teach", jp: "うえ", romaji: "ue", en: "on / above" },
      { type: "teach", jp: "した", romaji: "shita", en: "under / below" },
      { type: "teach", jp: "なか", romaji: "naka", en: "inside" },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "Where is the toilet?",
        tiles: ["トイレ", "は", "どこ", "ですか"],
        answer: ["トイレ", "は", "どこ", "ですか"],
      },
      {
        type: "listen",
        audio: "トイレはどこですか",
        prompt: "What did you hear?",
        options: [{ label: "トイレはどこですか (Where is the toilet?)", correct: true }, { label: "えきはどこですか" }, { label: "これはなんですか" }],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "ここ", en: "here" },
          { jp: "あそこ", en: "over there" },
          { jp: "うえ", en: "on / above" },
          { jp: "なか", en: "inside" },
        ],
      },
    ],
  },

  /* ---------------- A-14 Everyday verbs ---------------- */
  {
    id: "a-14",
    cls: "A",
    number: 14,
    title: "Everyday verbs",
    jpTitle: "毎日の動詞",
    xp: 15,
    coins: 15,
    steps: [
      {
        type: "intro",
        title: "Everyday verbs",
        objectives: ["Learn common polite verbs", "Use を to mark the object", "Make simple action sentences"],
      },
      { type: "teach", jp: "いきます", romaji: "ikimasu", en: "go" },
      { type: "teach", jp: "きます", romaji: "kimasu", en: "come" },
      { type: "teach", jp: "みます", romaji: "mimasu", en: "see / watch" },
      { type: "teach", jp: "ききます", romaji: "kikimasu", en: "listen / ask" },
      { type: "teach", jp: "よみます", romaji: "yomimasu", en: "read" },
      {
        type: "choice",
        prompt: "Which means “go”?",
        options: [{ label: "いきます", correct: true }, { label: "きます" }, { label: "みます" }, { label: "よみます" }],
      },
      { type: "teach", label: "Grammar", jp: "ほんをよみます", romaji: "hon o yomimasu", en: "(I) read a book", note: "object + を + verb." },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "I watch TV.",
        tiles: ["テレビ", "を", "みます"],
        answer: ["テレビ", "を", "みます"],
      },
      {
        type: "listen",
        audio: "おんがくをききます",
        prompt: "What did you hear?",
        options: [{ label: "おんがくをききます (I listen to music.)", correct: true }, { label: "テレビをみます" }, { label: "ほんをよみます" }],
      },
      {
        type: "match",
        prompt: "Match the verbs",
        pairs: [
          { jp: "いきます", en: "go" },
          { jp: "きます", en: "come" },
          { jp: "みます", en: "watch" },
          { jp: "よみます", en: "read" },
        ],
      },
    ],
  },

  /* ---------------- A-15 Counting things ---------------- */
  {
    id: "a-15",
    cls: "A",
    number: 15,
    title: "Counting things",
    jpTitle: "ものの数え方",
    xp: 15,
    coins: 15,
    steps: [
      {
        type: "intro",
        title: "Counting things",
        objectives: ["Count objects with 〜つ", "Meet common counters", "Ask “how many?”"],
      },
      { type: "teach", label: "Counters", jp: "ひとつ、ふたつ、みっつ", romaji: "hitotsu, futatsu, mittsu", en: "one, two, three (things)", note: "General counter 〜つ for objects." },
      { type: "teach", label: "Counter", jp: "にまい", romaji: "ni-mai", en: "two (flat things)", note: "〜まい counts flat things: paper, plates, shirts." },
      { type: "teach", label: "Counter", jp: "さんぼん", romaji: "san-bon", en: "three (long things)", note: "〜ほん counts long things: bottles, pens (sound changes: いっぽん, さんぼん)." },
      { type: "teach", label: "Counter", jp: "いっぴき", romaji: "ippiki", en: "one (small animal)", note: "〜ひき counts small animals: cats, dogs." },
      {
        type: "choice",
        prompt: "The counter for flat things (paper) is…",
        options: [{ label: "〜まい", correct: true }, { label: "〜ほん" }, { label: "〜ひき" }],
      },
      { type: "teach", label: "Phrase", jp: "いくつですか", romaji: "ikutsu desu ka", en: "How many? (general)" },
      {
        type: "listen",
        audio: "ふたつ",
        prompt: "How many did you hear?",
        options: [{ label: "2 — two", correct: true }, { label: "1 — one" }, { label: "3 — three" }],
      },
      {
        type: "match",
        prompt: "Match the counters",
        pairs: [
          { jp: "ひとつ", en: "one (thing)" },
          { jp: "〜まい", en: "flat things" },
          { jp: "〜ほん", en: "long things" },
          { jp: "〜ひき", en: "small animals" },
        ],
      },
      {
        type: "choice",
        prompt: "The counter for bottles & pens is…",
        options: [{ label: "〜ほん", correct: true }, { label: "〜まい" }, { label: "〜ひき" }],
      },
    ],
  },

  /* ---------------- A-16 The calendar ---------------- */
  {
    id: "a-16",
    cls: "A",
    number: 16,
    title: "The calendar",
    jpTitle: "カレンダー",
    xp: 15,
    coins: 15,
    steps: [
      {
        type: "intro",
        title: "The calendar",
        objectives: ["Say the days of the week", "Ask what day it is", "Say this week / next week"],
      },
      { type: "teach", label: "Days", jp: "げつようび、かようび、すいようび", romaji: "getsu-yōbi, ka-yōbi, sui-yōbi", en: "Monday, Tuesday, Wednesday" },
      { type: "teach", label: "Days", jp: "もくようび、きんようび", romaji: "moku-yōbi, kin-yōbi", en: "Thursday, Friday" },
      { type: "teach", label: "Days", jp: "どようび、にちようび", romaji: "do-yōbi, nichi-yōbi", en: "Saturday, Sunday" },
      {
        type: "choice",
        prompt: "Which is “Sunday”?",
        options: [{ label: "にちようび", correct: true }, { label: "どようび" }, { label: "げつようび" }],
      },
      { type: "teach", label: "Phrase", jp: "きょうはなんようびですか", romaji: "kyō wa nan-yōbi desu ka", en: "What day is it today?", note: "なんようび = what day of the week." },
      { type: "teach", jp: "こんしゅう", romaji: "konshū", en: "this week" },
      { type: "teach", jp: "らいしゅう", romaji: "raishū", en: "next week" },
      {
        type: "listen",
        audio: "どようび",
        prompt: "What did you hear?",
        options: [{ label: "Saturday", correct: true }, { label: "Sunday" }, { label: "Monday" }],
      },
      {
        type: "match",
        prompt: "Match the days",
        pairs: [
          { jp: "げつようび", en: "Monday" },
          { jp: "きんようび", en: "Friday" },
          { jp: "どようび", en: "Saturday" },
          { jp: "にちようび", en: "Sunday" },
        ],
      },
      {
        type: "choice",
        prompt: "Ask “What day is it today?”",
        options: [{ label: "きょうはなんようびですか", correct: true }, { label: "いまなんじですか" }, { label: "これはなんですか" }],
      },
    ],
  },

  /* ---------------- A-17 Weather ---------------- */
  {
    id: "a-17",
    cls: "A",
    number: 17,
    title: "Weather",
    jpTitle: "天気",
    xp: 15,
    coins: 15,
    steps: [
      {
        type: "intro",
        title: "Weather",
        objectives: ["Name kinds of weather", "Say “Today it's …”", "Understand a weather sentence"],
      },
      { type: "teach", jp: "てんき", romaji: "tenki", en: "weather" },
      { type: "teach", jp: "はれ", romaji: "hare", en: "sunny / clear" },
      { type: "teach", jp: "あめ", romaji: "ame", en: "rain" },
      { type: "teach", jp: "くもり", romaji: "kumori", en: "cloudy" },
      { type: "teach", jp: "ゆき", romaji: "yuki", en: "snow" },
      {
        type: "choice",
        prompt: "Which means “rain”?",
        options: [{ label: "あめ", correct: true }, { label: "ゆき" }, { label: "はれ" }, { label: "くもり" }],
      },
      { type: "teach", label: "Grammar", jp: "きょうははれです", romaji: "kyō wa hare desu", en: "Today it's sunny.", note: "weather word + です." },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "Today it's rainy.",
        tiles: ["きょう", "は", "あめ", "です"],
        answer: ["きょう", "は", "あめ", "です"],
      },
      {
        type: "listen",
        audio: "ゆき",
        prompt: "What weather did you hear?",
        options: [{ label: "snow", correct: true }, { label: "rain" }, { label: "sunny" }],
      },
      {
        type: "match",
        prompt: "Match the weather",
        pairs: [
          { jp: "てんき", en: "weather" },
          { jp: "はれ", en: "sunny" },
          { jp: "あめ", en: "rain" },
          { jp: "ゆき", en: "snow" },
        ],
      },
    ],
  },

  /* ---------------- A-18 Shopping basics ---------------- */
  {
    id: "a-18",
    cls: "A",
    number: 18,
    title: "Shopping basics",
    jpTitle: "買い物の基本",
    xp: 15,
    coins: 15,
    steps: [
      {
        type: "intro",
        title: "Shopping basics",
        objectives: ["Ask how much something is", "Ask for something with ください", "Talk about price in yen"],
      },
      { type: "teach", jp: "いくら", romaji: "ikura", en: "how much (price)" },
      { type: "teach", label: "Phrase", jp: "これはいくらですか", romaji: "kore wa ikura desu ka", en: "How much is this?" },
      { type: "teach", jp: "ください", romaji: "kudasai", en: "please (give me)" },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "This one, please.",
        tiles: ["これ", "を", "ください"],
        answer: ["これ", "を", "ください"],
      },
      { type: "teach", jp: "えん", romaji: "en", en: "yen (¥)" },
      { type: "teach", jp: "かいます", romaji: "kaimasu", en: "buy" },
      {
        type: "choice",
        prompt: "Ask “How much is this?”",
        options: [{ label: "これはいくらですか", correct: true }, { label: "これはなんですか" }, { label: "いまなんじですか" }],
      },
      {
        type: "listen",
        audio: "これはいくらですか",
        prompt: "What did you hear?",
        options: [{ label: "これはいくらですか (How much is this?)", correct: true }, { label: "これをください" }, { label: "あれはなんですか" }],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "いくら", en: "how much" },
          { jp: "えん", en: "yen" },
          { jp: "ください", en: "please give" },
          { jp: "かいます", en: "buy" },
        ],
      },
      {
        type: "choice",
        prompt: "“1000 yen” = せん ___",
        options: [{ label: "えん", correct: true }, { label: "いくら" }, { label: "ください" }],
      },
    ],
  },

  /* ---------------- A-19 Asking directions ---------------- */
  {
    id: "a-19",
    cls: "A",
    number: 19,
    title: "Asking directions",
    jpTitle: "道をたずねる",
    xp: 15,
    coins: 15,
    steps: [
      {
        type: "intro",
        title: "Asking directions",
        objectives: ["Say right, left, straight", "Ask where a place is", "Understand simple directions"],
      },
      { type: "teach", jp: "みぎ", romaji: "migi", en: "right" },
      { type: "teach", jp: "ひだり", romaji: "hidari", en: "left" },
      { type: "teach", jp: "まっすぐ", romaji: "massugu", en: "straight" },
      { type: "teach", label: "Phrase", jp: "えきはどこですか", romaji: "eki wa doko desu ka", en: "Where is the station?" },
      {
        type: "choice",
        prompt: "Which means “left”?",
        options: [{ label: "ひだり", correct: true }, { label: "みぎ" }, { label: "まっすぐ" }],
      },
      { type: "teach", label: "Phrase", jp: "みぎにまがってください", romaji: "migi ni magatte kudasai", en: "Please turn right", note: "〜てください = “please do ~”." },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "Please go straight.",
        tiles: ["まっすぐ", "いって", "ください"],
        answer: ["まっすぐ", "いって", "ください"],
      },
      {
        type: "listen",
        audio: "みぎにまがってください",
        prompt: "What did you hear?",
        options: [{ label: "みぎにまがってください (Turn right.)", correct: true }, { label: "ひだりにまがってください" }, { label: "まっすぐいってください" }],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "みぎ", en: "right" },
          { jp: "ひだり", en: "left" },
          { jp: "まっすぐ", en: "straight" },
          { jp: "えき", en: "station" },
        ],
      },
      {
        type: "choice",
        prompt: "Tell someone to turn right",
        options: [{ label: "みぎにまがってください", correct: true }, { label: "ひだりにまがってください" }, { label: "まっすぐいってください" }],
      },
    ],
  },

  /* ---------------- A-20 Review: simple talk ---------------- */
  {
    id: "a-20",
    cls: "A",
    number: 20,
    title: "Review: simple talk",
    jpTitle: "復習：かんたん会話",
    xp: 20,
    coins: 20,
    steps: [
      {
        type: "intro",
        title: "Review: simple talk",
        objectives: ["Review greetings & basics", "Combine what you've learned", "Hold a simple exchange"],
      },
      {
        type: "choice",
        prompt: "Greet someone in the morning",
        options: [{ label: "おはようございます", correct: true }, { label: "こんばんは" }, { label: "おやすみなさい" }],
      },
      {
        type: "choice",
        prompt: "Say “thank you”",
        options: [{ label: "ありがとうございます", correct: true }, { label: "すみません" }, { label: "どういたしまして" }],
      },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "I'm Tanaka.",
        tiles: ["わたし", "は", "たなか", "です"],
        answer: ["わたし", "は", "たなか", "です"],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "こんにちは", en: "Hello" },
          { jp: "ありがとう", en: "Thank you" },
          { jp: "すき", en: "like" },
          { jp: "みず", en: "water" },
        ],
      },
      {
        type: "choice",
        prompt: "Ask “What is this?”",
        options: [{ label: "これはなんですか", correct: true }, { label: "これはいくらですか" }, { label: "いまなんじですか" }],
      },
      {
        type: "listen",
        audio: "これはいくらですか",
        prompt: "What did you hear?",
        options: [{ label: "これはいくらですか (How much is this?)", correct: true }, { label: "これはなんですか" }, { label: "いまなんじですか" }],
      },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "I like sushi.",
        tiles: ["すし", "が", "すき", "です"],
        answer: ["すし", "が", "すき", "です"],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "みぎ", en: "right" },
          { jp: "あか", en: "red" },
          { jp: "あに", en: "older brother" },
          { jp: "よる", en: "night" },
        ],
      },
      { type: "teach", label: "Phrase", jp: "またね", romaji: "mata ne", en: "See you! (casual)", note: "A casual goodbye to friends." },
      {
        type: "choice",
        prompt: "A casual goodbye to a friend",
        options: [{ label: "またね", correct: true }, { label: "はじめまして" }, { label: "おはよう" }],
      },
    ],
  },
];
