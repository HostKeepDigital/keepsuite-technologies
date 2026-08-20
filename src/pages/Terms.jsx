import Reveal from "@/components/Reveal";
import CompanyBlock from "@/components/CompanyBlock";
import { COMPANY_NAME } from "@/config/site";

export default function Terms() {
  return (
    <>
      <section className="bg-[#0B0F13] text-white">
        <div className="container-keep py-20 md:py-28">
          <p className="font-mono-label text-white/50">Legal</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold md:text-5xl">Website terms</h1>
        </div>
      </section>

      <section className="bg-background">
        <div className="container-keep py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-2 md:items-start">
            <Reveal>
              <div className="prose-keep space-y-6 text-slate-700 leading-relaxed">
                <p className="font-mono-label text-slate-500">Last updated: to be confirmed</p>
                <h2 className="text-xl font-bold text-slate-900">Overview</h2>
                <p>
                  These terms govern your use of this website, operated by {COMPANY_NAME}.
                </p>
                <div className="border-l-2 border-[#0052FF] pl-4">
                  <p className="font-mono-label text-slate-500">Status</p>
                  <p className="mt-2 text-slate-900 font-semibold">
                    This notice is being finalised ahead of launch.
                  </p>
                </div>
                <p className="text-sm text-slate-500">
                  A complete version will be published here before any product goes live. In the meantime, the registered company details opposite are current.
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