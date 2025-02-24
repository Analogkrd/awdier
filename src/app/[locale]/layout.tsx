import { NextIntlClientProvider } from "next-intl";
import { Noto_Kufi_Arabic } from "next/font/google";
import { Inter } from "next/font/google";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Locale, routing } from "@/i18n/routing";
import "./globals.css"
import Navbar from "./navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["400", "700"], // Use Regular & Bold
  variable: "--font-arabic",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Use Regular, Semi-Bold & Bold
  variable: "--font-english",
  display: "swap",
});
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
  }) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${
        locale === "ar" || locale === "ku"
          ? notoKufiArabic.variable
          : inter.variable
      }`}
    >
      <body
        className={
          locale === "ar" || locale === "ku" ? "font-arabic" : "font-english"
        }
      >
        <NextIntlClientProvider messages={messages}>
          <br />
          <Navbar locale={locale} />
          <br />
          <div dir={locale === "ar" || locale === "ku" ? "rtl" : "ltr"}>
            {children}
          </div>
          <CTA />
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}