"use client";
import ContactForm from "@/components/ContactForm";
import companyDetails from "@/data/companyDetails";
import { useTranslations } from "next-intl";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import dynamic from "next/dynamic";
import Section from "@/components/Section";

const Map = dynamic(() => import("@/components/Map"), { ssr: false }); // Lazy load map

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <div className="bg-gray-100">
      {/* Header Section */}
      <Section section="Contact" />

      <div className="p-8 max-w-fit mx-auto">
        {/* Contact Info & Form Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Contact Info */}
          <div className="bg-white p-8 shadow-lg rounded-lg flex flex-col space-y-6">
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-secondary text-2xl" />
              <div>
                <h2 className="text-xl font-semibold">{t("address")}</h2>
                <p className="text-gray-600">{companyDetails.address}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-secondary text-2xl" />
              <div>
                <h2 className="text-xl font-semibold">{t("phone")}</h2>
                <p dir="ltr" className="text-gray-600">
                  {companyDetails.phone}
                  <br/>
                  {companyDetails.phone2}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-secondary text-2xl" />
              <div>
                <h2 className="text-xl font-semibold">{t("email")}</h2>
                <p className="text-gray-600">{companyDetails.email}</p>
              </div>
            </div>
          </div>
          <ContactForm />

          {/* Contact Form */}
        </div>

        {/* Map Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-center mb-4">
            {t("location")}
          </h2>
          <div className="w-full h-80 rounded-lg overflow-hidden shadow-md">
            <Map />
          </div>
        </section>
      </div>
    </div>
  );
}
