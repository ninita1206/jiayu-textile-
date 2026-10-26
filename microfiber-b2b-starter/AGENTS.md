# Project instructions

## Purpose

Build an English-first B2B website for custom microfiber material development. The current strong applications are footwear and bags. Accessories are a growth area. Protective products and furniture are co-development directions until product-level evidence is available.

## Required rules

- Commercial facts must come from `docs/source-of-truth.md` or another company-approved source.
- Never invent customers, certifications, test results, capacity, prices, MOQ, lead time, facilities, patents, testimonials, or sustainability claims.
- Every quantitative, performance, chemical, or compliance claim must be tied to evidence and its applicable product scope.
- Never publish a customer name, logo, testimonial, design, or project detail without explicit permission.
- Never generalize one sample report to every product or construction.
- Do not place internal, confidential, or unredacted documents in `public/`.
- Never commit `.env`, credentials, API keys, email passwords, CRM tokens, or personal data.
- Do not automatically publish machine translations.
- Do not enable search indexing until content, contact details, legal pages, links, and inquiry delivery have been approved.

## Technical baseline

- Next.js App Router
- TypeScript in strict mode
- Tailwind CSS
- pnpm with a committed lockfile
- Content stored in repository files until a CMS is explicitly approved

## Quality requirements

- Mobile-first responsive layout
- Keyboard-accessible navigation and controls
- Semantic HTML and clear focus states
- Unique metadata for public pages
- Draft or unverified content must not be indexed or presented as fact
- Explain every new dependency and update the lockfile
- Run `pnpm check` after changes

## Production safeguards

- Do not deploy production, change DNS, enable indexing, or connect live CRM/email credentials without explicit approval.
- Forms must have server-side validation, anti-spam controls, rate limiting, consent text, delivery monitoring, and a tested failure path before publication.
