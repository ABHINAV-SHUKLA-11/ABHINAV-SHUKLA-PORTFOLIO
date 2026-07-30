
import React, { useEffect, useState } from 'react';

const nav = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? 'backdrop-blur-xl bg-[#05070c]/60 border-b border-white/5' : ''}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-6 flex items-center justify-between">
        <a href="#top" className="serif text-xl md:text-2xl text-white tracking-tight">
          Abhinav<span className="text-blue-400">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-[13px] text-white/70 hover:text-white link-underline transition-colors">
              {n.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="hidden md:inline-flex relative items-center text-[11px] tracking-[0.25em] text-white/90 hover:text-white pr-8">
          LET&rsquo;S TALK
          <svg className="arc-svg" viewBox="0 0 60 60" fill="none">
            <path d="M55 12 C55 40, 30 55, 8 45" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
            <path d="M12 42 L8 45 L11 50" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" />
          </svg>
        </a>

        <button className="md:hidden text-white/80" onClick={() => setOpen(!open)} aria-label="Menu">
          <div className="w-6 h-[1px] bg-white/80 mb-[6px]" />
          <div className="w-6 h-[1px] bg-white/80" />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#05070c]/95 backdrop-blur-xl border-t border-white/5 px-6 py-6 space-y-4">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block text-white/80 text-sm">
              {n.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="block text-blue-400 text-sm tracking-widest">
            LET&rsquo;S TALK
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
