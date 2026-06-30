"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Meemi from "../Meemi";
import { TRIAL_DAYS } from "@/lib/billing";
import { useAuth } from "./AuthProvider";

type Mode = "login" | "signup" | "forgot" | "sent" | "verify";

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
      <path fill="#4285F4" d="M22.5 12.2c0-.7-.06-1.4-.18-2H12v3.9h5.9a5 5 0 0 1-2.2 3.3v2.7h3.6c2.1-2 3.2-4.9 3.2-7.9z" />
      <path fill="#34A853" d="M12 23c2.9 0 5.4-1 7.2-2.6l-3.6-2.7c-1 .7-2.3 1.1-3.6 1.1-2.8 0-5.1-1.9-6-4.4H2.3v2.8A11 11 0 0 0 12 23z" />
      <path fill="#FBBC05" d="M6 14.4a6.6 6.6 0 0 1 0-4.2V7.4H2.3a11 11 0 0 0 0 9.8L6 14.4z" />
      <path fill="#EA4335" d="M12 5.6c1.6 0 3 .55 4.1 1.6l3.1-3.1A11 11 0 0 0 2.3 7.4L6 10.2C6.9 7.7 9.2 5.6 12 5.6z" />
    </svg>
  );
}
function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#000" aria-hidden>
      <path d="M16.4 12.7c0-2 1.6-3 1.7-3a3.7 3.7 0 0 0-2.9-1.6c-1.2-.1-2.4.7-3 .7-.6 0-1.6-.7-2.6-.7a3.9 3.9 0 0 0-3.3 2c-1.4 2.5-.4 6.1 1 8.1.7 1 1.4 2.1 2.4 2 1-.04 1.3-.6 2.5-.6 1.2 0 1.5.6 2.6.6 1 0 1.7-1 2.3-2 .7-1.1 1-2.2 1-2.3 0 0-2-.8-2-3.2zM14.6 6.3c.5-.6.9-1.5.8-2.4-.8 0-1.7.5-2.3 1.2-.5.5-.9 1.4-.8 2.3.9.06 1.7-.5 2.3-1.1z" />
    </svg>
  );
}

export default function AuthScreen() {
  const router = useRouter();
  const { signIn, signUp, signInAsGuest } = useAuth();
  const [mode, setMode] = useState<Mode>("signup");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const go = () => router.push("/dashboard");

  const submit = async () => {
    setError(null);
    if (mode === "forgot") {
      if (!/^\S+@\S+\.\S+$/.test(email)) return setError("Enter a valid email.");
      return setMode("sent");
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) return setError("Enter a valid email.");
    if (password.length < 8) return setError("Password must be at least 8 characters.");
    if (mode === "signup") {
      if (username.trim().length < 3) return setError("Pick a username (3+ characters).");
      if (!agree) return setError("Please confirm the age & guidelines note.");
    }
    setBusy(true);
    try {
      if (mode === "signup") {
        await signUp({ email: email.trim(), username: username.trim(), password });
      } else {
        await signIn({ email: email.trim(), password });
      }
      go();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
    } finally {
      setBusy(false);
    }
  };

  const guest = async () => {
    setError(null);
    setBusy(true);
    try {
      await signInAsGuest();
      go();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
    } finally {
      setBusy(false);
    }
  };

  // ---------- verify / sent screens ----------
  if (mode === "verify" || mode === "sent") {
    const isVerify = mode === "verify";
    return (
      <Shell>
        <Meemi className="mx-auto w-24 animate-float" mood="love" />
        <h1 className="mt-4 font-display text-2xl font-extrabold text-ink">
          {isVerify ? "Verify your email 📩" : "Check your inbox 📩"}
        </h1>
        <p className="mt-2 text-sm text-ink-soft">
          We sent a {isVerify ? "verification" : "password reset"} link to{" "}
          <span className="font-bold text-pink-ink">{email}</span>.
        </p>
        {isVerify ? (
          <button onClick={go} className={btnPrimary}>
            I've verified — continue
          </button>
        ) : (
          <button onClick={() => setMode("login")} className={btnPrimary}>
            Back to log in
          </button>
        )}
        <button
          onClick={() => setError("Email resent! 🌸")}
          className="mt-2 w-full rounded-full py-2.5 text-sm font-bold text-ink-mute hover:text-ink-soft"
        >
          Resend email
        </button>
        {error && <p className="mt-2 text-sm font-semibold text-[#2f9d77]">{error}</p>}
      </Shell>
    );
  }

  // ---------- forgot ----------
  if (mode === "forgot") {
    return (
      <Shell>
        <h1 className="font-display text-2xl font-extrabold text-ink">Reset password</h1>
        <p className="mt-1 text-sm text-ink-soft">We'll email you a reset link.</p>
        <Field label="Email" type="email" value={email} onChange={setEmail} placeholder="you@example.com" />
        {error && <p className="mt-3 text-sm font-semibold text-[#d6557a]">{error}</p>}
        <button onClick={submit} className={btnPrimary}>Send reset link</button>
        <button onClick={() => { setMode("login"); setError(null); }} className={btnLink}>
          ← Back to log in
        </button>
      </Shell>
    );
  }

  // ---------- login / signup ----------
  const isSignup = mode === "signup";
  return (
    <Shell>
      {/* tabs */}
      <div className="mx-auto mb-6 flex w-fit rounded-full bg-cream p-1 ring-1 ring-pink-soft/50">
        {(["login", "signup"] as const).map((m) => (
          <button
            key={m}
            onClick={() => { setMode(m); setError(null); }}
            className={`rounded-full px-5 py-2 text-sm font-bold transition-all ${
              mode === m ? "bg-gradient-to-r from-pink-deep to-pink text-white shadow-soft" : "text-ink-soft"
            }`}
          >
            {m === "login" ? "Log in" : "Sign up"}
          </button>
        ))}
      </div>

      <h1 className="font-display text-2xl font-extrabold text-ink">
        {isSignup ? "Create your account" : "Welcome back"}
      </h1>
      <p className="mt-1 text-sm text-ink-soft">
        {isSignup ? `Start your ${TRIAL_DAYS}-day free trial 🌸` : "Log in to keep learning."}
      </p>

      {/* social */}
      <div className="mt-5 space-y-2.5">
        <button onClick={guest} disabled={busy} className={btnSocial}>
          <GoogleIcon /> Continue with Google
        </button>
        <button onClick={guest} disabled={busy} className={btnSocial}>
          <AppleIcon /> Continue with Apple
        </button>
      </div>

      <div className="my-5 flex items-center gap-3 text-xs font-semibold text-ink-mute">
        <span className="h-px flex-1 bg-pink-soft/60" /> or <span className="h-px flex-1 bg-pink-soft/60" />
      </div>

      {isSignup && (
        <Field label="Username" value={username} onChange={setUsername} placeholder="meemi_fan" hint="Must be unique. You can change it later." />
      )}
      <Field label="Email" type="email" value={email} onChange={setEmail} placeholder="you@example.com" />
      <Field label="Password" type="password" value={password} onChange={setPassword} placeholder="••••••••" />

      {!isSignup && (
        <button onClick={() => { setMode("forgot"); setError(null); }} className="mt-2 text-xs font-bold text-pink-deep hover:underline">
          Forgot password?
        </button>
      )}

      {isSignup && (
        <label className="mt-4 flex items-start gap-2.5 text-left text-xs text-ink-soft">
          <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="mt-0.5 h-4 w-4 accent-[#ec6fa0]" />
          <span>
            I'm 18+ (or have a guardian's consent). If under 18, using a nickname instead of a real name is recommended.
          </span>
        </label>
      )}

      {error && <p className="mt-3 text-sm font-semibold text-[#d6557a]">{error}</p>}

      <button onClick={submit} disabled={busy} className={btnPrimary}>
        {busy ? "Please wait…" : isSignup ? "Create account" : "Log in"}
      </button>

      <button onClick={guest} disabled={busy} className={btnLink}>
        Continue as guest →
      </button>

      <p className="mt-4 text-[0.7rem] leading-relaxed text-ink-mute">
        Email verification required · up to 2 devices · by continuing you agree to our Terms & Privacy.
      </p>
    </Shell>
  );
}

/* ---------- layout & fields ---------- */
function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-md rounded-[2rem] bg-white p-6 text-center shadow-pop ring-1 ring-white sm:p-8">
      <Link href="/" className="mb-4 inline-flex items-center gap-2">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-pink-soft to-blue-soft">
          <Meemi className="h-8 w-8" />
        </span>
        <span className="font-display text-lg font-extrabold text-ink">
          Sakura<span className="text-pink-deep">Speak</span>
        </span>
      </Link>
      {children}
    </div>
  );
}

function Field({
  label, value, onChange, type = "text", placeholder, hint,
}: {
  label: string; value: string; onChange: (v: string) => void;
  type?: string; placeholder?: string; hint?: string;
}) {
  return (
    <label className="mt-3 block text-left">
      <span className="mb-1 block text-xs font-bold text-ink">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-pink-soft/60 bg-cream px-4 py-3 text-sm text-ink placeholder:text-ink-mute focus:border-pink focus:outline-none focus:ring-4 focus:ring-pink/20"
      />
      {hint && <span className="mt-1 block text-[0.7rem] text-ink-mute">{hint}</span>}
    </label>
  );
}

const btnPrimary =
  "mt-5 w-full rounded-full bg-gradient-to-r from-pink-deep to-pink py-3.5 text-sm font-extrabold text-white shadow-pop transition-transform hover:-translate-y-0.5";
const btnSocial =
  "flex w-full items-center justify-center gap-2.5 rounded-full bg-white py-3 text-sm font-bold text-ink shadow-card ring-1 ring-pink-soft/50 transition-transform hover:-translate-y-0.5";
const btnLink = "mt-3 w-full rounded-full py-2 text-sm font-bold text-ink-soft hover:text-pink-ink";
