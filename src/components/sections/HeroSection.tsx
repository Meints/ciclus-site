"use client";
import Link from "next/link";

const AVATARS = ["M", "A", "R", "J", "+"];

const KPI_CARDS = [
  { label: "Clientes Ativos", value: "248", delta: "↑ 12% este mês" },
  { label: "Contratos",       value: "183", delta: "↑ 8% este mês" },
  { label: "OS do Mês",       value: "67",  delta: "↑ 23% este mês" },
  { label: "Faturamento",     value: "R$34k", delta: "↑ 15% este mês" },
];

const BAR_HEIGHTS = [45, 60, 50, 75, 65, 100];

const NEXT_OS = [
  { color: "#378add", name: "Cond. Jardins · Climatização", badge: "Hoje",    bg: "rgba(55,138,221,.2)",  tc: "#85b7eb" },
  { color: "#27c93f", name: "Edif. Centro · Dedetização",  badge: "Amanhã",  bg: "rgba(39,201,63,.2)",   tc: "#27c93f" },
  { color: "#febc2e", name: "Res. Park · Caixa d'Água",    badge: "6/7",     bg: "rgba(254,188,46,.2)",  tc: "#febc2e" },
  { color: "#a855f7", name: "Emp. Técnica · Elevador",     badge: "8/7",     bg: "rgba(168,85,247,.2)",  tc: "#a855f7" },
];

const SIDEBAR_ITEMS = [
  "Dashboard", "Serviços", "Clientes", "Contratos", "Equipe", "Configurações",
];

export function HeroSection() {
  return (
    <section
      className="pt-[148px] pb-20 overflow-hidden relative"
      style={{ background: "linear-gradient(170deg, #f0f7ff 0%, #ffffff 60%)" }}
    >
      {/* Radial decoration */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-120px", right: "-200px",
          width: "700px", height: "700px",
          background: "radial-gradient(circle, rgba(38,113,196,.10) 0%, transparent 70%)",
        }}
      />

      <div className="w-full max-w-[1200px] mx-auto px-6">
        {/* Hero content */}
        <div className="max-w-[720px]">
          <h1
            className="font-black leading-[1.1] tracking-[-0.04em] text-brand-950 mb-6"
            style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)" }}
          >
            Gerencie contratos<br />
            e ordens de serviço<br />
            em um só lugar,{" "}
            <span className="bg-gradient-to-r from-brand-500 to-brand-300 bg-clip-text text-transparent">
              sem esforço
            </span>
          </h1>

          <p className="text-[1.15rem] text-slate-500 max-w-[580px] mb-10 leading-[1.7]">
            Automatize a criação de OS, controle contratos recorrentes, gere relatórios
            profissionais em PDF e envie confirmações digitais — tudo com múltiplos usuários e equipes.
          </p>

          <div className="flex items-center gap-3.5 flex-wrap mb-[60px]">
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-base font-semibold px-8 py-3.5 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-brand hover:-translate-y-px hover:shadow-brand-lg transition-all"
            >
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              Começar gratuitamente
            </Link>
            <Link
              href="#como-funciona"
              className="inline-flex items-center gap-2 text-base font-semibold px-8 py-3.5 rounded-full border-[1.5px] border-brand-500 text-brand-600 hover:bg-brand-50 transition-colors"
            >
              Ver demonstração
            </Link>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-5 flex-wrap">
            <div className="flex">
              {AVATARS.map((letter, i) => (
                <div
                  key={i}
                  className={`w-9 h-9 rounded-full border-[2.5px] border-white bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center text-white text-[0.7rem] font-bold ${i > 0 ? "-ml-2.5" : ""}`}
                >
                  {letter}
                </div>
              ))}
            </div>
            <p className="text-[0.85rem] text-slate-500">
              Mais de <strong className="text-brand-700">500 empresas</strong> já automatizaram seus serviços
            </p>
          </div>
        </div>

        {/* Dashboard mockup */}
        <div className="mt-[60px]">
          <div
            className="bg-brand-950 rounded-2xl overflow-hidden"
            style={{ boxShadow: "0 24px 80px -12px rgb(2 26 51 / 0.55), 0 0 0 1px rgb(255 255 255 / 0.08)" }}
          >
            {/* Browser bar */}
            <div className="bg-brand-900 h-11 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              <div className="ml-3 bg-white/[0.08] rounded-lg px-4 py-1 text-[0.75rem] text-white/50 flex-1 max-w-[320px]">
                app.ciclus.com.br/dashboard
              </div>
            </div>

            {/* Body */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-5 min-h-[420px]">
              {/* Sidebar */}
              <div className="hidden md:flex bg-white/[0.04] rounded-xl p-4 flex-col gap-1">
                {SIDEBAR_ITEMS.map((item, i) => (
                  <div
                    key={item}
                    className={`flex items-center gap-2.5 px-3 py-[9px] rounded-lg text-[0.78rem] ${
                      i === 0
                        ? "bg-gradient-to-br from-brand-600 to-brand-800 text-white"
                        : "text-white/50"
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-[4px] flex-shrink-0 opacity-70 ${i === 0 ? "bg-white/90" : "bg-current"}`} />
                    {item}
                  </div>
                ))}
              </div>

              {/* Main */}
              <div className="flex flex-col gap-4">
                {/* KPIs */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {KPI_CARDS.map((kpi) => (
                    <div key={kpi.label} className="bg-white/[0.06] border border-white/[0.06] rounded-xl p-3.5">
                      <div className="text-[0.65rem] text-white/40 mb-1.5 uppercase tracking-[0.05em]">{kpi.label}</div>
                      <div className="text-[1.3rem] font-extrabold text-white tracking-[-0.03em]">{kpi.value}</div>
                      <div className="text-[0.65rem] text-[#27c93f] mt-0.5">{kpi.delta}</div>
                    </div>
                  ))}
                </div>

                {/* Charts row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1">
                  <div className="bg-white/[0.06] border border-white/[0.06] rounded-xl p-4">
                    <div className="text-[0.7rem] font-bold text-white/50 uppercase tracking-[0.06em] mb-3">
                      Receita — Últimos 6 meses
                    </div>
                    <div className="flex items-end gap-1.5 h-20">
                      {BAR_HEIGHTS.map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-brand-600 to-brand-400 rounded-t-[4px] opacity-80"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/[0.06] border border-white/[0.06] rounded-xl p-4">
                    <div className="text-[0.7rem] font-bold text-white/50 uppercase tracking-[0.06em] mb-3">
                      Próximas OS
                    </div>
                    {NEXT_OS.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 py-[7px] border-b border-white/[0.06] last:border-0">
                        <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: item.color }} />
                        <div className="text-[0.72rem] text-white/60 flex-1">{item.name}</div>
                        <span
                          className="text-[0.6rem] font-bold px-2 py-0.5 rounded-full"
                          style={{ background: item.bg, color: item.tc }}
                        >
                          {item.badge}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
