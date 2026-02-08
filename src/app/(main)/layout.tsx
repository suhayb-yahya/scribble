import { getLocale } from "@/app/actions/locale";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LocaleProvider } from "@/components/LocaleProvider";

export default async function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale();

  return (
    <LocaleProvider locale={locale}>
      <Header locale={locale} />
      {children}
      <Footer locale={locale} />
    </LocaleProvider>
  );
}
