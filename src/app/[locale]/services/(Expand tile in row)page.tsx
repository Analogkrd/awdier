"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import services from "@/data/services";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { IoClose } from "react-icons/io5";

// Define Service Type
interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
}

export default function Services() {
  const t = useTranslations("Services");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section className="bg-gray-100 text-center">
      {/* Header Section */}
      <section className="bg-primary text-white py-16 text-center">
        <h1 className="text-5xl font-bold">{t("title")}</h1>
        <p className="text-lg mt-2">{t("description")}</p>
      </section>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto py-10">
        {services.map((service: Service) => {
          const isExpanded = expandedId === service.id;

          return (
            <motion.div
              key={service.id}
              layout
              onClick={() => setExpandedId(isExpanded ? null : service.id)}
              className={`relative bg-white shadow-lg rounded-lg p-6 cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                isExpanded ? "col-span-3 w-full max-w-5xl mx-auto" : ""
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {/* Close Button (Only Visible When Expanded) */}
              {isExpanded && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-4 right-4 text-gray-600 hover:text-black z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpandedId(null);
                  }}
                >
                  <IoClose size={24} />
                </motion.button>
              )}

              {/* Title - Moves to the top when expanded */}
              <motion.h3
                layout
                className={`text-2xl font-semibold ${
                  isExpanded ? "text-3xl mb-4 text-left" : "mt-4"
                }`}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {service.title}
              </motion.h3>

              {/* Content Container */}
              <motion.div
                layout
                className={`flex flex-col ${
                  isExpanded ? "md:flex-row items-center gap-6" : ""
                }`}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {/* Image - Moves to the right when expanded */}
                <motion.div
                  layout
                  className={`relative ${
                    isExpanded ? "w-1/2 h-64 order-2" : "w-full h-48"
                  } overflow-hidden rounded-md`}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <Image
                    src={service.image}
                    width={600}
                    height={400}
                    alt={service.title}
                    className="rounded-md object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                  />
                </motion.div>

                {/* Description - Expands with Smooth Scrolling */}
                <motion.div
                  layout
                  className={`text-gray-600 mt-2 ${
                    isExpanded
                      ? "text-lg w-1/2 text-left max-h-40 overflow-auto"
                      : ""
                  }`}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <p>{service.description}</p>
                  {isExpanded && (
                    <p className="mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla facilisi. Duis vehicula ligula at libero dapibus, in
                      fringilla eros facilisis. Morbi condimentum euismod nunc,
                      id tincidunt massa molestie in.
                    </p>
                  )}
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
