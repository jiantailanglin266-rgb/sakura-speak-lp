import type { Metadata } from "next";
import RequireAuth from "@/components/auth/RequireAuth";

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "Your Sakura Speak home base — progress, lessons, games, community and more.",
  robots: { index: false, follow: false },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RequireAuth>{children}</RequireAuth>;
}
