import type { Metadata } from "next";
import ContactHero from "@/components/sections/contact/ContactHero";
import ContactFormSection from "@/components/sections/contact/ContactFormSection";

export const metadata: Metadata = {
  title: "Contact — Scribble",
  description: "Get in touch with Scribble Media Production",
};

export default function ContactPage() {
  return (
    <main className="flex flex-col w-full min-w-0 max-w-full overflow-x-hidden min-h-screen bg-primary">
      <ContactHero />
      <ContactFormSection />
    </main>
  );
}
