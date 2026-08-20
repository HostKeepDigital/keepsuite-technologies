import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { COMPANY_NAME } from "@/config/site";

const NAV = [
  { label: "About", to: "/about" },
  { label: "Standards", to: "/standards" },
  { label: "Products", to: "/products" },
  { label: "Contact", to: "/contact" },
];

export default function SiteHeader() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-[#0B0F13] border-b border-white/10" : "bg-[#0B0F13]/0 border-b border-transparent"
      }`}
    >
      <div className="container-keep flex h-16 items-center justify-between">
        <Link to="/" className="font-heading text-lg font-bold tracking-tight text-white" onClick={() => setOpen(false)}>
          Keepsuite
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `font-mono-label text-white/70 hover:text-white transition-colors ${
                  isActive ? "text-white" : ""
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="md:hidden text-white p-2 -mr-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0B0F13] border-t border-white/10">
          <nav className="container-keep flex flex-col py-4">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-3 font-mono-label text-white/70 hover:text-white ${
                    isActive ? "text-white" : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}