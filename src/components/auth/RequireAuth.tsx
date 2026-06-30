"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Meemi from "../Meemi";
import { useAuth } from "./AuthProvider";

/* Client-side gate for the member area. Static export has no server, so auth is
   enforced in the browser: unauthenticated visitors are redirected to /auth. */
export default function RequireAuth({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) router.replace("/auth");
  }, [loading, user, router]);

  if (loading || !user) {
    return (
      <div className="grid min-h-screen place-items-center bg-gradient-to-b from-cream to-pink-soft/25">
        <div className="flex flex-col items-center gap-3 text-center">
          <Meemi className="w-20 animate-float" mood="happy" />
          <p className="text-sm font-semibold text-ink-soft">
            {loading ? "Loading your space…" : "Redirecting to sign in…"}
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
