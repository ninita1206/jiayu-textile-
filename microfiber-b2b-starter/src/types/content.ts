export type ApplicationMaturity = "established" | "growth" | "co-development";

export type NavItem = {
  label: string;
  href: string;
};

export type Application = {
  title: string;
  slug: string;
  maturity: ApplicationMaturity;
  description: string;
};

export type PageDefinition = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  sections: Array<{
    title: string;
    body: string;
    checklist?: string[];
  }>;
};
