import { Locale } from "@/lib/translations";

export default async function CorporateServicesPage({
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
          {isArabic ? "خدمات الشركات" : "Corporate Services"}
        </h1>
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          {isArabic
            ? "خدمات شاملة لتأسيس الشركات وإعادة الهيكلة والحوكمة والامتثال." 
            : "End-to-end corporate support for company formation, restructuring, governance, and compliance."}
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            isArabic ? "تأسيس الشركات" : "Company Formation",
            isArabic ? "إعادة الهيكلة" : "Business Restructuring",
            isArabic ? "حوكمة الشركات" : "Corporate Governance",
            isArabic ? "الامتثال التنظيمي" : "Regulatory Compliance",
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
