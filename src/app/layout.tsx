import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Ciclus — Gestão de Serviços Recorrentes",
  description:
    "Plataforma SaaS para empresas de climatização, dedetização, limpeza de caixa d'água e manutenção predial. Automatize contratos, ordens de serviço e relatórios.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased text-slate-900 bg-white`}>
        {children}
      </body>
    </html>
  );
}
