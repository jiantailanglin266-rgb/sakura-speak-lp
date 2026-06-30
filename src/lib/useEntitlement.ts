"use client";

import { useCallback, useEffect, useState } from "react";
import { useAuth } from "@/components/auth/AuthProvider";
import { getSubscription, isPremium, type Subscription } from "@/lib/entitlement";

/** Current member's subscription + whether they have premium access. */
export function useEntitlement() {
  const { user } = useAuth();
  const [sub, setSub] = useState<Subscription | null>(null);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    if (!user) {
      setSub(null);
      setLoading(false);
      return;
    }
    setLoading(true);
    try {
      setSub(await getSubscription(user.id));
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    load();
  }, [load]);

  return { sub, premium: isPremium(sub), loading, refresh: load };
}
