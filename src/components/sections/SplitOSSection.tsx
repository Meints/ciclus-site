import { FadeUp } from "@/components/ui/FadeUp";

const OS_ITEMS = [
  { initials: "CP", name: "Cond. Parque das Flores", sub: "OS #00247 · Climatização · João Silva",   status: "Em andamento", cls: "bg-blue-100 text-blue-700" },
  { initials: "EM", name: "Edif. Millennium",         sub: "OS #00248 · Dedetização · Carlos Lima",   status: "Agendado",     cls: "bg-amber-100 text-amber-700" },
  { initials: "RA", name: "Res. Alto das Pedras",     sub: "OS #00243 · Caixa d'Água · Ana Costa",    status: "Concluído",    cls: "bg-green-100 text-green-700" },
  { initials: "TC", name: "Torres do Centro",          sub: "OS #00241 · Elevador · Pedro Santos",     status: "✓ Confirmado", cls: "bg-green-50 text-green-700 border border-green-200" },
];

const CHECKLIST = [
  { title: "Numeração automática",        desc: "Cada empresa tem sua própria sequência de OS, gerada atomicamente." },
  { title: "Visualização Kanban",         desc: "Arraste cards entre colunas para atualizar o status da OS em tempo real." },
  { title: "Reagendamento inteligente",   desc: "Reagende com justificativa ou cancele em lote as OS vinculadas ao contrato." },
  { title: "Relatório PDF com 1 clique",  desc: "PDF gerado com logo, dados do cliente, técnico, equipamentos e assinaturas." },
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-white">
      <path d="M2 6l3 3 5-5" />
    </svg>
  );
}

export function SplitOSSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Card mockup */}
          <FadeUp>
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-card-lg">
              <div className="bg-gradient-to-br from-brand-600 to-brand-800 px-6 py-5 flex items-center gap-3">
                <svg className="w-[18px] h-[18px] text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
                </svg>
                <h4 className="text-white text-[0.9rem] font-bold">Ordens de Serviço Ativas</h4>
                <span className="ml-auto bg-white/20 text-white text-[0.7rem] px-2.5 py-1 rounded-full">12 hoje</span>
              </div>
              <div className="p-6">
                {OS_ITEMS.map((item) => (
                  <div key={item.initials} className="flex items-center gap-3 py-2.5 border-b border-slate-50 last:border-0">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white text-[0.7rem] font-extrabold flex-shrink-0">
                      {item.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[0.83rem] font-semibold text-slate-900">{item.name}</div>
                      <div className="text-[0.75rem] text-slate-400 mt-0.5">{item.sub}</div>
                    </div>
                    <span className={`text-[0.7rem] font-bold px-2.5 py-1 rounded-full whitespace-nowrap ${item.cls}`}>{item.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Text */}
          <FadeUp delay={200}>
            <span className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 border border-brand-100 text-[0.75rem] font-bold uppercase tracking-[0.08em] px-3.5 py-[5px] rounded-full mb-4">
              Gestão de Serviços
            </span>
            <h2 className="font-extrabold leading-[1.15] tracking-[-0.04em] text-brand-950 mb-4" style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)" }}>
              Ciclo de vida completo da ordem de serviço
            </h2>
            <p className="text-[1.05rem] text-slate-500 leading-[1.7] mb-8">
              Acompanhe cada OS desde o agendamento até a confirmação digital do cliente. Kanban visual, filtros por técnico e data, histórico auditado.
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
        </div>
      </div>
    </section>
  );
}
