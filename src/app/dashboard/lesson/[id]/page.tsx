import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LessonPlayer from "@/components/lesson/LessonPlayer";
import { getLesson, playableIds } from "@/lib/lesson";

export const metadata: Metadata = { title: "Lesson", robots: { index: false, follow: false } };

export function generateStaticParams() {
  return playableIds.map((id) => ({ id }));
}
export const dynamicParams = false;

export default async function LessonByIdPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const lesson = getLesson(id);
  if (!lesson) notFound();
  return <LessonPlayer lesson={lesson} />;
}
