import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { isValidLocale, getLocaleDirection } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gulf Star for Accounting",
  description: "Professional accounting services",
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const isValidLoc = isValidLocale(locale);
  const direction = isValidLoc ? getLocaleDirection(locale) : "ltr";

  return (
    <html lang={isValidLoc ? locale : "en"} dir={direction} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <Navbar locale={isValidLoc ? locale : "en"} />
        {children}
        <Footer locale={isValidLoc ? locale : "en"} />
      </body>
    </html>
  );
}
