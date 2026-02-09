import Image from "next/image";
import Link from "next/link";
import { translations, Locale } from "@/lib/translations";
import CTA from "@/components/CTA";

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
      {/* Hero Banner Section */}
      <section
        className="relative w-full h-screen max-h-[900px] bg-cover bg-center bg-no-repeat mt-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=900&fit=crop")',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 md:px-8 pt-24 md:pt-20">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {t.heroTitle}
            </h1>

            {/* Golden divider line */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center gap-3">
                <div className="h-1 w-8 bg-yellow-400"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div className="h-1 w-8 bg-yellow-400"></div>
              </div>
            </div>

            <p className="text-sm md:text-base text-gray-100 mb-12 leading-relaxed max-w-2xl">
              {t.heroDescription}
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="https://wa.me/97142648831?text=Hello%2C%20I%20would%20like%20to%20contact%20you%20for%20accounting%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700/80 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded transition-colors backdrop-blur-sm border border-gray-600"
              >
                {t.contactButton}
              </Link>
              <Link
                href="https://wa.me/97142648831?text=Hello%2C%20I%20would%20like%20to%20book%20a%20free%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-8 rounded transition-colors"
              >
                {t.bookConsultation}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA locale={lang} />
    </div>
  );
}
