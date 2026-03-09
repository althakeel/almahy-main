import Image from "next/image";
import Link from "next/link";
import { translations, Locale } from "@/lib/translations";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import ServicesSection from "@/components/ServicesSection";
import GoogleReviews from "@/components/GoogleReviews";
import Stats from "@/components/Stats";
import ClientLogosMarquee from "@/components/ClientLogosMarquee";
import AboutSectionWithVideo from "@/components/AboutSectionWithVideo";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isValidLoc = locale === "en" || locale === "ar";
  const lang = isValidLoc ? (locale as Locale) : "en";
  const t = translations[lang];
  const isRTL = lang === "ar";

  return (
    <div className="w-full m-0 p-0">
      {/* Hero Banner Section - Simple Centered Layout */}
      <section
        className="relative w-full h-[90vh] min-h-[500px] max-h-[900px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage:
            'url("/assets/bannerSlider/6.webp")',
        }}
      >
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40 md:bg-black/35 z-0" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-8 py-12 max-w-5xl w-full">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
            We handle your <span className="text-yellow-400">accounting</span>,<br />so you can focus on running your business.
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed font-medium">
            {t.heroDescription}
          </p>
          <Link 
            href="https://wa.me/97142648831?text=Hello%2C%20I%20would%20like%20to%20book%20a%20free%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-bold py-4 px-10 rounded-full shadow-xl hover:shadow-yellow-200/40 transition-all duration-200 text-gray-900 bg-yellow-400 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400/60 border border-yellow-300 text-xl tracking-wide"
          >
            <svg className="w-6 h-6 mr-2 text-gray-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 17l4 4 4-4m0-5V3" /></svg>
            {t.bookConsultation}
          </Link>
        </div>
      </section>

      {/* Client Logos Marquee */}
      <ClientLogosMarquee locale={lang} />

      {/* About Section - Simple, Attractive, One Card */}

      {/* About Section - Simple, Attractive, One Card */}
      <AboutSectionWithVideo />
      
      {/* Services Section */}
      <ServicesSection locale={lang} />

      {/* Stats Section */}
      <Stats locale={lang} />

      {/* Google Reviews Section */}
      <GoogleReviews locale={lang} />

      {/* FAQ Section */}
      <FAQ locale={lang} />

      {/* CTA Section */}
      <CTA locale={lang} />
    </div>
  );
}
