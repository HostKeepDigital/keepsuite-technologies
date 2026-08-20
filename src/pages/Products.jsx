import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import { visibleProducts } from "@/config/site";

export default function Products() {
  const products = visibleProducts();

  return (
    <>
      <section className="bg-[#0B0F13] text-white">
        <div className="container-keep py-20 md:py-28">
          <p className="font-mono-label text-white/50">Products</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold md:text-5xl">The Keep suite</h1>
          <p className="mt-6 max-w-2xl text-white/70 leading-relaxed">
            One product per trade. Each one built on the same engine, configured for the credentials that trade actually carries.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="container-keep py-20 md:py-28">
          <div className="flex flex-col gap-6">
            {products.map((p) => (
              <Reveal key={p.name}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>

          {/* How the suite works */}
          <Reveal className="mt-20 border-t border-slate-200 pt-12">
            <p className="font-mono-label text-slate-500">How the suite works</p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
              Shared engine, trade-specific configuration, separate products.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              ["Shared engine", "The same document tracking, expiry logic and audit reporting sits underneath every Keep."],
              ["Trade-specific configuration", "Each product is configured for the credentials that trade actually carries — CISRS cards, SIA licences, CSCS cards."],
              ["Separate products", "Each stays genuinely purpose-built rather than generic. A firm working across two trades will eventually run both from one account."],
            ].map(([t, d]) => (
              <Reveal key={t} className="border-t border-slate-300 pt-5">
                <h3 className="text-lg font-semibold text-slate-900">{t}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{d}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 border-l-2 border-accent pl-4">
            <p className="font-mono-label text-slate-500">On the roadmap</p>
            <p className="mt-2 text-sm text-slate-600">
              Combined multi-trade accounts are on the roadmap, not available today.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}