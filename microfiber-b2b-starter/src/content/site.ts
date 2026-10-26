import type { Application, NavItem, PageDefinition } from "@/types/content";

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const siteUrl =
  rawSiteUrl && (rawSiteUrl.startsWith("https://") || rawSiteUrl.startsWith("http://"))
    ? rawSiteUrl
    : "http://localhost:3000";

export const siteConfig = {
  name: "YOUR BRAND",
  description:
    "A content-ready B2B website framework for custom microfiber materials and application development.",
  url: siteUrl,
  indexingEnabled: process.env.NEXT_PUBLIC_SITE_INDEXING === "true",
  frameworkPreview: process.env.NEXT_PUBLIC_FRAMEWORK_PREVIEW !== "false",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  contactPhone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "",
};

export const primaryNavigation: NavItem[] = [
  { label: "Materials", href: "/materials" },
  { label: "Applications", href: "/applications" },
  { label: "Custom Development", href: "/custom-development" },
  { label: "Quality", href: "/quality-compliance" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "About", href: "/about" },
];

export const applications: Application[] = [
  {
    title: "Footwear",
    slug: "footwear",
    maturity: "established",
    description:
      "Build this page with approved materials, component use cases, test methods, and production examples.",
  },
  {
    title: "Bags",
    slug: "bags",
    maturity: "established",
    description:
      "Show verified constructions, aesthetics, customization options, and relevant quality evidence.",
  },
  {
    title: "Lifestyle & Tech Accessories",
    slug: "accessories",
    maturity: "growth",
    description:
      "Present current development experience without extending claims beyond documented projects.",
  },
  {
    title: "Protective Products",
    slug: "protective-products",
    maturity: "co-development",
    description:
      "Invite joint development. Do not imply protective performance until the exact use and standard are validated.",
  },
  {
    title: "Furniture & Upholstery",
    slug: "furniture-upholstery",
    maturity: "co-development",
    description:
      "Frame this as an application-development direction until product-level evidence and cases are ready.",
  },
];

export const customizationOptions = [
  "Color matching",
  "Grain and texture",
  "Backing construction",
  "Thickness and weight",
  "Finishing and performance",
];

export const developmentSteps = [
  "Material brief",
  "Construction proposal",
  "Sampling",
  "Testing and iteration",
  "Approved production sample",
  "Production and quality follow-up",
];

export const pageDefinitions: PageDefinition[] = [
  {
    slug: "materials",
    eyebrow: "Materials",
    title: "Build a material library buyers can actually use.",
    description:
      "Replace this framework copy with verified product families, constructions, specifications, imagery, and downloadable documents.",
    sections: [
      {
        title: "Product families",
        body: "Create one clear category for each real material family. Avoid publishing every internal sample as a separate product.",
        checklist: ["Approved product name", "SKU structure", "Verified applications", "Published or draft status"],
      },
      {
        title: "Specifications",
        body: "Only publish values that are tied to a product, construction, test method, and current evidence.",
        checklist: ["Composition", "Backing", "Thickness", "Width", "Weight", "Finish", "Test evidence"],
      },
    ],
  },
  {
    slug: "applications",
    eyebrow: "Applications",
    title: "Separate proven experience from new development directions.",
    description:
      "Footwear and bags can lead with evidence. Accessories can show current growth. Protective products and furniture should invite co-development until validated.",
    sections: [
      {
        title: "Established applications",
        body: "Lead with the markets where you can show product-level evidence, development experience, and production support.",
        checklist: ["Footwear", "Bags"],
      },
      {
        title: "Growth and co-development",
        body: "Explain what customers can develop with you without suggesting that every new application is already production-proven.",
        checklist: ["Lifestyle and tech accessories", "Protective products", "Furniture and upholstery"],
      },
    ],
  },
  {
    slug: "custom-development",
    eyebrow: "Custom development",
    title: "Turn a material brief into an approved production sample.",
    description:
      "Document how color, texture, backing, thickness, and finishing are evaluated, sampled, tested, and approved.",
    sections: [
      {
        title: "Inputs",
        body: "Define the information required from a designer, material developer, or buyer before sampling starts.",
        checklist: ["Application", "Target hand feel", "Color reference", "Construction", "Required tests", "Volume and timing"],
      },
      {
        title: "Approval controls",
        body: "State that feasibility, MOQ, test requirements, and an approved production sample apply to every custom development.",
      },
    ],
  },
  {
    slug: "innovation-rd",
    eyebrow: "Innovation & R&D",
    title: "Show the development system, not just equipment photographs.",
    description:
      "Use verified team, process, equipment, project, patent, and iteration evidence to explain R&D capability.",
    sections: [
      {
        title: "Development workflow",
        body: "Show how feedback moves between commercial, technical, sampling, testing, and manufacturing teams.",
      },
      {
        title: "Evidence to collect",
        body: "Prepare verified team roles, equipment ownership, development records, and measurable innovation outputs before publishing numbers.",
      },
    ],
  },
  {
    slug: "quality-compliance",
    eyebrow: "Quality & compliance",
    title: "Make every performance and compliance claim traceable.",
    description:
      "A test report for one sample must not be presented as a blanket certification for every product.",
    sections: [
      {
        title: "Physical performance",
        body: "Organize approved tests by material and intended application, with method, condition, result, and report date.",
      },
      {
        title: "Chemical compliance",
        body: "Record the certificate or report holder, tested sample, scope, issuer, date, expiry, and public-access permission.",
      },
    ],
  },
  {
    slug: "manufacturing",
    eyebrow: "Manufacturing",
    title: "Explain how development, production, quality, and service work together.",
    description:
      "Replace broad factory claims with verified production relationships, processes, capacity definitions, traceability, and quality-control steps.",
    sections: [
      {
        title: "Factory evidence",
        body: "Confirm the legal relationship between the website company, sales entity, certificate holder, and manufacturing entity.",
      },
      {
        title: "Operating evidence",
        body: "Prepare actual production-line information, capacity definitions, sampling and production lead-time data, QC records, and issue-resolution procedures.",
      },
    ],
  },
  {
    slug: "resources",
    eyebrow: "Resources",
    title: "Give technical buyers controlled access to current documents.",
    description:
      "Publish only approved and current files. Keep confidential originals, customer files, and unredacted reports outside the public folder.",
    sections: [
      {
        title: "Public resources",
        body: "Use an HTML introduction page for every important downloadable document so buyers and search engines understand its scope.",
        checklist: ["TDS", "Redacted test reports", "Certificates", "Color cards", "Selection guides", "FAQ"],
      },
      {
        title: "Document governance",
        body: "Add owner, version, issue date, expiry date, applicable products, and public permission to every file record.",
      },
    ],
  },
  {
    slug: "about",
    eyebrow: "About",
    title: "Tell a precise company story backed by operating evidence.",
    description:
      "Add the approved legal name, brand history, team, locations, factory relationship, and service model before launch.",
    sections: [
      {
        title: "Company profile",
        body: "Use the legal entity and verified company milestones. Avoid unsupported leadership, scale, or market-share claims.",
      },
      {
        title: "Customer relationships",
        body: "Do not publish a customer name, logo, testimonial, product image, or project detail without evidence and explicit permission.",
      },
    ],
  },
  {
    slug: "contact",
    eyebrow: "Contact",
    title: "Make the next step clear for every buyer role.",
    description:
      "Add verified company contact details. Connect forms only after server-side validation, spam protection, email or CRM delivery, and failure alerts are ready.",
    sections: [
      {
        title: "Contact information",
        body: "Add the legal company name, office or factory address, business email, telephone, supported languages, and working hours.",
      },
      {
        title: "Inquiry routing",
        body: "Route samples, custom development, compliance-document requests, and quotations to the correct owner.",
      },
    ],
  },
  {
    slug: "request-samples",
    eyebrow: "Request samples",
    title: "Prepare a sample request that gives the material team useful context.",
    description:
      "Do not publish a form until its email or CRM delivery has been tested end to end.",
    sections: [
      {
        title: "Suggested fields",
        body: "Collect only what is needed to qualify and prepare the request.",
        checklist: ["Name and company", "Work email", "Country", "Application", "Material or SKU", "Estimated volume", "Project timing"],
      },
      {
        title: "Next implementation step",
        body: "Add server-side validation, Turnstile, rate limits, consent text, confirmation email, CRM delivery, and internal failure alerts.",
      },
    ],
  },
  {
    slug: "start-project",
    eyebrow: "Start a project",
    title: "Collect a useful material-development brief.",
    description:
      "This route is reserved for a future development form. Until delivery is connected and tested, use verified contact details instead.",
    sections: [
      {
        title: "Material brief",
        body: "Ask for the intended application, component, reference sample, visual direction, construction, target tests, annual volume, and deadline.",
      },
      {
        title: "Development stages",
        body: "Explain feasibility review, sampling, testing, iteration, approval, pilot production, and mass production.",
      },
    ],
  },
  {
    slug: "privacy",
    eyebrow: "Legal framework",
    title: "Privacy policy content must be approved before data collection starts.",
    description:
      "Identify the company, data collected, purposes, service providers, countries, retention, rights, contact method, and last-updated date.",
    sections: [
      {
        title: "Required review",
        body: "Have counsel review the final policy for the markets and tracking tools you actually use. This starter is not legal advice.",
      },
    ],
  },
  {
    slug: "terms",
    eyebrow: "Legal framework",
    title: "Prepare terms that match the real website and business process.",
    description:
      "Define website use, intellectual property, downloads, third-party links, disclaimers, governing law, and contact details with legal review.",
    sections: [
      {
        title: "Required review",
        body: "Do not copy another company’s terms. The final text must reflect your legal entity, markets, services, and data flows.",
      },
    ],
  },
];

export const pageBySlug = new Map(pageDefinitions.map((page) => [page.slug, page]));
