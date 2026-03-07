'use client';

import { useState } from 'react';
import { Locale } from '@/lib/translations';

interface FAQProps {
  locale: Locale;
}

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: Record<Locale, FAQItem[]> = {
  en: [
    {
      question: "How much do your accounting services or tax filing services cost?",
      answer: "It varies depending on the volume of work, company size, volume of operations, and revenue."
    },
    {
      question: "Do you offer monthly or annual packages?",
      answer: "Yes, we offer both monthly and annual packages tailored to your business needs. Contact us for detailed pricing."
    },
    {
      question: "Can the price be customized based on the volume of work or the number of invoices?",
      answer: "Absolutely! We customize our pricing based on your specific requirements, transaction volume, and business complexity."
    },
    {
      question: "Are there any additional fees not mentioned in the quote?",
      answer: "No, our quotes are comprehensive. Any additional services will be discussed and approved by you before implementation."
    },
    {
      question: "Are you registered as approved tax agents with the Federal Tax Authority (FTA)?",
      answer: "Yes, we are registered and approved tax agents with the FTA, ensuring compliance with all UAE regulations."
    },
    {
      question: "What do we need to comply with VAT and Corporate Tax?",
      answer: "You need proper bookkeeping, invoice management, tax registration, and timely filing. We handle all these aspects for you."
    },
    {
      question: "Will you represent us before the FTA in case of an audit or inquiry?",
      answer: "Yes, we provide full representation and support during FTA audits and inquiries."
    },
    {
      question: "Do you guarantee that all our reports will be compliant with FTA laws?",
      answer: "Yes, we ensure all reports and filings are fully compliant with FTA regulations and standards."
    },
    {
      question: "What documents do you need to start working?",
      answer: "We typically need trade license, bank statements, invoices, receipts, and any previous financial records."
    },
    {
      question: "Do we need to provide bank statements or invoices for all transactions?",
      answer: "Yes, complete documentation helps us ensure accurate accounting and tax compliance."
    },
    {
      question: "Do you accept data electronically? And what systems do you work with?",
      answer: "Yes, we accept electronic data and work with various accounting systems including QuickBooks, Xero, Zoho, and others."
    },
    {
      question: "Do you help organize old or overdue files?",
      answer: "Yes, we can help organize and reconcile historical records to bring your accounts up to date."
    },
  
  
  ],
  ar: [
    {
      question: "كم تكلف خدمات المحاسبة أو تقديم الإقرارات الضريبية؟",
      answer: "تختلف التكلفة حسب حجم العمل وحجم الشركة وحجم العمليات والإيرادات."
    },
    {
      question: "هل تقدمون باقات شهرية أو سنوية؟",
      answer: "نعم، نقدم باقات شهرية وسنوية مصممة حسب احتياجات عملك. اتصل بنا للحصول على تفاصيل الأسعار."
    },
    {
      question: "هل يمكن تخصيص السعر بناءً على حجم العمل أو عدد الفواتير؟",
      answer: "بالتأكيد! نقوم بتخصيص أسعارنا بناءً على متطلباتك وحجم المعاملات وتعقيد العمل."
    },
    {
      question: "هل هناك رسوم إضافية غير مذكورة في عرض السعر؟",
      answer: "لا، عروضنا شاملة. أي خدمات إضافية سيتم مناقشتها والموافقة عليها قبل التنفيذ."
    },
    {
      question: "هل أنتم مسجلون كوكلاء ضرائب معتمدين لدى الهيئة الاتحادية للضرائب؟",
      answer: "نعم، نحن وكلاء ضرائب مسجلون ومعتمدون لدى الهيئة الاتحادية للضرائب."
    },
    {
      question: "ما الذي نحتاجه للامتثال لضريبة القيمة المضافة والضريبة على الشركات؟",
      answer: "تحتاج إلى محاسبة سليمة وإدارة الفواتير والتسجيل الضريبي والتقديم في الوقت المناسب."
    },
    {
      question: "هل ستمثلوننا أمام الهيئة الاتحادية للضرائب في حالة التدقيق؟",
      answer: "نعم، نقدم التمثيل الكامل والدعم خلال عمليات التدقيق والاستفسارات."
    },
    {
      question: "هل تضمنون أن جميع تقاريرنا ستكون متوافقة مع قوانين الهيئة؟",
      answer: "نعم، نضمن أن جميع التقارير والملفات متوافقة تماماً مع لوائح الهيئة."
    },
    {
      question: "ما هي المستندات التي تحتاجونها لبدء العمل؟",
      answer: "نحتاج عادةً إلى الرخصة التجارية والكشوف البنكية والفواتير والإيصالات والسجلات المالية السابقة."
    },
    {
      question: "هل نحتاج إلى تقديم كشوف بنكية أو فواتير لجميع المعاملات؟",
      answer: "نعم، الوثائق الكاملة تساعدنا على ضمان دقة المحاسبة والامتثال الضريبي."
    },
    {
      question: "هل تقبلون البيانات إلكترونياً؟ وما الأنظمة التي تعملون معها؟",
      answer: "نعم، نقبل البيانات الإلكترونية ونعمل مع أنظمة محاسبية متنوعة."
    },
 
   
  ]
};

export default function FAQ({ locale }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = faqData[locale];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-gradient-to-br from-yellow-50 via-white to-yellow-100 py-20 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 tracking-tight">FAQ</h2>
        {/* Subtitle */}
        <p className="text-gray-600 text-base md:text-lg mb-12 leading-relaxed max-w-3xl text-left">
          {locale === 'en' 
            ? "Have questions about our accounting and tax services? We've got you covered. Below you'll find answers to common inquiries regarding our pricing, tax compliance, required documents, service timelines, and more. If you don't find what you're looking for, feel free to contact us directly!"
            : "هل لديك أسئلة حول خدمات المحاسبة والضرائب؟ نحن هنا لمساعدتك. ستجد أدناه إجابات للاستفسارات الشائعة حول الأسعار والامتثال الضريبي والمستندات المطلوبة والجداول الزمنية والمزيد. إذا لم تجد ما تبحث عنه، لا تتردد في الاتصال بنا مباشرة!"
          }
        </p>
        {/* FAQ Items */}
        <div className="grid grid-cols-1 gap-7">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white shadow-lg border border-yellow-100 transition-all duration-300 overflow-hidden px-0 md:px-2"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-8 py-7 text-left group focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                <span className="font-bold text-gray-900 text-lg md:text-xl pr-4 group-hover:text-yellow-700 transition-colors">
                  {faq.question}
                </span>
                <span className={`text-yellow-500 text-3xl font-bold flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {/* Answer */}
              <div
                className={`px-8 pb-7 transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
                style={{overflow: 'hidden'}}
              >
                <p className="text-gray-700 text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
