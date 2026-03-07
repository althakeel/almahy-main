import Image from "next/image";
import Link from "next/link";
import { translations, Locale } from "@/lib/translations";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import ServicesSection from "@/components/ServicesSection";
import GoogleReviews from "@/components/GoogleReviews";
import Stats from "@/components/Stats";
import ClientLogosMarquee from "@/components/ClientLogosMarquee";

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
            'url("/assets/bannerSlider/image.png")',
        }}
      >
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-8 py-12 max-w-3xl w-full">
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

      {/* About Section (compact, below clients) */}
      <section className="w-full flex justify-center py-20 px-4 md:px-8 bg-white">
        <div className="relative max-w-[950px] w-full flex flex-col md:flex-row items-center md:items-stretch justify-center">
          {/* Circular image overlapping the card */}
          <div className="relative flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto z-20">
            <div className="absolute md:static -top-20 md:top-0 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0">
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=400&q=80" alt="Professional Team" className="rounded-full object-cover w-40 h-40 md:w-56 md:h-56 border-4 border-white shadow-2xl" width={224} height={224} />
            </div>
          </div>
          {/* Card with content */}
          <div className="relative bg-gradient-to-br from-yellow-50 via-white to-yellow-100 rounded-3xl shadow-xl border border-yellow-100 flex-1 flex flex-col justify-center px-6 md:px-14 py-16 md:py-12 mt-24 md:mt-0 md:ml-[-64px] z-10">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-yellow-700 bg-yellow-100 rounded px-3 py-1 mb-2">About Us</span>
            <h3 className="text-3xl font-extrabold text-gray-900 mb-4 leading-tight">Trusted Legal Experts in the UAE</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-2">
              With decades of experience, our team provides reliable legal, corporate, and accounting services to businesses and individuals across the UAE. We are committed to delivering results with integrity, professionalism, and a client-first approach.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <span className="inline-block bg-yellow-50 text-yellow-800 font-semibold px-4 py-2 rounded-full text-xs shadow">38+ Years Experience</span>
              <span className="inline-block bg-yellow-50 text-yellow-800 font-semibold px-4 py-2 rounded-full text-xs shadow">5000+ Clients</span>
              <span className="inline-block bg-yellow-50 text-yellow-800 font-semibold px-4 py-2 rounded-full text-xs shadow">Award-Winning Team</span>
            </div>
          </div>
        </div>
      </section>

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
