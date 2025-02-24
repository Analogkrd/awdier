"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section className="bg-gray-100 text-center">
      {/* Header Section */}
      <section className="bg-primary text-white py-16 text-center">
        <h1 className="text-5xl font-bold">{t("title")}</h1>
        <p className="text-lg mt-2">{t("description")}</p>
      </section>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto py-10">
        {services.map((service) => (
          <motion.div
            key={service.id}
            onClick={() => setSelectedService(service)}
            className="relative bg-white shadow-lg rounded-lg p-6 cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-2xl"
            whileHover={{ scale: 1.05 }} // Zoom§-in effect on hover
          >
            {/* Image */}
            <div className="relative w-full h-48 overflow-hidden rounded-md">
              <Image
                src={service.image}
                width={600}
                height={400}
                alt={service.title}
                className="rounded-md object-cover w-full h-full transition-transform duration-500 hover:scale-110"
              />
            </div>

            {/* Title & Description */}
            <h3 className="text-2xl font-semibold mt-4">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Expanded Card Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)} // Click outside to close
          >
            <motion.div
              className="bg-white rounded-lg shadow-xl p-8 max-w-3xl w-full relative"
              initial={{ scale: 1.05, opacity: 0 }}
              animate={{ scale: 1.1, opacity: 1 }}
              exit={{ scale: 1.05, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-black"
                onClick={() => setSelectedService(null)}
              >
                <IoClose size={24} />
              </button>

              {/* Modal Content */}
              <h3 className="text-3xl font-bold text-center">
                {selectedService.title}
              </h3>
              <div className="flex flex-col md:flex-row items-center gap-6 mt-6">
                {/* Description */}
                <p className="text-gray-700 text-lg text-left">
                  {selectedService.description} Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Curabitur a neque in dui sagittis
                  commodo at eu est. Aliquam erat volutpat.
                </p>
                {/* Image */}
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="relative w-full h-60 overflow-hidden rounded-md"
                >
                  <Image
                    src={selectedService.image}
                    width={600}
                    height={600}
                    alt={selectedService.title}
                    className="rounded-md object-cover w-full h-full"
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
