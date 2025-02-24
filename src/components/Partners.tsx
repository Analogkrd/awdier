import React from 'react'

export default function Partners() {
  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-4xl font-bold text-primary text-center mb-8">
        Our Trusted Partners
      </h2>
      <div className="overflow-hidden">
        <div className="flex animate-scroll">
          {[
            "/partner1.png",
            "/partner2.png",
            "/partner3.png",
            "/partner4.png",
          ].map((logo, index) => (
            <img key={index} src={logo} alt="Partner" className="h-20 mx-6" />
          ))}
        </div>
      </div>
    </section>
  );
}
