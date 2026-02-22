import { Locale } from "@/lib/translations";

export default async function NotaryPublicServicesPage({
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
          {isArabic ? "خدمات الكاتب العدل" : "Notary Public Services"}
        </h1>
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          {isArabic
            ? "دعم احترافي في التوثيق، التصديقات، وتجهيز المستندات الرسمية." 
            : "Professional support for notarization, attestations, and preparation of official legal documents."}
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            isArabic ? "توثيق المستندات" : "Document Notarization",
            isArabic ? "تصديق التوقيعات" : "Signature Attestation",
            isArabic ? "تصديق الوكالات" : "Power of Attorney Support",
            isArabic ? "مراجعة المتطلبات الرسمية" : "Official Requirement Review",
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
