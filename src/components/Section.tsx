import { useTranslations } from 'next-intl';
import React from 'react'

export default function Section(Props: {section: string}) {
      const t = useTranslations(Props.section);
    return (
      <section className="bg-secondary text-white py-40 text-center my-10">
        <h1 className="text-5xl font-bold mb-6">{t("title")}</h1>
        <p className="text-lg mt-2">{t("description")}</p>
      </section>
    );
}
