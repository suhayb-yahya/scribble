import type { Metadata } from "next";
import { getLocale } from "@/app/actions/locale";
import ContactHero from "@/components/sections/contact/ContactHero";
import ContactFormSection from "@/components/sections/contact/ContactFormSection";

export const metadata: Metadata = {
  title: "Contact — Scribble",
  description: "Get in touch with Scribble Media Production",
};

export default async function ContactPage() {
  const locale = await getLocale();
  return (
    <main className="flex flex-col w-full min-w-0 max-w-full overflow-x-hidden min-h-screen bg-primary">
      <ContactHero locale={locale} />
      <ContactFormSection locale={locale} />
    </main>
  );
}
