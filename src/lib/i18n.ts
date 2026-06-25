/* Bilingual (EN / JA) content for the public LP. */

export type Lang = "en" | "ja";

export const translations = {
  en: {
    nav: ["Why Sakura Speak", "Features", "Curriculum", "Meemi", "Pricing", "FAQ"],
    header: { signIn: "Sign in", startFree: "Start free" },

    hero: {
      badge: "3-day free trial · cancel anytime",
      title1: "Speak Japanese,",
      accent: "beautifully.",
      body1:
        "Sakura Speak is a long-term, structured platform for real Japanese fluency — 80 lessons, vocabulary by situation, mini-games, achievements and a warm community. Your companion ",
      body2: " is with you every step.",
      ctaStart: "Start your free trial",
      ctaSee: "See what's inside",
      stats: [
        { value: "80", label: "structured lessons" },
        { value: "4", label: "classes, A → D" },
        { value: "3-day", label: "free trial" },
        { value: "∞", label: "ways to play & learn" },
      ],
    },

    about: {
      eyebrow: "Why Sakura Speak",
      title: "More than an app — a place to ",
      accent: "grow into Japanese",
      subtitle:
        "Sakura Speak blends a serious, systematic curriculum with the warmth, play and community that keep you coming back day after day.",
      pillars: [
        { title: "Structured, not scattered", desc: "A real curriculum with a clear path — 80 lessons across 4 classes — so you always know where you are and what's next." },
        { title: "Joyful by design", desc: "Game-like energy, rewards and a living interface. Learning that feels like a space you want to step into, not a chore." },
        { title: "Built for fluency", desc: "Not a casual time-killer. Sakura Speak is made for learners serious about speaking Japanese for the long run." },
      ],
    },

    features: {
      eyebrow: "Inside the member area",
      title: "A learning ",
      accent: "command center",
      subtitle:
        "After you sign in, the Student Dashboard is your home base — a portal to everything, designed to feel exciting even when there's a lot to do.",
      items: [
        { title: "Your learning command center", jp: "ダッシュボード", desc: "A home base — not just a dashboard. Progress gauges, portals to every feature, and a world that makes you want to come back." },
        { title: "80 structured lessons", jp: "全80レッスン", desc: "Four classes (A–D) take you step by step from your very first word to confident, flowing conversation." },
        { title: "Vocabulary & review sheets", jp: "単語・復習シート", desc: "Words grouped by real situations — Kitchen, Doctor, Restaurant, Travel — plus quick review summaries." },
        { title: "Mini-games & flashcards", jp: "ミニゲーム", desc: "Light, replayable games with XP, coins and streaks. Easy, Normal, Hard — pick your comfort, never your reward." },
        { title: "Text & voice chatrooms", jp: "コミュニティ", desc: "Practice for real. Join rooms, attend voice events with native speakers, and grow alongside fellow learners." },
        { title: "Achievements & streaks", jp: "実績システム", desc: "Bronze to Sakura to Platinum. Celebrate every milestone with glowing reward pop-ups that keep momentum alive." },
      ],
    },

    curriculum: {
      eyebrow: "The curriculum",
      title: "80 lessons. 4 classes. ",
      accent: "One clear path.",
      subtitle:
        "A step-by-step journey from your very first hiragana to natural, flowing conversation — designed to actually take you to fluency.",
      classes: [
        { title: "Foundations", range: "Lessons 1–20", desc: "Hiragana, katakana, first words and survival phrases. Start speaking from day one." },
        { title: "Everyday Japanese", range: "Lessons 21–40", desc: "Daily conversations, particles, and the grammar that powers real sentences." },
        { title: "Fluency Builders", range: "Lessons 41–60", desc: "Richer expression, nuance, and the confidence to hold longer conversations." },
        { title: "Toward Fluent", range: "Lessons 61–80", desc: "Natural, flowing Japanese — the finish line of a complete, structured journey." },
      ],
      note: "Plus Vocabulary Sheets by situation (Kitchen, Doctor, Travel…), Review Sheets for fast recall, and a News Section updated regularly.",
    },

    meemi: {
      eyebrow: "Meet Meemi",
      title: "Your companion, ",
      accent: "made your way",
      subtitle:
        "Everyone starts with the classic white-fur, blue-eyed Meemi. Customize the look for free, then pick from a set of avatar portraits to use as your profile picture.",
      variations: "5–10 expressive avatar portraits — no need for a real photo.",
      free: ["Fur color", "Eye color", "Eyelashes", "Cheek blush", "Tops & bottoms", "Socks & shoes"],
      freeTitle: "Free from day one",
      freeDesc: "No coins needed to express yourself.",
      coinNote: "Unlock more with coins — outfits, hairstyles, frames, animations, seasonal & achievement-only items.",
    },

    community: {
      eyebrow: "Community & rewards",
      title: "Stay motivated, ",
      accent: "stay connected",
      subtitle:
        "Streaks, achievements and a friendly community turn steady practice into something you genuinely look forward to.",
      tiersTitle: "Achievement tiers",
      cards: [
        { title: "Text & voice chatrooms", desc: "Public, private, community and scheduled event rooms — with raise-hand, speaker queues and host controls." },
        { title: "Live events with speakers", desc: "Join voice events with native speakers and guests. RSVP and add them straight to your calendar." },
        { title: "Safe & moderated", desc: "Report, block, mute and clear moderation roles keep the community kind and focused on learning." },
      ],
    },

    pricing: {
      eyebrow: "Pricing",
      title: "One platform. ",
      accent: "Pick your pace.",
      subtitle:
        "Every plan unlocks the exact same content and features — the only difference is how long you keep access. Start with 3 days free.",
      planNames: ["Monthly", "3-Month", "Yearly", "Lifetime"],
      periods: ["per month", "every 3 months", "per year", "once, forever"],
      planNotes: ["Flexible, cancel anytime.", "A little more, a little cheaper.", "Best value for a full year of progress.", "Pay once. Learn for life."],
      badge: "Most popular",
      ctaTrial: "Start free trial",
      ctaLifetime: "Buy lifetime",
      notes: [
        "Every plan unlocks the exact same content & features — only the duration differs.",
        "Auto-renews. Coupons & discount codes supported. Multi-currency at checkout.",
        "Cancel anytime; refunds aren't issued for forgotten cancellations.",
      ],
      secure: "Secure checkout powered by Stripe · multi-currency · Google / Apple / email sign-in",
    },

    faq: {
      eyebrow: "FAQ",
      title: "Questions, answered",
      subtitle: "Everything you might want to know before you start.",
      items: [
        { q: "Is there a free trial?", a: "Yes — every new user gets a 3-day free trial with full access. No commitment until you decide Sakura Speak is for you." },
        { q: "What's the difference between the plans?", a: "Nothing except how long you keep access. There are no premium-locked lessons or paywalled features — everyone learns from the same complete platform." },
        { q: "How do I sign in?", a: "Sign in with Google, Apple, or a regular email and password. Email verification is required, and you can stay signed in on up to 2 devices." },
        { q: "Do I need to be a beginner?", a: "Not at all. The 80-lesson curriculum starts from absolute zero, but vocabulary sheets, review sheets and mini-games let you jump in wherever suits you." },
        { q: "What is Meemi?", a: "Meemi is your companion mascot — your customizable avatar and a friendly guide throughout the app. Start with the classic white-fur, blue-eyed Meemi and make it your own." },
        { q: "Can I cancel anytime?", a: "Yes. Manage or cancel your subscription whenever you like. We'll show a short, optional survey so we can keep improving Sakura Speak." },
      ],
    },

    finalCta: {
      title1: "Your Japanese journey",
      title2: "starts today 🌸",
      body: "Try Sakura Speak free for 3 days. Full access, no commitment — Meemi is waiting for you.",
      ctaStart: "Start your free trial",
      ctaExplore: "Explore features",
    },

    footer: {
      tagline: "A long-term, structured home for becoming fluent in Japanese.",
      explore: "Explore",
      getStarted: "Get started",
      pricingPlans: "Pricing & plans",
      startTrial: "Start free trial",
      rights: "All rights reserved.",
      privacy: "Privacy",
      terms: "Terms",
    },
  },

  ja: {
    nav: ["特長", "機能", "カリキュラム", "Meemi", "料金", "FAQ"],
    header: { signIn: "ログイン", startFree: "無料で始める" },

    hero: {
      badge: "3日間無料トライアル・いつでも解約OK",
      title1: "美しく話す、",
      accent: "日本語を。",
      body1:
        "Sakura Speak は、日本語の本当の流暢さを目指す長期・体系的な学習プラットフォーム。全80レッスン、場面別の語彙、ミニゲーム、実績、あたたかいコミュニティ。相棒の ",
      body2: " がいつもそばで一緒に学びます。",
      ctaStart: "無料トライアルを始める",
      ctaSee: "中身を見る",
      stats: [
        { value: "80", label: "体系的レッスン" },
        { value: "4", label: "クラス A → D" },
        { value: "3日間", label: "無料トライアル" },
        { value: "∞", label: "学び方は無限" },
      ],
    },

    about: {
      eyebrow: "特長",
      title: "アプリ以上の、",
      accent: "日本語が育つ場所",
      subtitle:
        "本格的で体系的なカリキュラムに、毎日また来たくなるあたたかさ・遊び心・コミュニティを掛け合わせました。",
      pillars: [
        { title: "散らからない、体系的な学び", desc: "全80レッスン・4クラスの明確な道のり。今どこにいて、次に何をするかが常に分かります。" },
        { title: "楽しさを設計に", desc: "ゲームのような高揚感、報酬、生きたUI。「勉強」ではなく、自然と入りたくなる空間に。" },
        { title: "流暢さのために", desc: "暇つぶしアプリではありません。長期的に日本語を話せるようになりたい人のための設計です。" },
      ],
    },

    features: {
      eyebrow: "会員エリアの中身",
      title: "学びの",
      accent: "コマンドセンター",
      subtitle:
        "ログイン後の Student Dashboard があなたのホーム拠点。すべての機能への入り口で、やることが多くてもワクワクする設計です。",
      items: [
        { title: "学びのコマンドセンター", jp: "ダッシュボード", desc: "単なるダッシュボードではなくホーム拠点。進捗ゲージ、各機能への入り口、また戻りたくなる世界。" },
        { title: "全80レッスン", jp: "全80レッスン", desc: "4クラス(A〜D)で、最初のひと言から自信を持って流れるように話せるところまで段階的に。" },
        { title: "単語・復習シート", jp: "単語・復習シート", desc: "キッチン・病院・レストラン・旅行など場面別の語彙＋短時間で見返せる復習サマリー。" },
        { title: "ミニゲーム・フラッシュカード", jp: "ミニゲーム", desc: "軽く繰り返し遊べるゲーム。XP・コイン・ストリーク付き。Easy/Normal/Hardは快適さで選べ、報酬は同じ。" },
        { title: "テキスト・ボイスチャット", jp: "コミュニティ", desc: "実践の場。ルームに参加し、ネイティブとのボイスイベントで仲間と一緒に成長。" },
        { title: "実績・ストリーク", jp: "実績システム", desc: "Bronzeから Sakura、Platinumまで。光る演出のポップアップで、すべての達成を祝福。" },
      ],
    },

    curriculum: {
      eyebrow: "カリキュラム",
      title: "80レッスン。4クラス。",
      accent: "ひとつの明確な道。",
      subtitle:
        "最初のひらがなから、自然で流れるような会話まで。本当に流暢さへ到達できるよう段階的に設計しています。",
      classes: [
        { title: "基礎", range: "レッスン 1〜20", desc: "ひらがな・カタカナ、最初の単語とサバイバル表現。初日から話し始めよう。" },
        { title: "日常の日本語", range: "レッスン 21〜40", desc: "日常会話、助詞、そして本物の文を作る文法。" },
        { title: "流暢さの土台", range: "レッスン 41〜60", desc: "より豊かな表現、ニュアンス、長い会話を続ける自信。" },
        { title: "流暢へ", range: "レッスン 61〜80", desc: "自然で流れる日本語。体系的な旅のゴールライン。" },
      ],
      note: "さらに、場面別の単語シート(キッチン・病院・旅行…)、すぐ思い出せる復習シート、定期更新のニュースセクションも。",
    },

    meemi: {
      eyebrow: "Meemi 紹介",
      title: "あなただけの、",
      accent: "相棒 Meemi",
      subtitle:
        "全員、白い毛・青い目のクラシックな Meemi からスタート。無料で見た目をカスタマイズし、プロフィール画像用のアバターも選べます。",
      variations: "表情豊かなアバター画像が5〜10種類。実写は不要です。",
      free: ["毛色", "目の色", "まつ毛", "チーク", "トップス・ボトムス", "ソックス・シューズ"],
      freeTitle: "初日から無料",
      freeDesc: "自己表現にコインは要りません。",
      coinNote: "コインでさらに解放 — 服・髪型・フレーム・アニメーション・季節&実績限定アイテム。",
    },

    community: {
      eyebrow: "コミュニティ＆報酬",
      title: "やる気が続く、",
      accent: "仲間とつながる",
      subtitle:
        "ストリーク、実績、やさしいコミュニティが、日々の練習を「楽しみ」に変えます。",
      tiersTitle: "実績ティア",
      cards: [
        { title: "テキスト・ボイスチャット", desc: "公開/非公開/コミュニティ/予約イベントのルーム。挙手・スピーカー待機列・ホスト管理付き。" },
        { title: "スピーカーとのライブイベント", desc: "ネイティブやゲストとのボイスイベントに参加。RSVPしてカレンダーに追加。" },
        { title: "安全＆モデレーション", desc: "通報・ブロック・ミュート、明確な権限で、やさしく学びに集中できる場を維持。" },
      ],
    },

    pricing: {
      eyebrow: "料金",
      title: "ひとつの場所。",
      accent: "自分のペースで。",
      subtitle:
        "どのプランも全く同じコンテンツ・機能を解放します。違いは利用期間だけ。まずは3日間無料で。",
      planNames: ["マンスリー", "3ヶ月", "イヤリー", "ライフタイム"],
      periods: ["1ヶ月ごと", "3ヶ月ごと", "1年ごと", "一度きり・永続"],
      planNotes: ["柔軟・いつでも解約。", "少しお得な月額。", "1年分の最良コスパ。", "一度の支払いで一生学べる。"],
      badge: "人気No.1",
      ctaTrial: "無料トライアル",
      ctaLifetime: "ライフタイム購入",
      notes: [
        "全プランで同じコンテンツ・機能を解放。違いは期間のみ。",
        "自動更新。クーポン・割引コード対応。多通貨で決済可能。",
        "いつでも解約可。解約忘れによる返金は行いません。",
      ],
      secure: "Stripeによる安全な決済 · 多通貨対応 · Google / Apple / メールでログイン",
    },

    faq: {
      eyebrow: "よくある質問",
      title: "疑問にお答えします",
      subtitle: "始める前に知っておきたいことすべて。",
      items: [
        { q: "無料トライアルはありますか？", a: "はい。新規ユーザー全員に、全機能を使える3日間の無料トライアルがあります。納得してから契約できます。" },
        { q: "プランごとの違いは？", a: "違いは利用期間だけです。プレミアム限定レッスンや課金の壁はなく、全員が同じ完全なプラットフォームで学びます。" },
        { q: "ログイン方法は？", a: "Google・Apple・メール＆パスワードでログインできます。メール認証が必要で、最大2台まで同時ログイン可能です。" },
        { q: "初心者でなくても大丈夫？", a: "もちろんです。80レッスンはゼロから始まりますが、単語シート・復習シート・ミニゲームで好きなところから始められます。" },
        { q: "Meemi とは？", a: "Meemi は相棒マスコット。カスタマイズできるアバターであり、アプリ全体を案内するやさしいガイドです。白い毛・青い目から自分らしく。" },
        { q: "いつでも解約できますか？", a: "はい。いつでも管理・解約できます。サービス改善のため、任意の短いアンケートを表示します。" },
      ],
    },

    finalCta: {
      title1: "あなたの日本語の旅は",
      title2: "今日から 🌸",
      body: "Sakura Speak を3日間無料でお試し。全機能・契約不要、Meemi が待っています。",
      ctaStart: "無料トライアルを始める",
      ctaExplore: "機能を見る",
    },

    footer: {
      tagline: "日本語の流暢さを目指す、長期・体系的なホーム。",
      explore: "見る",
      getStarted: "始める",
      pricingPlans: "料金プラン",
      startTrial: "無料トライアル",
      rights: "All rights reserved.",
      privacy: "プライバシー",
      terms: "利用規約",
    },
  },
} as const;

export type Dict = (typeof translations)["en"];
