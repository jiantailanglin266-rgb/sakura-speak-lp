/* Browser speech-synthesis helper — used as the lesson "voice reference". */
export function speak(text: string) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  try {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "ja-JP";
    u.rate = 0.88;
    u.pitch = 1.05;
    const ja = window.speechSynthesis
      .getVoices()
      .find((v) => v.lang === "ja-JP" || v.lang.startsWith("ja"));
    if (ja) u.voice = ja;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  } catch {
    /* no-op */
  }
}
