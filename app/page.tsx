import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-black text-white">

      {/* ── Full-Viewport Hero ─────────────────────────────────────── */}
      <section className="relative h-screen min-h-[640px] flex items-end overflow-hidden">
        <Image
          src="/hero8.png"
          alt="Taqueria Azteca"
          fill
          priority
          className="object-cover"
        />
        {/* Gradient: heavy left + bottom fade (stronger on mobile for readability) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/40 md:from-black/90 md:via-black/50 md:to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        {/* Bottom-left text block */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-28">
          <p className="animate-fade-up text-[#1fa39e] text-[10px] uppercase tracking-[0.28em] font-sans font-semibold mb-4">
            Gainesville, FL
          </p>
          <h1
            className="animate-fade-up-delay-1 text-[clamp(3.5rem,12vw,9rem)] text-white leading-[0.88] tracking-tight"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            Bold Flavor.<br />
            <span className="text-[#1fa39e]">Real Tradition.</span>
          </h1>
          <div className="animate-fade-up-delay-2 flex items-center gap-6 mt-10 flex-wrap">
            <Link
              href="/menu"
              className="bg-[#1fa39e] text-white px-9 py-4 text-[11px] font-sans font-bold uppercase tracking-[0.2em] hover:bg-[#25c5bf] transition-colors duration-200"
            >
              View Menu
            </Link>
            <Link
              href="/locations"
              className="text-white/60 text-[11px] font-sans font-semibold uppercase tracking-[0.2em] hover:text-white transition-colors flex items-center gap-2"
            >
              Find Us <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        {/* Vertical accent text — right side */}
        <div className="hidden lg:flex absolute right-10 bottom-28 flex-col items-center gap-3 z-10">
          <div className="w-px h-14 bg-white/20" />
          <p
            className="text-white/30 text-[9px] uppercase tracking-[0.3em] font-sans"
            style={{ writingMode: "vertical-rl" }}
          >
            Authentic Mexican Street Food
          </p>
          <div className="w-px h-14 bg-white/20" />
        </div>
      </section>

      {/* ── Our Story ─────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">

          <div>
            <p className="text-[#1fa39e] text-[10px] uppercase tracking-[0.22em] font-sans font-semibold mb-5">
              Our Story
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-white leading-tight" style={{ textShadow: "0 0 10px rgba(31,163,158,0.9), 0 0 25px rgba(31,163,158,0.6), 0 0 50px rgba(31,163,158,0.3)", WebkitTextStroke: "1px rgba(31,163,158,0.7)" }}>
              Where Every Bite<br />Tells a Story
            </h2>
            <div className="w-10 h-[2px] bg-[#1fa39e] mt-6 mb-7" />
            <p className="text-white/55 font-sans text-base leading-relaxed mb-5">
              Taqueria Azteca was born from a passion for real Mexican street food —
              crispy hand-pressed tortillas, slow-braised meats, and salsas made
              from scratch every morning.
            </p>
            <p className="text-white/55 font-sans text-base leading-relaxed">
              Whether you&apos;re grabbing lunch or feeding a crowd, we bring the
              heart of Mexico to your table.
            </p>
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 mt-9 text-[#1fa39e] font-sans font-semibold text-sm tracking-wide hover:gap-3 transition-all duration-200"
            >
              Explore our menu <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="relative h-[380px] md:h-[480px] rounded-2xl overflow-hidden">
            <Image src="/about.jpg" alt="About Taqueria Azteca" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
          </div>

        </div>
      </section>

      {/* ── Photo Grid ────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pb-16 md:pb-28">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { src: "/hero5.jpg",  alt: "Tacos",        title: "Tacos",        desc: "Hand-pressed corn tortillas loaded with slow-braised meats and fresh house salsas." },
            { src: "/corn1.png",  alt: "Street corn",  title: "Antojitos",    desc: "Street-style snacks — chicharron preparado, elote, nachos, and more." },
            { src: "/nachos.png", alt: "Nachos",       title: "Drinks & Sides", desc: "Aguas frescas, Jarritos, and refreshing classics to round out your meal." },
          ].map((img, i) => (
            <Link key={i} href="/menu" className="group block overflow-hidden rounded-2xl">
              <div className="relative h-52 md:h-64 overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
              </div>
              <div className="bg-white/[0.04] border-x border-b border-white/[0.08] px-4 py-4">
                <h3 className="text-white font-serif font-bold text-base mb-1">{img.title}</h3>
                <p className="text-white/45 font-sans text-xs leading-relaxed hidden md:block">{img.desc}</p>
              </div>
            </Link>
          ))}
          {/* Mobile-only 4th card for even 2x2 grid */}
          <Link href="/menu" className="group block overflow-hidden rounded-2xl md:hidden">
            <div className="relative h-52 overflow-hidden">
              <Image
                src="/tostada.png"
                alt="Tostada"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
            </div>
            <div className="bg-white/[0.04] border-x border-b border-white/[0.08] px-4 py-4">
              <h3 className="text-white font-serif font-bold text-base">Tortas</h3>
            </div>
          </Link>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pb-16 md:pb-28">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="hidden md:block">
            <Image
              src="/logo6.png"
              alt="Come hungry"
              fill
              className="object-contain scale-50"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />
          <div className="relative z-10 px-8 md:px-14 py-16 md:py-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="text-[#1fa39e] text-[10px] uppercase tracking-[0.22em] font-sans font-semibold mb-4">
                Family Owned
              </p>
              <h3 className="text-3xl md:text-4xl lg:text-6xl font-serif font-bold text-white leading-tight">
                Come hungry.<br />
                <span className="text-[#1fa39e]">Leave happy.</span>
              </h3>
            </div>
            <div className="flex gap-4 flex-wrap shrink-0">
              <Link
                href="/gallery"
                className="bg-[#1fa39e] text-white px-8 py-3.5 rounded-full font-sans font-semibold text-sm hover:bg-[#25c5bf] transition-colors duration-200"
              >
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
