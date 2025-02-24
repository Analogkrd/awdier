import React from 'react'

export default function ScrollingImage() {
  return (
    <section className="relative h-64 overflow-hidden">
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/images/farmers-kurd-1.jpg')" }}
      ></div>
    </section>
  );
}
