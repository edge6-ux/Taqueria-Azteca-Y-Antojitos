export default function ContactPage() {
  return (
    <div className="bg-black text-white min-h-screen pt-[72px]">

      {/* Page Header */}
      <div className="max-w-3xl mx-auto text-center px-4 md:px-8 pt-16 md:pt-20 pb-14">
        <p className="text-[#1fa39e] text-[10px] uppercase tracking-[0.22em] font-sans font-semibold mb-4">
          Get in Touch
        </p>
        <h1 className="text-5xl md:text-6xl font-bold font-serif text-white">
          Contact Us
        </h1>
        <div className="w-10 h-[2px] bg-[#1fa39e] mx-auto mt-6 mb-5" />
        <p className="text-white/50 font-sans text-base">
          Questions, catering inquiries, or just want to say hi — we&apos;d love to hear from you.
        </p>
      </div>

      {/* Two-column layout */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 lg:px-12 pb-16 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-start">

          {/* Form */}
          <form className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-sans font-bold uppercase tracking-[0.18em] text-white/50">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="bg-white/[0.04] border border-white/[0.10] rounded-xl px-4 py-3.5 text-sm font-sans text-white placeholder:text-white/25 focus:outline-none focus:border-[#1fa39e]/50 focus:ring-1 focus:ring-[#1fa39e]/30 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-sans font-bold uppercase tracking-[0.18em] text-white/50">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="bg-white/[0.04] border border-white/[0.10] rounded-xl px-4 py-3.5 text-sm font-sans text-white placeholder:text-white/25 focus:outline-none focus:border-[#1fa39e]/50 focus:ring-1 focus:ring-[#1fa39e]/30 transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-sans font-bold uppercase tracking-[0.18em] text-white/50">
                Subject
              </label>
              <input
                type="text"
                placeholder="How can we help?"
                className="bg-white/[0.04] border border-white/[0.10] rounded-xl px-4 py-3.5 text-sm font-sans text-white placeholder:text-white/25 focus:outline-none focus:border-[#1fa39e]/50 focus:ring-1 focus:ring-[#1fa39e]/30 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-sans font-bold uppercase tracking-[0.18em] text-white/50">
                Message
              </label>
              <textarea
                rows={6}
                placeholder="Tell us more..."
                className="bg-white/[0.04] border border-white/[0.10] rounded-xl px-4 py-3.5 text-sm font-sans text-white placeholder:text-white/25 focus:outline-none focus:border-[#1fa39e]/50 focus:ring-1 focus:ring-[#1fa39e]/30 transition-colors resize-none"
              />
            </div>

            <div className="flex items-center gap-4 pt-1">
              <button
                type="submit"
                className="bg-[#1fa39e] text-white px-8 py-3.5 rounded-full font-sans font-semibold text-sm hover:bg-[#25c5bf] transition-colors duration-200"
              >
                Send Message
              </button>
              <span className="text-white/25 font-sans text-xs">We&apos;ll reply as soon as we can.</span>
            </div>
          </form>

          {/* Info sidebar */}
          <div className="flex flex-col gap-4 md:w-64 shrink-0">

            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
              <p className="text-[10px] text-[#1fa39e] font-sans font-bold uppercase tracking-[0.2em] mb-3">Phone</p>
              <a
                href="tel:+13523179557"
                className="text-white font-sans font-semibold text-base hover:text-[#1fa39e] transition-colors"
              >
                (352) 317-9557
              </a>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
              <p className="text-[10px] text-[#1fa39e] font-sans font-bold uppercase tracking-[0.2em] mb-3">Hours</p>
              <div className="flex flex-col gap-1.5">
                <p className="text-white/60 font-sans text-sm">Mon – Thu: 10am – 9pm</p>
                <p className="text-white/60 font-sans text-sm">Fri – Sat: 10am – 10pm</p>
                <p className="text-white/60 font-sans text-sm">Sunday: 11am – 8pm</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
              <p className="text-[10px] text-[#1fa39e] font-sans font-bold uppercase tracking-[0.2em] mb-3">Location</p>
              <p className="text-white/60 font-sans text-sm leading-relaxed">
                Gainesville Supermarket<br />
                Open Wed – Sun
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
              <p className="text-[10px] text-[#1fa39e] font-sans font-bold uppercase tracking-[0.2em] mb-3">Follow Us</p>
              <div className="flex gap-4">
                <a href="#" className="text-sm text-white/50 font-sans hover:text-[#1fa39e] transition-colors">Instagram</a>
                <a href="#" className="text-sm text-white/50 font-sans hover:text-[#1fa39e] transition-colors">Facebook</a>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
