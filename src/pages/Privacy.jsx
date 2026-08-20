import Reveal from "@/components/Reveal";
import CompanyBlock from "@/components/CompanyBlock";
import {
  COMPANY_NAME,
  COMPANY_NUMBER,
  REGISTERED_OFFICE,
  ICO_NUMBER,
  LEGAL_LAST_UPDATED,
} from "@/config/site";

export default function Privacy() {
  return (
    <>
      <section className="bg-[#0B0F13] text-white">
        <div className="container-keep py-20 md:py-28">
          <p className="font-mono-label text-white/50">Legal</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold md:text-5xl">Privacy notice</h1>
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
                <h2 className="text-2xl font-bold text-slate-900">1. Who we are</h2>
                <p>
                  This website is operated by {COMPANY_NAME}, a company registered in England and
                  Wales (company number {COMPANY_NUMBER}), registered office {REGISTERED_OFFICE}.
                  We are registered with the Information Commissioner's Office under registration{" "}
                  {ICO_NUMBER}. For the personal data described in this notice, we are the data
                  controller. You can contact us about anything in this notice using the address on
                  our contact page. This notice covers this website only. Our products have their
                  own privacy notices, which apply to data held inside those products.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">2. The short version</h2>
                <p>
                  This is a brochure website. It has no accounts, no sign-up, no contact form and no
                  database. It sets no cookies and does not use analytics or tracking of any kind.
                  We do not build a profile of you, we do not advertise to you, and we do not sell
                  or share your data with anyone for their own purposes. The only personal data we
                  hold from this site is what you choose to send us by email, plus the technical
                  logs our hosting provider keeps to run the service securely.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">
                  3. What we collect, why, and on what basis
                </h2>
                <p>
                  <span className="font-semibold text-slate-900">If you email us.</span> We receive
                  your email address, your name if you give it, and whatever you write. We use it to
                  read and reply to your message and to keep a record of the correspondence. Our
                  lawful basis is legitimate interests — responding to people who contact us about
                  our business. If your message is about buying our software, we may also rely on
                  taking steps at your request before entering a contract.
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Technical logs.</span> Our hosting
                  provider automatically records standard technical information when a page is
                  requested, which may include your IP address, the time of the request, the page
                  requested, and your browser and device type. This happens for every website and
                  is necessary to serve pages, keep the service available and protect it from abuse.
                  Our lawful basis is legitimate interests — operating and securing our website. We
                  do not use these logs to identify individual visitors and we do not combine them
                  with anything else.
                </p>
                <p>
                  <span className="font-semibold text-slate-900">That is everything.</span> We
                  collect no special category data through this site, and nothing about children.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">4. Who else sees it</h2>
                <p>
                  Our hosting provider, which runs the infrastructure this site sits on and
                  processes the technical logs described above on our instructions. Our email
                  provider, which handles messages you send us. Both act as our processors under
                  contract. They may process data outside the United Kingdom. Where that happens,
                  we rely on the safeguards permitted under UK data protection law, such as UK
                  adequacy regulations or the International Data Transfer Addendum. We do not sell
                  your personal data, and we do not share it with anyone for marketing. We may
                  disclose information where we are legally required to, or to establish or defend
                  legal claims.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">5. How long we keep it</h2>
                <p>
                  Email correspondence is kept for as long as needed to deal with your enquiry and
                  for a reasonable period afterwards in case you get back in touch — normally up to
                  two years — after which it is deleted. Where an enquiry becomes a customer
                  relationship, it is retained under our product terms instead. Technical logs are
                  kept for a short period by our hosting provider for security and diagnostics.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">6. Your rights</h2>
                <p>
                  Under UK data protection law you have the right to: ask for a copy of the personal
                  data we hold about you; have inaccurate data corrected; ask us to delete it; ask
                  us to restrict how we use it; object to our use of it where we rely on legitimate
                  interests; and receive it in a portable format where that applies. To exercise
                  any of these, email us using the address on our contact page. We will respond
                  within one month. There is no charge unless a request is clearly unfounded or
                  excessive.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">7. Automated decision-making</h2>
                <p>
                  This website does not make any automated decisions about you and does not profile
                  you.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">8. Complaints</h2>
                <p>
                  If you think we have handled your personal data badly, please tell us first — we
                  would rather fix it. You also have the right to complain to the Information
                  Commissioner's Office at{" "}
                  <a
                    href="https://ico.org.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-deep underline underline-offset-2"
                  >
                    ico.org.uk
                  </a>
                  , or on 0303 123 1113.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">9. Changes</h2>
                <p>
                  We will update this notice if what we do changes. The date at the top always shows
                  the current version.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}