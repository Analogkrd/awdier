"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion"; // Import Framer Motion
import {
  ShieldCheckIcon,
  LightBulbIcon,
  UsersIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/solid";

// Map icon names from JSON to actual Heroicons
const iconMap: Record<string, React.ComponentType<{ className: string }>> = {
  ShieldCheckIcon,
  LightBulbIcon,
  UsersIcon,
  BriefcaseIcon,
};

export default function Features() {
  const t = useTranslations("Features"); // Fetch translations
  const features = t.raw("list"); // Get translated features list

  return (
    <section className="py-16 text-center">
      <motion.h2
        className="text-2xl md:text-4xl font-bold text-primary mb-8"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t("title")}
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-8 mx-auto">
        {features.map(
          (
            feature: { id: number; title: string; icon: string }
          ) => {
            const IconComponent = iconMap[feature.icon];

            return (
              <motion.div
                key={feature.id}
                className="bg-white p-6 shadow-lg rounded-lg transition-some w-40 sm:w-60 md:w-60 h-60 flex flex-col justify-center items-center card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 4px 15px rgba(0,0,0,0.1)",
                }}
              >
                {IconComponent && (
                  <motion.div
                    className="w-12 h-12 text-primary mx-auto card"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <IconComponent className="w-12 h-12 text-secondary card" />
                  </motion.div>
                )}
                <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
              </motion.div>
            );
          }
        )}
      </div>
    </section>
  );
}
