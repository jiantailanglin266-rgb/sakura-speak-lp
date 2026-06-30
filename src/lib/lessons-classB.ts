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

  /* ---------------- B-26 Asking directions ---------------- */
  {
    id: "b-26",
    cls: "B",
    number: 26,
    title: "Asking directions",
    jpTitle: "道案内",
    xp: 15,
    coins: 15,
    steps: [
      {
        type: "intro",
        title: "Asking directions",
        objectives: ["Use landmarks (corner, light)", "Say near / far", "Follow walking directions"],
      },
      { type: "teach", jp: "しんごう", romaji: "shingō", en: "traffic light" },
      { type: "teach", jp: "かど", romaji: "kado", en: "corner" },
      { type: "teach", jp: "こうさてん", romaji: "kōsaten", en: "intersection" },
      { type: "teach", label: "Phrase", jp: "つぎのかどをみぎ", romaji: "tsugi no kado o migi", en: "right at the next corner" },
      {
        type: "choice",
        prompt: "Which means “corner”?",
        options: [{ label: "かど", correct: true }, { label: "しんごう" }, { label: "こうさてん" }],
      },
      { type: "teach", jp: "ちかい", romaji: "chikai", en: "near / close", note: "とおい = far." },
      { type: "teach", label: "Phrase", jp: "あるいてごふん", romaji: "aruite go-fun", en: "5 minutes on foot", note: "あるいて = on foot / walking." },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "Turn left at the traffic light.",
        tiles: ["しんごう", "を", "ひだりに", "まがって", "ください"],
        answer: ["しんごう", "を", "ひだりに", "まがって", "ください"],
      },
      {
        type: "listen",
        audio: "つぎのかどをみぎ",
        prompt: "What did you hear?",
        options: [{ label: "つぎのかどをみぎ (right at the next corner)", correct: true }, { label: "しんごうをひだり" }, { label: "あるいてごふん" }],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "しんごう", en: "traffic light" },
          { jp: "かど", en: "corner" },
          { jp: "ちかい", en: "near" },
          { jp: "とおい", en: "far" },
        ],
      },
      {
        type: "choice",
        prompt: "“It's 5 minutes on foot” = あるいて ___",
        options: [{ label: "ごふん", correct: true }, { label: "とおい" }, { label: "かど" }],
      },
    ],
  },

  /* ---------------- B-27 At a convenience store ---------------- */
  {
    id: "b-27",
    cls: "B",
    number: 27,
    title: "At a convenience store",
    jpTitle: "コンビニで",
    xp: 15,
    coins: 15,
    steps: [
      {
        type: "intro",
        title: "At a convenience store",
        objectives: ["Understand shop greetings", "Answer the cashier's questions", "Ask for a bag / heating"],
      },
      { type: "teach", jp: "コンビニ", romaji: "konbini", en: "convenience store" },
      { type: "teach", label: "Phrase", jp: "いらっしゃいませ", romaji: "irasshaimase", en: "Welcome! (shop greeting)" },
      { type: "teach", jp: "ふくろ", romaji: "fukuro", en: "bag", note: "レジぶくろ = plastic shopping bag." },
      { type: "teach", label: "Phrase", jp: "ふくろはいりますか", romaji: "fukuro wa irimasu ka", en: "Do you need a bag?" },
      { type: "teach", label: "Phrase", jp: "おねがいします", romaji: "onegaishimasu", en: "Yes, please." },
      {
        type: "choice",
        prompt: "Shop staff greet you with…",
        options: [{ label: "いらっしゃいませ", correct: true }, { label: "おねがいします" }, { label: "ふくろ" }],
      },
      { type: "teach", label: "Phrase", jp: "あたためますか", romaji: "atatamemasu ka", en: "Shall I heat it up?", note: "Common at konbini for bentō." },
      {
        type: "listen",
        audio: "ふくろはいりますか",
        prompt: "What did you hear?",
        options: [{ label: "ふくろはいりますか (Do you need a bag?)", correct: true }, { label: "あたためますか" }, { label: "いらっしゃいませ" }],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "コンビニ", en: "convenience store" },
          { jp: "ふくろ", en: "bag" },
          { jp: "いらっしゃいませ", en: "Welcome!" },
          { jp: "おねがいします", en: "Yes, please" },
        ],
      },
      {
        type: "choice",
        prompt: "The clerk asks “Need a bag?” — you want one. Say…",
        options: [{ label: "おねがいします", correct: true }, { label: "いらっしゃいませ" }, { label: "あたためますか" }],
      },
    ],
  },

  /* ---------------- B-28 Ordering at a restaurant ---------------- */
  {
    id: "b-28",
    cls: "B",
    number: 28,
    title: "Ordering at a restaurant",
    jpTitle: "レストランで注文する",
    xp: 15,
    coins: 15,
    steps: [
      {
        type: "intro",
        title: "Ordering at a restaurant",
        objectives: ["Get the server's attention", "Ask for the menu & water", "Ask what's recommended"],
      },
      { type: "teach", label: "Phrase", jp: "すみません", romaji: "sumimasen", en: "Excuse me", note: "Use this to call the server." },
      { type: "teach", jp: "メニュー", romaji: "menyū", en: "menu" },
      { type: "teach", label: "Phrase", jp: "メニューをください", romaji: "menyū o kudasai", en: "The menu, please." },
      { type: "teach", jp: "みず", romaji: "mizu", en: "water" },
      {
        type: "choice",
        prompt: "How do you get the server's attention?",
        options: [{ label: "すみません", correct: true }, { label: "おいしい" }, { label: "メニュー" }],
      },
      { type: "teach", jp: "おすすめ", romaji: "osusume", en: "recommendation" },
      { type: "teach", label: "Phrase", jp: "おすすめはなんですか", romaji: "osusume wa nan desu ka", en: "What do you recommend?" },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "Water, please.",
        tiles: ["みず", "を", "ください"],
        answer: ["みず", "を", "ください"],
      },
      { type: "teach", label: "Phrase", jp: "おかいけいおねがいします", romaji: "okaikei onegaishimasu", en: "The check, please." },
      {
        type: "listen",
        audio: "おすすめはなんですか",
        prompt: "What did you hear?",
        options: [{ label: "おすすめはなんですか (What do you recommend?)", correct: true }, { label: "メニューをください" }, { label: "おかいけいおねがいします" }],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "すみません", en: "Excuse me" },
          { jp: "メニュー", en: "menu" },
          { jp: "おすすめ", en: "recommendation" },
          { jp: "おかいけい", en: "the check" },
        ],
      },
      {
        type: "choice",
        prompt: "Ask “What do you recommend?”",
        options: [{ label: "おすすめはなんですか", correct: true }, { label: "おかいけいおねがいします" }, { label: "メニューをください" }],
      },
    ],
  },

  /* ---------------- B-29 Talking about food ---------------- */
  {
    id: "b-29",
    cls: "B",
    number: 29,
    title: "Talking about food",
    jpTitle: "食べ物の話",
    xp: 15,
    coins: 15,
    steps: [
      {
        type: "intro",
        title: "Talking about food",
        objectives: ["Describe taste", "Use この + noun", "Say what you're not a fan of"],
      },
      { type: "teach", jp: "おいしい", romaji: "oishii", en: "delicious" },
      { type: "teach", jp: "あまい", romaji: "amai", en: "sweet" },
      { type: "teach", jp: "からい", romaji: "karai", en: "spicy / salty" },
      { type: "teach", jp: "まずい", romaji: "mazui", en: "bad-tasting", note: "Blunt — soften with あまり…ない in polite talk." },
      {
        type: "choice",
        prompt: "Which means “delicious”?",
        options: [{ label: "おいしい", correct: true }, { label: "からい" }, { label: "まずい" }, { label: "あまい" }],
      },
      { type: "teach", label: "Grammar", jp: "このすしはおいしいです", romaji: "kono sushi wa oishii desu", en: "This sushi is delicious.", note: "この + noun = “this ~”." },
      { type: "teach", jp: "にがて", romaji: "nigate", en: "not a fan of (food)", note: "なっとうは にがてです = I'm not a fan of nattō." },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "This ramen is spicy.",
        tiles: ["この", "ラーメン", "は", "からい", "です"],
        answer: ["この", "ラーメン", "は", "からい", "です"],
      },
      {
        type: "listen",
        audio: "このすしはおいしいです",
        prompt: "What did you hear?",
        options: [{ label: "このすしはおいしいです (This sushi is delicious.)", correct: true }, { label: "このラーメンはからいです" }, { label: "なっとうはにがてです" }],
      },
      {
        type: "match",
        prompt: "Match the tastes",
        pairs: [
          { jp: "おいしい", en: "delicious" },
          { jp: "あまい", en: "sweet" },
          { jp: "からい", en: "spicy" },
          { jp: "にがて", en: "not a fan" },
        ],
      },
      {
        type: "choice",
        prompt: "“This is sweet” = これは ___ です",
        options: [{ label: "あまい", correct: true }, { label: "からい" }, { label: "まずい" }],
      },
    ],
  },

  /* ---------------- B-30 Making plans ---------------- */
  {
    id: "b-30",
    cls: "B",
    number: 30,
    title: "Making plans",
    jpTitle: "予定を立てる",
    xp: 15,
    coins: 15,
    steps: [
      {
        type: "intro",
        title: "Making plans",
        objectives: ["Invite with 〜ませんか", "Suggest with 〜ましょう", "Talk about the weekend"],
      },
      { type: "teach", jp: "よてい", romaji: "yotei", en: "plan(s) / schedule" },
      { type: "teach", jp: "しゅうまつ", romaji: "shūmatsu", en: "weekend" },
      { type: "teach", label: "Grammar", jp: "いきませんか", romaji: "ikimasen ka", en: "Won't you go? (invitation)", note: "〜ませんか = a polite invitation." },
      { type: "teach", label: "Grammar", jp: "いきましょう", romaji: "ikimashō", en: "Let's go", note: "〜ましょう = “let's ~”." },
      {
        type: "choice",
        prompt: "Invite someone: “Won't you go?”",
        options: [{ label: "いきませんか", correct: true }, { label: "いきましょう" }, { label: "いきます" }],
      },
      { type: "teach", jp: "いっしょに", romaji: "issho ni", en: "together" },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "Let's go to a movie together.",
        tiles: ["いっしょに", "えいがに", "いきましょう"],
        answer: ["いっしょに", "えいがに", "いきましょう"],
      },
      { type: "teach", label: "Phrase", jp: "よていがあります", romaji: "yotei ga arimasu", en: "I have plans." },
      {
        type: "listen",
        audio: "しゅうまついっしょにいきませんか",
        prompt: "What did you hear?",
        options: [{ label: "しゅうまついっしょにいきませんか (Want to go together this weekend?)", correct: true }, { label: "いきましょう" }, { label: "よていがあります" }],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "よてい", en: "plans" },
          { jp: "しゅうまつ", en: "weekend" },
          { jp: "いっしょに", en: "together" },
          { jp: "いきましょう", en: "let's go" },
        ],
      },
      {
        type: "choice",
        prompt: "Suggest “Let's go!”",
        options: [{ label: "いきましょう", correct: true }, { label: "いきませんか" }, { label: "よていがあります" }],
      },
    ],
  },
];

