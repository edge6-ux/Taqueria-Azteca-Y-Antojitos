"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { label: "Menu",      href: "/menu" },
  { label: "Gallery",   href: "/gallery" },
  { label: "Locations", href: "/locations" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname        = usePathname();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/[0.06]"
    >
      {/* Teal top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#1fa39e]" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-[56px]">

        {/* Brand */}
        <Link href="/" className="shrink-0 flex flex-col leading-none group">
          <span className="text-white uppercase tracking-[0.18em] text-[15px] transition-all duration-300 group-hover:[text-shadow:0_0_12px_rgba(31,163,158,0.9),0_0_30px_rgba(31,163,158,0.5)]" style={{ fontFamily: "var(--font-bebas)" }}>
            Taqueria Azteca
          </span>
          <span className="text-[#1fa39e] uppercase tracking-[0.22em] text-[9px] mt-0.5 transition-all duration-300 group-hover:[text-shadow:0_0_10px_rgba(31,163,158,1),0_0_24px_rgba(31,163,158,0.6)]" style={{ fontFamily: "var(--font-bebas)" }}>
            Y Antojitos
          </span>
        </Link>

        {/* Desktop nav — centered */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[11px] font-sans font-semibold uppercase tracking-[0.18em] transition-colors duration-200 ${
                pathname === l.href
                  ? "text-[#1fa39e]"
                  : "text-white/50 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block shrink-0">
          <Link
            href="/contact"
            className="text-[10px] font-sans font-bold uppercase tracking-[0.18em] bg-[#1fa39e] text-white px-5 py-2 rounded-full hover:bg-[#25c5bf] transition-colors duration-200"
          >
            Contact
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-[5px] p-2 z-50"
        >
          <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[6.5px]" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile slide-down */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
        <nav className="flex flex-col px-6 pt-2 pb-8 gap-1 border-t border-white/[0.08] bg-black/98 backdrop-blur-md">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`text-[12px] font-sans font-semibold uppercase tracking-[0.18em] py-3 border-b border-white/[0.06] transition-colors ${
                pathname === l.href ? "text-[#1fa39e]" : "text-white/60 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-5 self-start text-[11px] font-sans font-bold uppercase tracking-[0.18em] bg-[#1fa39e] text-white px-6 py-2.5 rounded-full"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
