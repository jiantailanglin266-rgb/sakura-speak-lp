"use client";

import { useEffect, useState } from "react";
import MeemiAvatar from "../avatar/MeemiAvatar";
import Icon from "../ui/Icon";
import ProfileView from "./ProfileView";
import { me, otherUsers } from "@/lib/profile";
import { defaultConfig, type AvatarConfig } from "@/lib/avatar";

const STORAGE_KEY = "sakura-meemi-avatar";

export default function ProfileScreen() {
  const [myConfig, setMyConfig] = useState<AvatarConfig>(me.avatar);
  const [viewingId, setViewingId] = useState<string | null>(null);
  const [following, setFollowing] = useState<Set<string>>(new Set());
  const [blocked, setBlocked] = useState<Set<string>>(new Set());
  const [isPublic, setIsPublic] = useState(!me.isPrivate);
  const [toast, setToast] = useState<string | null>(null);

  // load saved Meemi avatar from the customizer
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const s = JSON.parse(raw);
        if (s.config) setMyConfig({ ...defaultConfig, ...s.config });
      }
    } catch {
      /* ignore */
    }
  }, []);

  const flash = (m: string) => {
    setToast(m);
    window.setTimeout(() => setToast(null), 1900);
  };

  const viewing = viewingId
    ? otherUsers.find((u) => u.id === viewingId)!
    : me;
  const isMe = viewingId === null;

  const toggleFollow = () => {
    if (!viewingId) return;
    setFollowing((s) => {
      const n = new Set(s);
      if (n.has(viewingId)) {
        n.delete(viewingId);
        flash(`Unfollowed ${viewing.displayName}`);
      } else {
        n.add(viewingId);
        flash(`Following ${viewing.displayName} 🌸`);
      }
      return n;
    });
  };

  const toggleBlock = () => {
    if (!viewingId) return;
    setBlocked((s) => {
      const n = new Set(s);
      if (n.has(viewingId)) {
        n.delete(viewingId);
        flash(`Unblocked ${viewing.displayName}`);
      } else {
        n.add(viewingId);
        setFollowing((f) => {
          const nf = new Set(f);
          nf.delete(viewingId);
          return nf;
        });
        flash(`Blocked ${viewing.displayName}`);
      }
      return n;
    });
  };

  const report = () => flash("Reported. Thanks for keeping the community safe 💛");

  return (
    <div>
      {!isMe && (
        <button
          onClick={() => setViewingId(null)}
          className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-bold text-pink-ink shadow-card ring-1 ring-pink-soft/60 hover:bg-cream"
        >
          <Icon name="chevron" className="h-4 w-4 rotate-180" /> Back to my profile
        </button>
      )}

      <ProfileView
        user={viewing}
        isMe={isMe}
        avatarConfig={isMe ? myConfig : viewing.avatar}
        isFollowing={!!viewingId && following.has(viewingId)}
        isBlocked={!!viewingId && blocked.has(viewingId)}
        isPublic={isPublic}
        onFollow={toggleFollow}
        onBlock={toggleBlock}
        onReport={report}
        onTogglePrivacy={() => {
          setIsPublic((v) => {
            flash(v ? "Profile set to private 🔒" : "Profile set to public 🌐");
            return !v;
          });
        }}
      />

      {/* Discover people (only on own profile) */}
      {isMe && (
        <div className="mt-5 rounded-[1.75rem] bg-white p-5 shadow-card ring-1 ring-pink-soft/40 sm:p-6">
          <h2 className="font-display text-lg font-extrabold text-ink">
            Discover learners
          </h2>
          <p className="text-xs text-ink-soft">Tap a profile to view it.</p>
          <ul className="mt-4 space-y-2.5">
            {otherUsers.map((u) => (
              <li key={u.id}>
                <button
                  onClick={() => setViewingId(u.id)}
                  className="flex w-full items-center gap-3 rounded-2xl bg-cream/70 p-3 text-left ring-1 ring-pink-soft/30 transition-all hover:-translate-y-0.5 hover:shadow-card"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-full bg-gradient-to-br from-pink-soft to-blue-soft">
                    <MeemiAvatar config={u.avatar} uid={`disc-${u.id}`} className="w-[150%] translate-y-[18%]" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-2">
                      <span className="font-bold text-ink">{u.displayName}</span>
                      {u.isPrivate && <span className="text-xs">🔒</span>}
                      {following.has(u.id) && (
                        <span className="rounded-full bg-mint/40 px-2 py-0.5 text-[0.6rem] font-bold text-[#2f9d77]">
                          Following
                        </span>
                      )}
                    </span>
                    <span className="block truncate text-xs text-ink-soft">
                      {u.username} · {u.nativeLanguage} · Lv. {u.level}
                    </span>
                  </span>
                  <Icon name="chevron" className="h-4 w-4 shrink-0 text-ink-mute" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {toast && (
        <div className="fixed bottom-24 left-1/2 z-50 -translate-x-1/2 rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-white shadow-pop lg:bottom-8">
          {toast}
        </div>
      )}
    </div>
  );
}
