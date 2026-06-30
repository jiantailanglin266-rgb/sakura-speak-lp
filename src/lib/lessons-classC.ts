/* Class C — Fluency Builders. Authored lessons (playable).
   Batch 1: Lessons 41–45. Grammar-focused (≈N4). Standard pro template. */

import type { Lesson } from "./lesson";

export const classCLessons: Lesson[] = [
  /* ---------------- C-41 Giving opinions ---------------- */
  {
    id: "c-41",
    cls: "C",
    number: 41,
    title: "Giving opinions",
    jpTitle: "意見を言う",
    xp: 16,
    coins: 16,
    steps: [
      {
        type: "intro",
        title: "Giving opinions",
        objectives: ["Say what you think (〜とおもいます)", "Agree and disagree", "Ask for an opinion"],
      },
      { type: "teach", label: "Grammar", jp: "いいとおもいます", romaji: "ii to omoimasu", en: "I think it's good", note: "[plain sentence] + とおもいます = “I think (that) ~”." },
      { type: "teach", jp: "いけん", romaji: "iken", en: "opinion" },
      { type: "teach", label: "Phrase", jp: "どうおもいますか", romaji: "dō omoimasu ka", en: "What do you think?" },
      { type: "teach", jp: "さんせい", romaji: "sansei", en: "agreement / I agree", note: "はんたい = opposition / I disagree." },
      {
        type: "choice",
        prompt: "“I think so too” = わたしも そう ___",
        options: [{ label: "おもいます", correct: true }, { label: "いけん" }, { label: "さんせい" }],
      },
      { type: "teach", jp: "たしかに", romaji: "tashika ni", en: "indeed / certainly" },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "I think it's good.",
        tiles: ["いい", "と", "おもいます"],
        answer: ["いい", "と", "おもいます"],
      },
      {
        type: "listen",
        audio: "どうおもいますか",
        prompt: "What did you hear?",
        options: [{ label: "どうおもいますか (What do you think?)", correct: true }, { label: "さんせいです" }, { label: "いいとおもいます" }],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "いけん", en: "opinion" },
          { jp: "さんせい", en: "agree" },
          { jp: "はんたい", en: "oppose" },
          { jp: "おもいます", en: "think" },
        ],
      },
      {
        type: "choice",
        prompt: "Ask “What do you think?”",
        options: [{ label: "どうおもいますか", correct: true }, { label: "さんせいです" }, { label: "たしかに" }],
      },
    ],
  },

  /* ---------------- C-42 Past experiences ---------------- */
  {
    id: "c-42",
    cls: "C",
    number: 42,
    title: "Past experiences",
    jpTitle: "過去の経験",
    xp: 16,
    coins: 16,
    steps: [
      {
        type: "intro",
        title: "Past experiences",
        objectives: ["Use the past tense (〜ました)", "Say you've done something", "Ask about experiences"],
      },
      { type: "teach", label: "Grammar", jp: "いきました", romaji: "ikimashita", en: "went (past)", note: "〜ました = past polite; 〜ませんでした = didn't ~." },
      { type: "teach", label: "Grammar", jp: "いったことがあります", romaji: "itta koto ga arimasu", en: "I have been there / done it", note: "〜たことがあります = “have the experience of ~ing”." },
      { type: "teach", jp: "はじめて", romaji: "hajimete", en: "for the first time" },
      {
        type: "choice",
        prompt: "“I went” (past) = いき ___",
        options: [{ label: "ました", correct: true }, { label: "ます" }, { label: "ません" }],
      },
      { type: "teach", label: "Phrase", jp: "たべたことがありますか", romaji: "tabeta koto ga arimasu ka", en: "Have you ever eaten it?" },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "I ate sushi yesterday.",
        tiles: ["きのう", "すしを", "たべました"],
        answer: ["きのう", "すしを", "たべました"],
      },
      {
        type: "listen",
        audio: "すしをたべたことがありますか",
        prompt: "What did you hear?",
        options: [{ label: "すしをたべたことがありますか (Have you eaten sushi?)", correct: true }, { label: "きのうすしをたべました" }, { label: "はじめてです" }],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "いきました", en: "went" },
          { jp: "たことがあります", en: "have done" },
          { jp: "きのう", en: "yesterday" },
          { jp: "はじめて", en: "first time" },
        ],
      },
      {
        type: "choice",
        prompt: "Ask “Have you eaten it before?”",
        options: [{ label: "たべたことがありますか", correct: true }, { label: "きのうたべました" }, { label: "はじめてです" }],
      },
    ],
  },

  /* ---------------- C-43 Comparing things ---------------- */
  {
    id: "c-43",
    cls: "C",
    number: 43,
    title: "Comparing things",
    jpTitle: "比べる",
    xp: 16,
    coins: 16,
    steps: [
      {
        type: "intro",
        title: "Comparing things",
        objectives: ["Compare with のほうが / より", "Ask which is preferred", "Say “the most” with いちばん"],
      },
      { type: "teach", label: "Grammar", jp: "でんしゃのほうがはやいです", romaji: "densha no hō ga hayai desu", en: "The train is faster.", note: "A のほうが ~ = “A is more ~”." },
      { type: "teach", label: "Grammar", jp: "バスよりはやい", romaji: "basu yori hayai", en: "faster than the bus", note: "B より = “than B”." },
      { type: "teach", label: "Phrase", jp: "どちらがすきですか", romaji: "dochira ga suki desu ka", en: "Which do you prefer?" },
      { type: "teach", jp: "いちばん", romaji: "ichiban", en: "the most / number one", note: "いちばんすき = like the most." },
      {
        type: "choice",
        prompt: "“faster than the bus” = バス ___ はやい",
        options: [{ label: "より", correct: true }, { label: "のほうが" }, { label: "いちばん" }],
      },
      { type: "teach", jp: "はやい", romaji: "hayai", en: "fast / early", note: "おそい = slow / late." },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "The train is faster.",
        tiles: ["でんしゃ", "のほうが", "はやいです"],
        answer: ["でんしゃ", "のほうが", "はやいです"],
      },
      {
        type: "listen",
        audio: "どちらがすきですか",
        prompt: "What did you hear?",
        options: [{ label: "どちらがすきですか (Which do you prefer?)", correct: true }, { label: "いちばんすきです" }, { label: "バスよりはやい" }],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "のほうが", en: "more" },
          { jp: "より", en: "than" },
          { jp: "いちばん", en: "the most" },
          { jp: "どちら", en: "which" },
        ],
      },
      {
        type: "choice",
        prompt: "“I like it the most” = ___ すきです",
        options: [{ label: "いちばん", correct: true }, { label: "より" }, { label: "のほうが" }],
      },
    ],
  },

  /* ---------------- C-44 Giving reasons ---------------- */
  {
    id: "c-44",
    cls: "C",
    number: 44,
    title: "Giving reasons",
    jpTitle: "理由を言う",
    xp: 16,
    coins: 16,
    steps: [
      {
        type: "intro",
        title: "Giving reasons",
        objectives: ["Give a reason with から / ので", "Ask why", "Connect cause and result"],
      },
      { type: "teach", label: "Grammar", jp: "さむいから", romaji: "samui kara", en: "because it's cold", note: "〜から = “because ~” (reason first)." },
      { type: "teach", label: "Grammar", jp: "あめなので", romaji: "ame na node", en: "because it's raining", note: "〜ので = “because ~” (softer, polite)." },
      { type: "teach", jp: "りゆう", romaji: "riyū", en: "reason" },
      { type: "teach", label: "Phrase", jp: "どうしてですか", romaji: "dōshite desu ka", en: "Why?", note: "なぜ also means “why”." },
      {
        type: "choice",
        prompt: "“because it's hot” = あつい ___",
        options: [{ label: "から", correct: true }, { label: "より" }, { label: "まで" }],
      },
      { type: "teach", jp: "だから", romaji: "dakara", en: "so / therefore" },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "Because it's cold, I won't go.",
        tiles: ["さむい", "から", "いきません"],
        answer: ["さむい", "から", "いきません"],
      },
      {
        type: "listen",
        audio: "どうしてですか",
        prompt: "What did you hear?",
        options: [{ label: "どうしてですか (Why?)", correct: true }, { label: "さむいから" }, { label: "りゆうはなんですか" }],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "りゆう", en: "reason" },
          { jp: "から", en: "because" },
          { jp: "どうして", en: "why" },
          { jp: "だから", en: "therefore" },
        ],
      },
      {
        type: "choice",
        prompt: "Ask “Why?”",
        options: [{ label: "どうしてですか", correct: true }, { label: "だから" }, { label: "りゆう" }],
      },
    ],
  },

  /* ---------------- C-45 Permission & prohibition ---------------- */
  {
    id: "c-45",
    cls: "C",
    number: 45,
    title: "Permission & prohibition",
    jpTitle: "許可と禁止",
    xp: 16,
    coins: 16,
    steps: [
      {
        type: "intro",
        title: "Permission & prohibition",
        objectives: ["Ask permission (〜てもいいですか)", "Say what's not allowed (〜てはいけません)", "Give a quick yes/no"],
      },
      { type: "teach", label: "Grammar", jp: "たべてもいいですか", romaji: "tabete mo ii desu ka", en: "May I eat it?", note: "〜てもいいです = “may / it's okay to ~”." },
      { type: "teach", label: "Grammar", jp: "たべてはいけません", romaji: "tabete wa ikemasen", en: "You must not eat", note: "〜てはいけません = “must not / not allowed”." },
      { type: "teach", jp: "だめ", romaji: "dame", en: "no good / not allowed" },
      { type: "teach", label: "Phrase", jp: "いいですよ", romaji: "ii desu yo", en: "Sure, go ahead." },
      {
        type: "choice",
        prompt: "Ask permission: “May I take a photo?”",
        options: [{ label: "しゃしんをとってもいいですか", correct: true }, { label: "しゃしんをとってはいけません" }, { label: "だめです" }],
      },
      { type: "teach", jp: "きんし", romaji: "kinshi", en: "prohibited", note: "たちいりきんし = no entry." },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "May I sit here?",
        tiles: ["ここに", "すわっても", "いいですか"],
        answer: ["ここに", "すわっても", "いいですか"],
      },
      {
        type: "listen",
        audio: "たべてもいいですか",
        prompt: "What did you hear?",
        options: [{ label: "たべてもいいですか (May I eat it?)", correct: true }, { label: "たべてはいけません" }, { label: "だめです" }],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "〜てもいい", en: "may / allowed" },
          { jp: "〜てはいけません", en: "must not" },
          { jp: "だめ", en: "not allowed" },
          { jp: "きんし", en: "prohibited" },
        ],
      },
      {
        type: "choice",
        prompt: "“You must not smoke here” = ここでたばこを ___",
        options: [{ label: "すってはいけません", correct: true }, { label: "すってもいいです" }, { label: "だめ" }],
      },
    ],
  },

  /* ---------------- C-46 Obligation ---------------- */
  {
    id: "c-46",
    cls: "C",
    number: 46,
    title: "Obligation",
    jpTitle: "しなければならない",
    xp: 16,
    coins: 16,
    steps: [
      {
        type: "intro",
        title: "Obligation",
        objectives: ["Say you must do something", "Say you don't have to", "Talk about duties"],
      },
      { type: "teach", label: "Grammar", jp: "いかなければなりません", romaji: "ikanakereba narimasen", en: "I have to go", note: "〜なければなりません = “must / have to ~”." },
      { type: "teach", label: "Grammar", jp: "いかなくてもいいです", romaji: "ikanakute mo ii desu", en: "you don't have to go", note: "〜なくてもいいです = “don't have to ~”." },
      { type: "teach", jp: "しゅくだい", romaji: "shukudai", en: "homework" },
      {
        type: "choice",
        prompt: "“must go” = いか ___",
        options: [{ label: "なければなりません", correct: true }, { label: "なくてもいいです" }, { label: "ました" }],
      },
      { type: "teach", jp: "やくそく", romaji: "yakusoku", en: "promise / appointment" },
      { type: "teach", label: "Casual", jp: "いかなきゃ", romaji: "ikanakya", en: "gotta go (casual)", note: "Casual short form of 〜なければ." },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "I have to do homework.",
        tiles: ["しゅくだいを", "しなければ", "なりません"],
        answer: ["しゅくだいを", "しなければ", "なりません"],
      },
      {
        type: "listen",
        audio: "いかなければなりません",
        prompt: "What did you hear?",
        options: [{ label: "いかなければなりません (I have to go.)", correct: true }, { label: "いかなくてもいいです" }, { label: "やくそくがあります" }],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "なければなりません", en: "must" },
          { jp: "なくてもいい", en: "don't have to" },
          { jp: "しゅくだい", en: "homework" },
          { jp: "やくそく", en: "promise" },
        ],
      },
      {
        type: "choice",
        prompt: "“You don't have to come” = こ ___",
        options: [{ label: "なくてもいいです", correct: true }, { label: "なければなりません" }, { label: "ました" }],
      },
    ],
  },

  /* ---------------- C-47 Want & intend ---------------- */
  {
    id: "c-47",
    cls: "C",
    number: 47,
    title: "Want & intend",
    jpTitle: "〜たい・つもり",
    xp: 16,
    coins: 16,
    steps: [
      {
        type: "intro",
        title: "Want & intend",
        objectives: ["Say what you want to do (〜たい)", "Say what you want (ほしい)", "State intentions (つもり)"],
      },
      { type: "teach", label: "Grammar", jp: "いきたいです", romaji: "ikitai desu", en: "I want to go", note: "verb stem + たい = “want to ~”." },
      { type: "teach", label: "Grammar", jp: "くるまがほしい", romaji: "kuruma ga hoshii", en: "I want a car", note: "noun + が ほしい = “want (a thing)”." },
      { type: "teach", label: "Grammar", jp: "いくつもりです", romaji: "iku tsumori desu", en: "I intend to go", note: "verb(dictionary) + つもり = “plan / intend to”." },
      {
        type: "choice",
        prompt: "“I want to eat” = たべ ___ です",
        options: [{ label: "たい", correct: true }, { label: "つもり" }, { label: "ました" }],
      },
      { type: "teach", jp: "しょうらい", romaji: "shōrai", en: "the future" },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "I want to go to Japan.",
        tiles: ["にほんに", "いきたい", "です"],
        answer: ["にほんに", "いきたい", "です"],
      },
      {
        type: "listen",
        audio: "にほんにいきたいです",
        prompt: "What did you hear?",
        options: [{ label: "にほんにいきたいです (I want to go to Japan.)", correct: true }, { label: "くるまがほしいです" }, { label: "いくつもりです" }],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "たい", en: "want to (do)" },
          { jp: "ほしい", en: "want (a thing)" },
          { jp: "つもり", en: "intend to" },
          { jp: "しょうらい", en: "the future" },
        ],
      },
      {
        type: "choice",
        prompt: "“I plan to study” = べんきょうする ___ です",
        options: [{ label: "つもり", correct: true }, { label: "たい" }, { label: "ほしい" }],
      },
    ],
  },

  /* ---------------- C-48 Try doing ---------------- */
  {
    id: "c-48",
    cls: "C",
    number: 48,
    title: "Try doing",
    jpTitle: "〜てみる",
    xp: 16,
    coins: 16,
    steps: [
      {
        type: "intro",
        title: "Try doing",
        objectives: ["Try something with 〜てみる", "Say you want to try (〜てみたい)", "Encourage giving it a go"],
      },
      { type: "teach", label: "Grammar", jp: "たべてみます", romaji: "tabete mimasu", en: "I'll try eating it", note: "〜てみる = “try doing ~ (to see how it is)”." },
      { type: "teach", label: "Grammar", jp: "いってみたい", romaji: "itte mitai", en: "I want to try going", note: "〜てみたい = “want to try ~ing”." },
      { type: "teach", label: "Phrase", jp: "やってみます", romaji: "yatte mimasu", en: "I'll give it a try" },
      {
        type: "choice",
        prompt: "“I'll try eating it” = たべて ___",
        options: [{ label: "みます", correct: true }, { label: "いきます" }, { label: "します" }],
      },
      { type: "teach", jp: "たぶん", romaji: "tabun", en: "probably / maybe" },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "I want to try going to Kyoto.",
        tiles: ["きょうとに", "いって", "みたいです"],
        answer: ["きょうとに", "いって", "みたいです"],
      },
      {
        type: "listen",
        audio: "やってみます",
        prompt: "What did you hear?",
        options: [{ label: "やってみます (I'll give it a try.)", correct: true }, { label: "たべてみます" }, { label: "いってみたい" }],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "てみる", en: "try doing" },
          { jp: "てみたい", en: "want to try" },
          { jp: "やってみます", en: "give it a try" },
          { jp: "たぶん", en: "probably" },
        ],
      },
      {
        type: "choice",
        prompt: "“I want to try ~ing” = 〜て ___",
        options: [{ label: "みたい", correct: true }, { label: "みます" }, { label: "ました" }],
      },
    ],
  },

  /* ---------------- C-49 Conditionals ---------------- */
  {
    id: "c-49",
    cls: "C",
    number: 49,
    title: "Conditionals",
    jpTitle: "条件 〜たら・ば",
    xp: 16,
    coins: 16,
    steps: [
      {
        type: "intro",
        title: "Conditionals",
        objectives: ["Use 〜たら (if/when)", "Use 〜ば (if)", "Ask “what should I do?”"],
      },
      { type: "teach", label: "Grammar", jp: "あめがふったら", romaji: "ame ga futtara", en: "if it rains", note: "〜たら = “if / when ~” (the most common conditional)." },
      { type: "teach", label: "Grammar", jp: "やすければ", romaji: "yasukereba", en: "if it's cheap", note: "〜ば = “if ~” (conditional)." },
      { type: "teach", jp: "もし", romaji: "moshi", en: "if (often with たら)", note: "もし〜たら adds a hypothetical feel." },
      {
        type: "choice",
        prompt: "“if it rains” = あめがふっ ___",
        options: [{ label: "たら", correct: true }, { label: "ば" }, { label: "から" }],
      },
      { type: "teach", label: "Phrase", jp: "どうしたらいいですか", romaji: "dō shitara ii desu ka", en: "What should I do?", note: "Very handy phrase." },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "What should I do?",
        tiles: ["どう", "したら", "いいですか"],
        answer: ["どう", "したら", "いいですか"],
      },
      {
        type: "listen",
        audio: "あめがふったらいきません",
        prompt: "What did you hear?",
        options: [{ label: "あめがふったらいきません (If it rains, I won't go.)", correct: true }, { label: "やすければかいます" }, { label: "どうしたらいいですか" }],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "たら", en: "if / when" },
          { jp: "ば", en: "if" },
          { jp: "もし", en: "if (hypothetical)" },
          { jp: "どうしたら", en: "what should" },
        ],
      },
      {
        type: "choice",
        prompt: "Ask “What should I do?”",
        options: [{ label: "どうしたらいいですか", correct: true }, { label: "あめがふったら" }, { label: "やすければ" }],
      },
    ],
  },

  /* ---------------- C-50 Te-form connections ---------------- */
  {
    id: "c-50",
    cls: "C",
    number: 50,
    title: "Te-form connections",
    jpTitle: "て形でつなぐ",
    xp: 16,
    coins: 16,
    steps: [
      {
        type: "intro",
        title: "Te-form connections",
        objectives: ["Link actions with 〜て", "Say what's happening (〜ています)", "Say “after ~ing” (〜てから)"],
      },
      { type: "teach", label: "Grammar", jp: "おきてたべます", romaji: "okite tabemasu", en: "I get up and eat", note: "〜て links actions in order: A して、B." },
      { type: "teach", label: "Grammar", jp: "たべています", romaji: "tabete imasu", en: "I'm eating (now)", note: "〜ています = ongoing action / state." },
      { type: "teach", label: "Grammar", jp: "みてください", romaji: "mite kudasai", en: "please look", note: "〜てください = “please do ~”." },
      {
        type: "choice",
        prompt: "“get up and eat” = おき ___ たべます",
        options: [{ label: "て", correct: true }, { label: "た" }, { label: "ます" }],
      },
      { type: "teach", label: "Grammar", jp: "たべてから", romaji: "tabete kara", en: "after eating", note: "〜てから = “after doing ~”." },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "I get up and go to work.",
        tiles: ["おきて", "かいしゃに", "いきます"],
        answer: ["おきて", "かいしゃに", "いきます"],
      },
      {
        type: "listen",
        audio: "いまたべています",
        prompt: "What did you hear?",
        options: [{ label: "いまたべています (I'm eating now.)", correct: true }, { label: "おきてたべます" }, { label: "たべてから" }],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "て", en: "and (links)" },
          { jp: "ています", en: "is ~ing" },
          { jp: "てください", en: "please do" },
          { jp: "てから", en: "after ~ing" },
        ],
      },
      {
        type: "choice",
        prompt: "“after eating” = たべて ___",
        options: [{ label: "から", correct: true }, { label: "います" }, { label: "ください" }],
      },
    ],
  },

  /* ---------------- C-51 Casual speech ---------------- */
  {
    id: "c-51",
    cls: "C",
    number: 51,
    title: "Casual speech",
    jpTitle: "タメ口",
    xp: 16,
    coins: 16,
    steps: [
      {
        type: "intro",
        title: "Casual speech",
        objectives: ["Use plain form (だ / いく)", "Casual yes & no", "Make casual questions with の"],
      },
      { type: "teach", label: "Grammar", jp: "がくせいだ", romaji: "gakusei da", en: "(I)'m a student (casual)", note: "Casual だ replaces polite です." },
      { type: "teach", label: "Grammar", jp: "いく", romaji: "iku", en: "go (casual / dictionary)", note: "Casual いく vs. polite いきます." },
      { type: "teach", label: "Grammar", jp: "いかない", romaji: "ikanai", en: "don't go (casual)", note: "Casual negative; polite is いきません." },
      {
        type: "choice",
        prompt: "Casual form of です = ?",
        options: [{ label: "だ", correct: true }, { label: "ます" }, { label: "ない" }],
      },
      { type: "teach", jp: "うん", romaji: "un", en: "yeah (casual yes)", note: "ううん = nope (casual no)." },
      { type: "teach", label: "Grammar", jp: "いくの", romaji: "iku no?", en: "Going? (casual question)", note: "Rising の makes a casual question." },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "Are you going today? (casual)",
        tiles: ["きょう", "いく", "の"],
        answer: ["きょう", "いく", "の"],
      },
      {
        type: "listen",
        audio: "いかない",
        prompt: "What did you hear?",
        options: [{ label: "いかない (don't go, casual)", correct: true }, { label: "いく (go)" }, { label: "いきます (go, polite)" }],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "だ", en: "casual です" },
          { jp: "いく", en: "go (casual)" },
          { jp: "うん", en: "yeah" },
          { jp: "ううん", en: "nope" },
        ],
      },
      {
        type: "choice",
        prompt: "Casual “yes” to a friend",
        options: [{ label: "うん", correct: true }, { label: "はい" }, { label: "ううん" }],
      },
    ],
  },

  /* ---------------- C-52 Honorifics intro ---------------- */
  {
    id: "c-52",
    cls: "C",
    number: 52,
    title: "Honorifics intro",
    jpTitle: "敬語の入り口",
    xp: 16,
    coins: 16,
    steps: [
      {
        type: "intro",
        title: "Honorifics intro",
        objectives: ["Understand けいご (honorifics)", "Use name suffixes さん / さま", "Recognize respectful forms"],
      },
      { type: "teach", jp: "けいご", romaji: "keigo", en: "honorific language" },
      { type: "teach", label: "Grammar", jp: "たなかさん", romaji: "tanaka-san", en: "Mr./Ms. Tanaka", note: "さん = polite name suffix; さま is more formal." },
      { type: "teach", label: "Grammar", jp: "でございます", romaji: "de gozaimasu", en: "is (very polite です)", note: "Formal/business version of です." },
      { type: "teach", label: "Phrase", jp: "いらっしゃいます", romaji: "irasshaimasu", en: "(someone) is / comes (respectful)", note: "Respectful form of います / きます." },
      {
        type: "choice",
        prompt: "Polite name suffix:",
        options: [{ label: "さん", correct: true }, { label: "だ" }, { label: "の" }],
      },
      { type: "teach", jp: "ていねい", romaji: "teinei", en: "polite", note: "ていねいなことば = polite language." },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "This is Mr. Tanaka.",
        tiles: ["こちらは", "たなかさん", "です"],
        answer: ["こちらは", "たなかさん", "です"],
      },
      {
        type: "listen",
        audio: "いらっしゃいませ",
        prompt: "What did you hear?",
        options: [{ label: "いらっしゃいませ (Welcome — respectful)", correct: true }, { label: "でございます" }, { label: "おねがいします" }],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "けいご", en: "honorific language" },
          { jp: "さん", en: "Mr./Ms." },
          { jp: "さま", en: "more formal" },
          { jp: "ていねい", en: "polite" },
        ],
      },
      {
        type: "choice",
        prompt: "More formal than さん:",
        options: [{ label: "さま", correct: true }, { label: "だ" }, { label: "の" }],
      },
    ],
  },

  /* ---------------- C-53 Workplace Japanese ---------------- */
  {
    id: "c-53",
    cls: "C",
    number: 53,
    title: "Workplace Japanese",
    jpTitle: "職場の日本語",
    xp: 16,
    coins: 16,
    steps: [
      {
        type: "intro",
        title: "Workplace Japanese",
        objectives: ["Use common office phrases", "Excuse yourself properly", "Greet & leave at work"],
      },
      { type: "teach", jp: "かいしゃ", romaji: "kaisha", en: "company" },
      { type: "teach", label: "Phrase", jp: "おつかれさまです", romaji: "otsukaresama desu", en: "Good work / thanks for your effort" },
      { type: "teach", label: "Phrase", jp: "しつれいします", romaji: "shitsurei shimasu", en: "Excuse me", note: "Said when entering a room or leaving." },
      { type: "teach", label: "Phrase", jp: "おさきにしつれいします", romaji: "osaki ni shitsurei shimasu", en: "I'm leaving before you (goodbye at work)" },
      {
        type: "choice",
        prompt: "Leaving the office before others:",
        options: [{ label: "おさきにしつれいします", correct: true }, { label: "おつかれさまです" }, { label: "いらっしゃいませ" }],
      },
      { type: "teach", jp: "かいぎ", romaji: "kaigi", en: "meeting" },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "There's a meeting from 3.",
        tiles: ["さんじから", "かいぎ", "です"],
        answer: ["さんじから", "かいぎ", "です"],
      },
      {
        type: "listen",
        audio: "おつかれさまです",
        prompt: "What did you hear?",
        options: [{ label: "おつかれさまです (Good work.)", correct: true }, { label: "しつれいします" }, { label: "おさきにしつれいします" }],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "かいしゃ", en: "company" },
          { jp: "かいぎ", en: "meeting" },
          { jp: "しつれいします", en: "excuse me" },
          { jp: "おつかれさま", en: "good work" },
        ],
      },
      {
        type: "choice",
        prompt: "Greeting a colleague after work:",
        options: [{ label: "おつかれさまです", correct: true }, { label: "おはようございます" }, { label: "かいぎ" }],
      },
    ],
  },

  /* ---------------- C-54 Polite requests ---------------- */
  {
    id: "c-54",
    cls: "C",
    number: 54,
    title: "Polite requests",
    jpTitle: "ていねいなお願い",
    xp: 16,
    coins: 16,
    steps: [
      {
        type: "intro",
        title: "Polite requests",
        objectives: ["Make very polite requests", "Soften with a preface", "Ask a favor"],
      },
      { type: "teach", label: "Grammar", jp: "おしえていただけますか", romaji: "oshiete itadakemasu ka", en: "Could you teach me?", note: "〜ていただけますか = a very polite request." },
      { type: "teach", label: "Grammar", jp: "てつだってくれますか", romaji: "tetsudatte kuremasu ka", en: "Could you help me?", note: "〜てくれますか = a friendly-polite request." },
      { type: "teach", label: "Phrase", jp: "おねがいがあります", romaji: "onegai ga arimasu", en: "I have a favor to ask" },
      {
        type: "choice",
        prompt: "The most polite request form:",
        options: [{ label: "〜ていただけますか", correct: true }, { label: "〜てください" }, { label: "〜て" }],
      },
      { type: "teach", label: "Phrase", jp: "もうしわけありませんが", romaji: "mōshiwake arimasen ga", en: "I'm very sorry, but… (formal softener)" },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "Could you help me?",
        tiles: ["てつだって", "いただけ", "ますか"],
        answer: ["てつだって", "いただけ", "ますか"],
      },
      {
        type: "listen",
        audio: "おしえていただけますか",
        prompt: "What did you hear?",
        options: [{ label: "おしえていただけますか (Could you teach me?)", correct: true }, { label: "てつだってくれますか" }, { label: "おねがいがあります" }],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "いただけますか", en: "could you (formal)" },
          { jp: "くれますか", en: "could you" },
          { jp: "おねがい", en: "favor" },
          { jp: "もうしわけありません", en: "very sorry" },
        ],
      },
      {
        type: "choice",
        prompt: "Open a request: “I have a favor…”",
        options: [{ label: "おねがいがあります", correct: true }, { label: "おつかれさまです" }, { label: "いただけますか" }],
      },
    ],
  },

  /* ---------------- C-55 Apologizing & thanking ---------------- */
  {
    id: "c-55",
    cls: "C",
    number: 55,
    title: "Apologizing & thanking",
    jpTitle: "謝罪とお礼",
    xp: 16,
    coins: 16,
    steps: [
      {
        type: "intro",
        title: "Apologizing & thanking",
        objectives: ["Apologize formally", "Thank for past help", "Reassure & accept thanks"],
      },
      { type: "teach", label: "Phrase", jp: "もうしわけありません", romaji: "mōshiwake arimasen", en: "I'm terribly sorry (formal)" },
      { type: "teach", label: "Phrase", jp: "おかげさまで", romaji: "okagesama de", en: "thanks to you (humble thanks)" },
      { type: "teach", label: "Phrase", jp: "きにしないで", romaji: "ki ni shinai de", en: "don't worry about it" },
      {
        type: "choice",
        prompt: "A formal apology:",
        options: [{ label: "もうしわけありません", correct: true }, { label: "おかげさまで" }, { label: "きにしないで" }],
      },
      { type: "teach", label: "Phrase", jp: "ありがとうございました", romaji: "arigatō gozaimashita", en: "Thank you (for what you did)", note: "Past form, for completed help." },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "Thank you for yesterday.",
        tiles: ["きのうは", "ありがとう", "ございました"],
        answer: ["きのうは", "ありがとう", "ございました"],
      },
      {
        type: "listen",
        audio: "もうしわけありません",
        prompt: "What did you hear?",
        options: [{ label: "もうしわけありません (I'm terribly sorry.)", correct: true }, { label: "ありがとうございました" }, { label: "きにしないで" }],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "もうしわけありません", en: "terribly sorry" },
          { jp: "おかげさまで", en: "thanks to you" },
          { jp: "きにしないで", en: "don't worry" },
          { jp: "ございました", en: "thank you (past)" },
        ],
      },
      {
        type: "choice",
        prompt: "Reply to an apology: “Don't worry.”",
        options: [{ label: "きにしないで", correct: true }, { label: "もうしわけありません" }, { label: "おかげさまで" }],
      },
    ],
  },
];


