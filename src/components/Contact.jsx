
import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { portfolioData as d } from '../mock';

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 md:py-32 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-3 text-[11px] tracking-[0.3em] text-white/50 mb-6">
          <span className="text-blue-400">05</span>
          <span className="w-8 h-[1px] bg-white/30" />
          <span>CONTACT</span>
        </div>

        <h2 className="serif text-white text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] max-w-4xl">
          Let&rsquo;s build&nbsp;
          <span className="text-blue-300 italic">something live</span>
          <span className="text-blue-400">.</span>
        </h2>

        <div className="mt-14 grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <a href={`mailto:${d.email}`} className="group inline-flex items-center gap-3 text-white text-lg md:text-2xl link-underline">
              <Mail className="w-5 h-5 text-blue-300" />
              {d.email}
              <ArrowUpRight className="w-5 h-5 opacity-60 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href={d.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/15 text-white/80 text-[13px] hover:border-white/40 hover:bg-white/5">
                LinkedIn <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a href={d.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/15 text-white/80 text-[13px] hover:border-white/40 hover:bg-white/5">
                GitHub <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="md:col-span-5 text-white/50 text-[13px] md:text-right">{d.fullLocation}</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
