import { FadeUp } from "@/components/ui/FadeUp";
import { getFeatures } from "@/controllers/landing";

export function FeaturesSection() {
  const features = getFeatures();

  return (
    <section className="py-24" id="funcionalidades">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <FadeUp className="text-center mb-14">
          <h2
            className="font-extrabold leading-[1.15] tracking-[-0.04em] text-brand-950 mb-4"
            style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)" }}
          >
            Tudo que sua empresa precisa para crescer
          </h2>
          <p className="text-[1.05rem] text-slate-500 max-w-[560px] leading-[1.7] mx-auto">
            Do agendamento à confirmação digital — um sistema completo pensado para empresas de serviços recorrentes.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FadeUp key={feature.title} delay={(i % 3) * 100}>
              <div
                className={`rounded-2xl p-8 transition-all duration-[250ms] h-full ${
                  feature.featured
                    ? "bg-gradient-to-br from-brand-600 to-brand-800 border border-transparent"
                    : "bg-white border border-slate-200 hover:shadow-card-lg hover:-translate-y-1 hover:border-brand-200"
                }`}
              >
                <div
                  className={`w-[52px] h-[52px] rounded-xl flex items-center justify-center mb-5 text-[1.4rem] ${
                    feature.featured ? "bg-white/[0.15]" : "bg-gradient-to-br from-brand-50 to-brand-100"
                  }`}
                >
                  {feature.icon}
                </div>
                <h3 className={`text-[1.05rem] font-bold mb-2.5 ${feature.featured ? "text-white" : "text-brand-950"}`}>
                  {feature.title}
                </h3>
                <p className={`text-[0.9rem] leading-[1.65] ${feature.featured ? "text-white/75" : "text-slate-500"}`}>
                  {feature.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
