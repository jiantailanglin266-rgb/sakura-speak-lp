import type { Metadata } from "next";
import ListenGame from "@/components/games/ListenGame";

export const metadata: Metadata = { title: "Listen It" };

export default function Page() {
  return <ListenGame />;
}
