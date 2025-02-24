"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import Section from "@/components/Section";

// Define Service Type
interface Service {
  id: number;
  title: string;
  description: string;
  detail: string;
  image: string;
}

export default function ServicesPage() {
  const t = useTranslations("Services"); // Fetch services from the locale JSON
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = t.raw("list"); // Get services dynamically

  return (
    <section className="bg-gray-100 text-center p-4">
      {/* Header Section */}
      <Section section="Services"/>
      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto py-20">
        {services.map((service) => (
          <motion.div
            key={service.id}
            onClick={() => setSelectedService(service)}
            className="relative bg-white shadow-lg rounded-lg p-6 cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-2xl"
            whileHover={{ scale: 1.05 }} // Zoom-in effect on hover
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

      {/* Expanded Service Card */}
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
              className="bg-white rounded-lg shadow-xl p-8 max-w-3xl w-full relative flex flex-col md:flex-row items-center gap-6"
              initial={{ scale: 0.8, opacity: 0, y: 100 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 100 }}
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

              {/* Image on Right */}
              <motion.div
                className="relative w-full md:w-1/2 h-64 overflow-hidden rounded-md"
                initial={{ scale: 1 }}
                animate={{ scale: 1.1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Image
                  src={selectedService.image}
                  width={600}
                  height={400}
                  alt={selectedService.title}
                  className="rounded-md object-cover w-full h-full"
                />
              </motion.div>

              {/* Title and Description */}
              <motion.div
                className="text-left md:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <h3 className="text-3xl font-bold">{selectedService.title}</h3>
                <p className="text-gray-700 text-lg mt-2">
                  {selectedService.description} {selectedService.detail}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
