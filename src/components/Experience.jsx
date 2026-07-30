
import React from 'react';
import { portfolioData as d } from '../mock';

const Experience = () => {
  return (
    <section id="experience" className="relative py-20 md:py-28 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-3 text-[11px] tracking-[0.3em] text-white/50 mb-6">
          <span className="text-blue-400">03</span>
          <span className="w-8 h-[1px] bg-white/30" />
          <span>EXPERIENCE</span>
        </div>
        <h2 className="serif text-white text-4xl md:text-6xl tracking-tight mb-14">
          Where I&rsquo;ve been<span className="text-blue-400">.</span>
        </h2>

        <div className="relative border-l border-white/10 pl-8 md:pl-12 space-y-14">
          {d.experience.map((e, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-[42px] md:-left-[54px] top-2 w-3 h-3 rounded-full bg-blue-400/80 ring-4 ring-blue-500/10" />
              <div className="grid md:grid-cols-12 gap-6">
                <div className="md:col-span-4">
                  <h4 className="serif text-white text-2xl md:text-3xl">{e.company}</h4>
                  <div className="text-[12px] text-white/50 mt-2 tracking-wide">
                    {e.period}{e.location && <span> · {e.location}</span>}
                  </div>
                </div>
                <div className="md:col-span-8">
                  <div className="text-[13px] text-blue-300 mb-3 tracking-wide">{e.role}</div>
                  <ul className="space-y-2">
                    {e.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3 text-[14px] text-white/70 leading-relaxed">
                        <span className="mt-2.5 w-4 h-[1px] bg-white/30 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
