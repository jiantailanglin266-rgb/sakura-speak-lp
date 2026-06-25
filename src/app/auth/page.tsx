import type { Metadata } from "next";
import Petals from "@/components/Petals";
import AuthScreen from "@/components/auth/AuthScreen";

export const metadata: Metadata = {
  title: "Sign in",
  robots: { index: false, follow: false },
};

export default function AuthPage() {
  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden bg-aurora px-4 py-10">
      <Petals count={10} />
      <div className="relative w-full max-w-md">
        <AuthScreen />
      </div>
    </main>
  );
}
