"use client";

import { useLocale } from "@/components/LocaleProvider";
import { getTranslations } from "@/lib/translations";

export default function FriendsAcrossBorders() {
  const locale = useLocale();
  const t = getTranslations(locale);
  return (
    <section className="h-[30.16rem] bg-[#4F1A39] pt-12 md:pt-12 pb-16 md:pb-24 px-6 md:px-10 rounded-b-[8vw] md:rounded-b-[6rem] shadow-none isolate">
      <div className="sm:max-w-[55.5rem] mx-auto text-center">
        <h2 className="text-7xl md:text-[4.2rem] font-bold uppercase tracking-tight md:mb-32 -mt-7">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D17F64] to-[#5C8CA6]">
            {t.friends.headline}
          </span>
        </h2>
        <p className="text-3xl text-white leading-[1.2] sm:max-w-[55.5rem] mx-auto text-center">
          {t.friends.body}
        </p>
      </div>
    </section>
  );
}
