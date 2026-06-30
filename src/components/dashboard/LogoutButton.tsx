"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "../auth/AuthProvider";

export default function LogoutButton({ className = "" }: { className?: string }) {
  const router = useRouter();
  const { user, signOut } = useAuth();

  const onClick = async () => {
    await signOut();
    router.push("/auth");
  };

  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center justify-between rounded-2xl px-3 py-2.5 text-sm font-bold text-ink-soft transition-all hover:bg-pink-soft/50 hover:text-pink-ink ${className}`}
    >
      <span className="flex items-center gap-3">
        <span aria-hidden>↩</span> Log out
      </span>
      {user && (
        <span className="max-w-[6.5rem] truncate text-xs font-semibold text-ink-mute">
          {user.username}
        </span>
      )}
    </button>
  );
}
