"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Meemi from "../Meemi";
import { useAuth } from "../auth/AuthProvider";
import { buildPaymentLink } from "@/lib/stripe";
import {
  plans,
  currencies,
  coupons,
  cancelReasons,
  fmtPrice,
  TRIAL_DAYS,
  type PlanId,
  type Coupon,
} from "@/lib/billing";

type Step = "plans" | "checkout" | "success" | "manage" | "cancel" | "cancelled";

export default function Subscribe() {
  const router = useRouter();
  const { user } = useAuth();
  const [step, setStep] = useState<Step>("plans");
  const [planId, setPlanId] = useState<PlanId>("yearly");
  const [cur, setCur] = useState(currencies[0]);
  const [couponInput, setCouponInput] = useState("");
  const [coupon, setCoupon] = useState<Coupon | null>(null);
  const [couponMsg, setCouponMsg] = useState<string | null>(null);
  const [reason, setReason] = useState<string | null>(null);

  const plan = plans.find((p) => p.id === planId)!;
  const isLifetime = plan.months === 0;
  const stripeUrl = buildPaymentLink(planId, {
    clientReferenceId: user?.id,
    email: user?.email,
  });

  // When Stripe redirects back to /subscribe/?checkout=success, show success.
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    if (p.get("checkout") === "success") setStep("success");
  }, []);

  const applyCoupon = () => {
    const c = coupons.find((x) => x.code === couponInput.trim().toUpperCase());
    if (c) {
      setCoupon(c);
      setCouponMsg(`Applied: ${c.label} 🎉`);
    } else {
      setCoupon(null);
      setCouponMsg("That code isn't valid.");
    }
  };

  const discountedUsd = (() => {
    if (!coupon) return plan.usd;
    if (coupon.kind === "pct" && coupon.value) return plan.usd * (1 - coupon.value / 100);
    return plan.usd; // freePeriod handled in summary
  })();

  /* ---------- success ---------- */
  if (step === "success")
    return (
      <Card>
        <div className="relative mx-auto w-fit">
          <Meemi className="w-32 animate-float" mood="love" />
          <span className="absolute -right-2 top-1 animate-sparkle text-2xl">✨</span>
        </div>
        <h1 className="mt-4 font-display text-2xl font-extrabold text-ink">
          {isLifetime ? "You're in — forever! 🌸" : "Your free trial is on! 🌸"}
        </h1>
        <p className="mt-2 text-sm text-ink-soft">
          {isLifetime
            ? "Lifetime access unlocked. Enjoy everything Sakura Speak has to offer."
            : `Enjoy ${TRIAL_DAYS} days free. We'll remind you before your ${plan.name} plan begins.`}
        </p>
        <button onClick={() => router.push("/dashboard")} className={btnPrimary}>
          Go to dashboard
        </button>
      </Card>
    );

  /* ---------- cancelled ---------- */
  if (step === "cancelled")
    return (
      <Card>
        <Meemi className="mx-auto w-28" mood="happy" />
        <h1 className="mt-4 font-display text-2xl font-extrabold text-ink">
          Subscription cancelled
        </h1>
        <p className="mt-2 text-sm text-ink-soft">
          You'll keep access until the end of your current period. Per our policy, the
          remaining period isn't refunded. We'd love to have you back anytime 🌸
        </p>
        <button onClick={() => setStep("plans")} className={btnPrimary}>
          Re-subscribe
        </button>
        <button onClick={() => router.push("/dashboard")} className={btnLink}>
          Back to dashboard
        </button>
      </Card>
    );

  /* ---------- cancel survey ---------- */
  if (step === "cancel")
    return (
      <Card>
        <h1 className="font-display text-xl font-extrabold text-ink">
          Before you go…
        </h1>
        <p className="mt-1 text-sm text-ink-soft">
          Mind telling us why? It helps us improve Sakura Speak.
        </p>
        <div className="mt-4 space-y-2 text-left">
          {cancelReasons.map((r) => (
            <button
              key={r}
              onClick={() => setReason(r)}
              className={`flex w-full items-center gap-2.5 rounded-2xl px-4 py-3 text-sm font-semibold ring-2 transition-all ${
                reason === r
                  ? "bg-pink-soft/40 text-pink-ink ring-pink-deep"
                  : "bg-cream text-ink-soft ring-transparent hover:ring-pink-soft"
              }`}
            >
              <span className={`grid h-4 w-4 place-items-center rounded-full ring-2 ${reason === r ? "bg-pink-deep ring-pink-deep" : "ring-pink-soft"}`}>
                {reason === r && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
              </span>
              {r}
            </button>
          ))}
        </div>
        <button
          onClick={() => setStep("cancelled")}
          disabled={!reason}
          className={`${btnPrimary} ${!reason ? "cursor-not-allowed opacity-50" : ""}`}
        >
          Cancel subscription
        </button>
        <button onClick={() => setStep("manage")} className={btnLink}>
          Keep my subscription
        </button>
      </Card>
    );

  /* ---------- manage ---------- */
  if (step === "manage")
    return (
      <Card>
        <h1 className="font-display text-xl font-extrabold text-ink">Your subscription</h1>
        <div className="mt-4 rounded-2xl bg-cream p-4 text-left ring-1 ring-pink-soft/40">
          <div className="flex items-center justify-between">
            <span className="font-bold text-ink">Yearly plan</span>
            <span className="rounded-full bg-mint/40 px-2.5 py-0.5 text-xs font-bold text-[#2f9d77]">Active</span>
          </div>
          <p className="mt-1 text-sm text-ink-soft">Auto-renews on March 12, 2027 · {fmtPrice(119.99, cur)}</p>
        </div>
        <button onClick={() => setStep("plans")} className={btnSecondary}>Change plan</button>
        <button onClick={() => { setReason(null); setStep("cancel"); }} className="mt-2 w-full rounded-full py-3 text-sm font-bold text-[#d6557a] hover:underline">
          Cancel subscription
        </button>
        <button onClick={() => router.push("/dashboard")} className={btnLink}>Back to dashboard</button>
      </Card>
    );

  /* ---------- checkout ---------- */
  if (step === "checkout")
    return (
      <Card wide>
        <h1 className="font-display text-2xl font-extrabold text-ink">Checkout</h1>
        <p className="mt-1 text-sm text-ink-soft">
          {isLifetime ? "One-time payment." : `Free for ${TRIAL_DAYS} days, then ${plan.name}.`}
        </p>

        {/* summary */}
        <div className="mt-5 rounded-2xl bg-cream p-4 text-left ring-1 ring-pink-soft/40">
          <Row label={`${plan.name} plan`} value={`${fmtPrice(plan.usd, cur)} ${plan.period}`} />
          {coupon?.kind === "pct" && (
            <Row label={`Coupon ${coupon.code}`} value={`– ${fmtPrice(plan.usd - discountedUsd, cur)}`} green />
          )}
          {coupon?.kind === "freePeriod" && <Row label={`Coupon ${coupon.code}`} value="First period free" green />}
          {!isLifetime && <Row label={`${TRIAL_DAYS}-day free trial`} value="–" />}
          <div className="my-2 h-px bg-pink-soft/50" />
          <Row
            label="Due today"
            value={isLifetime ? fmtPrice(discountedUsd, cur) : fmtPrice(0, cur)}
            bold
          />
          {!isLifetime && (
            <p className="mt-1 text-xs text-ink-mute">
              Then {coupon?.kind === "freePeriod" ? "free first period, after that " : ""}
              {fmtPrice(discountedUsd, cur)} {plan.period}. Cancel anytime.
            </p>
          )}
        </div>

        {stripeUrl ? (
          /* ---- real Stripe (Payment Link) ---- */
          <>
            <div className="mt-5 rounded-2xl bg-cream p-4 text-left ring-1 ring-pink-soft/40">
              <p className="text-sm font-bold text-ink">Secure payment by Stripe</p>
              <p className="mt-1 text-xs text-ink-soft">
                You'll be taken to Stripe's secure page to enter your card
                {coupon ? " and any promo code" : ""}. Cancel anytime from “Manage”.
              </p>
            </div>
            <a href={stripeUrl} className={`${btnPrimary} block text-center`}>
              {isLifetime ? `Pay ${fmtPrice(discountedUsd, cur)}` : `Start ${TRIAL_DAYS}-day free trial`}
            </a>
          </>
        ) : (
          /* ---- mock card form (no Stripe configured) ---- */
          <>
            <div className="mt-5 space-y-3 text-left">
              <CardField label="Card number" placeholder="4242 4242 4242 4242" />
              <div className="grid grid-cols-2 gap-3">
                <CardField label="Expiry" placeholder="MM / YY" />
                <CardField label="CVC" placeholder="123" />
              </div>
              <CardField label="Name on card" placeholder="Hina Tanaka" />
            </div>
            <button onClick={() => setStep("success")} className={btnPrimary}>
              {isLifetime ? `Pay ${fmtPrice(discountedUsd, cur)}` : `Start ${TRIAL_DAYS}-day free trial`}
            </button>
          </>
        )}
        <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-ink-mute">
          🔒 Secured by Stripe · multi-currency · refunds not issued for forgotten cancellations
        </p>
        <button onClick={() => setStep("plans")} className={btnLink}>← Back to plans</button>
      </Card>
    );

  /* ---------- plans ---------- */
  return (
    <Card wide>
      <Meemi className="mx-auto w-24 animate-float" mood="wave" />
      <h1 className="mt-3 font-display text-2xl font-extrabold text-ink">
        Choose your plan
      </h1>
      <p className="mt-1 text-sm text-ink-soft">
        Same content & features on every plan — only the duration differs. Start with{" "}
        {TRIAL_DAYS} days free.
      </p>

      {/* currency */}
      <div className="mt-4 flex items-center justify-center gap-2">
        <span className="text-xs font-semibold text-ink-mute">Currency</span>
        <div className="flex rounded-full bg-cream p-1 ring-1 ring-pink-soft/50">
          {currencies.map((c) => (
            <button
              key={c.code}
              onClick={() => setCur(c)}
              className={`rounded-full px-3 py-1 text-xs font-bold transition-all ${
                cur.code === c.code ? "bg-gradient-to-r from-pink-deep to-pink text-white" : "text-ink-soft"
              }`}
            >
              {c.code}
            </button>
          ))}
        </div>
      </div>

      {/* plan cards */}
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {plans.map((p) => {
          const sel = planId === p.id;
          return (
            <button
              key={p.id}
              onClick={() => setPlanId(p.id)}
              className={`relative rounded-2xl p-4 text-left ring-2 transition-all ${
                sel ? "bg-pink-soft/30 ring-pink-deep" : "bg-white ring-pink-soft/50 hover:ring-pink"
              }`}
            >
              {p.badge && (
                <span className="absolute -top-2.5 right-3 rounded-full bg-gold px-2.5 py-0.5 text-[0.6rem] font-extrabold text-ink">
                  ★ {p.badge}
                </span>
              )}
              <div className="flex items-center justify-between">
                <span className="font-display font-extrabold text-ink">{p.name}</span>
                <span className={`grid h-5 w-5 place-items-center rounded-full ring-2 ${sel ? "bg-pink-deep ring-pink-deep" : "ring-pink-soft"}`}>
                  {sel && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
                </span>
              </div>
              <p className="mt-1 font-display text-2xl font-extrabold text-ink">{fmtPrice(p.usd, cur)}</p>
              <p className="text-xs text-ink-mute">{p.period}</p>
              {p.perMonthUsd && (
                <p className="mt-0.5 text-xs font-bold text-pink-deep">≈ {fmtPrice(p.perMonthUsd, cur)}/mo</p>
              )}
            </button>
          );
        })}
      </div>

      {/* coupon */}
      <div className="mt-4 flex gap-2">
        <input
          value={couponInput}
          onChange={(e) => setCouponInput(e.target.value)}
          placeholder="Coupon code (try SAKURA10)"
          className="flex-1 rounded-full border border-pink-soft/60 bg-cream px-4 py-2.5 text-sm text-ink placeholder:text-ink-mute focus:border-pink focus:outline-none focus:ring-4 focus:ring-pink/20"
        />
        <button onClick={applyCoupon} className="rounded-full bg-white px-4 py-2.5 text-sm font-bold text-pink-ink shadow-card ring-1 ring-pink-soft/60 hover:bg-cream">
          Apply
        </button>
      </div>
      {couponMsg && (
        <p className={`mt-2 text-sm font-semibold ${coupon ? "text-[#2f9d77]" : "text-[#d6557a]"}`}>{couponMsg}</p>
      )}

      <button onClick={() => setStep("checkout")} className={btnPrimary}>
        Continue
      </button>
      <button onClick={() => setStep("manage")} className={btnLink}>
        Already subscribed? Manage
      </button>
    </Card>
  );
}

/* ---------- helpers ---------- */
function Card({ children, wide }: { children: React.ReactNode; wide?: boolean }) {
  return (
    <div className={`w-full ${wide ? "max-w-lg" : "max-w-md"} rounded-[2rem] bg-white p-6 text-center shadow-pop ring-1 ring-white sm:p-8`}>
      {children}
    </div>
  );
}
function Row({ label, value, bold, green }: { label: string; value: string; bold?: boolean; green?: boolean }) {
  return (
    <div className="flex items-center justify-between py-1 text-sm">
      <span className={bold ? "font-extrabold text-ink" : "text-ink-soft"}>{label}</span>
      <span className={`${bold ? "font-extrabold text-ink" : green ? "font-bold text-[#2f9d77]" : "font-semibold text-ink"}`}>{value}</span>
    </div>
  );
}
function CardField({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-bold text-ink">{label}</span>
      <input
        placeholder={placeholder}
        className="w-full rounded-2xl border border-pink-soft/60 bg-cream px-4 py-3 text-sm text-ink placeholder:text-ink-mute focus:border-pink focus:outline-none focus:ring-4 focus:ring-pink/20"
      />
    </label>
  );
}
const btnPrimary =
  "mt-5 w-full rounded-full bg-gradient-to-r from-pink-deep to-pink py-3.5 text-sm font-extrabold text-white shadow-pop transition-transform hover:-translate-y-0.5";
const btnSecondary =
  "mt-4 w-full rounded-full bg-white py-3 text-sm font-bold text-pink-ink shadow-card ring-1 ring-pink-soft/60 hover:bg-cream";
const btnLink = "mt-3 w-full rounded-full py-2 text-sm font-bold text-ink-soft hover:text-pink-ink";
