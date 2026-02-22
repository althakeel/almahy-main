import { Locale, translations } from "@/lib/translations";
import Link from "next/link";

export default async function PricingTablePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isValidLoc = locale === "en" || locale === "ar";
  const lang = isValidLoc ? (locale as Locale) : "en";

  const content = {
    en: {
      pageTitle: "Pricing Plans",
      pageDescription: "Choose the perfect plan for your business needs",
      
      // Legal Packages
      legalTitle: "Legal Packages",
      legalPackages: [
        {
          name: "Gold Plan",
          icon: "🏅",
          price: "4K",
          period: "/Monthly",
          currency: "AED",
          features: [
            "Power Support Info. Collection",
            "Power Legal Income",
            "Free Polishing Legal text",
            "Power Lawyer Advice consultancy"
          ],
          buttonText: "GET STARTED"
        },
        {
          name: "VIP Plan",
          icon: "🔒",
          price: "6K",
          period: "/Monthly",
          currency: "AED",
          features: [
            "Include Gold Plan",
            "Free Redressed Legal Notice",
            "Free Cheques Execution",
            "Free Payment Guarantee"
          ],
          buttonText: "GET STARTED",
          featured: true
        },
        {
          name: "Diamond Plan",
          icon: "💎",
          price: "10K",
          period: "/Monthly",
          currency: "AED",
          features: [
            "Contact our Sales Team",
            "Customized Plan"
          ],
          buttonText: "GET STARTED"
        }
      ],

      // Corporate Packages
      corporateTitle: "Corporate Packages",
      corporatePackages: [
        {
          name: "Basic Plan",
          icon: "⏰",
          price: "4K",
          period: "/Monthly",
          currency: "AED",
          features: [
            "License registration",
            "Immigration services",
            "Tax Consultancy",
            "Others"
          ],
          buttonText: "GET STARTED"
        },
        {
          name: "Premium Plan",
          icon: "⏱️",
          price: "6K",
          period: "/Monthly",
          currency: "AED",
          features: [
            "Basic Plan",
            "Tax filing",
            "VAT Registration",
            "Trademark registration"
          ],
          buttonText: "GET STARTED",
          featured: true
        },
        {
          name: "Diamond Plan",
          icon: "💎",
          price: "10K",
          period: "/Monthly",
          currency: "AED",
          features: [
            "Accounting",
            "Collective services",
            "Rectify services",
            "Bank account opening + more"
          ],
          buttonText: "GET STARTED"
        }
      ],

      // Debt Collection Packages
      debtTitle: "Debit Collection Packages",
      debtPackages: [
        {
          name: "Golden Plan",
          icon: "🗄️",
          price: "5K",
          period: "/Monthly",
          currency: "AED",
          features: [
            "Debitors info seeker Collection",
            "Collection Round-up",
            "Legal Plan"
          ],
          buttonText: "GET STARTED"
        },
        {
          name: "VIP Plan",
          icon: "🔑",
          price: "10K",
          period: "/Monthly",
          currency: "AED",
          features: [
            "Golden Plan",
            "Dedicated legal notice",
            "Claims"
          ],
          buttonText: "GET STARTED",
          featured: true
        },
        {
          name: "Diamond Plan",
          icon: "💎",
          price: "15K",
          period: "/Monthly",
          currency: "AED",
          features: [
            "Seeker & file Plan",
            "Prologue execution",
            "Per company Policies"
          ],
          buttonText: "GET STARTED"
        }
      ]
    },
    ar: {
      pageTitle: "خطط الأسعار",
      pageDescription: "اختر الخطة المثالية لاحتياجات عملك",
      
      // Legal Packages
      legalTitle: "الباقات القانونية",
      legalPackages: [
        {
          name: "الخطة الذهبية",
          icon: "🏅",
          price: "4K",
          period: "/شهرياً",
          currency: "درهم",
          features: [
            "دعم قوي لجمع المعلومات",
            "دخل قانوني قوي",
            "صقل النص القانوني مجاناً",
            "استشارات المحامي القوي"
          ],
          buttonText: "ابدأ الآن"
        },
        {
          name: "خطة VIP",
          icon: "🔒",
          price: "6K",
          period: "/شهرياً",
          currency: "درهم",
          features: [
            "تشمل الخطة الذهبية",
            "إشعار قانوني مُعاد صياغته مجاناً",
            "تنفيذ الشيكات مجاناً",
            "ضمان الدفع مجاناً"
          ],
          buttonText: "ابدأ الآن",
          featured: true
        },
        {
          name: "خطة الماس",
          icon: "💎",
          price: "10K",
          period: "/شهرياً",
          currency: "درهم",
          features: [
            "اتصل بفريق المبيعات لدينا",
            "خطة مخصصة"
          ],
          buttonText: "ابدأ الآن"
        }
      ],

      // Corporate Packages
      corporateTitle: "الباقات المؤسسية",
      corporatePackages: [
        {
          name: "الخطة الأساسية",
          icon: "⏰",
          price: "4K",
          period: "/شهرياً",
          currency: "درهم",
          features: [
            "تسجيل الترخيص",
            "خدمات الهجرة",
            "استشارات ضريبية",
            "أخرى"
          ],
          buttonText: "ابدأ الآن"
        },
        {
          name: "الخطة المميزة",
          icon: "⏱️",
          price: "6K",
          period: "/شهرياً",
          currency: "درهم",
          features: [
            "الخطة الأساسية",
            "تقديم الضرائب",
            "تسجيل ضريبة القيمة المضافة",
            "تسجيل العلامة التجارية"
          ],
          buttonText: "ابدأ الآن",
          featured: true
        },
        {
          name: "خطة الماس",
          icon: "💎",
          price: "10K",
          period: "/شهرياً",
          currency: "درهم",
          features: [
            "المحاسبة",
            "الخدمات الجماعية",
            "خدمات التصحيح",
            "فتح حساب بنكي + المزيد"
          ],
          buttonText: "ابدأ الآن"
        }
      ],

      // Debt Collection Packages
      debtTitle: "باقات تحصيل الديون",
      debtPackages: [
        {
          name: "الخطة الذهبية",
          icon: "🗄️",
          price: "5K",
          period: "/شهرياً",
          currency: "درهم",
          features: [
            "جمع معلومات المدينين",
            "جولة التحصيل",
            "الخطة القانونية"
          ],
          buttonText: "ابدأ الآن"
        },
        {
          name: "خطة VIP",
          icon: "🔑",
          price: "10K",
          period: "/شهرياً",
          currency: "درهم",
          features: [
            "الخطة الذهبية",
            "إشعار قانوني مخصص",
            "المطالبات"
          ],
          buttonText: "ابدأ الآن",
          featured: true
        },
        {
          name: "خطة الماس",
          icon: "💎",
          price: "15K",
          period: "/شهرياً",
          currency: "درهم",
          features: [
            "خطة الباحث والملف",
            "تنفيذ المقدمة",
            "سياسات كل شركة"
          ],
          buttonText: "ابدأ الآن"
        }
      ]
    }
  };

  const pageContent = content[lang];

  const PricingCard = ({ 
    name, 
    icon, 
    price, 
    period, 
    currency, 
    features, 
    buttonText, 
    featured = false 
  }: {
    name: string;
    icon: string;
    price: string;
    period: string;
    currency: string;
    features: string[];
    buttonText: string;
    featured?: boolean;
  }) => (
    <div className={`
      bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300
      ${featured ? 'scale-105 relative' : 'hover:scale-105'}
    `}
    style={{border: featured ? '2px solid #F8E48B' : 'none'}}>
      {featured && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-white px-6 py-1 rounded-full text-xs font-bold uppercase" style={{backgroundColor: '#F8E48B', color: '#181818'}}>
          Popular
        </div>
      )}
      
      {/* Icon */}
      <div className="text-5xl mb-4 text-center">{icon}</div>
      
      {/* Plan Name */}
      <h3 className="text-xl font-bold text-gray-900 text-center mb-6">{name}</h3>
      
      {/* Price */}
      <div className="text-center mb-8">
        <div className="flex items-baseline justify-center gap-2">
          <span className="text-sm text-gray-600">{currency}</span>
          <span className="text-5xl font-bold text-gray-900">{price}</span>
          <span className="text-sm text-gray-600">{period}</span>
        </div>
      </div>
      
      {/* Features */}
      <ul className="space-y-4 mb-8 min-h-[180px]">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" style={{color: '#F8E48B'}}>
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      
      {/* Button */}
      <Link
        href={`https://wa.me/97142648831?text=Hello, I would like to know more about the ${name}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center py-3 rounded-md font-semibold text-sm uppercase tracking-wide transition-all"
        style={featured ? {
          backgroundColor: '#F8E48B',
          color: '#181818'
        } : {
          border: '2px solid #F8E48B',
          color: '#F8E48B'
        }}
      >
        {buttonText}
      </Link>
    </div>
  );

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-[1250px] mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {pageContent.pageTitle}
          </h1>
          <div className="flex justify-center mb-6">
            <div className="h-1 w-20 rounded" style={{backgroundColor: '#F8E48B'}}></div>
          </div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            {pageContent.pageDescription}
          </p>
        </div>
      </section>

      {/* Legal Packages */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-[1250px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            {pageContent.legalTitle}
          </h2>
          <div className="flex justify-center mb-12">
            <div className="h-1 w-16 rounded" style={{backgroundColor: '#F8E48B'}}></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pageContent.legalPackages.map((pkg, index) => (
              <PricingCard key={index} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex items-center justify-center py-8">
        <div className="h-px w-1/3 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        <div className="mx-4 text-3xl">✦</div>
        <div className="h-px w-1/3 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </div>

      {/* Corporate Packages */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-[1250px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            {pageContent.corporateTitle}
          </h2>
          <div className="flex justify-center mb-12">
            <div className="h-1 w-16 rounded" style={{backgroundColor: '#F8E48B'}}></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pageContent.corporatePackages.map((pkg, index) => (
              <PricingCard key={index} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex items-center justify-center py-8">
        <div className="h-px w-1/3 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        <div className="mx-4 text-3xl">✦</div>
        <div className="h-px w-1/3 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </div>

      {/* Debt Collection Packages */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-[1250px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            {pageContent.debtTitle}
          </h2>
          <div className="flex justify-center mb-12">
            <div className="h-1 w-16 rounded" style={{backgroundColor: '#F8E48B'}}></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pageContent.debtPackages.map((pkg, index) => (
              <PricingCard key={index} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {lang === 'en' ? 'Need a Custom Plan?' : 'هل تحتاج إلى خطة مخصصة؟'}
          </h2>
          <p className="text-lg mb-8 text-amber-50">
            {lang === 'en' 
              ? 'Contact us for a tailored solution that fits your unique business requirements.' 
              : 'اتصل بنا للحصول على حل مصمم خصيصاً ليناسب احتياجات عملك الفريدة.'}
          </p>
          <Link
            href={`https://wa.me/97142648831?text=Hello, I need a custom pricing plan`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-amber-600 font-bold px-10 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-xl"
          >
            {lang === 'en' ? 'Contact Sales Team' : 'اتصل بفريق المبيعات'}
          </Link>
        </div>
      </section>
    </div>
  );
}
