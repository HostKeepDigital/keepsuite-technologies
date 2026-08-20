import Reveal from "@/components/Reveal";
import { FOUNDER_NAME, FOUNDER_TITLE } from "@/config/site";

export default function About() {
  return (
    <>
      <section className="bg-[#0B0F13] text-white">
        <div className="container-keep py-20 md:py-28">
          <p className="font-mono-label text-white/50">About</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold md:text-5xl">Why we exist</h1>
        </div>
      </section>

      <section className="bg-background">
        <div className="container-keep py-20 md:py-28">
          <div className="prose-keep space-y-8 text-slate-700 text-lg leading-relaxed">
            <Reveal as="p">
              Keepsuite was founded by {FOUNDER_NAME}, {FOUNDER_TITLE} — a software test analyst by trade. Someone whose entire professional discipline is finding the thing that will break before a customer does.
            </Reveal>
            <Reveal as="p">
              The observation that started it: small contractors carry real legal duties around workforce competency, and manage them in spreadsheets, folders and memory. Not through negligence — because the tools built for this are either enterprise platforms priced for enterprises, or generic form-fillers that know nothing about the trade.
            </Reveal>
            <Reveal as="p">
              The gap was obvious. Nobody had built the small, sharp, affordable tool that knows what a CISRS card is and when it runs out.
            </Reveal>
            <Reveal as="p">
              That testing background changes how the software is built. Every feature is built assuming it will be relied on at the worst possible moment — during an audit, on site, under pressure. Release only happens against a documented test pack.
            </Reveal>
            <Reveal as="p">
              Keepsuite is small, and deliberately so. Products ship one at a time, and only once the previous one has real customers using it.
            </Reveal>
          </div>

          <Reveal className="mt-16 border-l-2 border-[#0052FF] pl-6">
            <p className="font-mono-label text-slate-500">In short</p>
            <p className="mt-3 max-w-2xl text-xl font-semibold text-slate-900">
              No invented team, no offices, no funding claims, no "trusted by" figures. Just focused tools, built carefully, shipped one at a time.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}