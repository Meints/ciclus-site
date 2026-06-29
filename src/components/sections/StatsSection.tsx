"use client";
import { useRef, useEffect, useState } from "react";
import { FadeUp } from "@/components/ui/FadeUp";
import { useCountUp } from "@/hooks/useCountUp";
import { getStats } from "@/controllers/landing";
import type { Stat } from "@/models/index";

interface StatItemProps extends Stat {
  active: boolean;
}

function StatItem({ value, numericValue, suffix, label, active }: StatItemProps) {
  const animated = useCountUp(numericValue, active);
  const displayValue = active ? `${animated}${suffix}` : value;

  return (
    <div className="px-8 py-10 bg-white/[0.04] text-center hover:bg-white/[0.08] transition-colors">
      <span
        className="text-[2.6rem] font-black tracking-[-0.05em] block mb-1.5"
        style={{
          background: "linear-gradient(135deg, #fff, #85b7eb)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {displayValue}
      </span>
      <span className="text-[0.85rem] text-white/50">{label}</span>
    </div>
  );
}

export function StatsSection() {
  const stats = getStats();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-brand-950 text-white">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <FadeUp className="text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-white/[0.08] text-brand-200 border border-white/[0.12] text-[0.75rem] font-bold uppercase tracking-[0.08em] px-3.5 py-[5px] rounded-full mb-4">
            Resultados reais
          </span>
          <h2
            className="font-extrabold leading-[1.15] tracking-[-0.04em] text-white"
            style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)" }}
          >
            Números que falam por si
          </h2>
        </FadeUp>

        <div
          ref={sectionRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-0.5 rounded-2xl overflow-hidden border border-white/[0.08]"
        >
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} active={triggered} />
          ))}
        </div>
      </div>
    </section>
  );
}
