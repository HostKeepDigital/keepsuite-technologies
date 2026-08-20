import { CONTACT_EMAIL } from "@/config/site";

// Product card. Visual weight depends on status:
//  - live: full card, accent bar, hover lift, primary CTA opening url in a new tab.
//  - in_development / planned: muted "blueprint" styling, dashed border, status pill, no link.
// Unreleased cards never feel clickable.

const STATUS_LABEL = {
  in_development: "In development",
  planned: "Planned",
};

export default function ProductCard({ product }) {
  const isLive = product.status === "live";

  return (
    <article
      className={`group relative flex flex-col p-7 border transition-all duration-300 ${
        isLive
          ? "bg-white border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1"
          : "bg-slate-50/60 border-dashed border-slate-300"
      }`}
    >
      {/* Accent bar */}
      <span
        className="absolute left-0 top-0 h-1 w-full"
        style={{ backgroundColor: product.accent }}
        aria-hidden="true"
      />

      <span className="font-mono-label text-body">{product.trade}</span>

      <h3 className={`mt-3 text-2xl font-bold ${isLive ? "text-slate-900" : "text-body"}`}>
        {product.name}
      </h3>

      <p className={`mt-2 text-sm font-medium text-body`}>
        {product.tagline}
      </p>

      <p className={`mt-4 text-sm leading-relaxed flex-1 text-body`}>
        {product.description}
      </p>

      <div className="mt-6">
        {isLive ? (
          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-accent px-5 py-3 text-sm font-semibold text-white hover:bg-accent-deep transition-colors"
          >
            Visit {product.name} →
          </a>
        ) : (
          <span className="inline-block px-3 py-1 font-mono-label bg-slate-100 text-body">
            {STATUS_LABEL[product.status]}
          </span>
        )}
      </div>

      {!isLive && (
        <p className="mt-4 text-sm text-body">
          Want to know when{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`${product.name} launch notification`)}`}
            className="underline hover:text-slate-700"
          >
            {product.name} launches?
          </a>
        </p>
      )}
    </article>
  );
}