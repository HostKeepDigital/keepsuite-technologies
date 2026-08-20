import Reveal from "@/components/Reveal";
import {
  COMPANY_NUMBER,
  ICO_NUMBER,
} from "@/config/site";

// Unified card style for both Part One and Part Two.
// Flex (not grid) so an incomplete final row centres instead of leaving a
// right-hand gap: 1 / 2 / 3 columns at mobile / tablet / desktop.
const CARD =
  "w-full md:w-[calc(50%_-_0.75rem)] lg:w-[calc(33.333%_-_1rem)] border border-slate-200 bg-white p-6";

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
        <div className="container-keep py-24 md:py-32">
          <Reveal>
            <p className="font-mono-label text-slate-500">Part one</p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
              How we help you evidence compliance
            </h2>
          </Reveal>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              ["Structured records against every operative.", "Each person carries their own document set, dated and traceable — not a shared folder of files."],
              ["Expiry dates monitored automatically.", "Not a column you remember to check. The system watches every date for you."],
              ["Warnings before a document lapses, not after.", "Reminders arrive in time to renew, not after the gap has already opened."],
              ["Dated, exportable reports.", "Proof takes minutes, not days. Generate a compliance report on demand, with dates attached."],
              ["A complete history, not a snapshot.", "What was valid last quarter is still on record. The audit trail doesn't reset."],
            ].map(([t, d]) => (
              <Reveal key={t} className={CARD}>
                <span className="mb-4 block h-1 w-8 bg-[#0052FF]" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-slate-900">{t}</h3>
                <p className="mt-2 text-sm text-neutral-700 leading-relaxed">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Responsibility statement — sits between Part One and Part Two */}
      <section className="bg-[#0B0F13] text-white">
        <div className="container-keep py-20 md:py-28">
          <Reveal>
            <h2 className="max-w-3xl text-3xl font-bold md:text-4xl">
              Where the responsibility sits
            </h2>
            <div className="mt-6 max-w-prose space-y-4 text-white/80 leading-relaxed">
              <p>
                The legal duty is yours. It stays yours. No software changes that, and you should be wary of anything that suggests otherwise.
              </p>
              <p>
                What we do is make it very hard for that duty to catch you out. Every document accounted for, every expiry watched, every gap visible before it becomes a problem, and proof ready the moment someone asks. The judgement is still yours to make — we make sure you're making it with the full picture in front of you.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* How we hold ourselves */}
      <section className="bg-slate-100 border-y border-slate-200">
        <div className="container-keep py-24 md:py-32">
          <Reveal>
            <p className="font-mono-label text-slate-500">Part two</p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
              How we hold ourselves
            </h2>
          </Reveal>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              [`Registered in England and Wales, company number ${COMPANY_NUMBER}.`, "A real, verifiable legal entity — not a shell."],
              [`Registered with the Information Commissioner's Office, registration ${ICO_NUMBER}.`, "Our data protection registration is on the public record."],
              ["UK GDPR: controller and processor.", "For operative data uploaded by a customer, the customer is the controller and Keepsuite is the processor, governed by a Data Processing Agreement."],
              ["Customer data is isolated per account.", "Documents are held in private storage and served only through short-lived secure links."],
              ["Payments handled by Stripe.", "Card details never touch Keepsuite systems."],
              ["Every release is tested against a documented test pack.", "A traceable record runs from code change to evidence to sign-off — before anything goes out."],
            ].map(([t, d]) => (
              <Reveal key={t} className={CARD}>
                <span className="mb-4 block h-1 w-8 bg-[#0052FF]" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-slate-900">{t}</h3>
                <p className="mt-2 text-sm text-neutral-700 leading-relaxed">{d}</p>
              </Reveal>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}