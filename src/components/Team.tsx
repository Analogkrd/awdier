"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";

// Placeholder image for missing team member images
const placeholderImage = "/contact.jpg";

export default function Team() {
  const t = useTranslations("Team"); // Fetch translations
  const teamMembers = t.raw("members"); // Get translated team list

  return (
    <section className="py-16 text-center bg-gray-100 p-4">
      <motion.h2
        className="text-4xl font-bold text-primary mb-8"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t("title")}
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {teamMembers.map(
          (
            member: { id: number; name: string; role: string; image: string },
            index:number
          ) => (
            <motion.div
              key={member.id}
              className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center transition-all hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                <Image
                  src={member.image || placeholderImage} // Use actual image or fallback
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-secondary">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
}
