import type { Metadata } from "next";
import LessonPlayer from "@/components/lesson/LessonPlayer";
import { sampleLesson } from "@/lib/lesson";

export const metadata: Metadata = {
  title: "Lesson",
};

export default function LessonPage() {
  return <LessonPlayer lesson={sampleLesson} />;
}
