# T Technologies website

A Next.js 16, TypeScript, Tailwind CSS 4 site for T Technologies. It uses Motion for section entrances and Lucide React for icons.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Next.js. Run `npm run build` for a production build and `npm run lint` for code checks.

## Set up the enquiry form

1. Copy `.env.example` to `.env.local`.
2. Set `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL`. The sender must be on a domain verified with [Resend](https://resend.com/docs/send-with-nextjs).
3. Restart the server, submit a test enquiry, and confirm it arrives. The API is in `src/app/api/contact/route.ts`. It validates inputs, uses a hidden honeypot, checks minimum completion time, limits repeated requests per IP within an instance, and returns success/error responses.
4. For high traffic or sustained spam, add a persistent rate limiter and a managed bot challenge at the hosting edge. In-memory limits are only a first line of defence in serverless hosting.

The form is visibly disabled until all three server values are configured. It does not claim to deliver messages before email is connected. Keep `.env.local` private.

## Content to provide before launch

- **Original logo asset**: the current vector mark in `src/components/brand.tsx` and `src/app/icon.svg` is a code recreation of the logo image supplied in chat. Replace it with an approved SVG or transparent PNG for exact fidelity.
- **Contact details**: add the approved email, phone/WhatsApp number, and social URLs in `src/lib/site.ts`.
- **Client logos and testimonials**: the home page shows clearly labeled spaces. Add only approved logos, names, quotations, job titles, and photos.
- **Real projects**: `src/lib/site.ts` contains four labeled interface concepts. Each `/work/[slug]` page is a case-study template with explicit editorial prompts. Replace these with approved client details and verified outcomes. Case concept pages currently have `noindex` metadata.
- **Team and company story**: replace the team photography space and founder/story prompt on `/about` with genuine material.
- **Legal review**: `/privacy` and `/terms` are labeled drafts. Add the legal business identity and contact address and have the policies reviewed for your actual practices.
- **Domain**: set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin so social URLs, sitemap, and robots metadata use the real domain.

## Structure

- `src/lib/site.ts`: company details and editable content collections
- `src/components`: header, footer, form, reusable sections, and interface concept art
- `src/app`: pages, metadata routes, and contact API

Deploy to a Next.js host that supports server route handlers and environment variables after the content and email settings are approved.
