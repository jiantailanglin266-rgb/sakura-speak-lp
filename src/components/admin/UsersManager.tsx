"use client";

import { useState } from "react";
import { usersSeed, type AdminUser, type UserStatus } from "@/lib/admin";

const statusBadge: Record<UserStatus, string> = {
  active: "bg-mint/40 text-[#2f9d77]",
  suspended: "bg-[#fff2cc] text-gold-deep",
  banned: "bg-[#ffe6ea] text-[#d6557a]",
};

export default function UsersManager({ onToast }: { onToast: (m: string) => void }) {
  const [users, setUsers] = useState<AdminUser[]>(usersSeed);
  const [q, setQ] = useState("");

  const setStatus = (id: string, status: UserStatus, verb: string) => {
    setUsers((l) => l.map((u) => (u.id === id ? { ...u, status } : u)));
    const u = users.find((x) => x.id === id);
    onToast(`${verb} ${u?.username ?? "user"}`);
  };

  const filtered = users.filter(
    (u) =>
      !q ||
      u.name.toLowerCase().includes(q.toLowerCase()) ||
      u.username.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div>
      <div className="mb-4">
        <h2 className="font-display text-xl font-extrabold text-ink">Users</h2>
        <p className="text-sm text-ink-soft">Manage members — suspend, ban or restore.</p>
      </div>

      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search by name or @username…"
        className="mb-4 w-full max-w-sm rounded-full border border-pink-soft/60 bg-white px-4 py-2.5 text-sm text-ink placeholder:text-ink-mute focus:border-pink focus:outline-none focus:ring-4 focus:ring-pink/20"
      />

      <ul className="space-y-2.5">
        {filtered.map((u) => (
          <li key={u.id} className="rounded-2xl bg-white p-4 shadow-card ring-1 ring-pink-soft/40">
            <div className="flex flex-wrap items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-pink-soft to-blue-soft text-xs font-extrabold text-pink-ink">
                {u.name.slice(0, 2).toUpperCase()}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-bold text-ink">{u.name}</span>
                  <span className={`rounded-full px-2 py-0.5 text-[0.6rem] font-bold ${statusBadge[u.status]}`}>{u.status}</span>
                  {u.role !== "Learner" && (
                    <span className="rounded-full bg-lilac/30 px-2 py-0.5 text-[0.6rem] font-bold text-[#7a5bd6]">{u.role}</span>
                  )}
                  {u.flags > 0 && (
                    <span className="rounded-full bg-[#ffe6ea] px-2 py-0.5 text-[0.6rem] font-bold text-[#d6557a]">⚑ {u.flags}</span>
                  )}
                </div>
                <p className="text-xs text-ink-soft">{u.username} · {u.email} · joined {u.joined}</p>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {u.status === "active" && (
                <>
                  <button onClick={() => setStatus(u.id, "suspended", "Suspended")} className={btnWarn}>Suspend</button>
                  <button onClick={() => setStatus(u.id, "banned", "Banned")} className={btnDanger}>Ban</button>
                </>
              )}
              {u.status === "suspended" && (
                <>
                  <button onClick={() => setStatus(u.id, "active", "Reinstated")} className={btnOk}>Reinstate</button>
                  <button onClick={() => setStatus(u.id, "banned", "Banned")} className={btnDanger}>Ban</button>
                </>
              )}
              {u.status === "banned" && (
                <button onClick={() => setStatus(u.id, "active", "Unbanned")} className={btnOk}>Unban</button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const btnOk = "rounded-full bg-[#e7f7ee] px-3.5 py-1.5 text-xs font-bold text-[#2f9d77]";
const btnWarn = "rounded-full bg-[#fff2cc] px-3.5 py-1.5 text-xs font-bold text-gold-deep";
const btnDanger = "rounded-full bg-[#ffe6ea] px-3.5 py-1.5 text-xs font-bold text-[#d6557a]";
