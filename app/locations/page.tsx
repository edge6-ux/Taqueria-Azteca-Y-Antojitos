import Image from "next/image";
import Link from "next/link";

const hours = [
  { days: "Monday – Thursday", time: "10:00 AM – 9:00 PM"  },
  { days: "Friday – Saturday",  time: "10:00 AM – 10:00 PM" },
  { days: "Sunday",             time: "11:00 AM – 8:00 PM"  },
];

export default function LocationsPage() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* Hero */}
      <section className="relative w-full h-[320px] md:h-[440px] overflow-hidden">
        <Image src="/hero7.jpg" alt="Locations hero" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pb-8">
          <p className="text-[#1fa39e] text-[10px] uppercase tracking-[0.22em] font-sans font-semibold mb-4">
            Find Us
          </p>
          <h1
            className="text-5xl md:text-7xl font-bold font-serif text-white"
            style={{ textShadow: "0 0 10px rgba(31,163,158,0.9), 0 0 25px rgba(31,163,158,0.6), 0 0 50px rgba(31,163,158,0.3)", WebkitTextStroke: "1px rgba(31,163,158,0.7)" }}
          >
            Locations
          </h1>
          <div className="w-10 h-[2px] bg-[#1fa39e] mx-auto mt-5" />
        </div>
      </section>

      {/* Main content */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 lg:px-12 pb-16 md:pb-28">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">

          {/* Hours card */}
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 md:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-full bg-[#1fa39e]/10 flex items-center justify-center">
                <span className="text-[#1fa39e] text-base leading-none">◷</span>
              </div>
              <h2 className="text-xl font-bold font-serif text-white">
                Hours
              </h2>
            </div>

            <div className="flex flex-col divide-y divide-white/[0.06]">
              {hours.map(({ days, time }) => (
                <div key={days} className="flex items-center justify-between py-4">
                  <span className="text-white/70 font-sans text-sm">{days}</span>
                  <span className="text-[#1fa39e] font-sans font-semibold text-sm tabular-nums">{time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Location card */}
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 md:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-full bg-[#1fa39e]/10 flex items-center justify-center">
                <span className="text-[#1fa39e] text-base leading-none">◉</span>
              </div>
              <h2 className="text-xl font-bold font-serif text-white">
                Where We Are
              </h2>
            </div>
            <p className="text-white/70 font-sans text-sm leading-relaxed mb-2">
              Gainesville Supermarket
            </p>
            <p className="text-white/40 font-sans text-sm mb-6">
              Open Wednesday – Sunday
            </p>
            <p className="text-white/55 font-sans text-sm leading-relaxed">
              We&apos;re a family-owned taco truck bringing authentic Mexican street food to the Gainesville community. Come find us!
            </p>
            <div className="mt-6 pt-6 border-t border-white/[0.06]">
              <p className="text-[10px] text-white/30 font-sans font-semibold uppercase tracking-[0.2em] mb-2">
                Phone
              </p>
              <a
                href="tel:+13523179557"
                className="text-white font-sans text-base font-semibold hover:text-[#1fa39e] transition-colors"
              >
                (352) 317-9557
              </a>
            </div>
          </div>

        </div>

        {/* Image + social banner */}
        <div className="mt-8 relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/hero4.jpg"
              alt="Taqueria Azteca"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between px-8 md:px-12 py-10 md:py-0 md:h-72 gap-6">
            <div>
              <p className="text-white font-serif font-bold text-xl md:text-2xl">
                Always know where we&apos;re at
              </p>
              <p className="text-white/50 font-sans text-sm mt-2">
                Follow us on Instagram for real-time location drops and daily specials.
              </p>
            </div>
            <a
              href="#"
              className="shrink-0 bg-[#1fa39e] text-white px-7 py-3 rounded-full font-sans font-semibold text-sm hover:bg-[#25c5bf] transition-colors duration-200"
            >
              Follow Us
            </a>
          </div>
        </div>

      </section>

    </div>
  );
}
