"use client"
import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface Projects{
  map(arg0: (item: Projects, index: number) => import("react").JSX.Element): import("react").ReactNode;
  title:string,
  image: string
}
export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const t = useTranslations("Projects");
  const images:Projects=t.raw('list');

  return (
    <section className="py-16 text-center">
      <h2 className="text-4xl font-bold text-primary mb-8">
        {t('title')}
        </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((item:Projects, index:number) => (
          <div
            key={index}
            className="relative group overflow-hidden shadow-lg rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            onClick={() => setSelectedImage(item.image)} // Open modal on click
          >
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold">{item.title}</h3>
            </div>
            <Image
              width={600}
              height={500}
              src={item.image}
              alt={item.title}
              className="w-full h-60 object-cover transition-transform duration-500"
            />
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)} // Close when clicking outside
        >
          <div className="relative max-w-4xl p-4">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-white text-3xl"
              onClick={() => setSelectedImage(null)}
            >
              ✖
            </button>
            {/* Enlarged Image */}
            <Image
              width={800}
              height={600}
              src={selectedImage}
              alt="Expanded View"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
