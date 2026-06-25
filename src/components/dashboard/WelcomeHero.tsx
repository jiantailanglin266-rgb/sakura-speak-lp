import Link from "next/link";
import Meemi from "../Meemi";
import Icon from "../ui/Icon";
import ProgressRing from "./ProgressRing";
import TourButton from "../onboarding/TourButton";
import { learner, progress } from "@/lib/dashboard";

export default function WelcomeHero() {
  return (
    <section
      data-tour="hero"
      className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-pink-deep via-pink to-blue-deep p-6 text-white shadow-pop sm:p-8"
    >
      {/* soft glow blobs */}
      <div className="pointer-events-none absolute -right-10 -top-16 h-48 w-48 rounded-full bg-white/20 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-20 left-1/3 h-44 w-44 rounded-full bg-blue/30 blur-2xl" />

      <div className="absolute right-4 top-4 z-10">
        <TourButton />
      </div>

      <div className="relative grid items-center gap-6 md:grid-cols-[1fr_auto]">
        <div>
          {/* Meemi speech bubble */}
          <div className="flex items-start gap-3">
            <Meemi className="h-14 w-14 shrink-0 animate-float" mood="wave" />
            <div className="relative rounded-2xl rounded-tl-sm bg-white/95 px-4 py-2.5 text-sm font-semibold text-ink shadow-soft">
              <span className="absolute -left-1.5 top-3 h-3 w-3 rotate-45 bg-white/95" />
              Welcome back, {learner.displayName}! Ready for today's lesson? 🌸
            </div>
          </div>

          <h1 className="mt-5 font-display text-2xl font-extrabold sm:text-3xl">
            Pick up where you left off
          </h1>

          {/* continue card */}
          <div className="mt-4 flex flex-col gap-4 rounded-2xl bg-white/15 p-4 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/90 text-pink-deep">
                <Icon name="book" className="h-6 w-6" />
              </span>
              <div>
                <p className="text-xs font-semibold text-white/80">
                  {progress.current.subtitle}
                </p>
                <p className="font-display text-lg font-bold leading-tight">
                  {progress.current.title}
                </p>
              </div>
            </div>
            <Link
              href="/dashboard/lesson"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-extrabold text-pink-deep shadow-soft transition-transform hover:scale-105 active:scale-95"
            >
              <Icon name="play" className="h-4 w-4 fill-current" />
              Continue
            </Link>
          </div>
        </div>

        {/* overall progress ring */}
        <div
          data-tour="progress"
          className="flex flex-col items-center gap-2 justify-self-center rounded-2xl bg-white/15 px-6 py-5 backdrop-blur-sm"
        >
          <ProgressRing value={progress.overall} trackClass="text-white/25">
            <span className="font-display text-3xl font-extrabold">
              {progress.overall}
              <span className="text-lg">%</span>
            </span>
            <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-white/80">
              complete
            </span>
          </ProgressRing>
          <p className="text-xs font-semibold text-white/90">
            {progress.lessonsCompleted} / {progress.lessonsTotal} lessons
          </p>
        </div>
      </div>
    </section>
  );
}
