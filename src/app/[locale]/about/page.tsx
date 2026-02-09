import { translations, Locale } from "@/lib/translations";

export default async function AboutPage({
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
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 pt-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.whoAreWe}
          </h1>
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-3">
              <div className="h-1 w-12 bg-amber-400"></div>
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              <div className="h-1 w-12 bg-amber-400"></div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* About Section */}
          <div className="bg-white p-10 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t.aboutTitle}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {t.aboutDesc1}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.aboutDesc2}
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-2xl shadow-lg border border-amber-100">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t.missionTitle}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t.missionDesc}
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg border border-blue-100">
              <div className="text-4xl mb-4">👁️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t.visionTitle}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t.visionDesc}
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white p-10 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {t.whyChooseTitle}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="text-2xl">✓</div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">{t.why1Title}</h4>
                  <p className="text-gray-600">{t.why1Desc}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-2xl">✓</div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">{t.why2Title}</h4>
                  <p className="text-gray-600">{t.why2Desc}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-2xl">✓</div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">{t.why3Title}</h4>
                  <p className="text-gray-600">{t.why3Desc}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-2xl">✓</div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">{t.why4Title}</h4>
                  <p className="text-gray-600">{t.why4Desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
