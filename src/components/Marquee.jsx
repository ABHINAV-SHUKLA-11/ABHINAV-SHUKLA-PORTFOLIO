import React from 'react';
import { portfolioData as d } from '../mock';

const Marquee = () => {
  const items = [...d.marquee, ...d.marquee, ...d.marquee];
  return (
    <div className="relative border-y border-white/5 py-6 overflow-hidden bg-white/[0.015]">
      <div className="marquee-track">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-10 shrink-0">
            <span className="serif italic text-white/80 text-2xl md:text-3xl whitespace-nowrap">{item}</span>
            <svg width="16" height="16" viewBox="0 0 16 16" className="shrink-0">
              <path d="M8 0 L10 6 L16 8 L10 10 L8 16 L6 10 L0 8 L6 6 Z" fill="#5b8bff" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
