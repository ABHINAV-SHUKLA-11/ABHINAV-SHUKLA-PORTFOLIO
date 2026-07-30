import React from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { portfolioData as d } from '../mock';

const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen pt-32 md:pt-40 pb-20 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-3 text-[11px] tracking-[0.3em] text-white/50 mb-10">
          <span className="w-8 h-[1px] bg-white/30" />
          <span>HELLO THERE</span>
        </div>

        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-7">
            <p className="serif italic text-white/70 text-xl md:text-2xl mb-6">Welcome.</p>
            <div className="text-[11px] tracking-[0.3em] text-white/50 mb-6">
              {d.firstName.toUpperCase()} SHUKLA · PORTFOLIO
            </div>
            <div className="text-[11px] tracking-[0.3em] text-blue-300/80 mb-8">
              DATA SCIENCE · AI/ML · CLOUD
            </div>

            <h1 className="serif text-white text-[54px] leading-[0.95] md:text-[112px] md:leading-[0.9] tracking-tight">
              {d.firstName}<br />
              Shukla<span className="text-blue-400">.</span>
            </h1>

            <p className="mt-10 max-w-xl text-white/70 text-[15px] leading-relaxed">
              I build <span className="text-white font-medium">production AI agents</span>,{' '}
              <span className="text-white font-medium">ML pipelines</span>, and{' '}
              <span className="text-white font-medium">cloud-deployed data systems</span>
              &nbsp;— turning models into things people actually use.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-10">
              <a href="#work" className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-blue-200 transition-colors">
                See selected work
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a href={d.github} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 text-white/90 text-sm hover:border-white/40 hover:bg-white/5 transition-colors">
                GitHub
                <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-12 text-[12px] text-white/50">
              <span className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5" />{d.location}</span>
              <span className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                {d.availability}
              </span>
            </div>
          </div>

          <div className="md:col-span-5 relative mt-10 md:mt-0">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-6 dot-grid opacity-60 pointer-events-none" />
              <div className="relative rounded-[8px] overflow-hidden border border-white/10 shadow-[0_30px_80px_-20px_rgba(60,100,220,0.35)]">
                <img src={d.portrait} alt={d.name} className="w-full h-[520px] object-cover grayscale-[15%]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-4 left-4 right-4 flex items-center justify-between text-[10px] tracking-[0.25em] text-white/40 px-2">
                <span>— ABHINAV / 01</span>
                <span>KANPUR · IN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
