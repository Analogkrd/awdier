"use client";
import "react-image-lightbox/style.css";
import Image from "next/image";

const images = [
  "/images/farmer-training.jpg",
  "/images/farmer-training.jpg",
  "/images/farmer-training.jpg",
  "/images/sustainable-farming.jpg",
  "/images/farmers-kurd-2.jpg",
];

export default function TestSection() {
  return (
    <section className="py-16 text-center">
      <h2 className="text-4xl font-bold text-primary mb-8">Our Projects</h2>
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 max-w-6xl mx-auto space-y-4">
        {images.map((img, index) => (
            <Image
            key={index}
            src={img}
            alt={`Gallery ${index + 1}`}
            className="w-full rounded-lg shadow-lg"
          />
        ))}
      </div>
    </section>
  );
}