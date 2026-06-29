import { FadeUp } from "@/components/ui/FadeUp";

const CHECKLIST = [
  { title: "5 frequências suportadas",     desc: "Mensal, bimestral, trimestral, semestral ou anual — para cada tipo de serviço." },
  { title: "OS automática no vencimento",  desc: "Job noturno cria a próxima OS automaticamente, sem intervenção humana." },
  { title: "Alerta 30 dias antes",         desc: "Dashboard mostra contratos a vencer, evitando perdas de receita recorrente." },
  { title: "Cancelamento em cascata",      desc: "Ao cancelar o contrato, todas as OS pendentes são canceladas automaticamente." },
];

const CONTRACTS = [
  {
    name: "Condomínio Aurora",
    tag: "Ativo", tagCls: "bg-green-100 text-green-700",
    service: "Climatização · Trimestral · R$ 1.800/trimestre",
    progress: 72, barCls: "from-brand-500 to-brand-400",
    note: "Próxima OS: 15 de julho · 72% do período", noteCls: "text-slate-400",
  },
  {
    name: "Edif. Canção Nova",
    tag: "A vencer", tagCls: "bg-amber-100 text-amber-700",
    service: "Dedetização · Semestral · R$ 2.400/semestre",
    progress: 93, barCls: "from-amber-500 to-amber-400",
    note: "⚠ Vence em 12 dias · Renovar agora", noteCls: "text-amber-700",
  },
  {
    name: "Torres Iguatemi",
    tag: "Ativo", tagCls: "bg-blue-100 text-blue-700",
    service: "Caixa d'Água · Mensal · R$ 450/mês",
    progress: 34, barCls: "from-brand-500 to-brand-400",
    note: "Próxima OS: 28 de julho · 34% do período", noteCls: "text-slate-400",
  },
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-white">
      <path d="M2 6l3 3 5-5" />
    </svg>
  );
}

export function SplitContractsSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Text */}
          <FadeUp>
            <span className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 border border-brand-100 text-[0.75rem] font-bold uppercase tracking-[0.08em] px-3.5 py-[5px] rounded-full mb-4">
              Contratos Recorrentes
            </span>
            <h2 className="font-extrabold leading-[1.15] tracking-[-0.04em] text-brand-950 mb-4" style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)" }}>
              Nunca perca um vencimento de contrato
            </h2>
            <p className="text-[1.05rem] text-slate-500 leading-[1.7] mb-8">
              Monitore toda a carteira de contratos com alertas automáticos de vencimento, histórico de OS e renovação com um clique.
            </p>
            <ul className="flex flex-col gap-3.5">
              {CHECKLIST.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="w-[22px] h-[22px] bg-gradient-to-br from-brand-500 to-brand-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckIcon />
                  </span>
                  <div>
                    <strong className="text-slate-900 text-[0.95rem] block font-semibold">{item.title}</strong>
                    <span className="text-slate-400 text-[0.85rem]">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </FadeUp>

          {/* Card mockup */}
          <FadeUp delay={200}>
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-card-lg">
              <div className="bg-gradient-to-br from-brand-600 to-brand-800 px-6 py-5 flex items-center gap-3">
                <svg className="w-[18px] h-[18px] text-white" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                <h4 className="text-white text-[0.9rem] font-bold">Contratos Ativos</h4>
                <span className="ml-auto bg-white/20 text-white text-[0.7rem] px-2.5 py-1 rounded-full">183 ativos</span>
              </div>
              <div className="p-6 flex flex-col gap-3">
                {CONTRACTS.map((c) => (
                  <div key={c.name} className="bg-slate-50 border border-slate-200 rounded-xl p-3.5">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[0.8rem] font-bold text-slate-900">{c.name}</span>
                      <span className={`text-[0.72rem] font-semibold px-2.5 py-0.5 rounded-full ${c.tagCls}`}>{c.tag}</span>
                    </div>
                    <div className="text-[0.78rem] text-slate-400 mb-2.5">{c.service}</div>
                    <div className="bg-slate-100 rounded-full h-1.5">
                      <div className={`h-full rounded-full bg-gradient-to-r ${c.barCls}`} style={{ width: `${c.progress}%` }} />
                    </div>
                    <div className={`text-[0.72rem] mt-1.5 ${c.noteCls}`}>{c.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
