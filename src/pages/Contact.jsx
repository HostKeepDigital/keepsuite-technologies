import Reveal from "@/components/Reveal";
import CompanyBlock from "@/components/CompanyBlock";
import { CONTACT_EMAIL, visibleProducts } from "@/config/site";

export default function Contact() {
  const scaffkeep = visibleProducts().find((p) => p.name === "ScaffKeep");

  return (
    <>
      <section className="bg-[#0B0F13] text-white">
        <div className="container-keep py-20 md:py-28">
          <p className="font-mono-label text-white/50">Contact</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold md:text-5xl">Get in touch</h1>
        </div>
      </section>

      <section className="bg-background">
        <div className="container-keep py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-2 md:items-start">
            <Reveal>
              <p className="font-mono-label text-slate-500">Email</p>
              <h2 className="mt-4 text-2xl font-bold text-slate-900">
                Keepsuite is a UK company, and support is handled by email.
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                For anything about the company itself — the suite, partnerships, or a question that isn't tied to a specific product — write to us directly.
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-6 inline-flex items-center bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-deep transition-colors"
              >
                {CONTACT_EMAIL}
              </a>

              <div className="mt-10 border-t border-slate-200 pt-6">
                <p className="font-mono-label text-slate-500">Product-specific support</p>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Product-specific support is handled through the product itself.
                  {scaffkeep?.url && (
                    <>
                      {" "}For ScaffKeep, visit{" "}
                      <a
                        href={scaffkeep.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-accent hover:underline"
                      >
                        {scaffkeep.url.replace(/^https?:\/\//, "")}
                      </a>
                      .
                    </>
                  )}
                </p>
              </div>
            </Reveal>

            <Reveal>
              <CompanyBlock />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}