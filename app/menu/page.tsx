import Image from "next/image";

type MenuItem = { name: string; description?: string; price: string };
type Category = { title: string; subtitle?: string; note?: string; items: MenuItem[] };

const categories: Category[] = [
  {
    title: "Tacos",
    note: "fresh hand-pressed tortillas",
    items: [
      { name: "Carne Asada",  description: "Tender grilled steak, bright onions & fresh cilantro",                                                       price: "$13"    },
      { name: "Pollo",        description: "Juicy seasoned grilled chicken with bright pico de gallo",                                                   price: "$13"    },
      { name: "Campechano",   description: "Bold mix of juicy grilled steak and savory Mexican sausage",                                                 price: "$15"    },
      { name: "Chorizo",      description: "Smoky seasoned Mexican sausage, bright onions & fresh cilantro",                                             price: "$13"    },
      { name: "Al Pastor",    description: "Chili-marinated pork, sweet roasted pineapple & bright cilantro",                                            price: "$13"    },
    ],
  },
  {
    title: "Tortas",
    subtitle: "Mexican Sandwiches",
    items: [
      { name: "Carne Asada",  description: "Tender grilled steak, melted cheese & crisp veggies on a warm toasted bolillo",                             price: "$10.99" },
      { name: "Chorizo",      description: "Smoky Mexican sausage, melted cheese & crisp veggies on toasted bolillo",                                   price: "$10.99" },
      { name: "Campechana",   description: "Juicy grilled steak & smoky Mexican sausage piled high on a toasted bolillo",                               price: "$12.99" },
      { name: "Azteca",       description: "Marinated pork, grilled steak, sweet roasted pineapple & melted cheese on toasted bolillo",                 price: "$12.99" },
      { name: "Al Pastor",    description: "Tender chili-marinated pork, melted cheese & sweet pineapple on a warm toasted bolillo",                    price: "$10.99" },
    ],
  },
  {
    title: "Antojitos",
    items: [
      { name: "Chicharron Preparado", price: "$9.99"  },
      { name: "Street Corn",          price: "$4.50"  },
      { name: "Esquites",             price: "$6.50"  },
      { name: "Takiesquites",         price: "$7.00"  },
      { name: "Tosti Loco",           price: "$8.99"  },
    ],
  },
  {
    title: "Drinks",
    items: [
      { name: "Aguas Frescas",       price: "$6.50" },
      { name: "Jarritos",            price: "$3.50" },
      { name: "Water Bottle",        price: "$1.50" },
      { name: "Coca-Cola (Can)",     price: "$2.00" },
      { name: "Mexican Bottle Coke", price: "$3.50" },
    ],
  },
];

export default function MenuPage() {
  return (
    <div className="bg-black text-white min-h-screen pt-[72px]">

      {/* Page Hero */}
      <div className="relative w-full h-[280px] md:h-[380px] overflow-hidden">
        <Image src="/hero7.jpg" alt="Our menu" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pb-6">
          <p className="text-[#1fa39e] text-[10px] uppercase tracking-[0.22em] font-sans font-semibold mb-4">
            What We Serve
          </p>
          <h1
            className="text-5xl md:text-7xl font-bold font-serif text-white"
            style={{ textShadow: "0 0 10px rgba(31,163,158,0.9), 0 0 25px rgba(31,163,158,0.6), 0 0 50px rgba(31,163,158,0.3)", WebkitTextStroke: "1px rgba(31,163,158,0.7)" }}
          >
            Menu
          </h1>
          <p className="mt-4 text-white/55 font-sans text-sm md:text-base italic">
            Authentic Mexican street food made fresh daily.
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-3xl mx-auto px-6 md:px-8 pb-16 md:pb-28 pt-16 flex flex-col gap-16">
        {categories.map((cat) => (
          <div key={cat.title}>

            {/* Category heading */}
            <div className="mb-6">
              <div className="flex items-baseline gap-3 flex-wrap mb-4">
                <span className="text-[#1fa39e] text-[10px] font-sans font-bold uppercase tracking-[0.22em] leading-none relative top-px">
                  ◆
                </span>
                <h2 className="text-2xl md:text-3xl font-bold font-serif text-white">
                  {cat.title}
                </h2>
                {cat.subtitle && (
                  <span className="text-[#1fa39e] text-[10px] font-sans font-semibold uppercase tracking-[0.2em]">
                    {cat.subtitle}
                  </span>
                )}
                {cat.note && (
                  <span className="text-white/30 font-serif italic text-sm">
                    {cat.note}
                  </span>
                )}
              </div>
              <div className="h-px bg-gradient-to-r from-[#1fa39e]/40 via-white/10 to-transparent" />
            </div>

            {/* Items */}
            <div className="flex flex-col divide-y divide-white/[0.06]">
              {cat.items.map((item) => (
                <div key={item.name} className="flex items-start justify-between gap-4 md:gap-8 py-5 group">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-white font-sans font-semibold text-[15px] leading-snug group-hover:text-white transition-colors">
                      {item.name}
                    </span>
                    {item.description && (
                      <span className="text-white/40 font-sans text-sm leading-relaxed">
                        {item.description}
                      </span>
                    )}
                  </div>
                  <span className="text-[#1fa39e] font-sans font-bold text-[15px] shrink-0 tabular-nums">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
