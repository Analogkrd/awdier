"use client"
import ContactForm from "@/components/ContactForm";
import Divider from "@/components/Divider";
import Features from "@/components/Features";
import HeroParralax from "@/components/HeroParralax";
import HoverImage from "@/components/HoverImage";
import ImageGallery from "@/components/ImageGallery";
import MissionVision from "@/components/MissionVision";
import OurJourney from "@/components/OurJourney";
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
      <ImageGallery />
      <OurJourney/>
      <HoverImage />
      <Stats />
      <ContactForm />
    </>
  );
}
