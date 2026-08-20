import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import { visibleProducts, FOUNDER_NAME, COMPANY_NAME } from "@/config/site";

export default function Home() {
  const products = visibleProducts();

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0B0F13] text-white">
        <div className="container-keep py-24 md:py-36">
          <p className="font-mono-label text-white/50">{COMPANY_NAME}</p>
          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl">
            Compliance software for trades that can't afford to guess.
          </h1>
          <p className="mt-7 max-w-2xl text-lg text-white/70 leading-relaxed">
            Keepsuite builds focused record-keeping tools for UK contractors whose workforce credentials expire — and who get asked to prove it.
          </p>
          <a
            href="#products"
            className="mt-10 inline-flex items-center bg-[#0052FF] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0040CC] transition-colors"
          >
            See the Keep suite ↓
          </a>
        </div>
      </section>

      {/* The problem */}
      <section className="bg-background">
        <div className="container-keep py-20 md:py-28">
          <Reveal>
            <p className="font-mono-label text-slate-500">The problem</p>
          </Reveal>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {[
              {
                n: "01",
                t: "Credentials expire quietly.",
                d: "A card, a licence, an insurance policy — each has a date that passes without a knock on the door.",
              },
              {
                n: "02",
                t: "Proof gets asked for at the worst moment.",
                d: "During an audit, on site, under pressure — not on a quiet Tuesday when there's time to dig.",
              },
              {
                n: "03",
                t: "Spreadsheets and folders don't send warnings.",
                d: "They hold data, but they don't watch it. By the time you notice, it's already lapsed.",
              },
            ].map((b) => (
              <Reveal key={b.n} className="border-t border-slate-300 pt-6">
                <span className="font-mono-label text-[#0052FF]">{b.n}</span>
                <h3 className="mt-3 text-xl font-bold text-slate-900">{b.t}</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{b.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section id="products" className="bg-slate-50 border-y border-slate-200 scroll-mt-16">
        <div className="container-keep py-20 md:py-28">
          <Reveal>
            <p className="font-mono-label text-slate-500">The Keep suite</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-bold text-slate-900 md:text-4xl">
              One product per trade. Each one a Keep.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {products.map((p) => (
              <Reveal key={p.name}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* One suite, one engine */}
      <section className="bg-background">
        <div className="container-keep py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-2 md:items-start">
            <Reveal>
              <p className="font-mono-label text-slate-500">One suite, one engine</p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
                Every Keepsuite product is a "Keep."
              </h2>
            </Reveal>
            <Reveal>
              <div className="prose-keep space-y-5 text-slate-600">
                <p>
                  They share one engine — the same document tracking, the same expiry logic, the same audit reporting — configured for the credentials that specific trade actually carries.
                </p>
                <p>
                  That's why each product feels purpose-built rather than generic, and why a firm working across two trades will eventually be able to run both from one account.
                </p>
                <div className="border-l-2 border-[#0052FF] pl-4">
                  <p className="font-mono-label text-slate-500">On the roadmap</p>
                  <p className="mt-2 text-sm text-slate-600">
                    Combined multi-trade accounts are on the roadmap, not available today.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Closing band */}
      <section className="bg-[#0B0F13] text-white">
        <div className="container-keep py-16">
          <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <p className="max-w-2xl text-lg text-white/80">
              Keepsuite is built by {FOUNDER_NAME} and a small team that ships one product at a time — only once the previous one has real customers using it.
            </p>
            <Link
              to="/about"
              className="inline-flex shrink-0 items-center border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white hover:text-[#0B0F13] transition-colors"
            >
              Why we exist →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}