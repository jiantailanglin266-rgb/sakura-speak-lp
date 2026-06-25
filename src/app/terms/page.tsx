import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="June 26, 2026"
      sections={[
        { heading: "Your account", body: "You're responsible for keeping your account secure. Usernames must be unique, and you may use Sakura Speak on up to two devices at once." },
        { heading: "Subscriptions & trials", body: "All plans unlock the same content; only the duration differs. New users get a 3-day free trial. Subscriptions auto-renew until cancelled. Refunds are not issued for forgotten cancellations." },
        { heading: "Community guidelines", body: "Be kind and respectful. Spam, harassment, and abusive behavior are not allowed and may result in muting, suspension, or a permanent ban." },
        { heading: "Cancellation", body: "You can cancel anytime from your subscription settings. You'll keep access until the end of your current billing period." },
        { heading: "Changes", body: "We may update these terms as the service evolves. We'll notify you of significant changes." },
      ]}
    />
  );
}

export const metadata = { title: "Terms of Service" };
