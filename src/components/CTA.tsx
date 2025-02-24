import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function CTA() {
  const t = useTranslations('CTA');
  
  return (
    <section className={ "py-16 bg-tertiary text-white text-center"}>
      <h2 className="text-2xl md:text-4xl font-bold mb-4">{t('title')}</h2>
      <p className="text-lg">
        {t('description')}
      </p>
      <button className="mt-6 bg-white text-tertiary px-6 py-3 rounded-lg font-semibold hover:bg-secondary hover:text-white">
        <Link href="/contact">{t('button')}</Link>
      </button>
    </section>
  );
}
