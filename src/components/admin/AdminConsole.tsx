"use client";

import { useState } from "react";
import Link from "next/link";
import Meemi from "../Meemi";
import Icon from "../ui/Icon";
import NewsManager from "./NewsManager";
import UsersManager from "./UsersManager";
import Moderation from "./Moderation";
import {
  roles,
  sectionMeta,
  stats,
  recentActivity,
  eventsSeed,
  type RoleId,
  type SectionKey,
  type AdminEvent,
  type EventStatus,
} from "@/lib/admin";

export default function AdminConsole() {
  const [roleId, setRoleId] = useState<RoleId>("super");
  const [section, setSection] = useState<SectionKey>("overview");
  const [toast, setToast] = useState<string | null>(null);

  const allowed = roles[roleId].perms;
  const flash = (m: string) => {
    setToast(m);
    window.setTimeout(() => setToast(null), 1900);
  };

  const switchRole = (r: RoleId) => {
    setRoleId(r);
    if (!roles[r].perms.includes(section)) setSection("overview");
  };

  const NavList = ({ onPick }: { onPick?: () => void }) => (
    <>
      {allowed.map((k) => (
        <button
          key={k}
          onClick={() => {
            setSection(k);
            onPick?.();
          }}
          className={`flex shrink-0 items-center gap-2.5 whitespace-nowrap rounded-2xl px-3 py-2.5 text-sm font-bold transition-all ${
            section === k
              ? "bg-gradient-to-r from-pink-deep to-pink text-white shadow-soft"
              : "text-ink-soft hover:bg-pink-soft/40 hover:text-pink-ink"
          }`}
        >
          <Icon name={sectionMeta[k].icon} className="h-5 w-5" />
          {sectionMeta[k].label}
        </button>
      ))}
    </>
  );

  const RoleSwitcher = () => (
    <label className="block">
      <span className="mb-1 block text-[0.65rem] font-bold uppercase tracking-wider text-ink-mute">Acting as</span>
      <select
        value={roleId}
        onChange={(e) => switchRole(e.target.value as RoleId)}
        className="w-full rounded-xl border border-pink-soft/60 bg-white px-3 py-2 text-sm font-bold text-ink focus:border-pink focus:outline-none"
      >
        {(Object.keys(roles) as RoleId[]).map((r) => (
          <option key={r} value={r}>{roles[r].label}</option>
        ))}
      </select>
    </label>
  );

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-cream to-pink-soft/25">
      {/* sidebar (desktop) */}
      <aside className="sticky top-0 hidden h-screen w-60 shrink-0 flex-col border-r border-pink-soft/50 bg-white/70 px-4 py-6 backdrop-blur-md lg:flex">
        <Link href="/" className="flex items-center gap-2.5 px-2">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-pink-soft to-blue-soft shadow-soft">
            <Meemi className="h-9 w-9" />
          </span>
          <span className="font-display text-base font-extrabold text-ink">
            Sakura<span className="text-pink-deep">Admin</span>
          </span>
        </Link>

        <div className="mt-6"><RoleSwitcher /></div>

        <nav className="mt-6 flex flex-1 flex-col gap-1">
          <NavList />
        </nav>

        <Link href="/dashboard" className="rounded-2xl bg-cream px-3 py-2.5 text-sm font-bold text-ink-soft hover:text-pink-ink">
          ← Back to app
        </Link>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        {/* mobile header */}
        <div className="sticky top-0 z-20 border-b border-pink-soft/40 bg-cream/85 px-4 py-3 backdrop-blur-md lg:hidden">
          <div className="flex items-center justify-between gap-3">
            <span className="font-display font-extrabold text-ink">Sakura<span className="text-pink-deep">Admin</span></span>
            <div className="w-40"><RoleSwitcher /></div>
          </div>
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <NavList />
          </div>
        </div>

        <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-6 sm:px-6">
          {section === "overview" && <Overview onGo={setSection} roleLabel={roles[roleId].label} />}
          {section === "news" && <NewsManager onToast={flash} />}
          {section === "events" && <EventsManager onToast={flash} />}
          {section === "users" && <UsersManager onToast={flash} />}
          {section === "moderation" && <Moderation onToast={flash} />}
          {section === "roles" && <RolesView current={roleId} />}
          {section === "settings" && <Settings onToast={flash} />}
        </main>
      </div>

      {toast && (
        <div className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2 rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-white shadow-pop">
          {toast}
        </div>
      )}
    </div>
  );
}

/* ---------- Overview ---------- */
function Overview({ onGo, roleLabel }: { onGo: (s: SectionKey) => void; roleLabel: string }) {
  return (
    <div>
      <h1 className="font-display text-2xl font-extrabold text-ink">Welcome back, admin 🌸</h1>
      <p className="text-sm text-ink-soft">You're signed in as <b>{roleLabel}</b>.</p>

      <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl bg-white p-4 shadow-card ring-1 ring-pink-soft/40">
            <Icon name={s.icon} className="h-5 w-5 text-pink-deep" />
            <p className="mt-2 font-display text-2xl font-extrabold text-ink">{s.value}</p>
            <p className="text-xs font-semibold text-ink-soft">{s.label}</p>
            <p className="mt-0.5 text-[0.65rem] text-ink-mute">{s.delta}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-2xl bg-white p-5 shadow-card ring-1 ring-pink-soft/40">
        <h2 className="font-display font-extrabold text-ink">Recent activity</h2>
        <ul className="mt-3 space-y-3">
          {recentActivity.map((a, i) => (
            <li key={i} className="flex items-center gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-pink-soft/50 text-pink-ink">
                <Icon name={a.icon} className="h-4 w-4" />
              </span>
              <span className="flex-1 text-sm text-ink">{a.text}</span>
              <span className="shrink-0 text-xs text-ink-mute">{a.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ---------- Events ---------- */
const evBadge: Record<EventStatus, string> = {
  scheduled: "bg-blue-soft/70 text-blue-deep",
  live: "bg-pink-deep text-white",
  ended: "bg-ink/10 text-ink-soft",
};
function EventsManager({ onToast }: { onToast: (m: string) => void }) {
  const [list, setList] = useState<AdminEvent[]>(eventsSeed);
  const set = (id: string, status: EventStatus, msg: string) => {
    setList((l) => l.map((e) => (e.id === id ? { ...e, status } : e)));
    onToast(msg);
  };
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="font-display text-xl font-extrabold text-ink">Events</h2>
          <p className="text-sm text-ink-soft">Schedule and run community events.</p>
        </div>
        <button onClick={() => onToast("New event form (demo)")} className="rounded-full bg-gradient-to-r from-pink-deep to-pink px-4 py-2.5 text-sm font-extrabold text-white shadow-soft">
          + New event
        </button>
      </div>
      <ul className="space-y-3">
        {list.map((e) => (
          <li key={e.id} className="rounded-2xl bg-white p-4 shadow-card ring-1 ring-pink-soft/40">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`rounded-full px-2 py-0.5 text-[0.6rem] font-bold ${evBadge[e.status]}`}>{e.status}</span>
              <span className="text-xs text-ink-mute">{e.when}</span>
            </div>
            <p className="mt-1 font-bold text-ink">{e.title}</p>
            <p className="text-xs text-ink-soft">Host: {e.host} · {e.going} going</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {e.status === "scheduled" && <button onClick={() => set(e.id, "live", "Event started")} className={btnOk}>Start now</button>}
              {e.status === "live" && <button onClick={() => set(e.id, "ended", "Event ended")} className={btnNeutral}>End</button>}
              {e.status !== "ended" && <button onClick={() => set(e.id, "ended", "Event cancelled")} className={btnDanger}>Cancel</button>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Roles ---------- */
function RolesView({ current }: { current: RoleId }) {
  const order: SectionKey[] = ["overview", "news", "events", "users", "moderation", "roles", "settings"];
  return (
    <div>
      <h2 className="font-display text-xl font-extrabold text-ink">Roles & access</h2>
      <p className="text-sm text-ink-soft">Who can do what. Your role is highlighted.</p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {(Object.keys(roles) as RoleId[]).map((r) => (
          <div key={r} className={`rounded-2xl p-4 shadow-card ring-2 ${r === current ? "bg-pink-soft/30 ring-pink-deep" : "bg-white ring-pink-soft/40"}`}>
            <p className="font-display font-extrabold text-ink">{roles[r].label}{r === current && " (you)"}</p>
            <p className="mt-0.5 text-xs text-ink-soft">{roles[r].desc}</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {roles[r].perms.map((p) => (
                <span key={p} className="rounded-full bg-cream px-2 py-0.5 text-[0.6rem] font-bold text-ink-soft">{sectionMeta[p].label}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 overflow-x-auto rounded-2xl bg-white p-4 shadow-card ring-1 ring-pink-soft/40">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-ink-mute">
              <th className="py-2 pr-4 font-bold">Section</th>
              {(Object.keys(roles) as RoleId[]).map((r) => (
                <th key={r} className="px-2 py-2 text-center text-xs font-bold">{roles[r].label.split(" ")[0]}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {order.map((s) => (
              <tr key={s} className="border-t border-pink-soft/30">
                <td className="py-2 pr-4 font-semibold text-ink">{sectionMeta[s].label}</td>
                {(Object.keys(roles) as RoleId[]).map((r) => (
                  <td key={r} className="px-2 py-2 text-center">
                    {roles[r].perms.includes(s) ? <span className="text-[#2f9d77]">✓</span> : <span className="text-ink-mute">–</span>}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ---------- Settings ---------- */
function Settings({ onToast }: { onToast: (m: string) => void }) {
  const [name, setName] = useState("Sakura Speak");
  const [tagline, setTagline] = useState("Speak Japanese, beautifully.");
  const [trial, setTrial] = useState("3");
  const [email, setEmail] = useState("hello@sakura-speak.com");
  return (
    <div className="max-w-lg">
      <h2 className="font-display text-xl font-extrabold text-ink">Site settings</h2>
      <p className="text-sm text-ink-soft">Edit core site information.</p>
      <div className="mt-5 space-y-3 rounded-2xl bg-white p-5 shadow-card ring-1 ring-pink-soft/40">
        <Field label="Site name" value={name} onChange={setName} />
        <Field label="Tagline" value={tagline} onChange={setTagline} />
        <Field label="Free trial (days)" value={trial} onChange={setTrial} />
        <Field label="Support email" value={email} onChange={setEmail} />
        <button onClick={() => onToast("Settings saved 🌸")} className="mt-2 rounded-full bg-gradient-to-r from-pink-deep to-pink px-6 py-2.5 text-sm font-extrabold text-white shadow-soft">
          Save changes
        </button>
      </div>
    </div>
  );
}
function Field({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <label className="block text-left">
      <span className="mb-1 block text-xs font-bold text-ink">{label}</span>
      <input value={value} onChange={(e) => onChange(e.target.value)} className="w-full rounded-2xl border border-pink-soft/60 bg-cream px-4 py-3 text-sm text-ink focus:border-pink focus:outline-none focus:ring-4 focus:ring-pink/20" />
    </label>
  );
}

const btnOk = "rounded-full bg-[#e7f7ee] px-3.5 py-1.5 text-xs font-bold text-[#2f9d77]";
const btnNeutral = "rounded-full bg-cream px-3.5 py-1.5 text-xs font-bold text-ink-soft hover:text-pink-ink";
const btnDanger = "rounded-full bg-[#ffe6ea] px-3.5 py-1.5 text-xs font-bold text-[#d6557a]";
