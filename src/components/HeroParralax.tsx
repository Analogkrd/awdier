import { useTranslations } from 'next-intl'
import React from 'react'

export default function HeroParralax() {
    const t = useTranslations();
    return (
    <section
      className="relative h-screen flex items-center justify-center bg-fixed bg-cover"
      style={{ backgroundImage: "url('/images/sustainable-farming.jpg')" }}
    >
      <div className="bg-black/50 absolute inset-0 flex flex-col items-center justify-center p-5">
        <h1 className="text-white text-3xl md:text-5xl font-bold text-center ">
    {t('hero_text')}        </h1>
        <p className="text-white mt-4 text-center">
          {t('hero_detail')}
        </p>
      </div>
    </section>
  );
}
