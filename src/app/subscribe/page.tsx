import type { Metadata } from "next";
import Petals from "@/components/Petals";
import Subscribe from "@/components/billing/Subscribe";

export const metadata: Metadata = {
  title: "Subscribe",
  robots: { index: false, follow: false },
};

export default function SubscribePage() {
  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden bg-aurora px-4 py-10">
      <Petals count={10} />
      <div className="relative w-full">
        <div className="mx-auto flex justify-center">
          <Subscribe />
        </div>
      </div>
    </main>
  );
}
