"use client";
import { useState } from "react";
import { FadeUp } from "@/components/ui/FadeUp";
import { getFAQItems } from "@/controllers/landing";

export function FAQSection() {
  const faqs = getFAQItems();
  const [open, setOpen] = useState<number | null>(null);

  function toggle(i: number) {
    setOpen(open === i ? null : i);
  }

  return (
    <section className="py-24" id="faq">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <FadeUp className="text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 border border-brand-100 text-[0.75rem] font-bold uppercase tracking-[0.08em] px-3.5 py-[5px] rounded-full mb-4">
            Dúvidas frequentes
          </span>
          <h2
            className="font-extrabold leading-[1.15] tracking-[-0.04em] text-brand-950"
            style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)" }}
          >
            Perguntas frequentes
          </h2>
        </FadeUp>

        <div className="max-w-[720px] mx-auto">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-xl mb-3 overflow-hidden transition-colors ${
                open === i ? "border-brand-300" : "border-slate-200"
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(i)}
                className={`w-full flex items-center justify-between px-6 py-5 text-[0.95rem] font-semibold text-left bg-transparent border-0 cursor-pointer transition-colors ${
                  open === i ? "text-brand-700" : "text-slate-900"
                }`}
              >
                {faq.question}
                <svg
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                    open === i ? "rotate-180 text-brand-500" : "text-slate-400"
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div
                className="overflow-hidden transition-[max-height] duration-[350ms] ease-in-out"
                style={{ maxHeight: open === i ? "400px" : "0" }}
              >
                <div className="px-6 pb-5 text-[0.9rem] text-slate-500 leading-[1.7]">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
