import { translations, Locale } from "@/lib/translations";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isValidLoc = locale === "en" || locale === "ar";
  const lang = isValidLoc ? (locale as Locale) : "en";
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 pt-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.contactUs}
          </h1>
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-3">
              <div className="h-1 w-12 bg-amber-400"></div>
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              <div className="h-1 w-12 bg-amber-400"></div>
            </div>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.contactIntro}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {t.sendMessage}
            </h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.formName}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition"
                  placeholder={t.formNamePlaceholder}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.formEmail}
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition"
                  placeholder={t.formEmailPlaceholder}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.formPhone}
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition"
                  placeholder={t.formPhonePlaceholder}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.formMessage}
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition resize-none"
                  placeholder={t.formMessagePlaceholder}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold py-4 rounded-full transition-colors shadow-lg"
              >
                {t.formSubmit}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-2xl shadow-lg border border-amber-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">📍</div>
                <h3 className="text-xl font-bold text-gray-900">{t.address}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                2nd Floor, Al Saqr Business Tower<br />
                Sheikh Zayed Rd, DIFC<br />
                Dubai, United Arab Emirates
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg border border-blue-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">📧</div>
                <h3 className="text-xl font-bold text-gray-900">{t.email}</h3>
              </div>
              <p className="text-gray-700">
                <a href="mailto:info@almahy.com" className="hover:text-amber-600 transition">
                  info@almahy.com
                </a>
                <br />
                <a href="mailto:legal@almahy.com" className="hover:text-amber-600 transition">
                  legal@almahy.com
                </a>
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg border border-green-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">📞</div>
                <h3 className="text-xl font-bold text-gray-900">{t.phone}</h3>
              </div>
              <p className="text-gray-700">
                <a href="tel:+97142648831" className="hover:text-amber-600 transition text-lg font-semibold">
                  +971 4264 8831
                </a>
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg border border-purple-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">🕒</div>
                <h3 className="text-xl font-bold text-gray-900">{t.hours}</h3>
              </div>
              <p className="text-gray-700">
                {t.hoursWeekdays}<br />
                {t.hoursWeekend}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
