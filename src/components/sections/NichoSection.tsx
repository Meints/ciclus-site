import { getNichoItems } from "@/controllers/landing";

export function NichoSection() {
  const items = getNichoItems();

  return (
    <section className="py-14 border-t border-b border-slate-100">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <p className="text-center text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-slate-400 mb-7">
          Ideal para empresas de
        </p>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-[18px] py-2 text-[0.85rem] font-medium text-slate-500 transition-all hover:bg-brand-50 hover:border-brand-200 hover:text-brand-700 hover:-translate-y-0.5 cursor-default"
            >
              <span>{item.emoji}</span>
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
