"use client";
import { motion } from "framer-motion";
import services from "@/data/services";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Services() {
  const t = useTranslations("Services");

  return (
    <section className="bg-gray-100 text-center">
      {/* Header Section */}
      <section className="bg-primary text-white py-16 text-center">
        <h1 className="text-5xl font-bold">{t("title")}</h1>
        <p className="text-lg mt-2">{t("description")}</p>
      </section>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto py-10">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className="relative bg-white shadow-lg rounded-lg p-6 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }} // Now works with Tailwind hover
          >
            <div className="relative w-full h-48 overflow-hidden rounded-md">
              <Image
                src={service.image}
                width={600}
                height={400}
                alt={service.title}
                className="rounded-md object-cover w-full h-full transition-transform duration-500 hover:scale-110"
              />
            </div>
            <h3 className="text-2xl font-semibold mt-4">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
