import type { Metadata } from "next";
import ScrambleGame from "@/components/games/ScrambleGame";

export const metadata: Metadata = { title: "Sentence Scramble" };

export default function Page() {
  return <ScrambleGame />;
}
