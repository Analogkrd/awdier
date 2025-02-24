"use client";
import ContactForm from "@/components/ContactForm";
import Divider from "@/components/Divider";
import Features from "@/components/Features";
import HeroParralax from "@/components/HeroParralax";
import ImageGallery from "@/components/ImageGallery";
import MissionVision from "@/components/MissionVision";
import ServicesSlider from "@/components/ServicesSlider";
import Stats from "@/components/Stats";

export default function HomePage() {
  return (
    <>
      <HeroParralax />
      <ServicesSlider />
      <Divider />
      <Features />
      <MissionVision />
      <div className="py-16">
        <Divider />
      </div>
      <Stats />
      <ImageGallery />

      <ContactForm />
    </>
  );
}
