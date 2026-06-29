import { FadeUp } from "@/components/ui/FadeUp";
import { getTestimonials } from "@/controllers/landing";

export function TestimonialsSection() {
  const testimonials = getTestimonials();

  return (
    <section className="py-24 bg-slate-50">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <FadeUp className="text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 border border-brand-100 text-[0.75rem] font-bold uppercase tracking-[0.08em] px-3.5 py-[5px] rounded-full mb-4">
            Depoimentos
          </span>
          <h2
            className="font-extrabold leading-[1.15] tracking-[-0.04em] text-brand-950"
            style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)" }}
          >
            O que nossos clientes dizem
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeUp key={t.name} delay={i * 100}>
              <div className="bg-white border border-slate-200 rounded-2xl p-7 hover:shadow-card-lg hover:-translate-y-[3px] transition-all h-full flex flex-col">
                <div className="text-amber-400 mb-4 text-base tracking-wide">★★★★★</div>
                <p className="text-[0.9rem] text-slate-500 leading-[1.7] mb-5 flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center text-white text-[0.85rem] font-bold flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-[0.88rem] font-bold text-slate-900">{t.name}</div>
                    <div className="text-[0.78rem] text-slate-400">{t.role}</div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
