import { Link } from "react-router-dom";
import {
  COMPANY_NAME,
  COMPANY_NUMBER,
  ICO_NUMBER,
  REGISTERED_OFFICE,
  visibleProducts,
} from "@/config/site";

export default function SiteFooter() {
  const products = visibleProducts();

  return (
    <footer aria-label="Site footer" className="bg-[#0B0F13] text-white">
      <div className="container-keep py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Wordmark + description */}
          <div className="md:col-span-1">
            <div className="font-heading text-xl font-bold tracking-tight">Keepsuite</div>
            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-xs">
              Focused compliance record-keeping tools for UK trade contractors.
            </p>
          </div>

          {/* Product links */}
          <div>
            <h2 className="font-mono-label text-white/60">Products</h2>
            <ul className="mt-4 space-y-3">
              {products.map((p) =>
                p.status === "live" && p.url ? (
                  <li key={p.name}>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/80 hover:text-white transition-colors"
                    >
                      {p.name}
                    </a>
                  </li>
                ) : (
                  <li key={p.name} className="text-sm text-white/50">
                    {p.name}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h2 className="font-mono-label text-white/60">Company</h2>
            <ul className="mt-4 space-y-3">
              <li><Link to="/about" className="text-sm text-white/80 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/standards" className="text-sm text-white/80 hover:text-white transition-colors">Standards</Link></li>
              <li><Link to="/products" className="text-sm text-white/80 hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/contact" className="text-sm text-white/80 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h2 className="font-mono-label text-white/60">Legal</h2>
            <ul className="mt-4 space-y-3">
              <li><Link to="/privacy" className="text-sm text-white/80 hover:text-white transition-colors">Privacy notice</Link></li>
              <li><Link to="/terms" className="text-sm text-white/80 hover:text-white transition-colors">Website terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10">
          <p className="text-xs text-white/50 leading-relaxed">
            {COMPANY_NAME} is a company registered in England and Wales. Company number {COMPANY_NUMBER}. Registered office: {REGISTERED_OFFICE}. ICO registration: {ICO_NUMBER}.
          </p>
          <p className="mt-4 text-xs text-white/60">
            © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}