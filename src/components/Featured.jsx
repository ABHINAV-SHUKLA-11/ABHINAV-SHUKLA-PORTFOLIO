
import React from 'react';
import { Rocket } from 'lucide-react';
import { portfolioData as d } from '../mock';

const Featured = () => {
  const parts = d.featured.description.split('**');
  return (
    <section className="relative py-20 md:py-28 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-8 md:p-12 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-indigo-500/10 blur-3xl" />
          </div>

          <div className="relative flex items-center gap-3 text-[11px] tracking-[0.3em] text-white/60 mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-200">
              <Rocket className="w-3.5 h-3.5" />
              <span>{d.featured.tag.toUpperCase()}</span>
            </span>
            <span className="text-white/40">{d.featured.year} · {d.featured.org}</span>
          </div>

          <h3 className="relative serif text-white text-2xl md:text-4xl leading-tight max-w-3xl">{d.featured.title}</h3>

          <p className="relative mt-5 text-white/70 text-[15px] leading-relaxed max-w-2xl">
            {parts.map((p, i) => i % 2 === 1 ? <span key={i} className="text-white font-medium">{p}</span> : <span key={i}>{p}</span>)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Featured;
