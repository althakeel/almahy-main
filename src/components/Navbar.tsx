'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Logo from '../assets/logo/logo.png';
import { translations, Locale } from '@/lib/translations';
import { usePathname, useRouter } from 'next/navigation';

interface NavbarProps {
  locale: string;
}

export default function Navbar({ locale }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isValidLoc = locale === 'en' || locale === 'ar';
  const lang = isValidLoc ? (locale as Locale) : 'en';
  const t = translations[lang];

  const switchLanguage = (newLocale: Locale) => {
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  return (
    <nav className="fixed top-0 z-50 flex justify-center w-full">
      <div className="bg-gray-700/70 backdrop-blur-sm text-white w-full max-w-[1250px] px-4 md:px-8" style={{borderRadius: '0 0 15px 15px'}}>
        <div className="flex items-center justify-between py-2 md:py-2.5">
          {/* Left: Logo and Company Name */}
          <div className="flex items-center gap-2 md:gap-3">
            <Image src={Logo} alt="Gulf Star Logo" width={150} height={100} className="object-contain md:w-[150px] md:h-[55px]" priority />
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            <Link href={`/${lang}`} className="text-sm font-medium hover:text-amber-400 transition-colors whitespace-nowrap">
              {t.home}
            </Link>
            <Link href={`/${lang}/services`} className="text-sm font-medium hover:text-amber-400 transition-colors whitespace-nowrap">
              {t.ourServices}
            </Link>
            <Link href={`/${lang}/about`} className="text-sm font-medium hover:text-amber-400 transition-colors whitespace-nowrap">
              {t.whoAreWe}
            </Link>
            <Link href={`/${lang}/contact`} className="text-sm font-medium hover:text-amber-400 transition-colors whitespace-nowrap">
              {t.contactUs}
            </Link>
          </div>

          {/* Right: Button and Language Switcher */}
          <div className="flex items-center gap-2 md:gap-4">
            <button className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold px-5 md:px-7 py-2.5 md:py-3 rounded-full text-xs md:text-sm transition-colors flex items-center gap-2 whitespace-nowrap shadow-lg hover:shadow-xl">
              GET A CONSULTATION
              <span>👤</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-700 border-t border-gray-600 -mx-4 -mr-4 px-4">
            <div className="py-3 space-y-2">
              <Link
                href={`/${lang}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 text-sm font-medium hover:bg-gray-600 rounded transition-colors"
              >
                {t.home}
              </Link>
              <Link
                href={`/${lang}/services`}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 text-sm font-medium hover:bg-gray-600 rounded transition-colors"
              >
                {t.ourServices}
              </Link>
              <Link
                href={`/${lang}/about`}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 text-sm font-medium hover:bg-gray-600 rounded transition-colors"
              >
                {t.whoAreWe}
              </Link>
              <Link
                href={`/${lang}/contact`}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 text-sm font-medium hover:bg-gray-600 rounded transition-colors"
              >
                {t.contactUs}
              </Link>
              <div className="flex gap-2 pt-2 border-t border-gray-600">
                <button
                  onClick={() => {
                    switchLanguage('en');
                    setMobileMenuOpen(false);
                  }}
                  className={`flex-1 px-2 py-2 text-xs font-semibold rounded transition-colors ${
                    lang === 'en'
                      ? 'bg-amber-400 text-gray-900'
                      : 'bg-gray-600 text-white hover:bg-gray-500'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => {
                    switchLanguage('ar');
                    setMobileMenuOpen(false);
                  }}
                  className={`flex-1 px-2 py-2 text-xs font-semibold rounded transition-colors ${
                    lang === 'ar'
                      ? 'bg-amber-400 text-gray-900'
                      : 'bg-gray-600 text-white hover:bg-gray-500'
                  }`}
                >
                  AR
                </button>
              </div>
              <button className="w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold px-4 py-2 rounded text-sm transition-colors mt-2">
                GET A CONSULTATION
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}