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

  /* ---------------- B-31 Inviting someone ---------------- */
  {
    id: "b-31",
    cls: "B",
    number: 31,
    title: "Inviting someone",
    jpTitle: "さそう",
    xp: 15,
    coins: 15,
    steps: [
      {
        type: "intro",
        title: "Inviting someone",
        objectives: ["Invite with “how about…?”", "Accept an invitation", "Decline politely"],
      },
      { type: "teach", label: "Phrase", jp: "いっしょにどうですか", romaji: "issho ni dō desu ka", en: "How about (it) together?", note: "どうですか = how about?" },
      { type: "teach", label: "Phrase", jp: "いいですね", romaji: "ii desu ne", en: "Sounds good! (accept)" },
      { type: "teach", label: "Phrase", jp: "ざんねんですが", romaji: "zannen desu ga", en: "Sorry, but… (decline)" },
      { type: "teach", label: "Phrase", jp: "またこんど", romaji: "mata kondo", en: "maybe next time" },
      {
        type: "choice",
        prompt: "Accept an invitation:",
        options: [{ label: "いいですね", correct: true }, { label: "ざんねんですが" }, { label: "またこんど" }],
      },
      { type: "teach", jp: "ひま", romaji: "hima", en: "free / not busy", note: "いそがしい = busy." },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "Shall we eat together?",
        tiles: ["いっしょに", "ごはん", "たべませんか"],
        answer: ["いっしょに", "ごはん", "たべませんか"],
      },
      {
        type: "listen",
        audio: "いっしょにえいがにいきませんか",
        prompt: "What did you hear?",
        options: [{ label: "いっしょにえいがにいきませんか (Want to see a movie together?)", correct: true }, { label: "いいですね" }, { label: "ざんねんですが" }],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "いいですね", en: "Sounds good" },
          { jp: "ざんねんですが", en: "Sorry, but…" },
          { jp: "ひま", en: "free" },
          { jp: "いそがしい", en: "busy" },
        ],
      },
      {
        type: "choice",
        prompt: "Politely decline:",
        options: [{ label: "ざんねんですが", correct: true }, { label: "いいですね" }, { label: "いっしょにどうですか" }],
      },
    ],
  },

  /* ---------------- B-32 On the phone ---------------- */
  {
    id: "b-32",
    cls: "B",
    number: 32,
    title: "On the phone",
    jpTitle: "電話で",
    xp: 15,
    coins: 15,
    steps: [
      {
        type: "intro",
        title: "On the phone",
        objectives: ["Answer the phone", "Ask for someone", "Leave a simple message"],
      },
      { type: "teach", jp: "でんわ", romaji: "denwa", en: "phone / call" },
      { type: "teach", label: "Phrase", jp: "もしもし", romaji: "moshi moshi", en: "Hello (on the phone)" },
      { type: "teach", label: "Phrase", jp: "たなかさんおねがいします", romaji: "tanaka-san onegaishimasu", en: "May I speak to Mr. Tanaka?" },
      { type: "teach", label: "Phrase", jp: "いまいません", romaji: "ima imasen", en: "(He/she) isn't here now", note: "いません = isn't (for people/animals)." },
      {
        type: "choice",
        prompt: "Answer the phone:",
        options: [{ label: "もしもし", correct: true }, { label: "いらっしゃいませ" }, { label: "またこんど" }],
      },
      { type: "teach", jp: "るすばんでんわ", romaji: "rusuban denwa", en: "voicemail / answering machine" },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "I'll call again.",
        tiles: ["また", "でんわ", "します"],
        answer: ["また", "でんわ", "します"],
      },
      {
        type: "listen",
        audio: "たなかさんおねがいします",
        prompt: "What did you hear?",
        options: [{ label: "たなかさんおねがいします (May I speak to Tanaka?)", correct: true }, { label: "またでんわします" }, { label: "いまいません" }],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "でんわ", en: "phone" },
          { jp: "もしもし", en: "Hello (phone)" },
          { jp: "いません", en: "isn't here" },
          { jp: "るすばんでんわ", en: "voicemail" },
        ],
      },
      {
        type: "choice",
        prompt: "Ask to speak to Mr. Tanaka:",
        options: [{ label: "たなかさんおねがいします", correct: true }, { label: "もしもし" }, { label: "るすばんでんわ" }],
      },
    ],
  },

  /* ---------------- B-33 Shopping for clothes ---------------- */
  {
    id: "b-33",
    cls: "B",
    number: 33,
    title: "Shopping for clothes",
    jpTitle: "服を買う",
    xp: 15,
    coins: 15,
    steps: [
      {
        type: "intro",
        title: "Shopping for clothes",
        objectives: ["Ask to try clothes on", "Ask for another size/color", "Decide with 〜にします"],
      },
      { type: "teach", jp: "ふく", romaji: "fuku", en: "clothes" },
      { type: "teach", jp: "サイズ", romaji: "saizu", en: "size" },
      { type: "teach", label: "Grammar", jp: "きてみてもいいですか", romaji: "kite mite mo ii desu ka", en: "May I try it on?", note: "〜てもいいですか = “may I ~?”." },
      { type: "teach", label: "Phrase", jp: "ほかのいろ", romaji: "hoka no iro", en: "another color", note: "ほか = other." },
      {
        type: "choice",
        prompt: "Which means “size”?",
        options: [{ label: "サイズ", correct: true }, { label: "ふく" }, { label: "いろ" }],
      },
      { type: "teach", label: "Grammar", jp: "これにします", romaji: "kore ni shimasu", en: "I'll take this one.", note: "〜にします = “decide on ~”." },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "May I try it on?",
        tiles: ["きて", "みても", "いいですか"],
        answer: ["きて", "みても", "いいですか"],
      },
      {
        type: "listen",
        audio: "きてみてもいいですか",
        prompt: "What did you hear?",
        options: [{ label: "きてみてもいいですか (May I try it on?)", correct: true }, { label: "これにします" }, { label: "ほかのいろ" }],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "ふく", en: "clothes" },
          { jp: "サイズ", en: "size" },
          { jp: "ほか", en: "other" },
          { jp: "これにします", en: "I'll take this" },
        ],
      },
      {
        type: "choice",
        prompt: "Decide: “I'll take this one.”",
        options: [{ label: "これにします", correct: true }, { label: "きてみてもいいですか" }, { label: "ほかのいろ" }],
      },
    ],
  },

  /* ---------------- B-34 At the post office ---------------- */
  {
    id: "b-34",
    cls: "B",
    number: 34,
    title: "At the post office",
    jpTitle: "郵便局で",
    xp: 15,
    coins: 15,
    steps: [
      {
        type: "intro",
        title: "At the post office",
        objectives: ["Know post-office words", "Buy stamps", "Say you want to send something"],
      },
      { type: "teach", jp: "ゆうびんきょく", romaji: "yūbinkyoku", en: "post office" },
      { type: "teach", jp: "きって", romaji: "kitte", en: "stamp" },
      { type: "teach", jp: "てがみ", romaji: "tegami", en: "letter", note: "はがき = postcard." },
      { type: "teach", jp: "こづつみ", romaji: "kozutsumi", en: "parcel / package" },
      {
        type: "choice",
        prompt: "Which means “stamp”?",
        options: [{ label: "きって", correct: true }, { label: "てがみ" }, { label: "こづつみ" }],
      },
      { type: "teach", label: "Grammar", jp: "てがみをおくりたいです", romaji: "tegami o okuritai desu", en: "I'd like to send a letter.", note: "〜たいです = “want to ~”. おくります = send." },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "I'd like to send a letter.",
        tiles: ["てがみ", "を", "おくりたいです"],
        answer: ["てがみ", "を", "おくりたいです"],
      },
      {
        type: "listen",
        audio: "きってをください",
        prompt: "What did you hear?",
        options: [{ label: "きってをください (Stamps, please.)", correct: true }, { label: "こづつみをおくります" }, { label: "てがみをおくりたいです" }],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "ゆうびんきょく", en: "post office" },
          { jp: "きって", en: "stamp" },
          { jp: "てがみ", en: "letter" },
          { jp: "こづつみ", en: "parcel" },
        ],
      },
      {
        type: "choice",
        prompt: "“I want to send” = おくり ___ です",
        options: [{ label: "たい", correct: true }, { label: "ました" }, { label: "ません" }],
      },
    ],
  },

  /* ---------------- B-35 At the bank ---------------- */
  {
    id: "b-35",
    cls: "B",
    number: 35,
    title: "At the bank",
    jpTitle: "銀行で",
    xp: 15,
    coins: 15,
    steps: [
      {
        type: "intro",
        title: "At the bank",
        objectives: ["Know bank words", "Withdraw and deposit", "Exchange money"],
      },
      { type: "teach", jp: "ぎんこう", romaji: "ginkō", en: "bank" },
      { type: "teach", jp: "こうざ", romaji: "kōza", en: "account" },
      { type: "teach", jp: "おろします", romaji: "oroshimasu", en: "withdraw", note: "あずけます = deposit." },
      { type: "teach", jp: "りょうがえ", romaji: "ryōgae", en: "money exchange" },
      {
        type: "choice",
        prompt: "Which means “bank”?",
        options: [{ label: "ぎんこう", correct: true }, { label: "こうざ" }, { label: "りょうがえ" }],
      },
      { type: "teach", label: "Grammar", jp: "おかねをおろします", romaji: "okane o oroshimasu", en: "withdraw money", note: "おかね = money." },
      {
        type: "arrange",
        prompt: "Build the sentence",
        en: "I withdraw money.",
        tiles: ["おかね", "を", "おろします"],
        answer: ["おかね", "を", "おろします"],
      },
      {
        type: "listen",
        audio: "おかねをおろします",
        prompt: "What did you hear?",
        options: [{ label: "おかねをおろします (I withdraw money.)", correct: true }, { label: "おかねをあずけます" }, { label: "りょうがえします" }],
      },
      {
        type: "match",
        prompt: "Match the pairs",
        pairs: [
          { jp: "ぎんこう", en: "bank" },
          { jp: "こうざ", en: "account" },
          { jp: "おろします", en: "withdraw" },
          { jp: "りょうがえ", en: "money exchange" },
        ],
      },
      {
        type: "choice",
        prompt: "“deposit money” = おかねを ___",
        options: [{ label: "あずけます", correct: true }, { label: "おろします" }, { label: "りょうがえ" }],
      },
    ],
  },
];


