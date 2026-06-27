/* Vocabulary content — categorized "vocabulary sheets" by subject.
   Source: Sakura Speak official Vocabulary Lists (107-page set).
   Japanese in the source PDF is not machine-extractable, so sheets are
   transcribed (kanji + kana + romaji + English) in batches via OCR.
   Subjects with words: [] are listed but not yet transcribed ("coming soon"). */

export type Word = { jp: string; kanji?: string; romaji: string; en: string };

export type Subject = { slug: string; label: string; words: Word[] };

export type VocabCategory = {
  slug: string;
  label: string;
  emoji: string;
  accent: "pink" | "blue" | "mint" | "gold" | "lilac";
  subjects: Subject[];
};

const slug = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// coming-soon subjects (names only)
const soon = (...names: string[]): Subject[] =>
  names.map((n) => ({ slug: slug(n), label: n, words: [] }));

// populated subject
const sheet = (label: string, words: Word[]): Subject => ({
  slug: slug(label),
  label,
  words,
});

export const vocabCategories: VocabCategory[] = [
  {
    slug: "home",
    label: "Home & Daily Life",
    emoji: "🏠",
    accent: "pink",
    subjects: [
      sheet("Living Room", [
        { kanji: "居間", jp: "いま", romaji: "ima", en: "Living room (formal)" },
        { jp: "リビング", romaji: "ribingu", en: "Living room (casual)" },
        { jp: "ソファ", romaji: "sofa", en: "Sofa / couch" },
        { kanji: "椅子", jp: "いす", romaji: "isu", en: "Chair" },
        { jp: "テーブル", romaji: "teeburu", en: "Table" },
        { jp: "カーペット", romaji: "kaapetto", en: "Carpet / rug" },
        { jp: "クッション", romaji: "kusshon", en: "Cushion" },
        { jp: "テレビ", romaji: "terebi", en: "TV" },
        { jp: "リモコン", romaji: "rimokon", en: "Remote control" },
        { kanji: "本棚", jp: "ほんだな", romaji: "hondana", en: "Bookshelf" },
        { kanji: "絵", jp: "え", romaji: "e", en: "Painting / picture" },
        { kanji: "時計", jp: "とけい", romaji: "tokei", en: "Clock" },
        { kanji: "照明", jp: "しょうめい", romaji: "shoumei", en: "Lighting" },
        { jp: "ランプ", romaji: "ranpu", en: "Lamp" },
        { kanji: "観葉植物", jp: "かんようしょくぶつ", romaji: "kanyou shokubutsu", en: "Houseplant" },
        { jp: "カーテン", romaji: "kaaten", en: "Curtain" },
        { kanji: "窓", jp: "まど", romaji: "mado", en: "Window" },
        { jp: "エアコン", romaji: "eakon", en: "Air conditioner" },
        { kanji: "扇風機", jp: "せんぷうき", romaji: "senpuuki", en: "Electric fan" },
        { kanji: "暖房", jp: "だんぼう", romaji: "danbou", en: "Heater" },
        { kanji: "棚", jp: "たな", romaji: "tana", en: "Shelf" },
        { kanji: "写真", jp: "しゃしん", romaji: "shashin", en: "Photograph" },
        { kanji: "電気", jp: "でんき", romaji: "denki", en: "Light / electricity" },
        { jp: "コンセント", romaji: "konsento", en: "Outlet" },
        { kanji: "電源コード", jp: "でんげんコード", romaji: "dengen koodo", en: "Power cord" },
        { jp: "スピーカー", romaji: "supiikaa", en: "Speaker" },
      ]),
      sheet("Kitchen", [
        { kanji: "台所", jp: "だいどころ", romaji: "daidokoro", en: "Kitchen" },
        { jp: "キッチン", romaji: "kicchin", en: "Kitchen (casual)" },
        { kanji: "冷蔵庫", jp: "れいぞうこ", romaji: "reizouko", en: "Refrigerator" },
        { kanji: "冷凍庫", jp: "れいとうこ", romaji: "reitouko", en: "Freezer" },
        { kanji: "電子レンジ", jp: "でんしレンジ", romaji: "denshi renji", en: "Microwave" },
        { kanji: "炊飯器", jp: "すいはんき", romaji: "suihanki", en: "Rice cooker" },
        { jp: "オーブン", romaji: "oobun", en: "Oven" },
        { jp: "トースター", romaji: "toosutaa", en: "Toaster" },
        { kanji: "電気ケトル", jp: "でんきケトル", romaji: "denki ketoru", en: "Electric kettle" },
        { jp: "コンロ", romaji: "konro", en: "Stovetop / burner" },
        { jp: "フライパン", romaji: "furaipan", en: "Frying pan" },
        { kanji: "鍋", jp: "なべ", romaji: "nabe", en: "Pot" },
        { kanji: "包丁", jp: "ほうちょう", romaji: "houchou", en: "Kitchen knife" },
        { kanji: "まな板", jp: "まないた", romaji: "manaita", en: "Cutting board" },
        { kanji: "お玉", jp: "おたま", romaji: "otama", en: "Ladle" },
        { kanji: "菜箸", jp: "さいばし", romaji: "saibashi", en: "Cooking chopsticks" },
        { jp: "ボウル", romaji: "bouru", en: "Bowl" },
        { jp: "ざる", romaji: "zaru", en: "Strainer / colander" },
        { kanji: "計量カップ", jp: "けいりょうカップ", romaji: "keiryou kappu", en: "Measuring cup" },
        { kanji: "計量スプーン", jp: "けいりょうスプーン", romaji: "keiryou supuun", en: "Measuring spoon" },
      ]),
      ...soon(
        "Bathroom & Laundry", "Bedroom", "Appliances & Electronics", "Furniture",
        "Cleaning Supplies & Chores", "Tools & Fixing Things", "Housing Types & Renting"
      ),
    ],
  },
  {
    slug: "shopping",
    label: "Shopping & Retail",
    emoji: "🛍️",
    accent: "lilac",
    subjects: [
      sheet("Supermarket Phrases", [
        { jp: "いらっしゃいませ", romaji: "irasshaimase", en: "Welcome (store greeting)" },
        { kanji: "袋はいりますか", jp: "ふくろはいりますか", romaji: "fukuro wa irimasu ka", en: "Do you need a bag?" },
        { kanji: "レジ袋", jp: "レジぶくろ", romaji: "reji bukuro", en: "Plastic checkout bag" },
        { jp: "ポイントカード", romaji: "pointo kaado", en: "Point / loyalty card" },
        { kanji: "温めますか", jp: "あたためますか", romaji: "atatamemasu ka", en: "Shall I heat this up?" },
        { kanji: "試食", jp: "ししょく", romaji: "shishoku", en: "Food sample / tasting" },
        { kanji: "半額", jp: "はんがく", romaji: "hangaku", en: "Half price" },
        { kanji: "本日のお買い得品", jp: "ほんじつのおかいどくひん", romaji: "honjitsu no okaidoku hin", en: "Today's bargain items" },
        { jp: "おつり", romaji: "otsuri", en: "Change (money)" },
        { kanji: "領収書", jp: "りょうしゅうしょ", romaji: "ryoushuusho", en: "Receipt" },
      ]),
      ...soon(
        "Clothes Shopping", "Shoe Shopping", "Bags & Accessories", "Jewelry & Watches",
        "Makeup & Skincare", "Sizes, Patterns & Materials", "Describing Items",
        "At the Register / Checkout", "Department Store Floors", "Thrift Shopping"
      ),
    ],
  },
  {
    slug: "food",
    label: "Food & Dining",
    emoji: "🍽️",
    accent: "gold",
    subjects: [
      sheet("Fancy Restaurant", [
        { kanji: "予約", jp: "よやく", romaji: "yoyaku", en: "Reservation" },
        { kanji: "コース料理", jp: "コースりょうり", romaji: "koosu ryouri", en: "Course meal" },
        { kanji: "前菜", jp: "ぜんさい", romaji: "zensai", en: "Appetizer" },
        { jp: "メインディッシュ", romaji: "mein disshu", en: "Main dish" },
        { jp: "デザート", romaji: "dezaato", en: "Dessert" },
        { jp: "ワインリスト", romaji: "wain risuto", en: "Wine list" },
        { jp: "ソムリエ", romaji: "somurie", en: "Sommelier" },
        { kanji: "個室", jp: "こしつ", romaji: "koshitsu", en: "Private room" },
        { kanji: "窓側の席", jp: "まどがわのせき", romaji: "madogawa no seki", en: "Window seat" },
      ]),
      sheet("Fruits", [
        { kanji: "果物", jp: "くだもの", romaji: "kudamono", en: "Fruit (general)" },
        { jp: "りんご", romaji: "ringo", en: "Apple" },
        { jp: "みかん", romaji: "mikan", en: "Mandarin orange" },
        { jp: "バナナ", romaji: "banana", en: "Banana" },
        { jp: "ぶどう", romaji: "budou", en: "Grapes" },
        { jp: "マスカット", romaji: "masukatto", en: "Muscat / green grapes" },
        { jp: "もも", romaji: "momo", en: "Peach" },
        { jp: "いちご", romaji: "ichigo", en: "Strawberry" },
        { jp: "すいか", romaji: "suika", en: "Watermelon" },
        { jp: "メロン", romaji: "meron", en: "Melon" },
        { jp: "なし", romaji: "nashi", en: "Pear (Asian pear)" },
        { jp: "さくらんぼ", romaji: "sakuranbo", en: "Cherry" },
        { jp: "パイナップル", romaji: "painappuru", en: "Pineapple" },
        { jp: "キウイ", romaji: "kiui", en: "Kiwi" },
        { jp: "レモン", romaji: "remon", en: "Lemon" },
        { jp: "グレープフルーツ", romaji: "gureepufuruutsu", en: "Grapefruit" },
        { jp: "ライム", romaji: "raimu", en: "Lime" },
        { jp: "マンゴー", romaji: "mangoo", en: "Mango" },
        { jp: "アボカド", romaji: "abokado", en: "Avocado" },
        { kanji: "柿", jp: "かき", romaji: "kaki", en: "Persimmon" },
        { kanji: "栗", jp: "くり", romaji: "kuri", en: "Chestnut" },
        { jp: "ブルーベリー", romaji: "buruuberii", en: "Blueberry" },
        { jp: "ラズベリー", romaji: "razuberii", en: "Raspberry" },
        { jp: "ブラックベリー", romaji: "burakkuberii", en: "Blackberry" },
        { jp: "ココナッツ", romaji: "kokonattsu", en: "Coconut" },
        { jp: "ドリアン", romaji: "dorian", en: "Durian" },
        { jp: "ドラゴンフルーツ", romaji: "doragon furuutsu", en: "Dragon fruit" },
        { jp: "パッションフルーツ", romaji: "passhon furuutsu", en: "Passion fruit" },
      ]),
      sheet("Vegetables", [
        { kanji: "野菜", jp: "やさい", romaji: "yasai", en: "Vegetables" },
        { jp: "にんじん", romaji: "ninjin", en: "Carrot" },
        { jp: "じゃがいも", romaji: "jagaimo", en: "Potato" },
        { jp: "さつまいも", romaji: "satsumaimo", en: "Sweet potato" },
        { jp: "たまねぎ", romaji: "tamanegi", en: "Onion" },
        { jp: "ねぎ", romaji: "negi", en: "Green onion / scallion" },
        { jp: "にんにく", romaji: "ninniku", en: "Garlic" },
        { jp: "しょうが", romaji: "shouga", en: "Ginger" },
        { jp: "だいこん", romaji: "daikon", en: "Daikon radish" },
        { jp: "れんこん", romaji: "renkon", en: "Lotus root" },
        { jp: "ごぼう", romaji: "gobou", en: "Burdock root" },
        { jp: "キャベツ", romaji: "kyabetsu", en: "Cabbage" },
        { jp: "レタス", romaji: "retasu", en: "Lettuce" },
        { jp: "はくさい", romaji: "hakusai", en: "Napa cabbage" },
        { jp: "ほうれんそう", romaji: "hourensou", en: "Spinach" },
        { jp: "チンゲンサイ", romaji: "chingensai", en: "Bok choy" },
        { jp: "ブロッコリー", romaji: "burokkorii", en: "Broccoli" },
        { jp: "カリフラワー", romaji: "karifurawaa", en: "Cauliflower" },
        { jp: "トマト", romaji: "tomato", en: "Tomato" },
        { jp: "きゅうり", romaji: "kyuuri", en: "Cucumber" },
        { jp: "なす", romaji: "nasu", en: "Eggplant" },
        { jp: "ピーマン", romaji: "piiman", en: "Green bell pepper" },
        { jp: "パプリカ", romaji: "papurika", en: "Paprika / sweet pepper" },
        { jp: "えだまめ", romaji: "edamame", en: "Edamame" },
        { jp: "とうもろこし", romaji: "toumorokoshi", en: "Corn" },
        { jp: "かぼちゃ", romaji: "kabocha", en: "Pumpkin / squash" },
        { jp: "ズッキーニ", romaji: "zukkiini", en: "Zucchini" },
        { jp: "もやし", romaji: "moyashi", en: "Bean sprouts" },
        { jp: "きのこ", romaji: "kinoko", en: "Mushroom" },
        { jp: "しいたけ", romaji: "shiitake", en: "Shiitake mushroom" },
      ]),
      sheet("Seafood", [
        { kanji: "魚介類", jp: "ぎょかいるい", romaji: "gyokairui", en: "Seafood" },
        { kanji: "魚", jp: "さかな", romaji: "sakana", en: "Fish" },
        { kanji: "鮭", jp: "さけ", romaji: "sake", en: "Salmon" },
        { jp: "サーモン", romaji: "saamon", en: "Salmon (sashimi)" },
        { jp: "まぐろ", romaji: "maguro", en: "Tuna" },
        { kanji: "赤身", jp: "あかみ", romaji: "akami", en: "Lean tuna (red meat)" },
        { jp: "中トロ", romaji: "chuutoro", en: "Medium-fatty tuna" },
        { jp: "大トロ", romaji: "ootoro", en: "Fatty tuna" },
        { jp: "かつお", romaji: "katsuo", en: "Skipjack / bonito" },
        { jp: "ぶり", romaji: "buri", en: "Yellowtail" },
        { jp: "いか", romaji: "ika", en: "Squid" },
        { jp: "たこ", romaji: "tako", en: "Octopus" },
        { jp: "えび", romaji: "ebi", en: "Shrimp" },
        { jp: "かに", romaji: "kani", en: "Crab" },
        { jp: "ほたて", romaji: "hotate", en: "Scallop" },
        { jp: "あさり", romaji: "asari", en: "Clam" },
        { jp: "しじみ", romaji: "shijimi", en: "Freshwater clam" },
        { jp: "かき", romaji: "kaki", en: "Oyster" },
        { jp: "うに", romaji: "uni", en: "Sea urchin" },
        { jp: "いくら", romaji: "ikura", en: "Salmon roe" },
        { jp: "たらこ", romaji: "tarako", en: "Cod roe" },
        { kanji: "海藻", jp: "かいそう", romaji: "kaisou", en: "Seaweed" },
        { jp: "わかめ", romaji: "wakame", en: "Soft edible seaweed" },
        { jp: "のり", romaji: "nori", en: "Dried seaweed (nori)" },
      ]),
      sheet("Drinks", [
        { kanji: "飲み物", jp: "のみもの", romaji: "nomimono", en: "Drinks / beverages" },
        { kanji: "水", jp: "みず", romaji: "mizu", en: "Water" },
        { kanji: "炭酸水", jp: "たんさんすい", romaji: "tansansui", en: "Sparkling water" },
        { kanji: "お茶", jp: "おちゃ", romaji: "ocha", en: "Tea" },
        { kanji: "緑茶", jp: "りょくちゃ", romaji: "ryokucha", en: "Green tea" },
        { kanji: "麦茶", jp: "むぎちゃ", romaji: "mugicha", en: "Roasted barley tea" },
        { kanji: "ほうじ茶", jp: "ほうじちゃ", romaji: "houjicha", en: "Roasted green tea" },
        { kanji: "ウーロン茶", jp: "ウーロンちゃ", romaji: "uuron cha", en: "Oolong tea" },
        { jp: "ミルクティー", romaji: "miruku tii", en: "Milk tea" },
        { jp: "コーヒー", romaji: "koohii", en: "Coffee" },
        { jp: "アイスコーヒー", romaji: "aisu koohii", en: "Iced coffee" },
        { jp: "カフェラテ", romaji: "kafe rate", en: "Café latte" },
        { jp: "カプチーノ", romaji: "kapuchiino", en: "Cappuccino" },
        { jp: "エスプレッソ", romaji: "esupuresso", en: "Espresso" },
        { jp: "ココア", romaji: "kokoa", en: "Hot chocolate / cocoa" },
        { jp: "ジュース", romaji: "juusu", en: "Juice" },
        { jp: "オレンジジュース", romaji: "orenji juusu", en: "Orange juice" },
        { jp: "りんごジュース", romaji: "ringo juusu", en: "Apple juice" },
        { jp: "野菜ジュース", kanji: "野菜ジュース", romaji: "yasai juusu", en: "Vegetable juice" },
        { jp: "ソーダ", romaji: "sooda", en: "Soda" },
        { jp: "コーラ", romaji: "koora", en: "Cola" },
        { jp: "ラムネ", romaji: "ramune", en: "Ramune (Japanese soda)" },
        { jp: "エナジードリンク", romaji: "enajii dorinku", en: "Energy drink" },
        { kanji: "豆乳", jp: "とうにゅう", romaji: "tounyuu", en: "Soy milk" },
        { kanji: "お酒", jp: "おさけ", romaji: "osake", en: "Alcohol / sake" },
        { kanji: "日本酒", jp: "にほんしゅ", romaji: "nihonshu", en: "Sake (rice wine)" },
        { kanji: "焼酎", jp: "しょうちゅう", romaji: "shouchuu", en: "Shochu" },
        { jp: "ビール", romaji: "biiru", en: "Beer" },
        { jp: "生ビール", kanji: "生ビール", romaji: "nama biiru", en: "Draft beer" },
        { jp: "ハイボール", romaji: "haibooru", en: "Highball" },
        { jp: "レモンサワー", romaji: "remon sawaa", en: "Lemon sour" },
        { jp: "チューハイ", romaji: "chuuhai", en: "Chu-hi" },
        { jp: "カクテル", romaji: "kakuteru", en: "Cocktail" },
        { jp: "ウイスキー", romaji: "uisukii", en: "Whisky" },
        { jp: "ワイン", romaji: "wain", en: "Wine" },
        { kanji: "赤ワイン", jp: "あかワイン", romaji: "aka wain", en: "Red wine" },
        { kanji: "白ワイン", jp: "しろワイン", romaji: "shiro wain", en: "White wine" },
        { jp: "シャンパン", romaji: "shanpan", en: "Champagne" },
        { kanji: "梅酒", jp: "うめしゅ", romaji: "umeshu", en: "Plum wine (umeshu)" },
      ]),
      sheet("Desserts & Sweets", [
        { kanji: "甘いもの", jp: "あまいもの", romaji: "amaimono", en: "Sweets / sweet things" },
        { jp: "デザート", romaji: "dezaato", en: "Dessert" },
        { jp: "スイーツ", romaji: "suiitsu", en: "Sweets" },
        { kanji: "和菓子", jp: "わがし", romaji: "wagashi", en: "Traditional Japanese sweets" },
        { kanji: "団子", jp: "だんご", romaji: "dango", en: "Dumplings on a stick" },
        { jp: "あんこ", romaji: "anko", en: "Sweet red bean paste" },
        { kanji: "大福", jp: "だいふく", romaji: "daifuku", en: "Mochi with filling" },
        { kanji: "いちご大福", jp: "いちごだいふく", romaji: "ichigo daifuku", en: "Strawberry daifuku" },
        { kanji: "たい焼き", jp: "たいやき", romaji: "taiyaki", en: "Fish-shaped filled cake" },
        { kanji: "どら焼き", jp: "どらやき", romaji: "dorayaki", en: "Red-bean pancake sandwich" },
        { kanji: "羊羹", jp: "ようかん", romaji: "youkan", en: "Sweet red bean jelly" },
        { kanji: "最中", jp: "もなか", romaji: "monaka", en: "Wafer with bean filling" },
        { jp: "おはぎ", romaji: "ohagi", en: "Sweet rice ball with bean paste" },
        { jp: "ぜんざい", romaji: "zenzai", en: "Sweet red bean porridge" },
        { kanji: "かき氷", jp: "かきごおり", romaji: "kakigoori", en: "Shaved ice" },
      ]),
      ...soon(
        "Meat & Protein", "Grains, Rice & Bread", "Spices & Condiments", "Sauces & Oils",
        "Japanese Cuisine", "Western Cuisine", "Chinese / Korean Cuisine",
        "Convenience Store Items", "Bento Ingredients", "Street Food & Festivals",
        "Izakaya", "Cafe", "Delivery & Takeout", "Allergies & Dietary Needs"
      ),
    ],
  },
  {
    slug: "travel",
    label: "Travel & Tourism",
    emoji: "✈️",
    accent: "blue",
    subjects: [
      sheet("At the Airport", [
        { kanji: "空港", jp: "くうこう", romaji: "kuukou", en: "Airport" },
        { jp: "ターミナル", romaji: "taaminaru", en: "Terminal" },
        { kanji: "国際線", jp: "こくさいせん", romaji: "kokusaisen", en: "International flight" },
        { kanji: "国内線", jp: "こくないせん", romaji: "kokunaisen", en: "Domestic flight" },
        { kanji: "搭乗券", jp: "とうじょうけん", romaji: "toujouken", en: "Boarding pass" },
        { kanji: "搭乗ゲート", jp: "とうじょうゲート", romaji: "toujou geeto", en: "Boarding gate" },
        { kanji: "出国", jp: "しゅっこく", romaji: "shukkoku", en: "Departure (leaving the country)" },
        { kanji: "入国審査", jp: "にゅうこくしんさ", romaji: "nyuukoku shinsa", en: "Immigration" },
        { kanji: "税関", jp: "ぜいかん", romaji: "zeikan", en: "Customs" },
        { kanji: "免税店", jp: "めんぜいてん", romaji: "menzeiten", en: "Duty-free shop" },
        { jp: "パスポート", romaji: "pasupooto", en: "Passport" },
        { kanji: "手荷物", jp: "てにもつ", romaji: "tenimotsu", en: "Hand luggage" },
        { kanji: "遅延", jp: "ちえん", romaji: "chien", en: "Delay" },
      ]),
      ...soon(
        "Transportation", "Sightseeing Words", "Hotels & Ryokan", "Directions & Maps",
        "Tourist Attractions", "Luggage & Packing", "Useful Emergency Phrases"
      ),
    ],
  },
  {
    slug: "public",
    label: "Public Life & Services",
    emoji: "🏛️",
    accent: "mint",
    subjects: [
      sheet("Banking & ATMs", [
        { kanji: "銀行", jp: "ぎんこう", romaji: "ginkou", en: "Bank" },
        { kanji: "口座", jp: "こうざ", romaji: "kouza", en: "Bank account" },
        { kanji: "通帳", jp: "つうちょう", romaji: "tsuuchou", en: "Bankbook / passbook" },
        { kanji: "印鑑", jp: "いんかん", romaji: "inkan", en: "Seal / personal stamp" },
        { kanji: "暗証番号", jp: "あんしょうばんごう", romaji: "anshou bangou", en: "PIN" },
        { kanji: "引き出す", jp: "ひきだす", romaji: "hikidasu", en: "To withdraw" },
        { kanji: "預ける", jp: "あずける", romaji: "azukeru", en: "To deposit" },
        { kanji: "振り込み", jp: "ふりこみ", romaji: "furikomi", en: "Bank transfer" },
        { kanji: "残高", jp: "ざんだか", romaji: "zandaka", en: "Balance" },
        { kanji: "手数料", jp: "てすうりょう", romaji: "tesuuryou", en: "Fee / commission" },
        { kanji: "両替", jp: "りょうがえ", romaji: "ryougae", en: "Currency exchange" },
        { kanji: "為替レート", jp: "かわせレート", romaji: "kawase reeto", en: "Exchange rate" },
        { kanji: "窓口", jp: "まどぐち", romaji: "madoguchi", en: "Teller window" },
        { jp: "キャッシュカード", romaji: "kyasshu kaado", en: "Cash card" },
        { jp: "クレジットカード", romaji: "kurejitto kaado", en: "Credit card" },
        { jp: "ローン", romaji: "roon", en: "Loan" },
        { kanji: "利子", jp: "りし", romaji: "rishi", en: "Interest" },
        { jp: "ATM", romaji: "eetiiemu", en: "ATM" },
      ]),
      ...soon(
        "Immigration & Embassy", "Police & Safety", "Fire & Ambulance",
        "Pharmacy & Medications", "Insurance & Health Terms", "City Hall & Paperwork",
        "Garbage & Recycling Rules"
      ),
    ],
  },
  {
    slug: "education",
    label: "Education & Career",
    emoji: "🎓",
    accent: "pink",
    subjects: soon(
      "Classroom Objects", "School Subjects", "School Life & Schedule", "University & Exams",
      "Jobs & Occupations", "Workplace Vocabulary", "Business Etiquette",
      "Company Hierarchy", "Emails & Formal Phrases"
    ),
  },
  {
    slug: "social",
    label: "Social & Identity",
    emoji: "🧑‍🤝‍🧑",
    accent: "lilac",
    subjects: soon(
      "Countries & Nationalities", "Languages", "Family & Relatives",
      "Relationships & Dating", "Gender", "Pronouns", "Personality Traits",
      "Emotions & Feelings", "Politics"
    ),
  },
  {
    slug: "nature",
    label: "Nature & Seasons",
    emoji: "🌿",
    accent: "mint",
    subjects: soon(
      "Pets", "Insects", "Sea Creatures", "Flowers & Trees", "Weather",
      "Seasons & Events", "Natural Disasters", "Mountains, Rivers, Lakes"
    ),
  },
  {
    slug: "leisure",
    label: "Leisure & Entertainment",
    emoji: "🎮",
    accent: "blue",
    subjects: soon(
      "Music & Instruments", "Concerts & Events", "Anime & Manga", "Video Games",
      "Theme Parks", "Nightlife & Bars", "Hobbies", "DIY & Crafts",
      "Reading & Books", "Movies & Theater"
    ),
  },
  {
    slug: "conversation",
    label: "Conversation & Slang",
    emoji: "💬",
    accent: "gold",
    subjects: soon(
      "Casual Phrases", "Dialects", "Filler Words", "Speech Style Differences",
      "Counters", "Onomatopoeia", "Time Words", "Conjunctions"
    ),
  },
];

// Flattened pool of all transcribed words (used by mini-games & search).
export const allWords: Word[] = (() => {
  const seen = new Set<string>();
  const out: Word[] = [];
  for (const c of vocabCategories)
    for (const s of c.subjects)
      for (const w of s.words)
        if (!seen.has(w.jp)) {
          seen.add(w.jp);
          out.push(w);
        }
  return out;
})();

export const totalWords = allWords.length;
export const totalSubjects = vocabCategories.reduce((n, c) => n + c.subjects.length, 0);
export const readySubjects = vocabCategories.reduce(
  (n, c) => n + c.subjects.filter((s) => s.words.length > 0).length,
  0
);
