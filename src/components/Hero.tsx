"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations();
  return (
    <motion.section
      className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-primary to-secondary text-white px-6"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-3xl md:text-5xl leading-normal font-bold">{t('hero_text')}</h1>
      <p className="text-lg mt-4">
        {t('hero_detail')}
      </p>
    </motion.section>
  );
}
