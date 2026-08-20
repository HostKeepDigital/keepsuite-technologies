import { Link } from "react-router-dom";
import { COMPANY_NAME, COMPANY_NUMBER, ICO_NUMBER, REGISTERED_OFFICE } from "@/config/site";

// Full registered company block — reused on Contact, Privacy, Terms.
export default function CompanyBlock() {
  return (
    <div className="border border-slate-200 bg-white p-6">
      <h2 className="font-mono-label text-body">Registered company</h2>
      <dl className="mt-4 space-y-4 text-sm">
        <div className="flex flex-col gap-0.5 md:flex-row md:gap-3">
          <dt className="md:w-40 md:shrink-0 text-body">Legal name</dt>
          <dd className="text-slate-900 font-medium">{COMPANY_NAME}</dd>
        </div>
        <div className="flex flex-col gap-0.5 md:flex-row md:gap-3">
          <dt className="md:w-40 md:shrink-0 text-body">Company number</dt>
          <dd className="text-slate-900">{COMPANY_NUMBER}</dd>
        </div>
        <div className="flex flex-col gap-0.5 md:flex-row md:gap-3">
          <dt className="md:w-40 md:shrink-0 text-body">ICO registration</dt>
          <dd className="text-slate-900">{ICO_NUMBER}</dd>
        </div>
        <div className="flex flex-col gap-0.5 md:flex-row md:gap-3">
          <dt className="md:w-40 md:shrink-0 text-body">Registered office</dt>
          <dd className="text-slate-900">{REGISTERED_OFFICE}</dd>
        </div>
        <div className="flex flex-col gap-0.5 md:flex-row md:gap-3">
          <dt className="md:w-40 md:shrink-0 text-body">Jurisdiction</dt>
          <dd className="text-slate-900">England and Wales</dd>
        </div>
      </dl>
      <p className="mt-5 text-xs text-body">
        See the <Link to="/contact" className="underline hover:text-slate-900">contact page</Link> for how to reach us.
      </p>
    </div>
  );
}