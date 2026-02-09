import Link from 'next/link';
import { Locale, translations } from '@/lib/translations';

interface CTAProps {
  locale?: string;
}

export default function CTA({ locale = 'en' }: CTAProps) {
  const isValidLoc = locale === 'en' || locale === 'ar';
  const lang = isValidLoc ? (locale as Locale) : 'en';
  const t = translations[lang];

  return (
    <section className="bg-[#1c1e2b] text-white py-12 md:py-16 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4a574] rounded-full mix-blend-multiply filter blur-3xl opacity-10 -mr-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 -ml-48"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-4">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-[#d4a574]/10 border border-[#d4a574]/30 rounded-full px-4 py-2 w-fit">
              <div className="w-2 h-2 bg-[#d4a574] rounded-full animate-pulse"></div>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#d4a574]">Gulf Star Accounting</span>
            </div>

            {/* Heading */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-3">
                Ready to Simplify Your Accounting?
              </h2>
              <p className="text-gray-400 text-base leading-relaxed">
                Let our expert accounting team handle your financial needs. We're here to support your business growth and success.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-1 h-1 bg-[#d4a574] rounded-full"></div>
                <span className="text-sm text-gray-300">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1 h-1 bg-[#d4a574] rounded-full"></div>
                <span className="text-sm text-gray-300">Expert Team</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1 h-1 bg-[#d4a574] rounded-full"></div>
                <span className="text-sm text-gray-300">Fast Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1 h-1 bg-[#d4a574] rounded-full"></div>
                <span className="text-sm text-gray-300">Confidential</span>
              </div>
            </div>
          </div>

          {/* Right Side - Phone Card */}
          <div className="relative">
            {/* Card Container */}
            <div className="bg-gradient-to-br from-[#d4a574] to-[#c9985f] rounded-2xl p-8 md:p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
              {/* Icon */}
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
              </div>

              {/* Phone Number */}
              <Link
                href="tel:+971504096028"
                className="block text-center mb-4 hover:opacity-90 transition-opacity"
              >
                <span className="text-3xl md:text-4xl font-bold text-white block tracking-tight">
                  +971 504 096 028
                </span>
              </Link>

              {/* Call to Action */}
              <div className="text-center">
                <p className="text-sm font-semibold tracking-widest uppercase text-white/90 mb-4">
                  Feel Free to Call Us
                </p>
                <Link
                  href="tel:+971504096028"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-all duration-200 backdrop-blur-sm border border-white/30"
                >
                  <span className="text-sm font-semibold text-white">Call Now</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Decorative line */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-[#d4a574]/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}


