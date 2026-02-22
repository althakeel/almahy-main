import { Locale } from "@/lib/translations";

interface ClientLogosMarqueeProps {
  locale: Locale;
}

const clients = [
  "Nexus Holdings",
  "Bluewave Group",
  "Cedar Ventures",
  "Orion Retail",
  "Summit Logistics",
  "Prime Medical",
  "Atlas Construction",
  "Aster Hospitality",
];

function LogoPill({ name }: { name: string }) {
  return (
    <li className="flex h-16 min-w-[190px] items-center justify-center rounded-xl border border-gray-200 bg-white px-5 shadow-sm">
      <span className="text-sm font-semibold tracking-wide text-gray-700">{name}</span>
    </li>
  );
}

export default function ClientLogosMarquee({ locale }: ClientLogosMarqueeProps) {
  const isArabic = locale === "ar";
  const topRowAnimation = isArabic ? "animate-marquee-right" : "animate-marquee-left";
  const bottomRowAnimation = isArabic ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <section className="bg-white py-14 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
          {isArabic ? "عملاؤنا" : "Our Clients"}
        </p>
        <h2 className="mt-3 text-center text-2xl md:text-3xl font-bold text-gray-900">
          {isArabic ? "موثوقون من شركات رائدة" : "Trusted by leading companies"}
        </h2>

        <div className="group relative mt-10 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />

          <ul
            className={`flex min-w-max gap-4 ${topRowAnimation} group-hover:[animation-play-state:paused]`}
            style={{ animationDuration: "40s" }}
          >
            {[...clients, ...clients].map((name, index) => (
              <LogoPill key={`top-${name}-${index}`} name={name} />
            ))}
          </ul>

          <ul
            className={`mt-4 flex min-w-max gap-4 ${bottomRowAnimation} group-hover:[animation-play-state:paused]`}
            style={{ animationDuration: "40s" }}
          >
            {[...clients, ...clients].map((name, index) => (
              <LogoPill key={`bottom-${name}-${index}`} name={name} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
