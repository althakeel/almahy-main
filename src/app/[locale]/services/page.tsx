import { translations, Locale } from "@/lib/translations";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isValidLoc = locale === "en" || locale === "ar";
  const lang = isValidLoc ? (locale as Locale) : "en";
  const t = translations[lang];

  const services = [
    {
      icon: "📊",
      title: t.service1Title,
      description: t.service1Desc,
    },
    {
      icon: "💼",
      title: t.service2Title,
      description: t.service2Desc,
    },
    {
      icon: "📈",
      title: t.service3Title,
      description: t.service3Desc,
    },
    {
      icon: "🧾",
      title: t.service4Title,
      description: t.service4Desc,
    },
    {
      icon: "💰",
      title: t.service5Title,
      description: t.service5Desc,
    },
    {
      icon: "📋",
      title: t.service6Title,
      description: t.service6Desc,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 pt-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.ourServices}
          </h1>
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-3">
              <div className="h-1 w-12 bg-amber-400"></div>
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              <div className="h-1 w-12 bg-amber-400"></div>
            </div>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t.servicesIntro}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-amber-400 to-yellow-500 rounded-2xl p-12 shadow-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t.servicesCTA}
          </h2>
          <p className="text-gray-800 mb-8 text-lg">
            {t.servicesCTADesc}
          </p>
          <button className="bg-gray-900 hover:bg-gray-800 text-white font-bold px-8 py-4 rounded-full text-lg transition-colors shadow-lg">
            {t.contactButton}
          </button>
        </div>
      </div>
    </div>
  );
}
