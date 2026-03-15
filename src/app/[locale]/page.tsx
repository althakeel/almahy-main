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
    <div className="w-full m-0 p-0" dir={isRTL ? "rtl" : "ltr"} lang={lang}>
      {/* Hero Banner Section - Simple Centered Layout */}
      <section
        className="relative w-full h-[60vh] min-h-[320px] max-h-[600px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage:
            'url("/assets/bannerSlider/6.webp")',
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-6 py-6 max-w-3xl w-full">
          <h1 className="text-xl md:text-4xl font-bold text-white mb-4 leading-snug text-center" style={{ direction: isRTL ? 'rtl' : 'ltr', textAlign: isRTL ? 'right' : 'center' }}>
            {t.heroTitle}
          </h1>
          <p className="text-base md:text-lg text-white/90 mb-6 font-normal text-center" style={{ direction: isRTL ? 'rtl' : 'ltr', textAlign: isRTL ? 'right' : 'center' }}>
            {t.heroDescription}
          </p>
          <Link 
            href="https://wa.me/97142648831?text=Hello%2C%20I%20would%20like%20to%20book%20a%20free%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold py-3 px-7 rounded-full shadow-lg hover:shadow-yellow-200/40 transition-all duration-200 text-gray-900 bg-yellow-400 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400/60 border border-yellow-300 text-sm md:text-base tracking-wide group"
            style={{ minWidth: 220, justifyContent: 'center', direction: isRTL ? 'rtl' : 'ltr' }}
          >
            <span>{t.bookConsultation}</span>
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/80 group-hover:bg-white transition">
              <svg className="w-5 h-5 text-yellow-500 group-hover:text-yellow-600 transition" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>
      </section>

      {/* Client Logos Marquee */}
      <ClientLogosMarquee locale={lang} />

      {/* About Section - Simple, Attractive, One Card */}

      {/* About Section - Simple, Attractive, One Card */}
      <AboutSectionWithVideo t={{
        aboutTestimonial: t.aboutTestimonial,
        aboutUsLabel: t.aboutUsLabel || (isRTL ? 'من نحن' : 'About Us'),
        aboutHeadline: t.aboutHeadline || (isRTL ? 'نحن دعاة للعدالة والحق' : 'We’re Advocates for Justice and Right'),
        aboutDescription: t.aboutDescription || (isRTL
          ? 'الخدمات القانونية لماهي هي شركة محاماة رائدة بخبرة تزيد عن 38 عامًا وشبكة عالمية تضم 5000 محامٍ مؤهل، مما يجعلنا اسمًا موثوقًا في صناعة الخدمات القانونية عالميًا. مقرنا في الإمارات العربية المتحدة، وقد رسخنا أنفسنا كقوة رائدة في القطاع القانوني، مقدمين مجموعة متنوعة من الخدمات القانونية عالية الجودة لعملائنا الكرام.'
          : 'Al Mahy Legal Services is a premier law firm with over 38 years of legal experience and a global network of 5000 qualified lawyers, making us a trusted name in the legal services industry worldwide. Based in the United Arab Emirates, we have established ourselves as a leading force in the legal sector, providing a diverse range of high-quality legal services to our esteemed clients.'
        ),
      }} isRTL={isRTL} />
      
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
