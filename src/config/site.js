// Keepsuite Technologies Ltd — single source of truth for company details and products.
// Edit any value here once; every page reads from these constants.

export const COMPANY_NAME = "Keepsuite Technologies Ltd";
export const COMPANY_NUMBER = "17084415";
export const ICO_NUMBER = "ZC113158";
export const REGISTERED_OFFICE = "37 Battersby Street, Ince Wigan, WN2 2LZ";
export const CONTACT_EMAIL = "[CONTACT EMAIL]";
export const FOUNDER_NAME = "Tyler Dee Clarke";
export const FOUNDER_TITLE = "Founder & Director";

// When false, only live products render anywhere on the site.
export const SHOW_UNRELEASED = true;

// The product registry. Adding a future product is a one-object edit.
// status: "live" | "in_development" | "planned"
export const PRODUCTS = [
  {
    name: "ScaffKeep",
    trade: "UK scaffolding contractors",
    tagline: "Stop chasing paperwork. Start knowing where you stand.",
    description:
      "Tracks CISRS cards, public and employers' liability insurance and RAMS for every operative. Shows a live red/amber/green status across the workforce, sends expiry reminders before documents lapse, lets operatives upload their own documents through secure links, and generates dated compliance reports on demand.",
    status: "live",
    url: "https://scaffkeep.co.uk",
    accent: "#EAB308",
  },
  {
    name: "DoorKeep",
    trade: "UK security contractors",
    tagline: "Total oversight of SIA licences across your workforce.",
    description:
      "SIA licence and qualification tracking for door supervisors and security officers, built around the three-year licence cycle and the legal duty not to deploy an unlicensed operative.",
    status: "in_development",
    url: "",
    accent: "#5B21B6",
  },
  {
    name: "ArbKeep",
    trade: "UK tree surgeons and arboriculture",
    tagline: "Every ticket, every climber, always in date.",
    description:
      "Tracks CS30, CS31, CS38 and CS39 chainsaw tickets, aerial rescue and first aid certificates, alongside insurance and RAMS. A lapsed ticket can void insurance and cost a utility or rail contract — ArbKeep flags it before it expires, not after.",
    status: "planned",
    url: "",
    accent: "#15803D",
  },
  {
    name: "RoofKeep",
    trade: "UK roofing contractors",
    tagline: "Credential management for the roofing trade.",
    description:
      "CSCS cards, NVQ certificates, asbestos awareness refreshers and harness inspection records, tracked against every operative.",
    status: "planned",
    url: "",
    accent: "#C2703D",
  },
];

// Convenience: products filtered for display, respecting SHOW_UNRELEASED.
export const visibleProducts = () =>
  PRODUCTS.filter((p) => SHOW_UNRELEASED || p.status === "live");