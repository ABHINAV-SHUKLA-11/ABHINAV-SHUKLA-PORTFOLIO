
import React from 'react';
import { portfolioData as d } from '../mock';

const Footer = () => {
  return (
    <footer className="relative border-t border-white/5 py-10 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="serif text-white/80 text-lg">
          {d.firstName}<span className="text-blue-400">.</span>
        </div>
        <div className="text-[11px] tracking-[0.3em] text-white/40">
          © {new Date().getFullYear()} — CRAFTED WITH INTENT
        </div>
        <div className="text-[11px] tracking-[0.25em] text-white/40 flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400"></span>
          </span>
          AVAILABLE FOR 2026 ROLES
        </div>
      </div>
    </footer>
  );
};

export default Footer;
