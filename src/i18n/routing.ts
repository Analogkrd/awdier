import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["en", "ar", "ku"], // Define supported locales
  defaultLocale: "en", // Default language
});

// Lightweight wrappers for navigation that respect i18n routing
export type Locale = typeof routing.locales[number];
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
