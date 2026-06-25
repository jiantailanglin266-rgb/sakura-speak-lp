import SideNav from "@/components/dashboard/SideNav";
import TopBar from "@/components/dashboard/TopBar";
import MobileNav from "@/components/dashboard/MobileNav";
import WelcomeHero from "@/components/dashboard/WelcomeHero";
import PortalGrid from "@/components/dashboard/PortalGrid";
import DailyGoals from "@/components/dashboard/DailyGoals";
import ClassTrack from "@/components/dashboard/ClassTrack";
import Achievements from "@/components/dashboard/Achievements";
import EventsCard from "@/components/dashboard/EventsCard";
import FriendsCard from "@/components/dashboard/FriendsCard";
import NewsCard from "@/components/dashboard/NewsCard";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gradient-to-b from-cream via-cream to-pink-soft/25">
      <SideNav />

      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar />

        <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-28 pt-6 sm:px-6 lg:pb-10">
          <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_340px]">
            {/* main column */}
            <div className="min-w-0 space-y-6">
              <WelcomeHero />
              <PortalGrid />

              {/* community row — visible on wide & narrow alike */}
              <div className="grid gap-5 md:grid-cols-2 xl:hidden">
                <DailyGoals />
                <ClassTrack />
              </div>
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                <EventsCard />
                <FriendsCard />
                <Achievements />
              </div>
            </div>

            {/* right rail — desktop only */}
            <aside className="hidden space-y-5 xl:block">
              <DailyGoals />
              <ClassTrack />
              <NewsCard />
            </aside>

            {/* news for narrow layouts */}
            <div className="xl:hidden">
              <NewsCard />
            </div>
          </div>
        </main>

        <MobileNav />
      </div>
    </div>
  );
}
