import { FadeUp } from "@/components/ui/FadeUp";
import { getSteps } from "@/controllers/landing";

export function HowItWorksSection() {
  const steps = getSteps();

  return (
    <section className="py-24" id="como-funciona">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <FadeUp className="text-center mb-14">
          <h2
            className="font-extrabold leading-[1.15] tracking-[-0.04em] text-brand-950 mb-4"
            style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)" }}
          >
            Do cadastro à confirmação em 4 passos
          </h2>
          <p className="text-[1.05rem] text-slate-500 max-w-[560px] leading-[1.7] mx-auto">
            Comece a usar em minutos. Configure sua empresa, cadastre clientes e automatize todo o ciclo de serviço.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line — desktop only */}
          <div className="hidden lg:block absolute top-7 left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-0.5 bg-gradient-to-r from-brand-200 to-brand-400" />

          {steps.map((step, i) => (
            <FadeUp key={step.number} delay={i * 100} className="text-center relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-brand-500 to-brand-700 rounded-full flex items-center justify-center mx-auto mb-5 text-[1.1rem] font-extrabold text-white shadow-[0_4px_16px_-4px_rgb(38_113_196/0.5)] border-4 border-white">
                {step.number}
              </div>
              <h3 className="text-[0.95rem] font-bold text-brand-950 mb-2">{step.title}</h3>
              <p className="text-[0.85rem] text-slate-500 leading-[1.6]">{step.description}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
