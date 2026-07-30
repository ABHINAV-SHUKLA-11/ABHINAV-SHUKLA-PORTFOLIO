
import React from 'react';
import { portfolioData as d } from '../mock';

const About = () => {
  const parts = d.about.text.split('**');
  return (
    <section id="about" className="relative py-20 md:py-28 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-3 text-[11px] tracking-[0.3em] text-white/50 mb-10">
          <span className="text-blue-400">{d.about.number}</span>
          <span className="w-8 h-[1px] bg-white/30" />
          <span>{d.about.label.toUpperCase()}</span>
        </div>

        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-7">
            <p className="serif text-white text-3xl md:text-5xl leading-[1.15] tracking-tight">
              {parts.map((p, i) => i % 2 === 1 ? <span key={i} className="text-blue-300">{p}</span> : <span key={i}>{p}</span>)}
            </p>
          </div>

          <div className="md:col-span-5 grid grid-cols-3 gap-4 self-end">
            {d.about.stats.map((s, i) => (
              <div key={i} className="border-t border-white/10 pt-5">
                <div className="serif text-blue-300 text-3xl md:text-4xl">{s.value}</div>
                <div className="text-[12px] text-white/50 mt-2 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
