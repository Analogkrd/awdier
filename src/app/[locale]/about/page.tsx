import Section from "@/components/Section";
import Team from "@/components/Team";
import MissionVision from "@/components/MissionVision";
import { useTranslations } from "next-intl";
import Image from "next/image";
import OurJourney from "@/components/OurJourney";
import GalleryWrapper from "@/components/GalleryWrapper";

export default function About() {
  const t = useTranslations("About");
  const b = useTranslations("BusinessDetails")
  return (
    <>
      <Section section="About" />
      <div className="p-8 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 mt-8">
          <Image
            src="/logo-full.png"
            alt="Company Image"
            width={200}
            height={100}
            className="rounded-lg w-full md:w-1/2"
          />
          <div className="flex flex-col gap-6">
            <h1 className="font-bold text-xl">{b("tagline")}</h1>
            <p className="text-gray-600 text-lg">{t("aboutUs")}</p>
          </div>
        </div>

        {/* Customizable sections */}
        <MissionVision />
        <OurJourney />
        <GalleryWrapper />
      </div>
      <Team />
    </>
  );
}
