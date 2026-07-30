import React from 'react';
import { Diamond } from 'lucide-react';
import { portfolioData as d } from '../mock';

const Toolkit = () => {
  return (
    <section className="relative py-20 md:py-28 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-3 text-[11px] tracking-[0.3em] text-white/50 mb-6">
          <span className="text-blue-400">04</span>
          <span className="w-8 h-[1px] bg-white/30" />
          <span>TOOLKIT</span>
        </div>
        <h2 className="serif text-white text-4xl md:text-6xl tracking-tight mb-14">
          The stack<span className="text-blue-400">.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
          {d.toolkit.map((t, i) => (
            <div key={i} className="border-t border-white/10 pt-6">
              <div className="text-[12px] tracking-[0.25em] text-white/50 uppercase mb-4">{t.group}</div>
              <div className="flex flex-wrap gap-2">
                {t.items.map((x, j) => (
                  <span key={j} className="text-[13px] px-3 py-1.5 rounded-full border border-white/10 text-white/85 bg-white/[0.02] hover:border-blue-400/40 hover:text-blue-100 transition-colors">{x}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="text-[12px] tracking-[0.25em] text-white/50 uppercase mb-5">Certifications</div>
          <ul className="grid md:grid-cols-2 gap-y-3 gap-x-8">
            {d.certifications.map((c, i) => (
              <li key={i} className="flex items-start gap-3 text-[14px] text-white/70">
                <Diamond className="w-3 h-3 mt-1.5 text-blue-400 shrink-0" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Toolkit;
