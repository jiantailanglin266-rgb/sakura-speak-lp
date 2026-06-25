"use client";

import { useState } from "react";
import Icon from "../ui/Icon";
import { newsSeed, newsTags, type NewsPost } from "@/lib/admin";

export default function NewsManager({ onToast }: { onToast: (m: string) => void }) {
  const [list, setList] = useState<NewsPost[]>(newsSeed);
  const [editing, setEditing] = useState<NewsPost | null>(null);
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState(newsTags[0]);
  const [body, setBody] = useState("");

  const openNew = () => {
    setEditing({ id: "", title: "", tag: newsTags[0], body: "", status: "draft", date: "" });
    setTitle("");
    setTag(newsTags[0]);
    setBody("");
  };
  const openEdit = (p: NewsPost) => {
    setEditing(p);
    setTitle(p.title);
    setTag(p.tag);
    setBody(p.body);
  };

  const save = (status: NewsPost["status"]) => {
    if (!title.trim()) return onToast("Add a title first.");
    if (editing && editing.id) {
      setList((l) => l.map((p) => (p.id === editing.id ? { ...p, title, tag, body, status } : p)));
      onToast(status === "published" ? "Updated & published 🌸" : "Draft saved");
    } else {
      const id = `n${Date.now()}`;
      setList((l) => [{ id, title, tag, body, status, date: "Just now" }, ...l]);
      onToast(status === "published" ? "Published 🌸" : "Draft saved");
    }
    setEditing(null);
  };

  const del = (id: string) => {
    setList((l) => l.filter((p) => p.id !== id));
    onToast("Post deleted");
  };
  const togglePublish = (p: NewsPost) => {
    setList((l) => l.map((x) => (x.id === p.id ? { ...x, status: x.status === "published" ? "draft" : "published" } : x)));
    onToast(p.status === "published" ? "Unpublished" : "Published 🌸");
  };

  if (editing)
    return (
      <div className="rounded-[1.5rem] bg-white p-5 shadow-card ring-1 ring-pink-soft/40 sm:p-6">
        <h2 className="font-display text-lg font-extrabold text-ink">
          {editing.id ? "Edit post" : "New post"}
        </h2>

        <label className="mt-4 block text-left">
          <span className="mb-1 block text-xs font-bold text-ink">Title</span>
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Post title" className={inp} />
        </label>

        <div className="mt-3">
          <span className="mb-1 block text-xs font-bold text-ink">Tag</span>
          <div className="flex flex-wrap gap-2">
            {newsTags.map((t) => (
              <button
                key={t}
                onClick={() => setTag(t)}
                className={`rounded-full px-3 py-1.5 text-xs font-bold ring-2 transition-all ${
                  tag === t ? "bg-pink-soft/40 text-pink-ink ring-pink-deep" : "bg-cream text-ink-soft ring-transparent hover:ring-pink-soft"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <label className="mt-3 block text-left">
          <span className="mb-1 block text-xs font-bold text-ink">Body</span>
          <textarea value={body} onChange={(e) => setBody(e.target.value)} rows={6} placeholder="Write your update…" className={`${inp} resize-y`} />
        </label>

        <div className="mt-4 flex flex-wrap gap-2">
          <button onClick={() => save("published")} className="rounded-full bg-gradient-to-r from-pink-deep to-pink px-5 py-2.5 text-sm font-extrabold text-white shadow-soft">
            Publish
          </button>
          <button onClick={() => save("draft")} className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-pink-ink shadow-card ring-1 ring-pink-soft/60">
            Save draft
          </button>
          <button onClick={() => setEditing(null)} className="rounded-full px-5 py-2.5 text-sm font-bold text-ink-soft hover:text-ink">
            Cancel
          </button>
        </div>
      </div>
    );

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="font-display text-xl font-extrabold text-ink">News</h2>
          <p className="text-sm text-ink-soft">Write, publish and manage updates.</p>
        </div>
        <button onClick={openNew} className="rounded-full bg-gradient-to-r from-pink-deep to-pink px-4 py-2.5 text-sm font-extrabold text-white shadow-soft">
          + New post
        </button>
      </div>

      <ul className="space-y-3">
        {list.map((p) => (
          <li key={p.id} className="rounded-2xl bg-white p-4 shadow-card ring-1 ring-pink-soft/40">
            <div className="flex items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-soft/60 text-blue-deep">
                <Icon name="news" className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-blue-soft/70 px-2 py-0.5 text-[0.6rem] font-bold uppercase text-blue-deep">{p.tag}</span>
                  <span className={`rounded-full px-2 py-0.5 text-[0.6rem] font-bold ${p.status === "published" ? "bg-mint/40 text-[#2f9d77]" : "bg-ink/10 text-ink-soft"}`}>
                    {p.status}
                  </span>
                  <span className="text-xs text-ink-mute">{p.date}</span>
                </div>
                <p className="mt-1 truncate font-bold text-ink">{p.title}</p>
              </div>
            </div>
            <div className="mt-3 flex gap-2">
              <button onClick={() => openEdit(p)} className="rounded-full bg-cream px-3.5 py-1.5 text-xs font-bold text-ink-soft hover:text-pink-ink">Edit</button>
              <button onClick={() => togglePublish(p)} className="rounded-full bg-cream px-3.5 py-1.5 text-xs font-bold text-ink-soft hover:text-pink-ink">
                {p.status === "published" ? "Unpublish" : "Publish"}
              </button>
              <button onClick={() => del(p.id)} className="rounded-full bg-[#ffe6ea] px-3.5 py-1.5 text-xs font-bold text-[#d6557a]">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const inp =
  "w-full rounded-2xl border border-pink-soft/60 bg-cream px-4 py-3 text-sm text-ink placeholder:text-ink-mute focus:border-pink focus:outline-none focus:ring-4 focus:ring-pink/20";
