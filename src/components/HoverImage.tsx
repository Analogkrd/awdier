"use client"
import { useState } from "react";
import Image from "next/image";
import React from "react";

export default function HoverImage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { title: "Organic Farming", image: "/images/sustainable-farming.jpg" },
    { title: "Water Conservation", image: "/images/community-development.jpg" },
    { title: "Farm Training", image: "/images/farmer-training.jpg" },
  ];

  return (
    <section className="py-16 text-center">
      <h2 className="text-4xl font-bold text-primary mb-8">
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden shadow-lg rounded-lg cursor-pointer"
            onClick={() => setSelectedImage(item.image)} // Open modal on click
          >
            {/* Hover Effect */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold">{item.title}</h3>
            </div>
            <Image
              width={600}
              height={500}
              src={item.image}
              alt={item.title}
              className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)} // Close on click outside
        >
          <div className="relative max-w-4xl p-4">
            {/* Close Button */}
            <button
              className="absolute top-2 rounded-lg right-4 text-white  hover:bg-black hover:text-gray-200 text-2xl p-1 transition-all"
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
