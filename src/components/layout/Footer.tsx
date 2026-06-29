import Link from "next/link";

const FOOTER_LINKS = {
  Produto: ["Funcionalidades", "Planos e preços", "Novidades", "Roadmap", "Integrações"],
  Empresa: ["Sobre nós", "Blog", "Parceiros", "Carreiras", "Contato"],
  Legal: ["Termos de uso", "Privacidade", "LGPD", "Cookies", "Status do sistema"],
};

export function Footer() {
  return (
    <footer className="bg-brand-950 border-t border-white/[0.07] pt-[60px] pb-8">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1fr] gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link
              href="#"
              className="flex items-center gap-2.5 font-extrabold text-[1.35rem] tracking-[-0.025em] text-white mb-4"
            >
              <div className="w-9 h-9 bg-gradient-to-br from-brand-500 to-brand-700 rounded-[10px] flex items-center justify-center">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 1 0 10 10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              Ciclus
            </Link>
            <p className="text-[0.85rem] leading-[1.7] text-white/45 max-w-[280px] mb-6">
              Plataforma SaaS para gestão de contratos e serviços recorrentes. Automatize, confirme e cresça.
            </p>
            <div className="flex gap-2.5">
              <a href="#" aria-label="Instagram" className="w-9 h-9 bg-white/[0.08] rounded-lg flex items-center justify-center text-white/60 hover:bg-white/[0.16] hover:text-white transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 bg-white/[0.08] rounded-lg flex items-center justify-center text-white/60 hover:bg-white/[0.16] hover:text-white transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" aria-label="WhatsApp" className="w-9 h-9 bg-white/[0.08] rounded-lg flex items-center justify-center text-white/60 hover:bg-white/[0.16] hover:text-white transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h5 className="text-[0.8rem] font-bold uppercase tracking-[0.1em] text-white/40 mb-4">
                {title}
              </h5>
              <ul className="list-none flex flex-col gap-2.5">
                {links.map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-[0.875rem] text-white/55 hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/[0.07] pt-7 flex flex-col md:flex-row items-center justify-between gap-3 text-[0.8rem] text-white/30 text-center">
          <span>© 2026 Ciclus Tecnologia Ltda. Todos os direitos reservados.</span>
          <span>Feito com ❤️ para empresas de serviços no Brasil</span>
        </div>
      </div>
    </footer>
  );
}
