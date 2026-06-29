"use client";
import Link from "next/link";
import { useScrollNav } from "@/hooks/useScrollNav";

const NAV_LINKS = [
  { href: "#funcionalidades", label: "Funcionalidades" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#planos", label: "Planos" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const scrolled = useScrollNav();

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-[background,box-shadow] duration-300 ${
        scrolled ? "bg-white/[0.92] backdrop-blur-[16px] shadow-sm" : ""
      }`}
    >
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between h-[68px]">
          <Link
            href="#"
            className="flex items-center gap-2.5 font-extrabold text-[1.35rem] tracking-[-0.025em] text-brand-900"
          >
            <div className="w-9 h-9 bg-gradient-to-br from-brand-500 to-brand-700 rounded-[10px] flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2a10 10 0 1 0 10 10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            Ciclus
          </Link>

          <ul className="hidden md:flex items-center gap-1.5 list-none m-0 p-0">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[0.9rem] font-medium text-slate-500 px-3.5 py-1.5 rounded-full transition-colors hover:text-brand-600 hover:bg-brand-50"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2.5">
            <Link
              href="#"
              className="text-[0.9rem] font-semibold text-slate-500 px-4 py-2.5 transition-colors hover:text-brand-600"
            >
              Entrar
            </Link>
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-[0.9rem] font-semibold px-[22px] py-2.5 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-brand hover:-translate-y-px hover:shadow-brand-lg transition-all"
            >
              Começar grátis
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
