import Reveal from "@/components/Reveal";
import CompanyBlock from "@/components/CompanyBlock";
import {
  COMPANY_NAME,
  COMPANY_NUMBER,
  REGISTERED_OFFICE,
  LEGAL_LAST_UPDATED,
} from "@/config/site";

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
          <Reveal>
            <CompanyBlock />
          </Reveal>

          <Reveal>
            <div className="mt-16 max-w-[68ch] space-y-12 text-body leading-relaxed">
              <p className="font-mono-label text-body">Last updated: {LEGAL_LAST_UPDATED}</p>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">1. About these terms</h2>
                <p>
                  This website is operated by {COMPANY_NAME}, a company registered in England and
                  Wales (company number {COMPANY_NUMBER}), registered office {REGISTERED_OFFICE}.
                  These terms govern your use of this website. By using it, you accept them. If you
                  do not accept them, please stop using the site.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">2. These are not our product terms</h2>
                <p>
                  This website describes our company and our products. It is not where you buy
                  anything and nothing on it forms a contract. Each of our products has its own
                  terms and conditions, which you agree to separately when you sign up for that
                  product. Where anything on this website appears to conflict with a product's own
                  terms, the product terms apply.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">3. Information about our products</h2>
                <p>
                  We describe our products as accurately as we can, but descriptions on this site
                  are for general information. Features, pricing and availability are set out in
                  each product and may change. Some products shown on this site are marked as in
                  development or planned. That means exactly what it says: they are not available,
                  they have no release date, their described features may change, and we may decide
                  not to release them at all. Nothing on this site is a promise that any unreleased
                  product will exist. Do not make a business decision in reliance on one.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">4. Accuracy and availability</h2>
                <p>
                  We take care over the content of this site but do not warrant that it is complete,
                  accurate or up to date. We do not guarantee the site will always be available or
                  uninterrupted, and we may suspend, withdraw or change any part of it without
                  notice.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">5. Acceptable use</h2>
                <p>
                  You may use this site for lawful purposes only. You must not use it in a way that
                  breaks any law, attempt to gain unauthorised access to it or to any system connected
                  to it, introduce anything malicious, or attempt to interfere with, overload or
                  damage it. You may view, print and download extracts for your own use or to share
                  within your organisation. You must not otherwise copy, republish or commercially
                  exploit any part of it without our permission.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">6. Our intellectual property</h2>
                <p>
                  All content on this site — text, design, layout, graphics and the Keepsuite and
                  product names — belongs to us or is licensed to us. Nothing on this site gives you
                  any right in it beyond the limited use described above.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">7. Links to other sites</h2>
                <p>
                  This site links to our product websites and may link elsewhere. Links to
                  third-party sites are provided for convenience only. We do not control them, we
                  are not responsible for their content, and a link is not an endorsement.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">8. Our liability</h2>
                <p>
                  Nothing in these terms limits or excludes our liability for death or personal
                  injury caused by our negligence, for fraud or fraudulent misrepresentation, or
                  for anything else that cannot lawfully be limited or excluded. Subject to that,
                  and to the fullest extent permitted by law, we are not liable for any loss or
                  damage arising from your use of, or inability to use, this website — including any
                  loss of profits, business, goodwill or data, any loss arising from reliance on
                  information published here, or any indirect or consequential loss. This site is
                  provided free of charge and for information. If you use this site in the course
                  of a business, these limits apply in full. Nothing here affects any consumer
                  rights you may have that cannot be excluded.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">9. Changes to these terms</h2>
                <p>
                  We may amend these terms at any time by updating this page. The date at the top
                  shows the current version. Please check it from time to time.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">10. Law and jurisdiction</h2>
                <p>
                  These terms are governed by the law of England and Wales, and the courts of
                  England and Wales have exclusive jurisdiction over any dispute arising from them.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">11. Contact</h2>
                <p>
                  Our contact details are on our contact page, and our full registered company
                  details appear alongside these terms.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}