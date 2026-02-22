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
    {
      question: "How long does it take to prepare financial statements or tax returns?",
      answer: "Typically 5-10 business days depending on the complexity and volume of transactions."
    },
    {
      question: "What is the estimated time to complete Corporate Tax registration?",
      answer: "Corporate Tax registration usually takes 3-7 business days once all required documents are submitted."
    },
    {
      question: "Do you provide monthly or quarterly reports?",
      answer: "We provide both monthly and quarterly reports based on your preference and business requirements."
    },
    {
      question: "When do you start work after the contract is signed?",
      answer: "We begin work immediately after contract signing and receipt of necessary documents and access."
    },
    {
      question: "Do your services include preparing financial statements, or just filing tax returns?",
      answer: "We provide comprehensive services including financial statement preparation, bookkeeping, and tax filing."
    },
    {
      question: "Can you take over tasks from our current accountant or another accounting firm?",
      answer: "Yes, we can seamlessly transition accounting tasks from your current provider with minimal disruption."
    },
    {
      question: "What type of reports will we receive monthly?",
      answer: "You'll receive profit & loss statements, balance sheets, cash flow reports, and tax compliance summaries."
    },
    {
      question: "Do you also provide financial consulting or tax planning?",
      answer: "Yes, we offer strategic financial consulting and tax planning to optimize your business operations."
    }
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
    {
      question: "هل تساعدون في تنظيم الملفات القديمة أو المتأخرة؟",
      answer: "نعم، يمكننا المساعدة في تنظيم ومطابقة السجلات التاريخية."
    },
    {
      question: "كم من الوقت يستغرق إعداد القوائم المالية أو الإقرارات الضريبية؟",
      answer: "عادةً من 5-10 أيام عمل حسب التعقيد وحجم المعاملات."
    },
    {
      question: "ما هو الوقت المقدر لإكمال تسجيل الضريبة على الشركات؟",
      answer: "عادةً يستغرق التسجيل من 3-7 أيام عمل بعد تقديم المستندات المطلوبة."
    },
    {
      question: "هل تقدمون تقارير شهرية أو ربع سنوية؟",
      answer: "نقدم تقارير شهرية وربع سنوية حسب تفضيلاتك ومتطلبات عملك."
    },
    {
      question: "متى تبدأون العمل بعد توقيع العقد؟",
      answer: "نبدأ العمل فوراً بعد توقيع العقد واستلام المستندات الضرورية."
    },
    {
      question: "هل تشمل خدماتكم إعداد القوائم المالية أم فقط تقديم الإقرارات؟",
      answer: "نقدم خدمات شاملة تشمل إعداد القوائم المالية والمحاسبة والتقديم الضريبي."
    },
    {
      question: "هل يمكنكم استلام المهام من محاسبنا الحالي أو شركة محاسبة أخرى؟",
      answer: "نعم، يمكننا الانتقال السلس من مزودك الحالي مع الحد الأدنى من الاضطراب."
    },
    {
      question: "ما نوع التقارير التي سنتلقاها شهرياً؟",
      answer: "ستتلقى قوائم الأرباح والخسائر والميزانية وتقارير التدفق النقدي وملخصات الامتثال الضريبي."
    },
    {
      question: "هل تقدمون أيضاً استشارات مالية أو تخطيط ضريبي؟",
      answer: "نعم، نقدم استشارات مالية استراتيجية وتخطيط ضريبي لتحسين عمليات عملك."
    }
  ]
};

export default function FAQ({ locale }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = faqData[locale];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-16 px-4 md:px-8">
      <div className="max-w-[1250px] mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-amber-500 mb-4">
          FAQ
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 text-sm md:text-base mb-10 leading-relaxed max-w-3xl">
          {locale === 'en' 
            ? "Have questions about our accounting and tax services? We've got you covered. Below you'll find answers to common inquiries regarding our pricing, tax compliance, required documents, service timelines, and more. If you don't find what you're looking for, feel free to contact us directly!"
            : "هل لديك أسئلة حول خدمات المحاسبة والضرائب؟ نحن هنا لمساعدتك. ستجد أدناه إجابات للاستفسارات الشائعة حول الأسعار والامتثال الضريبي والمستندات المطلوبة والجداول الزمنية والمزيد. إذا لم تجد ما تبحث عنه، لا تتردد في الاتصال بنا مباشرة!"
          }
        </p>

        {/* FAQ Items */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 last:border-b-0"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between py-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-800 text-sm md:text-base pr-4">
                  {faq.question}
                </span>
                <span className="text-amber-500 text-2xl font-light flex-shrink-0">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="pb-5 animate-fadeIn">
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
