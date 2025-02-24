"use client"
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "@/i18n/routing";
import companyDetails from "@/data/companyDetails";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function Footer({ locale }: { locale: string }) {
  const t = useTranslations("Footer");
  const b = useTranslations("BusinessDetails");
  const m = useTranslations();
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer
      dir={locale === "en" ? "ltr" : "rtl"}
      className="bg-gray-900 py-10 text-gray-300"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section: Logo & About */}
        <div>
          <h2 className="text-2xl font-bold">{b("name")}</h2>
          <p className="mt-2 text-sm">{b("tagline")}</p>
          <p dir="ltr" className={locale === "en" ? "text-left" : "text-right"}>
            {companyDetails.phone}
            <br />
            {companyDetails.phone2}
          </p>
        </div>

        {/* Center Section: Navigation Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold">
            {t("quicklinks")}
          </h3>
          <Link href={`/`} className="hover:text-primary">
            {m("home")}
          </Link>
          <Link href={`/about`} className="hover:text-primary">
            {m('about')}
          </Link>
          <Link href={`/services`} className="hover:text-primary">
            {m('services')}
          </Link>
          <Link href={`/contact`} className="hover:text-primary">
            {m('contact')}
          </Link>
        </div>

        {/* Right Section: Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold">{t("followus")}</h3>
          <div className="flex space-x-4 mt-2">
            <a
              href={companyDetails.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href={companyDetails.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href={companyDetails.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-700 text-center pt-4 text-sm" dir="ltr">
        © {year} <a href="https://analog.krd">Analog</a>{" "}
        Company. All rights reserved.
      </div>
    </footer>
  );
}