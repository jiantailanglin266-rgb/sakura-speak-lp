import type { Metadata } from "next";
import WordBlitz from "@/components/games/WordBlitz";

export const metadata: Metadata = { title: "Word Blitz" };

export default function Page() {
  return <WordBlitz />;
}
