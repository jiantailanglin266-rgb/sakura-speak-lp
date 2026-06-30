# Backend setup (auth + member database)

Sakura Speak ships with a **mock backend** (localStorage) so the static preview
and local development work with no credentials. The same code switches to a real
**Supabase** backend the moment env vars are present — no code changes.

## How it works

- `src/lib/supabase.ts` — creates the Supabase client **only** if
  `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are set.
- `src/lib/auth.ts` — one API (`authApi`) with two implementations:
  - **mock** (localStorage) when Supabase is not configured;
  - **supabase** (real auth + `profiles` table) when it is.
- `AuthProvider` / `useAuth` expose `user`, `signUp`, `signIn`, `signInAsGuest`,
  `signOut`. The member area (`/dashboard`) is gated by `RequireAuth`.
- Admin member management reads/writes `profiles`; access is enforced by Row
  Level Security (admins see all rows, members see only their own).

## Mock mode (default, no setup)

Nothing to do. Seeded demo logins (mock only):

| email              | password   | role   |
| ------------------ | ---------- | ------ |
| admin@sakura.dev   | `password` | admin  |
| hana@example.com   | `password` | member |

Sign-ups, log-in, guest, logout and member management all work against
localStorage.

## Going live with Supabase (client provides the account)

1. Create a project at https://supabase.com (client-owned; billing stays theirs).
2. SQL Editor → run [`supabase/schema.sql`](../supabase/schema.sql).
3. Authentication → Providers: enable **Email**. (Optional: Google/Apple — add
   their OAuth credentials.) For real sign-up emails, set a custom SMTP sender
   (e.g. Resend/SendGrid) under Authentication → Emails.
4. Project Settings → API: copy the **Project URL** and **anon public** key into
   `.env.local` (see `.env.local.example`), or into the GitHub Actions build env
   for the deployed site.
5. Rebuild/redeploy. The app now uses real auth + database automatically.
6. Make yourself admin once:
   `update public.profiles set role = 'admin' where email = 'you@example.com';`

## Notes

- The anon key is meant to be public; never expose the **service_role** key.
- Anonymous (guest) sign-in must be enabled in Supabase Auth settings if you keep
  the "Continue as guest" button in production.
