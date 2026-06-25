/* Categorized vocabulary — the shared content source for Vocabulary Sheets,
   lessons and mini-games. Expandable: add categories/words here and everything
   that reads `allWords` (e.g. the games) gains them automatically. */

export type Word = { jp: string; romaji: string; en: string };

export type VocabCategory = {
  slug: string;
  label: string;
  jp: string;
  emoji: string;
  accent: "pink" | "blue" | "mint" | "gold" | "lilac";
  words: Word[];
};

export const vocabCategories: VocabCategory[] = [
  {
    slug: "greetings",
    label: "Greetings",
    jp: "あいさつ",
    emoji: "🌸",
    accent: "pink",
    words: [
      { jp: "こんにちは", romaji: "konnichiwa", en: "Hello" },
      { jp: "おはよう", romaji: "ohayō", en: "Good morning" },
      { jp: "こんばんは", romaji: "konbanwa", en: "Good evening" },
      { jp: "さようなら", romaji: "sayōnara", en: "Goodbye" },
      { jp: "ありがとう", romaji: "arigatō", en: "Thank you" },
      { jp: "すみません", romaji: "sumimasen", en: "Excuse me" },
      { jp: "はい", romaji: "hai", en: "Yes" },
      { jp: "いいえ", romaji: "iie", en: "No" },
      { jp: "おねがいします", romaji: "onegaishimasu", en: "Please" },
      { jp: "はじめまして", romaji: "hajimemashite", en: "Nice to meet you" },
    ],
  },
  {
    slug: "restaurant",
    label: "Restaurant",
    jp: "レストラン",
    emoji: "🍽️",
    accent: "blue",
    words: [
      { jp: "メニュー", romaji: "menyū", en: "Menu" },
      { jp: "みず", romaji: "mizu", en: "Water" },
      { jp: "おすすめ", romaji: "osusume", en: "Recommendation" },
      { jp: "ちゅうもん", romaji: "chūmon", en: "Order" },
      { jp: "かんじょう", romaji: "kanjō", en: "Bill" },
      { jp: "おいしい", romaji: "oishii", en: "Delicious" },
      { jp: "ください", romaji: "kudasai", en: "Please give me" },
      { jp: "よやく", romaji: "yoyaku", en: "Reservation" },
      { jp: "いただきます", romaji: "itadakimasu", en: "Let's eat" },
      { jp: "ごちそうさま", romaji: "gochisōsama", en: "Thanks for the meal" },
    ],
  },
  {
    slug: "kitchen",
    label: "Kitchen",
    jp: "キッチン",
    emoji: "🍳",
    accent: "gold",
    words: [
      { jp: "れいぞうこ", romaji: "reizōko", en: "Refrigerator" },
      { jp: "なべ", romaji: "nabe", en: "Pot" },
      { jp: "ほうちょう", romaji: "hōchō", en: "Knife" },
      { jp: "おさら", romaji: "osara", en: "Plate" },
      { jp: "コップ", romaji: "koppu", en: "Cup" },
      { jp: "スプーン", romaji: "supūn", en: "Spoon" },
      { jp: "フォーク", romaji: "fōku", en: "Fork" },
      { jp: "はし", romaji: "hashi", en: "Chopsticks" },
      { jp: "たまご", romaji: "tamago", en: "Egg" },
      { jp: "しお", romaji: "shio", en: "Salt" },
    ],
  },
  {
    slug: "fruits",
    label: "Fruits",
    jp: "くだもの",
    emoji: "🍓",
    accent: "pink",
    words: [
      { jp: "りんご", romaji: "ringo", en: "Apple" },
      { jp: "みかん", romaji: "mikan", en: "Mandarin" },
      { jp: "バナナ", romaji: "banana", en: "Banana" },
      { jp: "いちご", romaji: "ichigo", en: "Strawberry" },
      { jp: "ぶどう", romaji: "budō", en: "Grapes" },
      { jp: "もも", romaji: "momo", en: "Peach" },
      { jp: "なし", romaji: "nashi", en: "Pear" },
      { jp: "すいか", romaji: "suika", en: "Watermelon" },
      { jp: "メロン", romaji: "meron", en: "Melon" },
      { jp: "レモン", romaji: "remon", en: "Lemon" },
    ],
  },
  {
    slug: "travel",
    label: "Travel",
    jp: "りょこう",
    emoji: "✈️",
    accent: "blue",
    words: [
      { jp: "えき", romaji: "eki", en: "Station" },
      { jp: "でんしゃ", romaji: "densha", en: "Train" },
      { jp: "ひこうき", romaji: "hikōki", en: "Airplane" },
      { jp: "きっぷ", romaji: "kippu", en: "Ticket" },
      { jp: "ホテル", romaji: "hoteru", en: "Hotel" },
      { jp: "ちず", romaji: "chizu", en: "Map" },
      { jp: "パスポート", romaji: "pasupōto", en: "Passport" },
      { jp: "みぎ", romaji: "migi", en: "Right" },
      { jp: "ひだり", romaji: "hidari", en: "Left" },
      { jp: "まっすぐ", romaji: "massugu", en: "Straight ahead" },
    ],
  },
  {
    slug: "shopping",
    label: "Shopping",
    jp: "かいもの",
    emoji: "🛍️",
    accent: "lilac",
    words: [
      { jp: "みせ", romaji: "mise", en: "Shop" },
      { jp: "いくら", romaji: "ikura", en: "How much" },
      { jp: "おかね", romaji: "okane", en: "Money" },
      { jp: "たかい", romaji: "takai", en: "Expensive" },
      { jp: "やすい", romaji: "yasui", en: "Cheap" },
      { jp: "かう", romaji: "kau", en: "To buy" },
      { jp: "ふくろ", romaji: "fukuro", en: "Bag" },
      { jp: "レジ", romaji: "reji", en: "Cashier" },
      { jp: "カード", romaji: "kādo", en: "Card" },
      { jp: "えん", romaji: "en", en: "Yen" },
    ],
  },
  {
    slug: "doctor",
    label: "Doctor's Office",
    jp: "びょういん",
    emoji: "🏥",
    accent: "mint",
    words: [
      { jp: "びょういん", romaji: "byōin", en: "Hospital" },
      { jp: "いしゃ", romaji: "isha", en: "Doctor" },
      { jp: "くすり", romaji: "kusuri", en: "Medicine" },
      { jp: "ねつ", romaji: "netsu", en: "Fever" },
      { jp: "いたい", romaji: "itai", en: "It hurts" },
      { jp: "かぜ", romaji: "kaze", en: "A cold" },
      { jp: "げんき", romaji: "genki", en: "Healthy" },
      { jp: "あたま", romaji: "atama", en: "Head" },
      { jp: "おなか", romaji: "onaka", en: "Stomach" },
      { jp: "だいじょうぶ", romaji: "daijōbu", en: "It's okay" },
    ],
  },
  {
    slug: "animals",
    label: "Animals",
    jp: "どうぶつ",
    emoji: "🐾",
    accent: "gold",
    words: [
      { jp: "いぬ", romaji: "inu", en: "Dog" },
      { jp: "ねこ", romaji: "neko", en: "Cat" },
      { jp: "とり", romaji: "tori", en: "Bird" },
      { jp: "さかな", romaji: "sakana", en: "Fish" },
      { jp: "うま", romaji: "uma", en: "Horse" },
      { jp: "うさぎ", romaji: "usagi", en: "Rabbit" },
      { jp: "くま", romaji: "kuma", en: "Bear" },
      { jp: "ぞう", romaji: "zō", en: "Elephant" },
      { jp: "とら", romaji: "tora", en: "Tiger" },
      { jp: "さる", romaji: "saru", en: "Monkey" },
    ],
  },
];

// Flattened, de-duplicated by Japanese spelling — the shared pool.
export const allWords: Word[] = (() => {
  const seen = new Set<string>();
  const out: Word[] = [];
  for (const c of vocabCategories) {
    for (const w of c.words) {
      if (!seen.has(w.jp)) {
        seen.add(w.jp);
        out.push(w);
      }
    }
  }
  return out;
})();

export const totalWords = allWords.length;
