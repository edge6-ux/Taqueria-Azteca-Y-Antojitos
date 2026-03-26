import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/[0.08]">

      {/* Teal accent line */}
      <div className="h-[2px] bg-[#1fa39e] w-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="flex flex-col gap-5 md:col-span-1">
          <Image
            src="/logo6.png"
            alt="Taqueria Azteca"
            width={130}
            height={52}
            className="object-contain w-32"
          />
          <p className="text-sm text-white/50 leading-relaxed max-w-xs">
            Authentic Mexican flavors made fresh daily. Family recipes, bold spices, and good vibes — since day one.
          </p>
        </div>

        {/* Navigate */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[10px] text-white font-sans font-bold uppercase tracking-[0.2em] mb-1">
            Navigate
          </h4>
          {[
            { label: "Menu",      href: "/menu" },
            { label: "Gallery",   href: "/gallery" },
            { label: "Locations", href: "/locations" },
            { label: "Contact",   href: "/contact" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-white/50 hover:text-[#1fa39e] transition-colors font-sans"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Hours */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[10px] text-white font-sans font-bold uppercase tracking-[0.2em] mb-1">
            Hours
          </h4>
          <div className="flex justify-between text-sm font-sans"><span className="text-white/50">Mon – Thu</span><span className="text-white/70">10am – 9pm</span></div>
          <div className="h-px bg-white/[0.06]" />
          <div className="flex justify-between text-sm font-sans"><span className="text-white/50">Fri – Sat</span><span className="text-white/70">10am – 10pm</span></div>
          <div className="h-px bg-white/[0.06]" />
          <div className="flex justify-between text-sm font-sans"><span className="text-white/50">Sunday</span><span className="text-white/70">11am – 8pm</span></div>
        </div>

        {/* Contact & Social */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[10px] text-white font-sans font-bold uppercase tracking-[0.2em] mb-1">
            Connect
          </h4>
          <p className="text-sm text-white/50 font-sans">
            Gainesville Supermarket<br />
            Open Wed – Sun
          </p>
          <p className="text-sm text-white/70 font-sans mt-1">(352) 317-9557</p>
          <div className="flex gap-3 mt-2">
            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#1fa39e] hover:border-[#1fa39e]/40 transition-all duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61567194925943"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#1fa39e] hover:border-[#1fa39e]/40 transition-all duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06] py-5 text-center text-xs text-white/30 font-sans tracking-wide">
        © {new Date().getFullYear()} Taqueria Azteca y Antojitos. All rights reserved.
      </div>

    </footer>
  );
}
