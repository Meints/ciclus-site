import type {
  Feature,
  PricingPlan,
  Testimonial,
  FAQItem,
  Stat,
  NichoItem,
  Step,
} from "./index";

export const features: Feature[] = [
  {
    icon: "📋",
    title: "Contratos Recorrentes",
    description:
      "Crie contratos com frequência mensal, bimestral, trimestral, semestral ou anual. As OS são geradas automaticamente no vencimento, sem esforço manual.",
  },
  {
    icon: "⚡",
    title: "Ordens de Serviço Automáticas",
    description:
      "Numeração sequencial automática, ciclo de vida completo com controles por status e por perfil de acesso. Kanban visual com drag-and-drop.",
    featured: true,
  },
  {
    icon: "📄",
    title: "Relatório PDF Profissional",
    description:
      "Gere relatórios A4 com logo, dados da empresa, assinatura do cliente, fotos da visita e garantia. Armazenado automaticamente na nuvem.",
  },
  {
    icon: "✅",
    title: "Confirmação Digital",
    description:
      "Envie link de confirmação por e-mail. O cliente confirma com nome, CPF e assinatura digital diretamente pelo celular — sem papel.",
  },
  {
    icon: "👥",
    title: "Gestão de Equipe",
    description:
      "Controle técnicos com disponibilidade em tempo real. Perfis de acesso por papel: Proprietário, Administrador e Técnico.",
  },
  {
    icon: "📊",
    title: "Dashboard com KPIs",
    description:
      "Acompanhe clientes ativos, contratos a vencer, OS do mês, faturamento e MRR. Gráfico de receita dos últimos 12 meses em tempo real.",
  },
  {
    icon: "🔔",
    title: "Alertas de Vencimento",
    description:
      "Receba alertas de contratos a vencer em 30 dias. Renove ou cancele com um clique e mantenha sua carteira sempre atualizada.",
  },
  {
    icon: "🛡️",
    title: "LGPD & Segurança",
    description:
      "Mascaramento de dados sensíveis por perfil, log de auditoria completo, exportação de dados pessoais e soft delete com purge automático.",
  },
  {
    icon: "📷",
    title: "Fotos da Visita",
    description:
      "Registre fotos diretamente na OS via celular. As imagens ficam associadas ao serviço e aparecem no relatório PDF, documentando o trabalho.",
  },
];

export const nicho: NichoItem[] = [
  { emoji: "❄️", label: "Climatização" },
  { emoji: "🪲", label: "Dedetização" },
  { emoji: "💧", label: "Limpeza de Caixa d'Água" },
  { emoji: "🏢", label: "Manutenção Predial" },
  { emoji: "🛗", label: "Elevadores" },
  { emoji: "🔥", label: "Gás e Combustíveis" },
  { emoji: "🌿", label: "Paisagismo" },
  { emoji: "🧹", label: "Limpeza Profissional" },
];

export const steps: Step[] = [
  {
    number: 1,
    title: "Configure sua empresa",
    description:
      "Cadastre os dados da sua empresa, logo, nicho de atuação e crie os perfis da sua equipe.",
  },
  {
    number: 2,
    title: "Cadastre seus clientes",
    description:
      "Importe ou cadastre clientes com CPF/CNPJ validado, endereço e equipamentos instalados.",
  },
  {
    number: 3,
    title: "Crie contratos recorrentes",
    description:
      "Defina frequência, valor e data de início. As OS são geradas automaticamente a cada ciclo.",
  },
  {
    number: 4,
    title: "Execute e confirme",
    description:
      "Técnico executa, fotografa e registra. Cliente confirma digitalmente. PDF gerado automaticamente.",
  },
];

export const stats: Stat[] = [
  { value: "500+", numericValue: 500, suffix: "+", label: "empresas utilizando" },
  { value: "98%",  numericValue: 98,  suffix: "%", label: "de uptime garantido" },
  { value: "40%",  numericValue: 40,  suffix: "%", label: "menos tempo administrativo" },
  { value: "2min", numericValue: 2,   suffix: "min", label: "para emitir um relatório" },
];

export const pricing: PricingPlan[] = [
  {
    name: "Starter",
    price: 0,
    pricePrefix: "R$",
    period: "por mês · grátis para sempre",
    description: "Para empresas começando a organizar seus serviços.",
    features: [
      { text: "Até 30 clientes" },
      { text: "Até 20 OS por mês" },
      { text: "2 usuários" },
      { text: "Relatório PDF básico" },
      { text: "Confirmação digital", disabled: true },
      { text: "Kanban e filtros avançados", disabled: true },
    ],
    ctaText: "Começar grátis",
    ctaVariant: "ghost",
  },
  {
    name: "Pro",
    price: 197,
    pricePrefix: "R$",
    period: "por mês · cobrado mensalmente",
    description: "Para empresas em crescimento com equipe de técnicos.",
    popular: true,
    features: [
      { text: "Clientes ilimitados" },
      { text: "OS ilimitadas" },
      { text: "Até 10 usuários" },
      { text: "PDF com logo e fotos" },
      { text: "Confirmação digital com assinatura" },
      { text: "Kanban, filtros e dashboard completo" },
    ],
    ctaText: "Assinar Pro",
    ctaVariant: "primary",
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    period: "para grandes operações",
    description: "Multi-empresa, SLA dedicado e integrações customizadas.",
    features: [
      { text: "Tudo do plano Pro" },
      { text: "Usuários ilimitados" },
      { text: "Integração WhatsApp (Z-API)" },
      { text: "Suporte dedicado via WhatsApp" },
      { text: "Onboarding personalizado" },
      { text: "SLA e uptime garantidos em contrato" },
    ],
    ctaText: "Falar com vendas",
    ctaVariant: "ghost",
  },
];

export const testimonials: Testimonial[] = [
  {
    text: "Antes eu controlava tudo por planilha e WhatsApp. Com o Ciclus, minhas OS saem automáticas todo mês. Economizo pelo menos 3 horas por semana só em burocracia.",
    initials: "MF",
    name: "Marcos Ferreira",
    role: "ClimaTech Manutenções · Fortaleza, CE",
  },
  {
    text: "A confirmação digital mudou tudo pra nós. O cliente assina pelo celular, recebe o PDF e a gente não precisa mais imprimir nada. Profissional demais.",
    initials: "AC",
    name: "Ana Carvalho",
    role: "Aqua Clean Serviços · São Paulo, SP",
  },
  {
    text: "Tenho 4 técnicos e perdia contrato de cliente sem perceber. Agora o sistema me avisa 30 dias antes. Meu MRR cresceu 40% desde que comecei a usar.",
    initials: "RO",
    name: "Ricardo Oliveira",
    role: "PrédioFácil · Belo Horizonte, MG",
  },
];

export const faqs: FAQItem[] = [
  {
    question: "Posso usar para mais de um tipo de serviço na mesma empresa?",
    answer:
      "Sim. O Ciclus é multi-nicho. Você pode cadastrar qualquer tipo de serviço — climatização, dedetização, caixa d'água, elevadores, manutenção predial — em uma mesma conta, com categorias e tipos de OS personalizáveis.",
  },
  {
    question: "Como funciona a geração automática de ordens de serviço?",
    answer:
      "Todo dia, um job automático verifica quais contratos têm data de vencimento igual ou anterior ao dia atual. Para cada um desses contratos, uma nova OS é criada automaticamente com numeração sequencial, técnico responsável e dados do cliente — sem nenhuma ação manual.",
  },
  {
    question: "O cliente precisa instalar algum aplicativo para confirmar a OS?",
    answer:
      "Não. O cliente recebe um link único por e-mail. Ao abrir no navegador, visualiza os dados do serviço, assina digitalmente e confirma. Nenhum app, nenhum cadastro. O PDF é gerado automaticamente após a confirmação.",
  },
  {
    question: "Meus dados estão seguros? O sistema é compatível com a LGPD?",
    answer:
      "Sim. Todos os dados são armazenados no Brasil. Oferecemos mascaramento de CPF/CNPJ por perfil de acesso, log de auditoria completo, exportação de dados pessoais (direito de acesso), soft delete com purge automático após 90 dias e consentimento rastreável — conforme exigido pela LGPD.",
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer:
      "Sim. Não há fidelidade nem taxa de cancelamento. Você pode cancelar sua assinatura a qualquer momento pelas configurações da conta. Seu acesso continua até o fim do período já pago.",
  },
];
