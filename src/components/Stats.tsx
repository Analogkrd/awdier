"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  FaTractor,
  FaSeedling,
  FaGlobeAmericas,
  FaClock,
} from "react-icons/fa";

interface Stats {
  number: number;
  suffix: string;
  label: string;
  icon: string;
}

// ✅ Custom Hook for Animated Count-Up (Triggers When in View)
function useCountUp(end: number, startAnimation: boolean, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return; // 🚀 Only start when visible
    let start = 0;
    const increment = end / (duration / 16);
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(interval);
  }, [duration, end, startAnimation]);

  return count;
}

// ✅ Child component for each stat
function StatItem({
  stat,
  startAnimation,
}: {
  stat: Stats;
  startAnimation: boolean;
}) {
  const count = useCountUp(stat.number, startAnimation);

  return (
    <motion.div
      className="bg-white p-8 shadow-lg rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: startAnimation ? 1 : 0, y: startAnimation ? 0 : 50 }}
      transition={{ duration: 0.5 }}
    >
      {stat.icon}
      <h3 className="text-2xl md:text-5xl font-bold text-primary">
        {count}
        {stat.suffix}
      </h3>
      <p className="text-gray-600 text-lg">{stat.label}</p>
    </motion.div>
  );
}

export default function Stats() {
  const t = useTranslations("Stats");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  // ✅ Parse Stats Data
  const stats = t.raw("list").map((stat: Stats, index: number) => ({
    number: Number(stat.number) || 0,
    suffix: stat.suffix || "",
    label: stat.label || "",
    icon: [
      <FaTractor
        key={index}
        className="text-secondary text-5xl mx-auto mb-2"
      />,
      <FaSeedling
        key={index}
        className="text-secondary text-5xl mx-auto mb-2"
      />,
      <FaGlobeAmericas
        key={index}
        className="text-secondary text-5xl mx-auto mb-2"
      />,
      <FaClock key={index} className="text-secondary text-5xl mx-auto mb-2" />,
    ][index],
  }));

  return (
    <section ref={ref} className="py-16 bg-gray-100 text-center p-4">
      <h2 className="text-2xl md:text-4xl font-bold text-primary mb-8">
        {t("title")}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {stats.map((stat: Stats, index: number) => (
          <StatItem key={index} stat={stat} startAnimation={inView} />
        ))}
      </div>
    </section>
  );
}
