'use client';

import { Locale } from '@/lib/translations';
import { useEffect, useState, useRef } from 'react';

interface StatProps {
  number: string;
  label: string;
  suffix?: string;
}

function StatCard({ number, label, suffix = '' }: StatProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Extract numeric value from number string (e.g., "52+" -> 52)
  const targetNumber = parseFloat(number.replace(/[^0-9.]/g, ''));
  const hasPlus = number.includes('+');
  const hasPercent = number.includes('%');
  const hasB = number.includes('B');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = targetNumber / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetNumber) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, targetNumber]);

  const displayValue = () => {
    let value = count.toFixed(hasB ? 2 : 0);
    if (hasB) value += 'B';
    if (hasPlus) value += '+';
    if (hasPercent) value += '%';
    return value;
  };

  return (
    <div ref={cardRef} className="relative group">
      {/* Hover Effect Background */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300\" style={{background: 'linear-gradient(to bottom right, rgba(248, 228, 139, 0.1), rgba(191, 156, 74, 0.05))'}}></div>
      
      {/* Content */}
      <div className="relative text-center py-16 px-8">
        <div className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight" style={{ fontFamily: 'Georgia, serif', color: '#F8E48B' }}>
          {displayValue()}
        </div>
        <p className="text-xs md:text-sm font-bold uppercase tracking-[0.15em] leading-relaxed max-w-[200px] mx-auto" style={{color: '#181818'}}>
          {label}
        </p>
      </div>
    </div>
  );
}

export default function Stats({ locale }: { locale: Locale }) {
  const content = {
    en: {
      badge: "OUR ACHIEVEMENTS",
      title: "We Live & Work Globally",
      stats: [
        {
          number: "15+",
          label: "Years of Experience"
        },
        {
          number: "500+",
          label: "Cases Won"
        },
        {
          number: "98%",
          label: "Satisfied Clients"
        },
        {
          number: "50+",
          label: "Professional Team Members"
        },
        {
          number: "1000+",
          label: "Legal Documents Processed"
        },
        {
          number: "25+",
          label: "Countries Served"
        }
      ]
    },
    ar: {
      badge: "إنجازاتنا",
      title: "نعيش ونعمل عالمياً",
      stats: [
        {
          number: "15+",
          label: "سنوات من الخبرة"
        },
        {
          number: "500+",
          label: "قضية فازت بها"
        },
        {
          number: "98%",
          label: "عملاء راضون"
        },
        {
          number: "50+",
          label: "أعضاء الفريق المحترف"
        },
        {
          number: "1000+",
          label: "الوثائق القانونية المعالجة"
        },
        {
          number: "25+",
          label: "الدول المخدومة"
        }
      ]
    }
  };

  const pageContent = content[locale];

  return (
    <section className="w-full py-24 px-4 md:px-8" style={{backgroundColor: '#f5f0e8'}}>
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="h-[2px] w-12" style={{backgroundColor: '#F8E48B'}}></div>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{color: '#F8E48B'}}>
              {pageContent.badge}
            </span>
            <div className="h-[2px] w-12" style={{backgroundColor: '#F8E48B'}}></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 font-light tracking-tight" style={{ fontFamily: 'Georgia, serif', color: '#181818' }}>
            {pageContent.title}
          </h2>
          <div className="flex justify-center">
            <div className="h-[3px] w-24 rounded-full" style={{backgroundImage: 'linear-gradient(to right, transparent, #F8E48B, transparent)'}}></div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-sm overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)]" style={{backgroundColor: 'rgba(255, 255, 255, 0.6)', borderColor: 'rgba(248, 228, 139, 0.2)', borderWidth: '1px', backdropFilter: 'blur(4px)'}}>
          {pageContent.stats.map((stat, index) => (
            <div 
              key={index}
              className={`
                ${index % 3 !== 2 ? 'lg:border-r' : ''} 
                ${index < 3 ? 'lg:border-b' : ''}
                ${index % 2 === 0 ? 'md:border-r' : ''} 
                ${index < 4 ? 'md:border-b' : ''}
              `}
              style={{borderColor: 'rgba(248, 228, 139, 0.2)'}}
            >
              <StatCard
                number={stat.number}
                label={stat.label}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
