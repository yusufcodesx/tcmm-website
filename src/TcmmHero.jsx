import { useState, useEffect } from "react";

const STATS = [
  { value: "500+", label: "Assessments Completed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Threat Monitoring" },
];

const TRUST_BADGES = [
  "ISO 27001 Aligned",
  "NDPR Compliant",
  "Enterprise Ready",
];

export default function TcmmHero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen max-w-full  bg-white overflow-hidden flex flex-col space border-b border-[#EDE4D8]">

      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-[#7B3F00] to-[#C05621]" />

      <div className="relative z-10 max-w-6xl px-6 md:px-12 py-24">

        {/* Trust badges */}
        <div
          className={`flex flex-wrap gap-2 mb-10 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          style={{ transitionDelay: "100ms" }}
        >
          {TRUST_BADGES.map((badge) => (
            <span
              key={badge}
              className="text-xs font-medium px-3 py-1 rounded border border-[#D4A574] text-[#7B3F00] bg-[#FDF6EE] tracking-wide"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Headline */}
        <div
          className={`transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          style={{ transitionDelay: "200ms" }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-[#1C1009] mb-5">
            Protect What{" "}
            <span className="text-[#C05621]">Matters</span> Before It&apos;s Too Late.
          </h1>
        </div>

        {/* Sub-headline */}
        <div
          className={`transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          style={{ transitionDelay: "350ms" }}
        >
          <p className="text-lg text-[#5C4A38] max-w-xl leading-relaxed mb-10">
            The Tripod Cybersecurity Maturity Model (TCMM) helps organisations across Africa identify vulnerabilities,
            strengthen defences, and stay ahead of evolving cyber threats.
          </p>
        </div>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row gap-4 mb-14 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          style={{ transitionDelay: "500ms" }}
        >
          <button className="px-8 py-4 bg-[#C05621] hover:bg-[#A84A1A] text-white font-semibold text-base rounded-md transition-all duration-200 active:scale-[0.98]">
            Start Your Cybersecurity Assessment
          </button>
          <button className="px-8 py-4 border-2 border-[#C05621] text-[#C05621] hover:bg-[#FDF6EE] font-medium text-base rounded-md transition-all duration-200 bg-white">
            Learn More →
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-[#EDE4D8] mb-8" />

        {/* Stats */}
        <div
          className={`flex justify-between flex-col sm:flex-row gap-8 sm:gap-12 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          style={{ transitionDelay: "650ms" }}
        >
          {STATS.map(({ value, label }) => (
            <div key={label} className="flex flex-col gap-1">
              <span className="text-3xl font-bold text-[#1C1009]">{value}</span>
              <span className="text-xs text-[#8C7060] tracking-wide uppercase">{label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
