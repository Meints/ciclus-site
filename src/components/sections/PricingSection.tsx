import { FadeUp } from "@/components/ui/FadeUp";
import { getPricingPlans } from "@/controllers/landing";

function CheckIcon() {
  return (
    <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-2.5 h-2.5">
      <path d="M1.5 5l2.5 2.5 4.5-4.5" />
    </svg>
  );
}

export function PricingSection() {
  const plans = getPricingPlans();

  return (
    <section className="py-24" id="planos">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <FadeUp className="text-center mb-14">
          <h2
            className="font-extrabold leading-[1.15] tracking-[-0.04em] text-brand-950 mb-4"
            style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)" }}
          >
            Plano simples, sem surpresas
          </h2>
          <p className="text-[1.05rem] text-slate-500 max-w-[560px] leading-[1.7] mx-auto">
            Comece gratuitamente e escale conforme sua empresa cresce. Sem taxa de setup, sem contrato mínimo.
          </p>
        </FadeUp>

        <FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl p-8 transition-all duration-[250ms] ${
                  plan.popular
                    ? "border-[1.5px] border-brand-500 shadow-[0_0_0_4px_rgb(38_113_196/0.1),0_12px_40px_-4px_rgb(0_0_0/0.14)] -translate-y-2"
                    : "border-[1.5px] border-slate-200 hover:shadow-card-lg hover:-translate-y-1"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-br from-brand-500 to-brand-700 text-white text-[0.72rem] font-bold uppercase tracking-[0.08em] px-[18px] py-[5px] rounded-full whitespace-nowrap">
                    ⭐ Mais escolhido
                  </div>
                )}

                <div className={`text-[0.8rem] font-bold uppercase tracking-[0.1em] mb-3 ${plan.popular ? "text-brand-600" : "text-slate-400"}`}>
                  {plan.name}
                </div>

                <div className="flex items-end gap-1 mb-1.5">
                  {plan.pricePrefix && (
                    <span className="text-[1.1rem] font-bold text-slate-500 mb-2">{plan.pricePrefix}</span>
                  )}
                  {typeof plan.price === "number" ? (
                    <span className="text-[3rem] font-black tracking-[-0.05em] text-brand-950 leading-none">{plan.price}</span>
                  ) : (
                    <span className="text-[1.6rem] font-black tracking-[-0.05em] text-brand-950 leading-none">{plan.price}</span>
                  )}
                </div>

                <div className="text-[0.85rem] text-slate-400 mb-2">{plan.period}</div>
                <div className="text-[0.85rem] text-slate-400 mb-7 min-h-[36px]">{plan.description}</div>

                <div className="h-px bg-slate-100 mb-6" />

                <ul className="flex flex-col gap-2.5 mb-8">
                  {plan.features.map((f) => (
                    <li key={f.text} className={`flex items-center gap-2.5 text-[0.88rem] text-slate-500 ${f.disabled ? "opacity-40" : ""}`}>
                      <span className={`w-[18px] h-[18px] rounded-full flex items-center justify-center flex-shrink-0 ${f.disabled ? "bg-slate-50 border border-slate-200" : "bg-brand-50 border-[1.5px] border-brand-200"}`}>
                        <CheckIcon />
                      </span>
                      {f.text}
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className={`block w-full text-center px-6 py-3.5 rounded-full font-bold text-[0.9rem] transition-all ${
                    plan.ctaVariant === "primary"
                      ? "bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-brand hover:shadow-brand-lg hover:-translate-y-px"
                      : "border-[1.5px] border-slate-200 text-slate-500 hover:border-brand-400 hover:text-brand-600 hover:bg-brand-50"
                  }`}
                >
                  {plan.ctaText}
                </a>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
