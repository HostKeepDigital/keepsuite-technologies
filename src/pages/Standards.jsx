import Reveal from "@/components/Reveal";
import {
  COMPANY_NUMBER,
  ICO_NUMBER,
} from "@/config/site";

export default function Standards() {
  return (
    <>
      <section className="bg-[#0B0F13] text-white">
        <div className="container-keep py-20 md:py-28">
          <p className="font-mono-label text-white/50">Standards</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold md:text-5xl">Our standards</h1>
          <p className="mt-6 max-w-2xl text-white/70 leading-relaxed">
            Two different promises, kept clearly separate. How we help you evidence compliance — and how we hold ourselves.
          </p>
        </div>
      </section>

      {/* How we help you evidence compliance */}
      <section className="bg-background">
        <div className="container-keep py-20 md:py-28">
          <Reveal>
            <p className="font-mono-label text-slate-500">Part one</p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
              How we help you evidence compliance
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {[
              ["Structured records against every operative.", "Each person carries their own document set, dated and traceable — not a shared folder of files."],
              ["Expiry dates monitored automatically.", "Not a column you remember to check. The system watches every date for you."],
              ["Warnings before a document lapses, not after.", "Reminders arrive in time to renew, not after the gap has already opened."],
              ["Dated, exportable reports.", "Proof takes minutes, not days. Generate a compliance report on demand, with dates attached."],
              ["A complete history, not a snapshot.", "What was valid last quarter is still on record. The audit trail doesn't reset."],
            ].map(([t, d]) => (
              <Reveal key={t} className="border-t border-slate-300 pt-5">
                <h3 className="text-lg font-semibold text-slate-900">{t}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How we hold ourselves */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="container-keep py-20 md:py-28">
          <Reveal>
            <p className="font-mono-label text-slate-500">Part two</p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
              How we hold ourselves
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {[
              [`Registered in England and Wales, company number ${COMPANY_NUMBER}.`, "A real, verifiable legal entity — not a shell."],
              [`Registered with the Information Commissioner's Office, registration ${ICO_NUMBER}.`, "Our data protection registration is on the public record."],
              ["UK GDPR: controller and processor.", "For operative data uploaded by a customer, the customer is the controller and Keepsuite is the processor, governed by a Data Processing Agreement."],
              ["Customer data is isolated per account.", "Documents are held in private storage and served only through short-lived secure links."],
              ["Payments handled by Stripe.", "Card details never touch Keepsuite systems."],
              ["Every release is tested against a documented test pack.", "A traceable record runs from code change to evidence to sign-off — before anything goes out."],
            ].map(([t, d]) => (
              <Reveal key={t} className="border-l-2 border-slate-300 pl-5">
                <h3 className="text-lg font-semibold text-slate-900">{t}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{d}</p>
              </Reveal>
            ))}
          </div>

          {/* Honesty callout */}
          <Reveal className="mt-14 border-2 border-[#0052FF] bg-white p-8 md:p-10">
            <p className="font-mono-label text-[#0052FF]">The honesty section</p>
            <h3 className="mt-4 text-2xl font-bold text-slate-900 md:text-3xl">
              Our software is a tool, not a guarantee.
            </h3>
            <div className="mt-5 prose-keep space-y-4 text-slate-700 leading-relaxed">
              <p>
                Keepsuite products help firms keep accurate records and act on them in time. They do not and cannot make a firm compliant, and they don't replace the firm's own legal duties or professional judgement.
              </p>
              <p className="font-semibold text-slate-900">
                Any vendor claiming otherwise is selling something it can't deliver.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}