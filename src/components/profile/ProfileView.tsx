"use client";

import Link from "next/link";
import MeemiAvatar from "../avatar/MeemiAvatar";
import Icon from "../ui/Icon";
import {
  achievementCatalog,
  myUnlocked,
  type Achievement,
  type Profile,
} from "@/lib/profile";

const tierCls: Record<string, string> = {
  Bronze: "from-[#e0a875] to-[#c17a45] text-white",
  Silver: "from-[#e9edf2] to-[#b9c2cc] text-ink",
  Gold: "from-[#ffe08a] to-[#f5a623] text-white",
  Sakura: "from-[#ffd6e5] to-[#f7a8c4] text-white",
  Platinum: "from-white to-[#ffe6f0] text-pink-ink ring-1 ring-pink-soft",
};

function Stat({ value, label }: { value: string | number; label: string }) {
  return (
    <div className="text-center">
      <p className="font-display text-xl font-extrabold text-ink">{value}</p>
      <p className="text-xs font-semibold text-ink-soft">{label}</p>
    </div>
  );
}

function Badge({ a, locked }: { a: Achievement; locked?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-1.5 text-center" title={a.name}>
      <span
        className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br text-2xl shadow-soft ${
          locked ? "from-gray-soft to-gray-soft grayscale" : tierCls[a.tier]
        }`}
      >
        {locked ? "🔒" : a.icon}
      </span>
      <span className="text-[0.62rem] font-bold leading-tight text-ink-soft">
        {a.name}
      </span>
    </div>
  );
}

export default function ProfileView({
  user,
  isMe,
  avatarConfig,
  isFollowing,
  isBlocked,
  isPublic,
  onFollow,
  onBlock,
  onReport,
  onTogglePrivacy,
}: {
  user: Profile;
  isMe: boolean;
  avatarConfig: Profile["avatar"];
  isFollowing: boolean;
  isBlocked: boolean;
  isPublic: boolean;
  onFollow: () => void;
  onBlock: () => void;
  onReport: () => void;
  onTogglePrivacy: () => void;
}) {
  const priv = isMe ? !isPublic : user.isPrivate;
  const restricted = !isMe && priv && !isFollowing;
  const followerCount = user.followers + (!isMe && isFollowing ? 1 : 0);

  return (
    <div>
      {/* ---- header card ---- */}
      <div className="overflow-hidden rounded-[2rem] bg-white shadow-card ring-1 ring-pink-soft/40">
        <div className="h-24 bg-gradient-to-r from-pink-deep via-pink to-blue-deep sm:h-28" />
        <div className="px-5 pb-5 sm:px-7">
          <div className="-mt-14 flex items-end justify-between">
            <span className="grid h-28 w-28 place-items-center rounded-[1.75rem] bg-white p-1.5 shadow-soft ring-4 ring-white">
              <span className="grid h-full w-full place-items-center overflow-hidden rounded-[1.4rem] bg-gradient-to-br from-pink-soft to-blue-soft">
                <MeemiAvatar config={avatarConfig} uid={`pf-${user.id}`} className="w-[115%] translate-y-[8%]" />
              </span>
            </span>

            {/* action buttons */}
            <div className="mb-2 flex items-center gap-2">
              {isMe ? (
                <>
                  <button
                    onClick={onTogglePrivacy}
                    className="rounded-full bg-white px-3.5 py-2 text-xs font-bold text-ink-soft shadow-card ring-1 ring-pink-soft/60 hover:text-pink-ink"
                  >
                    {isPublic ? "🌐 Public" : "🔒 Private"}
                  </button>
                  <Link
                    href="/dashboard/avatar"
                    className="rounded-full bg-gradient-to-r from-pink-deep to-pink px-4 py-2 text-xs font-extrabold text-white shadow-soft hover:-translate-y-0.5"
                  >
                    Edit Meemi
                  </Link>
                </>
              ) : isBlocked ? (
                <button
                  onClick={onBlock}
                  className="rounded-full bg-ink px-4 py-2 text-xs font-extrabold text-white"
                >
                  Unblock
                </button>
              ) : (
                <>
                  <button
                    onClick={onReport}
                    aria-label="Report user"
                    className="grid h-9 w-9 place-items-center rounded-full bg-white text-ink-soft shadow-card ring-1 ring-pink-soft/60 hover:text-pink-ink"
                  >
                    <Icon name="shield" className="h-4 w-4" />
                  </button>
                  <button
                    onClick={onBlock}
                    className="rounded-full bg-white px-3.5 py-2 text-xs font-bold text-ink-soft shadow-card ring-1 ring-pink-soft/60 hover:text-pink-ink"
                  >
                    Block
                  </button>
                  <button
                    onClick={onFollow}
                    className={`rounded-full px-5 py-2 text-xs font-extrabold shadow-soft transition-transform hover:-translate-y-0.5 ${
                      isFollowing
                        ? "bg-white text-pink-ink ring-1 ring-pink-deep"
                        : "bg-gradient-to-r from-pink-deep to-pink text-white"
                    }`}
                  >
                    {isFollowing ? "Following" : "Follow"}
                  </button>
                </>
              )}
            </div>
          </div>

          {/* identity */}
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <h1 className="font-display text-2xl font-extrabold text-ink">
              {user.displayName}
            </h1>
            <span className="rounded-full bg-pink-soft/60 px-2.5 py-0.5 text-xs font-bold text-pink-ink">
              Lv. {user.level}
            </span>
            {priv && (
              <span className="rounded-full bg-ink/10 px-2.5 py-0.5 text-xs font-bold text-ink-soft">
                🔒 Private
              </span>
            )}
          </div>
          <p className="text-sm font-semibold text-ink-mute">{user.username}</p>

          {!restricted && (
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{user.bio}</p>
          )}

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-soft">
            <span>🗣️ {user.nativeLanguage}</span>
            <span>🔥 {user.streak}-day streak</span>
            <span>📅 Joined {user.joined}</span>
          </div>

          {/* stats */}
          <div className="mt-5 flex items-center gap-6 border-t border-pink-soft/40 pt-4">
            <Stat value={followerCount} label="Followers" />
            <Stat value={user.following} label="Following" />
            <Stat value={user.level} label="Level" />
            {isMe && user.coins != null && (
              <span className="ml-auto flex items-center gap-1.5 rounded-full bg-[#fff6d6] px-3 py-1.5 text-sm font-extrabold text-gold-deep">
                🪙 {user.coins.toLocaleString()}
                <span className="text-[0.6rem] font-bold text-ink-mute">only you</span>
              </span>
            )}
          </div>
        </div>
      </div>

      {/* ---- restricted (private) ---- */}
      {restricted ? (
        <div className="mt-5 rounded-[1.75rem] bg-white p-10 text-center shadow-card ring-1 ring-pink-soft/40">
          <p className="text-4xl">🔒</p>
          <p className="mt-3 font-display text-lg font-extrabold text-ink">
            This account is private
          </p>
          <p className="mt-1 text-sm text-ink-soft">
            Follow {user.displayName} to see their achievements and activity.
          </p>
        </div>
      ) : (
        <>
          {/* ---- badges / achievements ---- */}
          <div className="mt-5 rounded-[1.75rem] bg-white p-5 shadow-card ring-1 ring-pink-soft/40 sm:p-6">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-lg font-extrabold text-ink">
                {isMe ? "Achievements" : "Badges"}
              </h2>
              <span className="text-xs font-semibold text-ink-mute">
                {isMe
                  ? `${myUnlocked.size} / ${achievementCatalog.length}`
                  : `${user.badges.length} earned`}
              </span>
            </div>
            <div className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-6 lg:grid-cols-8">
              {isMe
                ? achievementCatalog.map((a) => (
                    <Badge key={a.name} a={a} locked={!myUnlocked.has(a.name)} />
                  ))
                : user.badges.map((a) => <Badge key={a.name} a={a} />)}
            </div>
          </div>

          {/* ---- activity ---- */}
          <div className="mt-5 rounded-[1.75rem] bg-white p-5 shadow-card ring-1 ring-pink-soft/40 sm:p-6">
            <h2 className="font-display text-lg font-extrabold text-ink">
              Recent activity
            </h2>
            <ul className="mt-4 space-y-3">
              {user.activity.map((act, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-pink-soft/50 text-pink-ink">
                    <Icon name={act.icon} className="h-5 w-5" />
                  </span>
                  <span className="flex-1 text-sm font-semibold text-ink">
                    {act.text}
                  </span>
                  <span className="shrink-0 text-xs text-ink-mute">{act.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
