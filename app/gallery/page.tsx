import Image from "next/image";

const images = [
  { src: "/taco1.jpg",     alt: "Tacos",            tall: true  },
  { src: "/elote.png",     alt: "Elote",             tall: false },
  { src: "/corn1.png",     alt: "Street corn",      tall: false },
  { src: "/soup.jpg",      alt: "Birria soup",       tall: false },
  { src: "/soup1.jpg",     alt: "Soup",              tall: true  },
  { src: "/nachos.png",    alt: "Nachos",            tall: false },
  { src: "/torta.png",     alt: "Torta",             tall: false },
  { src: "/tostada.png",   alt: "Tostada",           tall: false },
  { src: "/gal1.jpg",      alt: "Fresh tacos",       tall: true  },
];

export default function GalleryPage() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* Hero */}
      <section className="relative w-full h-[320px] md:h-[440px] overflow-hidden">
        <Image src="/hero7.jpg" alt="Gallery hero" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pb-8">
<h1
            className="text-5xl md:text-6xl font-bold font-serif text-white"
            style={{ textShadow: "0 0 10px rgba(31,163,158,0.9), 0 0 25px rgba(31,163,158,0.6), 0 0 50px rgba(31,163,158,0.3)", WebkitTextStroke: "1px rgba(31,163,158,0.7)" }}
          >
            Gallery
          </h1>
          <div className="w-10 h-[2px] bg-[#1fa39e] mx-auto mt-5" />
        </div>
      </section>


      {/* Masonry-style grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pb-16 md:pb-28">
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 md:gap-5 space-y-4 md:space-y-5">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative w-full overflow-hidden rounded-2xl group cursor-pointer break-inside-avoid ${
                img.tall ? "h-80 md:h-96" : "h-56 md:h-64"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              {/* Default subtle gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-white font-sans text-sm font-semibold tracking-wide">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
