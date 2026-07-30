
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData as d } from '../mock';

const Work = () => {
  return (
    <section id="work" className="relative py-20 md:py-28 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-3 text-[11px] tracking-[0.3em] text-white/50 mb-6">
          <span className="text-blue-400">02</span>
          <span className="w-8 h-[1px] bg-white/30" />
          <span>SELECTED WORK</span>
        </div>
        <h2 className="serif text-white text-4xl md:text-6xl tracking-tight mb-14">
          Things I&rsquo;ve shipped<span className="text-blue-400">.</span>
        </h2>

        <div className="space-y-6">
          {d.projects.map((p, i) => (
            <article key={i} className="project-card group relative rounded-2xl border border-white/10 bg-white/[0.01] p-8 md:p-10">
              <div className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-8">
                  <div className="flex items-center gap-3 text-[11px] tracking-[0.2em] text-white/40 mb-4">
                    <span className="text-blue-300">{p.tag}</span>
                    <span>•</span>
                    <span>{p.year}</span>
                  </div>
                  <h3 className="serif text-white text-3xl md:text-4xl tracking-tight mb-4 group-hover:text-blue-100 transition-colors">{p.title}</h3>
                  <p className="text-white/70 text-[15px] leading-relaxed max-w-2xl">{p.description}</p>

                  <ul className="mt-6 space-y-2">
                    {p.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3 text-[13px] text-white/60">
                        <span className="mt-2 w-1 h-1 rounded-full bg-blue-400 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-4 flex flex-col justify-between gap-6">
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((s, k) => (
                      <span key={k} className="text-[11px] tracking-wide px-2.5 py-1 rounded-full border border-white/10 text-white/70 bg-white/[0.02]">{s}</span>
                    ))}
                  </div>

                  {p.links.length > 0 && (
                    <div className="flex flex-wrap gap-3">
                      {p.links.map((l, m) => (
                        <a key={m} href={l.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-[12px] text-white/80 hover:text-blue-300 link-underline">
                          {l.label}
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
