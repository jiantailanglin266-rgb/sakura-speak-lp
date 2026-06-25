import type { Metadata } from "next";
import Link from "next/link";
import SideNav from "@/components/dashboard/SideNav";
import TopBar from "@/components/dashboard/TopBar";
import MobileNav from "@/components/dashboard/MobileNav";
import Icon from "@/components/ui/Icon";
import LessonMap from "@/components/lesson/LessonMap";

export const metadata: Metadata = {
  title: "Lessons",
};

export default function LessonsPage() {
  return (
    <div className="flex min-h-screen bg-gradient-to-b from-cream via-cream to-pink-soft/25">
      <SideNav />

      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar />

        <main className="mx-auto w-full max-w-3xl flex-1 px-4 pb-28 pt-6 sm:px-6 lg:pb-10">
          <div className="mb-5 flex items-center gap-3">
            <Link
              href="/dashboard"
              className="grid h-10 w-10 place-items-center rounded-full bg-white text-ink-soft shadow-card ring-1 ring-pink-soft/50 hover:text-pink-ink"
              aria-label="Back to dashboard"
            >
              <Icon name="chevron" className="h-5 w-5 rotate-180" />
            </Link>
            <div>
              <h1 className="font-display text-2xl font-extrabold text-ink">
                Lessons 📚
              </h1>
              <p className="text-sm text-ink-soft">
                80 lessons across Class A → D. Keep the streak going!
              </p>
            </div>
          </div>

          <LessonMap />
        </main>

        <MobileNav />
      </div>
    </div>
  );
}
