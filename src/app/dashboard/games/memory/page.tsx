import type { Metadata } from "next";
import MemoryMatch from "@/components/games/MemoryMatch";

export const metadata: Metadata = { title: "Memory Match" };

export default function Page() {
  return <MemoryMatch />;
}
