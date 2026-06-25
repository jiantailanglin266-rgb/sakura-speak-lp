import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="June 26, 2026"
      sections={[
        { heading: "Information we collect", body: "We collect the information you provide when you create an account (such as your email, username and learning preferences) and usage data that helps us improve your learning experience." },
        { heading: "How we use your data", body: "Your data is used to deliver lessons, track progress, personalize content, and keep the community safe. We do not sell your personal information." },
        { heading: "Your choices", body: "You can edit your profile, set your account to private, and request deletion of your account at any time from the settings." },
        { heading: "Children", body: "Sakura Speak is intended for a general audience. Users under 18 are encouraged to use a nickname and obtain a guardian's consent before using social features." },
        { heading: "Data security", body: "We use industry-standard measures to protect your information. Email verification is required and you may stay signed in on up to two devices." },
      ]}
    />
  );
}
