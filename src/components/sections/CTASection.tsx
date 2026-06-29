import Link from "next/link";

export function CTASection() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #042c53 0%, #021a33 100%)" }}
    >
      {/* Decorations */}
      <div
        className="absolute pointer-events-none"
        style={{ top: "-200px", left: "-200px", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(38,113,196,.25) 0%, transparent 65%)" }}
      />
      <div
        className="absolute pointer-events-none"
        style={{ bottom: "-200px", right: "-200px", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(90,155,224,.2) 0%, transparent 65%)" }}
      />

      <div className="w-full max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="text-center max-w-[640px] mx-auto">
          <h2
            className="font-black text-white tracking-[-0.04em] leading-[1.15] mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
          >
            Comece a automatizar seus serviços hoje
          </h2>
          <p className="text-[1.05rem] text-white/65 mb-10 leading-[1.7]">
            Junte-se a mais de 500 empresas que já eliminaram planilhas, perdas de contrato e relatórios manuais com o Ciclus.
          </p>
          <div className="flex justify-center items-center gap-3.5 flex-wrap">
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-base font-bold px-8 py-3.5 rounded-full bg-white text-brand-700 hover:bg-brand-50 hover:-translate-y-px hover:shadow-[0_8px_24px_rgb(0_0_0/0.2)] transition-all"
            >
              Criar conta grátis
            </Link>
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-base font-semibold px-8 py-3.5 rounded-full border-[1.5px] border-white/25 text-white/75 hover:border-white/50 hover:text-white transition-colors"
            >
              Falar com um especialista
            </Link>
          </div>
          <p className="mt-5 text-[0.8rem] text-white/40">
            Grátis para sempre no plano Starter · Sem cartão de crédito · Setup em 5 minutos
          </p>
        </div>
      </div>
    </section>
  );
}
