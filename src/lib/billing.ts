/* Subscription / billing mock data. */

export type PlanId = "monthly" | "3month" | "yearly" | "lifetime";

export type BillingPlan = {
  id: PlanId;
  name: string;
  usd: number;
  period: string;
  perMonthUsd?: number;
  months: number; // 0 = lifetime
  featured?: boolean;
  badge?: string;
  note: string;
};

export const plans: BillingPlan[] = [
  { id: "monthly", name: "Monthly", usd: 14.99, period: "per month", months: 1, note: "Flexible, cancel anytime." },
  { id: "3month", name: "3-Month", usd: 39.99, period: "every 3 months", perMonthUsd: 13.33, months: 3, note: "A little cheaper per month." },
  { id: "yearly", name: "Yearly", usd: 119.99, period: "per year", perMonthUsd: 10, months: 12, featured: true, badge: "Best value", note: "Best value for a full year." },
  { id: "lifetime", name: "Lifetime", usd: 215.99, period: "once, forever", months: 0, note: "Pay once. Learn for life." },
];

export type Currency = { code: string; symbol: string; rate: number; zeroDecimal?: boolean };

export const currencies: Currency[] = [
  { code: "USD", symbol: "$", rate: 1 },
  { code: "EUR", symbol: "€", rate: 0.92 },
  { code: "GBP", symbol: "£", rate: 0.79 },
  { code: "JPY", symbol: "¥", rate: 157, zeroDecimal: true },
];

export function fmtPrice(usd: number, c: Currency) {
  const v = usd * c.rate;
  return c.zeroDecimal
    ? `${c.symbol}${Math.round(v).toLocaleString()}`
    : `${c.symbol}${v.toFixed(2)}`;
}

export type Coupon = { code: string; kind: "pct" | "freePeriod"; value?: number; label: string };

export const coupons: Coupon[] = [
  { code: "SAKURA10", kind: "pct", value: 10, label: "10% off" },
  { code: "WELCOME", kind: "freePeriod", label: "First period free" },
];

export const cancelReasons = [
  "Too expensive",
  "Not enough time to study",
  "Not what I expected",
  "Found another app",
  "Just taking a break",
  "Technical problems",
  "Other",
];

export const TRIAL_DAYS = 3;
