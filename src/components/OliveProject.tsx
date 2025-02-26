"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

interface ProjectSectionProps {
  mode: "highlights" | "details";
}
interface Stat {
    stat: number,
    number: number,
    suffix: string,
    label: string,
    description: string,
    title: string
}
export default function OliveProject({ mode }: ProjectSectionProps) {
  const t = useTranslations("OliveProject");

  const stats = t.raw("stats");
  const details = t.raw("details");

  return (
    <section className="py-16 text-center bg-gray-100">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">{t("title")}</h2>

      <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">{t("brief")}</p>

      {mode === "highlights" ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat:Stat, index:number) => (
            <motion.div
              key={index}
              className="bg-white p-6 shadow-lg rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-2xl md:text-4xl font-bold text-primary">
                {stat.number} {stat.suffix}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      ) : (
                  <div className="grid grid-cols-1 gap-6 max-w-5x mx-auto lspace-y-8 items-center justify-center">
                      <div className="flex justify-center">
                <Image
                  src="/olive.jpg"
                  alt="Olive Project"
                  width={800}
                  height={500}
                              className="rounded-lg center" />
                          </div>

          {details.map((detail:Stat, index:number) => (
            <motion.div
              key={index}
              className="bg-white p-6 shadow-lg rounded-lg text-left transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              >
              <h3 className="text-2xl font-semibold text-secondary text-center">{detail.title}</h3>
              <p className="text-gray-600 mt-2 text-center">{detail.description}</p>
            </motion.div>
          ))}
        </div>
      )}

      {mode === "highlights" && (
        <Link href="/about">
          <button className="mt-8 px-6 py-3 bg-primary text-white font-semibold rounded-md hover:opacity-90">
            Learn More
          </button>
        </Link>
      )}
    </section>
  );
}
