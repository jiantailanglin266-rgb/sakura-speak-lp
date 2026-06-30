"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import {
  authApi,
  type AuthUser,
  type SignInInput,
  type SignUpInput,
  type SignUpResult,
} from "@/lib/auth";

type AuthContextValue = {
  user: AuthUser | null;
  loading: boolean;
  signUp: (i: SignUpInput) => Promise<SignUpResult>;
  signIn: (i: SignInInput) => Promise<AuthUser>;
  signInAsGuest: () => Promise<AuthUser>;
  upgradeGuest: (i: SignUpInput) => Promise<SignUpResult>;
  signOut: () => Promise<void>;
  refresh: () => Promise<AuthUser | null>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    try {
      const u = await authApi.getSession();
      setUser(u);
      return u;
    } catch {
      setUser(null);
      return null;
    }
  }, []);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const u = await authApi.getSession();
        if (alive) setUser(u);
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  const signUp = useCallback(async (i: SignUpInput) => {
    const res = await authApi.signUp(i);
    if (!res.needsConfirmation) setUser(res.user); // no session yet if confirming
    return res;
  }, []);

  const signIn = useCallback(async (i: SignInInput) => {
    const u = await authApi.signIn(i);
    setUser(u);
    return u;
  }, []);

  const signInAsGuest = useCallback(async () => {
    const u = await authApi.signInAsGuest();
    setUser(u);
    return u;
  }, []);

  const upgradeGuest = useCallback(async (i: SignUpInput) => {
    const res = await authApi.upgradeGuest(i);
    setUser(res.user); // session stays active through the upgrade
    return res;
  }, []);

  const signOut = useCallback(async () => {
    await authApi.signOut();
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, loading, signUp, signIn, signInAsGuest, upgradeGuest, signOut, refresh }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within <AuthProvider>");
  return ctx;
}
