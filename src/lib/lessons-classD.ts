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

  /* ---------------- D-71 Reading short articles ---------------- */
  {
    id: "d-71",
    cls: "D",
    number: 71,
    title: "Reading short articles",
    jpTitle: "短い記事を読む",
    xp: 18,
    coins: 18,
    steps: [
      {
        type: "intro",
        title: "Reading short articles",
        objectives: ["Know reading vocabulary", "Use 〜によって & 〜という", "Recognize written-style である"],
      },
      { type: "teach", jp: "きじ", romaji: "kiji", en: "article" },
      { type: "teach", jp: "みだし", romaji: "midashi", en: "headline" },
      { type: "teach", label: "Grammar", jp: "ちいきによって", romaji: "chiiki ni yotte", en: "depending on the region", note: "〜によって = “depending on / by”." },
      { type: "teach", label: "Grammar", jp: "である", romaji: "de aru", en: "is (written/formal style)", note: "〜である = formal/written form of です/だ." },
      {
        type: "choice",
        prompt: "“depending on the region” = ちいき ___",
        options: [{ label: "によって", correct: true }, { label: "について" }, { label: "によると" }],
      },
      { type: "teach", label: "Grammar", jp: "じこという", romaji: "jiko to iu", en: "called / named (an accident)", note: "〜という = “called / that says ~”." },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "It depends on the person.",
        tiles: ["ひとに", "よって", "ちがいます"],
        answer: ["ひとに", "よって", "ちがいます"],
      },
      {
        type: "listen",
        audio: "きじをよみます",
        prompt: "What did you hear?",
        options: [{ label: "きじをよみます (I read an article.)", correct: true }, { label: "みだしをみます" }, { label: "じじつである" }],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "きじ", en: "article" },
          { jp: "みだし", en: "headline" },
          { jp: "によって", en: "depending on" },
          { jp: "である", en: "written です" },
        ],
      },
      {
        type: "choice",
        prompt: "Written-style “is / da”:",
        options: [{ label: "である", correct: true }, { label: "という" }, { label: "によって" }],
      },
    ],
  },

  /* ---------------- D-72 Subtle feelings ---------------- */
  {
    id: "d-72",
    cls: "D",
    number: 72,
    title: "Subtle feelings",
    jpTitle: "微妙な気持ち",
    xp: 18,
    coins: 18,
    steps: [
      {
        type: "intro",
        title: "Subtle feelings",
        objectives: ["Wonder to yourself (〜かな)", "Say “iffy / so-so”", "Use 〜気がする"],
      },
      { type: "teach", label: "Grammar", jp: "いこうかな", romaji: "ikō kana", en: "maybe I'll go (wondering)", note: "〜かな = “I wonder / maybe” (to oneself)." },
      { type: "teach", jp: "びみょう", romaji: "bimyō", en: "iffy / so-so / subtle", note: "A soft, vague negative." },
      { type: "teach", jp: "なんとなく", romaji: "nantonaku", en: "somehow / vaguely" },
      { type: "teach", label: "Grammar", jp: "わすれたきがする", romaji: "wasureta ki ga suru", en: "I have a feeling I forgot", note: "〜きがする = “have a feeling that ~”." },
      {
        type: "choice",
        prompt: "“so-so / iffy” =",
        options: [{ label: "びみょう", correct: true }, { label: "なんとなく" }, { label: "いこうかな" }],
      },
      { type: "teach", label: "Phrase", jp: "なやんでいます", romaji: "nayande imasu", en: "I'm troubled / can't decide" },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "I have a feeling I forgot.",
        tiles: ["わすれた", "きが", "する"],
        answer: ["わすれた", "きが", "する"],
      },
      {
        type: "listen",
        audio: "びみょうですね",
        prompt: "What did you hear?",
        options: [{ label: "びみょうですね (It's kind of iffy.)", correct: true }, { label: "なんとなく" }, { label: "なやんでいます" }],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "かな", en: "I wonder" },
          { jp: "びみょう", en: "iffy" },
          { jp: "なんとなく", en: "somehow" },
          { jp: "きがする", en: "have a feeling" },
        ],
      },
      {
        type: "choice",
        prompt: "“I wonder if I'll go” = いこう ___",
        options: [{ label: "かな", correct: true }, { label: "きがする" }, { label: "びみょう" }],
      },
    ],
  },

  /* ---------------- D-73 Hypothetical & regret ---------------- */
  {
    id: "d-73",
    cls: "D",
    number: 73,
    title: "Hypothetical & regret",
    jpTitle: "仮定と後悔",
    xp: 18,
    coins: 18,
    steps: [
      {
        type: "intro",
        title: "Hypothetical & regret",
        objectives: ["Say “if I had…”", "Express regret (〜ばよかった)", "Use 〜てしまった"],
      },
      { type: "teach", label: "Grammar", jp: "しっていたら", romaji: "shitte itara", en: "if (I) had known", note: "〜たら + past = hypothetical past." },
      { type: "teach", label: "Grammar", jp: "いけばよかった", romaji: "ikeba yokatta", en: "I should have gone (regret)", note: "〜ばよかった = “should have ~” (regret)." },
      { type: "teach", label: "Grammar", jp: "わすれてしまった", romaji: "wasurete shimatta", en: "I (regretfully) forgot", note: "〜てしまった = ended up ~ / did completely (often regret)." },
      {
        type: "choice",
        prompt: "Regret: “I should have gone” = いけば ___",
        options: [{ label: "よかった", correct: true }, { label: "いい" }, { label: "ました" }],
      },
      { type: "teach", jp: "こうかい", romaji: "kōkai", en: "regret" },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "I should have studied.",
        tiles: ["べんきょう", "すれば", "よかった"],
        answer: ["べんきょう", "すれば", "よかった"],
      },
      {
        type: "listen",
        audio: "いけばよかった",
        prompt: "What did you hear?",
        options: [{ label: "いけばよかった (I should have gone.)", correct: true }, { label: "しっていたら" }, { label: "わすれてしまった" }],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "たら(+過去)", en: "if had" },
          { jp: "ばよかった", en: "should have" },
          { jp: "てしまった", en: "ended up" },
          { jp: "こうかい", en: "regret" },
        ],
      },
      {
        type: "choice",
        prompt: "“I ended up forgetting” = わすれて ___",
        options: [{ label: "しまった", correct: true }, { label: "よかった" }, { label: "いた" }],
      },
    ],
  },

  /* ---------------- D-74 Reported speech ---------------- */
  {
    id: "d-74",
    cls: "D",
    number: 74,
    title: "Reported speech",
    jpTitle: "伝聞・引用",
    xp: 18,
    coins: 18,
    steps: [
      {
        type: "intro",
        title: "Reported speech",
        objectives: ["Report hearsay (〜そうです)", "Use 〜らしい (apparently)", "Quote casually with 〜って"],
      },
      { type: "teach", label: "Grammar", jp: "あめがふるそうです", romaji: "ame ga furu sō desu", en: "I hear it will rain", note: "plain + そうです = “I hear that ~” (hearsay)." },
      { type: "teach", label: "Grammar", jp: "やすみらしい", romaji: "yasumi rashii", en: "apparently it's a day off", note: "〜らしい = “apparently / it seems”." },
      { type: "teach", label: "Grammar", jp: "くるって", romaji: "kuru tte", en: "(they) say he's coming (casual)", note: "Casual version of 〜と言っていた." },
      {
        type: "choice",
        prompt: "Hearsay “I hear it will rain” = あめがふる ___",
        options: [{ label: "そうです", correct: true }, { label: "でしょう" }, { label: "かもしれません" }],
      },
      { type: "teach", label: "Grammar", jp: "によると", romaji: "ni yoru to", en: "according to", note: "Often paired with 〜そうです." },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "I hear he's coming.",
        tiles: ["くる", "そう", "です"],
        answer: ["くる", "そう", "です"],
      },
      {
        type: "listen",
        audio: "やすみらしいです",
        prompt: "What did you hear?",
        options: [{ label: "やすみらしいです (Apparently it's a holiday.)", correct: true }, { label: "あめがふるそうです" }, { label: "くるって" }],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "そうです", en: "I hear that" },
          { jp: "らしい", en: "apparently" },
          { jp: "って", en: "they say (casual)" },
          { jp: "によると", en: "according to" },
        ],
      },
      {
        type: "choice",
        prompt: "Casual “they say ~” =",
        options: [{ label: "って", correct: true }, { label: "らしい" }, { label: "そうです" }],
      },
    ],
  },

  /* ---------------- D-75 Advanced conjunctions ---------------- */
  {
    id: "d-75",
    cls: "D",
    number: 75,
    title: "Advanced conjunctions",
    jpTitle: "上級の接続",
    xp: 18,
    coins: 18,
    steps: [
      {
        type: "intro",
        title: "Advanced conjunctions",
        objectives: ["Use formal connectors", "Contrast with にもかかわらず", "Compare with いっぽう"],
      },
      { type: "teach", label: "Connector", jp: "しかし", romaji: "shikashi", en: "however (formal)" },
      { type: "teach", label: "Connector", jp: "したがって", romaji: "shitagatte", en: "therefore (formal)" },
      { type: "teach", label: "Grammar", jp: "あめにもかかわらず", romaji: "ame ni mo kakawarazu", en: "despite the rain", note: "〜にもかかわらず = “despite / in spite of”." },
      { type: "teach", label: "Connector", jp: "いっぽう", romaji: "ippō", en: "on the other hand" },
      {
        type: "choice",
        prompt: "Formal “however” =",
        options: [{ label: "しかし", correct: true }, { label: "したがって" }, { label: "いっぽう" }],
      },
      { type: "teach", label: "Grammar", jp: "むずかしいものの", romaji: "muzukashii mono no", en: "although it's difficult", note: "〜ものの = “although”." },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "However, it is difficult.",
        tiles: ["しかし", "むずかしい", "です"],
        answer: ["しかし", "むずかしい", "です"],
      },
      {
        type: "listen",
        audio: "あめにもかかわらず",
        prompt: "What did you hear?",
        options: [{ label: "あめにもかかわらず (despite the rain)", correct: true }, { label: "したがって" }, { label: "いっぽう" }],
      },
      {
        type: "match",
        prompt: "Match the connectors",
        pairs: [
          { jp: "しかし", en: "however" },
          { jp: "したがって", en: "therefore" },
          { jp: "にもかかわらず", en: "despite" },
          { jp: "いっぽう", en: "on the other hand" },
        ],
      },
      {
        type: "choice",
        prompt: "“despite the rain” = あめ ___",
        options: [{ label: "にもかかわらず", correct: true }, { label: "ものの" }, { label: "いっぽう" }],
      },
    ],
  },

  /* ---------------- D-76 Slang & youth speech ---------------- */
  {
    id: "d-76",
    cls: "D",
    number: 76,
    title: "Slang & youth speech",
    jpTitle: "スラング",
    xp: 18,
    coins: 18,
    steps: [
      {
        type: "intro",
        title: "Slang & youth speech",
        objectives: ["Recognize casual slang", "Use it only with friends", "Understand real conversations"],
      },
      { type: "teach", label: "Slang", jp: "やばい", romaji: "yabai", en: "awesome / terrible (slang)", note: "Context decides: amazing OR awful. Casual only." },
      { type: "teach", label: "Slang", jp: "まじ", romaji: "maji", en: "seriously / really", note: "まじで = “for real”." },
      { type: "teach", label: "Slang", jp: "めっちゃ", romaji: "meccha", en: "super / very (casual)" },
      { type: "teach", label: "Slang", jp: "うざい", romaji: "uzai", en: "annoying" },
      {
        type: "choice",
        prompt: "“seriously / for real” =",
        options: [{ label: "まじ", correct: true }, { label: "やばい" }, { label: "うざい" }],
      },
      { type: "teach", label: "Slang", jp: "ぶっちゃけ", romaji: "bucchake", en: "to be honest / frankly" },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "This is super delicious.",
        tiles: ["これ", "めっちゃ", "おいしい"],
        answer: ["これ", "めっちゃ", "おいしい"],
      },
      {
        type: "listen",
        audio: "まじでやばい",
        prompt: "What did you hear?",
        options: [{ label: "まじでやばい (seriously amazing/awful)", correct: true }, { label: "めっちゃおいしい" }, { label: "ぶっちゃけ" }],
      },
      {
        type: "match",
        prompt: "Match the slang",
        pairs: [
          { jp: "やばい", en: "awesome/terrible" },
          { jp: "まじ", en: "seriously" },
          { jp: "うざい", en: "annoying" },
          { jp: "めっちゃ", en: "super" },
        ],
      },
      {
        type: "choice",
        prompt: "Casual “super / very” =",
        options: [{ label: "めっちゃ", correct: true }, { label: "まじ" }, { label: "ぶっちゃけ" }],
      },
    ],
  },

  /* ---------------- D-77 Job interview Japanese ---------------- */
  {
    id: "d-77",
    cls: "D",
    number: 77,
    title: "Job interview Japanese",
    jpTitle: "面接の日本語",
    xp: 18,
    coins: 18,
    steps: [
      {
        type: "intro",
        title: "Job interview Japanese",
        objectives: ["Enter & greet politely", "Express interest & motivation", "Close with confidence"],
      },
      { type: "teach", jp: "めんせつ", romaji: "mensetsu", en: "interview" },
      { type: "teach", label: "Phrase", jp: "しつれいします", romaji: "shitsurei shimasu", en: "Excuse me (entering)" },
      { type: "teach", label: "Phrase", jp: "がんばります", romaji: "ganbarimasu", en: "I'll do my best" },
      { type: "teach", label: "Phrase", jp: "きょうみがあります", romaji: "kyōmi ga arimasu", en: "I'm interested (in)" },
      {
        type: "choice",
        prompt: "Entering the interview room, you say…",
        options: [{ label: "しつれいします", correct: true }, { label: "おつかれさまです" }, { label: "がんばります" }],
      },
      { type: "teach", label: "Phrase", jp: "よろしくおねがいいたします", romaji: "yoroshiku onegai itashimasu", en: "Thank you (formal closing)" },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "I'm interested in this company.",
        tiles: ["このかいしゃに", "きょうみが", "あります"],
        answer: ["このかいしゃに", "きょうみが", "あります"],
      },
      {
        type: "listen",
        audio: "よろしくおねがいいたします",
        prompt: "What did you hear?",
        options: [{ label: "よろしくおねがいいたします (Thank you — formal)", correct: true }, { label: "がんばります" }, { label: "しつれいします" }],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "めんせつ", en: "interview" },
          { jp: "がんばります", en: "I'll do my best" },
          { jp: "きょうみ", en: "interest" },
          { jp: "しつれいします", en: "excuse me" },
        ],
      },
      {
        type: "choice",
        prompt: "Express interest: “I'm interested.”",
        options: [{ label: "きょうみがあります", correct: true }, { label: "がんばります" }, { label: "しつれいします" }],
      },
    ],
  },

  /* ---------------- D-78 Cultural etiquette ---------------- */
  {
    id: "d-78",
    cls: "D",
    number: 78,
    title: "Cultural etiquette",
    jpTitle: "文化とマナー",
    xp: 18,
    coins: 18,
    steps: [
      {
        type: "intro",
        title: "Cultural etiquette",
        objectives: ["Know everyday manners", "Use mealtime phrases", "Respect common customs"],
      },
      { type: "teach", jp: "おじぎ", romaji: "ojigi", en: "a bow (greeting)" },
      { type: "teach", label: "Phrase", jp: "くつをぬぐ", romaji: "kutsu o nugu", en: "take off your shoes", note: "Done at the entrance (げんかん)." },
      { type: "teach", label: "Phrase", jp: "いただきます", romaji: "itadakimasu", en: "(said before eating)", note: "ごちそうさま is said after eating." },
      { type: "teach", jp: "マナー", romaji: "manā", en: "manners / etiquette" },
      {
        type: "choice",
        prompt: "Said before eating:",
        options: [{ label: "いただきます", correct: true }, { label: "ごちそうさま" }, { label: "おじぎ" }],
      },
      { type: "teach", label: "Phrase", jp: "ならんでください", romaji: "narande kudasai", en: "please line up", note: "Queueing is expected." },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "Please take off your shoes.",
        tiles: ["くつを", "ぬいで", "ください"],
        answer: ["くつを", "ぬいで", "ください"],
      },
      {
        type: "listen",
        audio: "いただきます",
        prompt: "What did you hear?",
        options: [{ label: "いただきます (before eating)", correct: true }, { label: "ごちそうさま" }, { label: "おじぎ" }],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "おじぎ", en: "bow" },
          { jp: "くつをぬぐ", en: "take off shoes" },
          { jp: "マナー", en: "manners" },
          { jp: "ごちそうさま", en: "after eating" },
        ],
      },
      {
        type: "choice",
        prompt: "Said after eating:",
        options: [{ label: "ごちそうさま", correct: true }, { label: "いただきます" }, { label: "ならんでください" }],
      },
    ],
  },

  /* ---------------- D-79 Free conversation ---------------- */
  {
    id: "d-79",
    cls: "D",
    number: 79,
    title: "Free conversation",
    jpTitle: "フリートーク",
    xp: 18,
    coins: 18,
    steps: [
      {
        type: "intro",
        title: "Free conversation",
        objectives: ["Use natural fillers", "Keep a chat flowing", "Change topics smoothly"],
      },
      { type: "teach", label: "Filler", jp: "えーと", romaji: "ēto", en: "um / let me see" },
      { type: "teach", label: "Filler", jp: "そうですね", romaji: "sō desu ne", en: "let me think / that's right" },
      { type: "teach", label: "Phrase", jp: "ほんとう", romaji: "hontō?", en: "really?" },
      { type: "teach", label: "Connector", jp: "ところで", romaji: "tokorode", en: "by the way" },
      {
        type: "choice",
        prompt: "Filler “um / let me see” =",
        options: [{ label: "えーと", correct: true }, { label: "ところで" }, { label: "ほんとう" }],
      },
      { type: "teach", label: "Phrase", jp: "じつは", romaji: "jitsu wa", en: "actually / to tell the truth" },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "By the way, are you free tomorrow?",
        tiles: ["ところで", "あした", "ひまですか"],
        answer: ["ところで", "あした", "ひまですか"],
      },
      {
        type: "listen",
        audio: "ところでしゅみはなんですか",
        prompt: "What did you hear?",
        options: [{ label: "ところでしゅみはなんですか (By the way, what's your hobby?)", correct: true }, { label: "えーと" }, { label: "そうですね" }],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "えーと", en: "um" },
          { jp: "そうですね", en: "let me think" },
          { jp: "ところで", en: "by the way" },
          { jp: "じつは", en: "actually" },
        ],
      },
      {
        type: "choice",
        prompt: "Change the topic: “by the way” =",
        options: [{ label: "ところで", correct: true }, { label: "じつは" }, { label: "えーと" }],
      },
    ],
  },

  /* ---------------- D-80 Capstone review ---------------- */
  {
    id: "d-80",
    cls: "D",
    number: 80,
    title: "Capstone review",
    jpTitle: "総まとめ",
    xp: 30,
    coins: 30,
    steps: [
      {
        type: "intro",
        title: "Capstone review",
        objectives: ["Review the whole journey (A→D)", "Mix everything you've learned", "Celebrate your fluency! 🌸"],
      },
      {
        type: "choice",
        prompt: "(Class A) Greet someone in the morning",
        options: [{ label: "おはようございます", correct: true }, { label: "こんばんは" }, { label: "おやすみなさい" }],
      },
      {
        type: "choice",
        prompt: "(Class B) Ask what's recommended at a restaurant",
        options: [{ label: "おすすめはなんですか", correct: true }, { label: "おかいけいおねがいします" }, { label: "いらっしゃいませ" }],
      },
      {
        type: "arrange",
        prompt: "(Class C) Build the sentence",
        en: "I want to go to Japan.",
        tiles: ["にほんに", "いきたい", "です"],
        answer: ["にほんに", "いきたい", "です"],
      },
      {
        type: "match",
        prompt: "Match across all classes",
        pairs: [
          { jp: "おいしい", en: "delicious" },
          { jp: "けいご", en: "honorifics" },
          { jp: "びみょう", en: "iffy" },
          { jp: "やばい", en: "awesome" },
        ],
      },
      {
        type: "choice",
        prompt: "(Class C) Ask permission to take a photo",
        options: [{ label: "しゃしんをとってもいいですか", correct: true }, { label: "しゃしんをとってはいけません" }, { label: "だめです" }],
      },
      {
        type: "listen",
        audio: "いけばよかった",
        prompt: "(Class D) What did you hear?",
        options: [{ label: "いけばよかった (I should have gone.)", correct: true }, { label: "おせわになっております" }, { label: "ニュースによると" }],
      },
      {
        type: "arrange",
        prompt: "(Class D) Build the sentence",
        en: "However, it is difficult.",
        tiles: ["しかし", "むずかしい", "です"],
        answer: ["しかし", "むずかしい", "です"],
      },
      {
        type: "match",
        prompt: "Match the phrases",
        pairs: [
          { jp: "いらっしゃいませ", en: "Welcome" },
          { jp: "がんばって", en: "do your best" },
          { jp: "いただきます", en: "before eating" },
          { jp: "ところで", en: "by the way" },
        ],
      },
      { type: "teach", label: "Phrase", jp: "おめでとうございます", romaji: "omedetō gozaimasu", en: "Congratulations!", note: "You've reached the end of the course — おめでとう! 🌸" },
      {
        type: "choice",
        prompt: "Celebrate: “Congratulations!”",
        options: [{ label: "おめでとうございます", correct: true }, { label: "おつかれさまです" }, { label: "ありがとうございます" }],
      },
    ],
  },
];



