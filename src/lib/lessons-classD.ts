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

  /* ---------------- D-66 Onomatopoeia in speech ---------------- */
  {
    id: "d-66",
    cls: "D",
    number: 66,
    title: "Onomatopoeia in speech",
    jpTitle: "会話の擬音語",
    xp: 18,
    coins: 18,
    steps: [
      {
        type: "intro",
        title: "Onomatopoeia in speech",
        objectives: ["Use common giongo/gitaigo", "Describe feelings vividly", "Sound natural in chat"],
      },
      { type: "teach", label: "Onomatopoeia", jp: "ぺこぺこ", romaji: "pekopeko", en: "very hungry", note: "おなかがぺこぺこ = starving." },
      { type: "teach", label: "Onomatopoeia", jp: "どきどき", romaji: "dokidoki", en: "heart pounding (nervous/excited)" },
      { type: "teach", label: "Onomatopoeia", jp: "わくわく", romaji: "wakuwaku", en: "excited / can't wait" },
      { type: "teach", label: "Onomatopoeia", jp: "ぐっすり", romaji: "gussuri", en: "soundly (sleep)" },
      {
        type: "choice",
        prompt: "Which means “starving / hungry”?",
        options: [{ label: "ぺこぺこ", correct: true }, { label: "どきどき" }, { label: "ぐっすり" }],
      },
      { type: "teach", label: "Onomatopoeia", jp: "ぺらぺら", romaji: "perapera", en: "fluently (speaking)" },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "I'm starving.",
        tiles: ["おなかが", "ぺこぺこ", "です"],
        answer: ["おなかが", "ぺこぺこ", "です"],
      },
      {
        type: "listen",
        audio: "どきどきする",
        prompt: "What did you hear?",
        options: [{ label: "どきどきする (heart pounding)", correct: true }, { label: "わくわくする" }, { label: "ぐっすりねる" }],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "ぺこぺこ", en: "hungry" },
          { jp: "どきどき", en: "heart pounding" },
          { jp: "わくわく", en: "excited" },
          { jp: "ぐっすり", en: "soundly" },
        ],
      },
      {
        type: "choice",
        prompt: "“speaks fluently” = にほんごが ___",
        options: [{ label: "ぺらぺら", correct: true }, { label: "ぺこぺこ" }, { label: "にこにこ" }],
      },
    ],
  },

  /* ---------------- D-67 Respectful keigo ---------------- */
  {
    id: "d-67",
    cls: "D",
    number: 67,
    title: "Respectful keigo",
    jpTitle: "尊敬語",
    xp: 18,
    coins: 18,
    steps: [
      {
        type: "intro",
        title: "Respectful keigo (尊敬語)",
        objectives: ["Raise the other person's actions", "Learn key respectful verbs", "Use お〜になります"],
      },
      { type: "teach", label: "Keigo", jp: "いらっしゃいます", romaji: "irasshaimasu", en: "(respectful) be / come / go", note: "Respectful form of いる / くる / いく." },
      { type: "teach", label: "Keigo", jp: "めしあがります", romaji: "meshiagarimasu", en: "(respectful) eat / drink", note: "Respectful form of たべる / のむ." },
      { type: "teach", label: "Keigo", jp: "ごらんになります", romaji: "goran ni narimasu", en: "(respectful) see / look", note: "Respectful form of みる." },
      { type: "teach", label: "Grammar", jp: "おかきになります", romaji: "okaki ni narimasu", en: "(respectfully) writes", note: "お + verb-stem + になります = respectful pattern." },
      {
        type: "choice",
        prompt: "Respectful “eat”:",
        options: [{ label: "めしあがります", correct: true }, { label: "いただきます" }, { label: "たべます" }],
      },
      { type: "teach", label: "Phrase", jp: "おなまえは", romaji: "onamae wa", en: "your name (politely)" },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "What is your name?",
        tiles: ["おなまえは", "なん", "ですか"],
        answer: ["おなまえは", "なん", "ですか"],
      },
      {
        type: "listen",
        audio: "めしあがりますか",
        prompt: "What did you hear?",
        options: [{ label: "めしあがりますか (Will you eat? — respectful)", correct: true }, { label: "いらっしゃいます" }, { label: "ごらんになります" }],
      },
      {
        type: "match",
        prompt: "Match the respectful verbs",
        pairs: [
          { jp: "いらっしゃる", en: "be/come (resp.)" },
          { jp: "めしあがる", en: "eat (resp.)" },
          { jp: "ごらんになる", en: "see (resp.)" },
          { jp: "お〜になる", en: "respectful pattern" },
        ],
      },
      {
        type: "choice",
        prompt: "Respectful “see / look”:",
        options: [{ label: "ごらんになります", correct: true }, { label: "めしあがります" }, { label: "はいけんします" }],
      },
    ],
  },

  /* ---------------- D-68 Humble keigo ---------------- */
  {
    id: "d-68",
    cls: "D",
    number: 68,
    title: "Humble keigo",
    jpTitle: "謙譲語",
    xp: 18,
    coins: 18,
    steps: [
      {
        type: "intro",
        title: "Humble keigo (謙譲語)",
        objectives: ["Lower your own actions", "Learn key humble verbs", "Introduce yourself humbly"],
      },
      { type: "teach", label: "Keigo", jp: "いたします", romaji: "itashimasu", en: "(humble) do", note: "Humble form of します." },
      { type: "teach", label: "Keigo", jp: "いただきます", romaji: "itadakimasu", en: "(humble) receive / eat", note: "Humble form of もらう / たべる." },
      { type: "teach", label: "Keigo", jp: "まいります", romaji: "mairimasu", en: "(humble) go / come", note: "Humble form of いく / くる." },
      { type: "teach", label: "Keigo", jp: "もうします", romaji: "mōshimasu", en: "(humble) say / be called", note: "〜ともうします = “my name is ~” (humble)." },
      {
        type: "choice",
        prompt: "Humble “do”:",
        options: [{ label: "いたします", correct: true }, { label: "なさいます" }, { label: "します" }],
      },
      { type: "teach", label: "Grammar", jp: "おもちします", romaji: "omochi shimasu", en: "(humbly) I'll bring it", note: "お + verb-stem + します = humble pattern." },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "My name is Tanaka. (humble)",
        tiles: ["たなかと", "もうし", "ます"],
        answer: ["たなかと", "もうし", "ます"],
      },
      {
        type: "listen",
        audio: "たなかともうします",
        prompt: "What did you hear?",
        options: [{ label: "たなかともうします (My name is Tanaka.)", correct: true }, { label: "まいります" }, { label: "いたします" }],
      },
      {
        type: "match",
        prompt: "Match the humble verbs",
        pairs: [
          { jp: "いたす", en: "do (humble)" },
          { jp: "いただく", en: "receive (humble)" },
          { jp: "まいる", en: "go (humble)" },
          { jp: "もうす", en: "say (humble)" },
        ],
      },
      {
        type: "choice",
        prompt: "Humble “go / come”:",
        options: [{ label: "まいります", correct: true }, { label: "いらっしゃいます" }, { label: "いきます" }],
      },
    ],
  },

  /* ---------------- D-69 Business emails ---------------- */
  {
    id: "d-69",
    cls: "D",
    number: 69,
    title: "Business emails",
    jpTitle: "ビジネスメール",
    xp: 18,
    coins: 18,
    steps: [
      {
        type: "intro",
        title: "Business emails",
        objectives: ["Open & close formally", "Reference a subject", "Make a polite request"],
      },
      { type: "teach", label: "Phrase", jp: "おせわになっております", romaji: "osewa ni natte orimasu", en: "Thank you for your continued support", note: "Standard email opener." },
      { type: "teach", label: "Phrase", jp: "よろしくおねがいいたします", romaji: "yoroshiku onegai itashimasu", en: "Thank you in advance (formal closer)" },
      { type: "teach", label: "Phrase", jp: "かくにんおねがいします", romaji: "kakunin onegai shimasu", en: "Please confirm" },
      { type: "teach", jp: "てんぷ", romaji: "tenpu", en: "attachment", note: "ファイルをてんぷします = I attach the file." },
      {
        type: "choice",
        prompt: "Standard email opener:",
        options: [{ label: "おせわになっております", correct: true }, { label: "よろしくおねがいいたします" }, { label: "かくにんおねがいします" }],
      },
      { type: "teach", label: "Phrase", jp: "かいぎのけん", romaji: "kaigi no ken", en: "regarding the meeting", note: "〜のけん = “the matter of ~”." },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "Please confirm the attachment.",
        tiles: ["てんぷを", "かくにん", "おねがいします"],
        answer: ["てんぷを", "かくにん", "おねがいします"],
      },
      {
        type: "listen",
        audio: "おせわになっております",
        prompt: "What did you hear?",
        options: [{ label: "おせわになっております (Thank you for your support.)", correct: true }, { label: "よろしくおねがいいたします" }, { label: "かくにんおねがいします" }],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "おせわになっております", en: "thank you for support" },
          { jp: "のけん", en: "regarding" },
          { jp: "てんぷ", en: "attachment" },
          { jp: "かくにん", en: "confirm" },
        ],
      },
      {
        type: "choice",
        prompt: "Formal closing line:",
        options: [{ label: "よろしくおねがいいたします", correct: true }, { label: "おせわになっております" }, { label: "てんぷ" }],
      },
    ],
  },

  /* ---------------- D-70 News & current events ---------------- */
  {
    id: "d-70",
    cls: "D",
    number: 70,
    title: "News & current events",
    jpTitle: "ニュースと時事",
    xp: 18,
    coins: 18,
    steps: [
      {
        type: "intro",
        title: "News & current events",
        objectives: ["Know news vocabulary", "Cite a source (〜によると)", "Talk about a topic (〜について)"],
      },
      { type: "teach", jp: "ニュース", romaji: "nyūsu", en: "news" },
      { type: "teach", jp: "せいじ", romaji: "seiji", en: "politics", note: "けいざい = economy." },
      { type: "teach", jp: "じけん", romaji: "jiken", en: "incident / case" },
      { type: "teach", label: "Grammar", jp: "ニュースによると", romaji: "nyūsu ni yoru to", en: "according to the news", note: "〜によると = “according to ~”." },
      {
        type: "choice",
        prompt: "“according to ~” = ニュース ___",
        options: [{ label: "によると", correct: true }, { label: "について" }, { label: "のけん" }],
      },
      { type: "teach", label: "Grammar", jp: "せいじについて", romaji: "seiji ni tsuite", en: "about politics", note: "〜について = “about / concerning ~”." },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "Let's talk about the economy.",
        tiles: ["けいざいに", "ついて", "はなしましょう"],
        answer: ["けいざいに", "ついて", "はなしましょう"],
      },
      {
        type: "listen",
        audio: "ニュースによると",
        prompt: "What did you hear?",
        options: [{ label: "ニュースによると (according to the news)", correct: true }, { label: "せいじについて" }, { label: "さいきんのじけん" }],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "ニュース", en: "news" },
          { jp: "せいじ", en: "politics" },
          { jp: "けいざい", en: "economy" },
          { jp: "じけん", en: "incident" },
        ],
      },
      {
        type: "choice",
        prompt: "“about politics” = せいじ ___",
        options: [{ label: "について", correct: true }, { label: "によると" }, { label: "のけん" }],
      },
    ],
  },
];

