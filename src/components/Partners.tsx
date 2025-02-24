import Image from "next/image";
import React from "react";

export default function Partners() {
  const logos = [
    "/partner1.png",
    "/partner2.png",
    "/partner3.png",
    "/partner4.png",
  ];

  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-4xl font-bold text-primary text-center mb-8">
        Our Trusted Partners
      </h2>
      <div className="overflow-hidden">
        <div className="flex animate-scroll">
          {logos.map((logo, index) => (
            // Wrap each image in a container with fixed width & height
            <div key={index} className="relative h-20 w-[120px] mx-6">
              <Image
                src={logo}
                alt="Partner"
                fill
                sizes="(max-width: 768px) 100vw, 120px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
