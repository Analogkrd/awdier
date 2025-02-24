"use client";
import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import Image from "next/image";
import { IoMdMenu, IoMdClose } from "react-icons/io"; // Import icons for mobile menu
import companyDetails from "@/data/companyDetails";

const locales = ["en", "ar", "ku"];

export default function Navbar({ locale }: { locale: string }) {
  const t = useTranslations();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-all duration-300 ${
        scrolled ? "py-2 shadow-lg bg-opacity-95" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Logo Section */}
        <Link href={`/`} className="flex items-center space-x-3">
          <div className="relative h-12 w-12 md:h-14 md:w-14">
            <Image
              src="/logo-full.png"
              alt="Company Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <h1 className="text-primary font-bold text-lg md:text-xl">
            {companyDetails.name}
          </h1>
        </Link>

        {/* Desktop Navigation Links */}
        <div
          dir={locale === "en" ? "ltr" : "rtl"}
          className={
            locale === "en"
              ? "font-english hidden md:flex gap-6 text-lg"
              : "font-arabic hidden md:flex gap-6 text-lg"
          }
        >
          <Link
            href={"/"}
            className={`hover:text-tertiary ${
              pathname === "/" ? "font-bold text-secondary" : ""
            }`}
          >
            {t("home")}
          </Link>
          <Link
            href={`/about`}
            className={`hover:text-tertiary ${
              pathname === "/about" ? "font-bold text-secondary" : ""
            }`}
          >
            {t("about")}
          </Link>
          <Link
            href={`/services`}
            className={`hover:text-tertiary ${
              pathname === "/services" ? "font-bold text-secondary" : ""
            }`}
          >
            {t("services")}
          </Link>
          <Link
            href={`/contact`}
            className={`hover:text-tertiary ${
              pathname === "/contact" ? "font-bold text-secondary" : ""
            }`}
          >
            {t("contact")}
          </Link>
        </div>

        {/* Language Switcher */}
        <div className="hidden md:flex space-x-4 ">
          {locales.map((lng) => (
            <a
              key={lng}
              onClick={() =>
                locale !== lng
                  ? (window.location.href = `/${lng}${pathname}`)
                  : null
              }
            >
              <span
                className={`text-lg cursor-pointer hover:text-tertiary ${
                  locale === lng ? "font-bold text-tertiary" : ""
                }`}
              >
                {lng.toUpperCase()}
              </span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden z-50`}
      >
        <div className="flex flex-col p-6 space-y-6 text-lg">
          <button
            className="absolute top-4 right-4 text-3xl"
            onClick={() => setMenuOpen(false)}
          >
            <IoMdClose />
          </button>

          <Link
            href="/"
            className={
              pathname === "/"
                ? "font-bold bg-secondary text-white p-2 rounded-lg opacity-75"
                : "hover:text-secondary"
            }
            onClick={() => setMenuOpen(false)}
          >
            {t("home")}
          </Link>
          <Link
            href="/about"
            className={
              pathname === "/about"
                ? "font-bold bg-secondary text-white p-2 rounded-lg opacity-75"
                : "hover:text-secondary"
            }
            onClick={() => setMenuOpen(false)}
          >
            {t("about")}
          </Link>
          <Link
            href="/services"
            className={
              pathname === "/services"
                ? "font-bold bg-secondary text-white p-2 rounded-lg opacity-75"
                : "hover:text-secondary"
            }
            onClick={() => setMenuOpen(false)}
          >
            {t("services")}
          </Link>
          <Link
            href="/contact"
            className={
              pathname === "/contact"
                ? "font-bold bg-secondary text-white p-2 rounded-lg opacity-75"
                : "hover:text-secondary "
            }
            onClick={() => setMenuOpen(false)}
          >
            {t("contact")}
          </Link>

          {/* Mobile Language Switcher */}
          <div className="flex space-x-4">
            {locales.map((lng) => (
              <a
                key={lng}
                onClick={() =>
                  locale !== lng
                    ? (window.location.href = `/${lng}${pathname}`)
                    : null
                }
              >
                <span
                  className={`text-lg cursor-pointer ${
                    locale === lng ? "font-bold text-tertiary" : ""
                  }`}
                >
                  {lng.toUpperCase()}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
