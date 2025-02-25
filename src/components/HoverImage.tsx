"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";

export interface ImageData {
  title: string;
  image: string;
}

interface HoverImageProps {
  images: ImageData[];
}

export default function HoverImage({ images }: HoverImageProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const openModal = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const showPrev = React.useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  }, [selectedIndex, images.length]);

  const showNext = React.useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  }, [selectedIndex, images.length]);

  // Keyboard shortcuts for modal navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, showNext, showPrev]);

  // Disable background scroll while modal is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [selectedIndex]);

  // When modal opens, force focus away after a short delay.
  useEffect(() => {
    if (selectedIndex !== null) {
      setTimeout(() => {
        if (document.activeElement instanceof HTMLElement) {
          document.activeElement.blur();
        }
        document.body.focus();
      }, 100);
    }
  }, [selectedIndex]);

  const showMoreImages = () => {
    setVisibleCount((prev) => Math.min(prev + 24, images.length));
  };

  const displayedImages = images.slice(0, visibleCount);

  // Set up swipe handlers for the entire modal overlay.
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => showNext(),
    onSwipedRight: () => showPrev(),
    preventScrollOnSwipe: true,
    trackTouch: true,
  });

  return (
    <section className="py-16 text-center">
      <h2 className="text-4xl font-bold text-primary mb-8"></h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {displayedImages.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden shadow-lg rounded-lg cursor-pointer"
            onClick={() => openModal(index)}
          >
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold">{item.title}</h3>
            </div>
            <Image
  width={600}
  height={500}
  src={item.image}
  alt={item.title}
  className="object-cover group-hover:scale-110 transition-transform duration-500"
  style={{ width: "auto", height: "auto" }} // Ensure proper aspect ratio
/>


          </div>
        ))}
      </div>

      {visibleCount < images.length && (
        <button
          onClick={showMoreImages}
          className="mt-8 px-6 py-2 bg-primary text-white rounded hover:bg-primary-dark transition"
        >
          Show More
        </button>
      )}

      {/* Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
          onClick={closeModal}
          style={{ touchAction: "none" }} // Disable native touch actions
          {...swipeHandlers} // Apply swipe handlers to the full overlay
          onFocus={(e) => e.currentTarget.blur()} // Immediately blur if focused
        >
          <div
            className="relative max-w-4xl p-4"
            onClick={(e) => e.stopPropagation()} // Prevent modal content clicks from closing modal
          >
            <button
              className="absolute top-2 right-4 text-white text-2xl p-1 rounded hover:bg-gray-700 transition-all"
              onClick={closeModal}
            >
              ✖
            </button>
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-4xl p-2 rounded-full hover:bg-gray-700 transition-all"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
            >
              <FaChevronLeft />
            </button>
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-4xl p-2 rounded-full hover:bg-gray-700 transition-all"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
            >
              <FaChevronRight />
            </button>
<Image
  width={800}
  height={600}
  src={images[selectedIndex].image}
  alt={images[selectedIndex].title}
  className="rounded-lg shadow-lg"
  priority={true}
  loading="eager"
  unoptimized
  style={{ width: "auto", height: "auto" }} // Fix aspect ratio issue
/>


          </div>
        </div>
      )}
    </section>
  );
}
