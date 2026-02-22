import { Locale } from "@/lib/translations";

export default async function ExpertReportsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isValidLoc = locale === "en" || locale === "ar";
  const lang = isValidLoc ? (locale as Locale) : "en";

  const isArabic = lang === "ar";

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto pt-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
          {isArabic ? "تقارير الخبرة" : "Expert Reports"}
        </h1>
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          {isArabic
            ? "إعداد تقارير خبرة مهنية واضحة لدعم القضايا والنزاعات والإجراءات القضائية."
            : "Preparation of clear, professional expert reports to support disputes, claims, and court proceedings."}
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            isArabic ? "تقارير فنية متخصصة" : "Technical Expert Reports",
            isArabic ? "دعم القضايا" : "Litigation Support",
            isArabic ? "توثيق الأدلة" : "Evidence Documentation",
            isArabic ? "مراجعة وتحليل الملفات" : "Case File Review & Analysis",
          ].map((item) => (
            <div key={item} className="bg-white rounded-2xl p-6 shadow border border-gray-100">
              <p className="font-semibold text-gray-900">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
