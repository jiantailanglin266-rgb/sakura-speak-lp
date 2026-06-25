/* Review Sheets — concise per-lesson recap for quick studying. Mock. */

export type RecapWord = { jp: string; romaji: string; en: string };
export type GrammarNote = { point: string; jp: string; romaji: string; en: string };

export type ReviewSheet = {
  id: string;
  cls: string;
  number: number;
  title: string;
  jp: string;
  due: boolean;
  points: string[];
  grammar: GrammarNote[];
  vocab: RecapWord[];
};

export const reviewSheets: ReviewSheet[] = [
  {
    id: "b-28",
    cls: "B",
    number: 28,
    title: "Ordering at a restaurant",
    jp: "レストランで注文する",
    due: true,
    points: [
      "Use すみません to politely get a server's attention.",
      "Ask for things with [noun] を ください.",
      "Ask for recommendations with おすすめはなんですか.",
    ],
    grammar: [
      { point: "Requesting with ～をください", jp: "メニューをください", romaji: "menyū o kudasai", en: "The menu, please." },
      { point: "Asking what's recommended", jp: "おすすめはなんですか", romaji: "osusume wa nan desu ka", en: "What do you recommend?" },
    ],
    vocab: [
      { jp: "メニュー", romaji: "menyū", en: "Menu" },
      { jp: "みず", romaji: "mizu", en: "Water" },
      { jp: "おすすめ", romaji: "osusume", en: "Recommendation" },
      { jp: "ください", romaji: "kudasai", en: "Please give me" },
    ],
  },
  {
    id: "b-27",
    cls: "B",
    number: 27,
    title: "Buying a ticket",
    jp: "きっぷを買う",
    due: true,
    points: [
      "Ask the price with いくらですか.",
      "Say a destination with [place] まで.",
      "Numbers + えん for prices.",
    ],
    grammar: [
      { point: "Asking the price", jp: "いくらですか", romaji: "ikura desu ka", en: "How much is it?" },
      { point: "Destination with まで", jp: "とうきょうまで", romaji: "tōkyō made", en: "To Tokyo" },
    ],
    vocab: [
      { jp: "きっぷ", romaji: "kippu", en: "Ticket" },
      { jp: "えき", romaji: "eki", en: "Station" },
      { jp: "いくら", romaji: "ikura", en: "How much" },
      { jp: "でんしゃ", romaji: "densha", en: "Train" },
    ],
  },
  {
    id: "a-2",
    cls: "A",
    number: 2,
    title: "Greetings",
    jp: "あいさつ",
    due: false,
    points: [
      "Match the greeting to the time of day.",
      "はじめまして when meeting someone for the first time.",
      "ありがとう / すみません are everyday essentials.",
    ],
    grammar: [
      { point: "First meeting", jp: "はじめまして", romaji: "hajimemashite", en: "Nice to meet you." },
    ],
    vocab: [
      { jp: "おはよう", romaji: "ohayō", en: "Good morning" },
      { jp: "こんにちは", romaji: "konnichiwa", en: "Hello" },
      { jp: "こんばんは", romaji: "konbanwa", en: "Good evening" },
      { jp: "ありがとう", romaji: "arigatō", en: "Thank you" },
    ],
  },
  {
    id: "a-5",
    cls: "A",
    number: 5,
    title: "This & that",
    jp: "これ・それ・あれ",
    due: false,
    points: [
      "これ = near me, それ = near you, あれ = far from both.",
      "Combine with をください to point and ask.",
    ],
    grammar: [
      { point: "Pointing politely", jp: "これをください", romaji: "kore o kudasai", en: "This one, please." },
    ],
    vocab: [
      { jp: "これ", romaji: "kore", en: "This" },
      { jp: "それ", romaji: "sore", en: "That" },
      { jp: "あれ", romaji: "are", en: "That (over there)" },
    ],
  },
];
