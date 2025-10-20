
---

# PascalConfort Product Requirements Document (PRD)

## Goals and Background Context

**Goals**
* **User Goal:** Immediately contact a trusted `instalator autorizat Iași` with zero friction.
* **Business Goal 1:** Maximize lead conversion from mobile users searching for `urgențe instalații Iași` or related terms.
* **Business Goal 2:** Achieve top local Google rankings for primary keywords (`instalator Iași`, `instalații sanitare Iași`, etc.).
* **Design Goal:** Achieve a clean, modern design that builds trust and supports SEO goals.

**Background Context**
This project creates a high-conversion, **SEO-focused**, single-page website for Daniel Pascal, an expert `instalator` in Iași. The site targets local, Romanian-speaking users, especially those needing urgent plumbing services (`urgențe instalații`). Built statically with Next.js/Tailwind for speed, it prioritizes immediate contact and professional presentation to convert search traffic into leads. **Technical SEO implementation is critical for visibility.**

**Change Log**
| Date         | Version | Description                   | Author    |
| :----------- | :------ | :---------------------------- | :-------- |
| 2025-10-19 | 1.1     | Added specific SEO requirements | John (PM) |
| 2025-10-19 | 1.0     | Initial PRD draft based on Project Brief | John (PM) |

---

## Requirements

**Functional**
* **FR1:** Website MUST be a single static HTML page (`output: 'export'`).
* **FR2:** Content MUST be 100% Romanian, **naturally incorporating target SEO keywords**.
* **FR3:** Sticky header MUST be present on all devices.
* **FR4:** Sticky header "Sună Acum" button MUST link to `tel:+40752399616`.
* **FR5:** Sticky header "WhatsApp" button MUST link to `https://wa.me/40752399616`.
* **FR6:** Sticky header navigation links (Servicii, Despre, Contact) MUST smoothly scroll to sections.
* **FR7:** Hero section MUST display **SEO-optimized** headline/sub-headline and contact buttons.
* **FR8:** Trust-Builder Bar MUST display credentials.
* **FR9:** Services Section MUST display a grid of services with **keyword-rich descriptions**.
* **FR10:** About Me Section MUST display photo and bio (using keywords like `instalator autorizat`, `experiență Iași`).
* **FR11:** Portfolio / Gallery section MUST display photos with **descriptive Romanian `alt` text**.
* **FR12:** Contact Form (Name, Phone, Message) MUST be present.
* **FR13:** Contact Form MUST provide a WhatsApp-based submission (prefilled message opens in WhatsApp).
* **FR14:** Functional "Emergency Mode" toggle MUST be present.
* **FR15:** Activating Emergency Mode MUST change accent color to red and show emergency banner.
* **FR16:** Dynamic FAQ section with accordion-style answers (**using keywords naturally**) MUST be included.
* **FR17:** The website MUST include a **`LocalBusiness` JSON-LD schema script** in the `<head>`.

**Non Functional**
* **NFR1:** Lighthouse Performance score MUST be 95+.
* **NFR2:** Website MUST be flawlessly responsive.
* **NFR3:** Design MUST be clean, modern, symmetrical, adhering to UI/UX spec.
* **NFR4:** All images MUST be high-res, professional, web-optimized (e.g., WebP), and have **descriptive Romanian `alt` text**.
* **NFR5:** Deployment MUST use Vercel Hobby tier.
* **NFR6:** Contact form MUST avoid email backends (WhatsApp only).
* **NFR7:** Build MUST use Next.js static export (`output: 'export'`).
* **NFR8:** Root layout MUST generate **SEO-optimized Romanian `<title>` and `<meta description>` tags**.
* **NFR9:** HTML structure MUST use **semantic tags** (`<h1>`, `<h2>`, `<section>`, `<article>`, etc.) correctly for SEO.
* **NFR10:** Code MUST be TypeScript (TSX).
* **NFR11:** **NAP (Name, Address, Phone)** details used in the `LocalBusiness` schema MUST be consistent with the Google Business Profile and other citations.

---

## User Interface Design Goals

* **Overall UX Vision:** Trust through Speed. Minimalist, premium, uncluttered. Focus on conversion and professionalism.
* **Key Interaction Paradigms:** One-Page Scrolling, Sticky Conversion Buttons, Stateful UI Toggle (Emergency Mode).
* **Core Screens (Sections):** Hero, Trust-Bar, Services (`Servicii Instalații`), About (`Despre Mine`), Portfolio (`Portofoliu Lucrări`), FAQ (`Întrebări Frecvente`), Contact (`Contact / Cere Ofertă`), Footer.
* **Accessibility:** WCAG AA. Keyboard navigable, correct color contrast, Romanian `alt` tags, proper focus states.
* **Branding:** Clean font (Inter/Poppins), deep blue/white/orange palette, symmetrical grid layout.
* **Target Platforms:** Web Responsive (Mobile-perfect primary).

---

## Technical Assumptions

* **Repository Structure:** Single Repo.
* **Service Architecture:** Serverless (100% Static Export via Next.js). Client-side WhatsApp deep link for forms.
* **Testing Requirements:** Manual testing of links, form, emergency mode, responsiveness. **Validate structured data using Schema Markup Validator and Google Rich Results Test**.
* **Additional Assumptions:** EmailJS accounts configured. GitHub repo created. **Daniel Pascal will provide accurate business details (Name, Address, Phone, Operating Hours) for the `LocalBusiness` schema.**

---

## Epic List

* **Epic 1: Foundation, SEO Setup & Core Conversion:** Establish project, header, hero, emergency mode, and basic technical SEO.
* **Epic 2: Trust-Building Content & Image SEO:** Build static content sections (Services, About, Gallery, FAQ) with **SEO-focused text and image optimization**.
* **Epic 3: Contact Form, Schema & Deployment:** Implement WhatsApp form flow, **add `LocalBusiness` schema**, finalize metadata, and deploy.

---

## Epic 1: Foundation, SEO Setup & Core Conversion

**Goal:** Establish the core project, visual identity, primary conversion mechanisms, and foundational technical SEO elements.

**Story 1.1: Project Setup, Header & Basic SEO Metadata**
* **As a** developer,
* **I want** to set up the Next.js/Tailwind project with the sticky header, navigation, and basic SEO metadata,
* **so that** the core layout, contact buttons, and essential SEO tags are in place.
* **Acceptance Criteria:**
    1.  Next.js 14+ (App Router) project created (TS, Tailwind).
    2.  `next.config.mjs` configured for `output: 'export'`.
    3.  Root `layout.tsx` created.
    4.  `layout.tsx` includes `next/font` setup (Inter or Poppins).
    5.  `layout.tsx` generates a basic **Romanian `<title>` and `<meta description>`** (can be refined later).
    6.  A sticky `Header` component created with `tel:` and `wa.me:` buttons.
    7.  Header includes placeholder scroll links (Services, About, Contact) and Emergency Toggle switch (visual only).
    8.  Header uses semantic `<header>` and `<nav>` tags.

**Story 1.2: Hero Section, Semantic Structure & Emergency Mode**
* **As a** user,
* **I want** to see an engaging hero section using correct semantic HTML and be able to activate "Emergency Mode,"
* **so that** the page has clear structure for search engines and I can adapt it to my urgent need.
* **Acceptance Criteria:**
    1.  A `Hero` component created below header, wrapped in a `<section>` tag.
    2.  Hero contains the main headline within an `<h1>` tag (using keywords like `instalator autorizat Iași`, `urgență instalații`).
    3.  Sub-headline uses a `<p>` tag.
    4.  Primary contact buttons are present.
    5.  Professional hero image uses `next/image` with **descriptive Romanian `alt` text**.
    6.  Emergency Mode toggle is functional (using Zustand/Context).
    7.  Emergency state adds `theme-emergency` class to `<body>` for Tailwind styling hooks.
    8.  Conditional emergency banner is rendered when active.

---

## Epic 2: Trust-Building Content & Image SEO

**Goal:** Build static content sections with **SEO-focused text and optimized images** to establish trust and relevance.

**Story 2.1: Trust-Builder & Services Sections (with SEO Content)**
* **As a** user / search engine,
* **I want** to see trust badges and a detailed list of services using relevant keywords,
* **so that** I trust the provider and the page ranks for specific service searches.
* **Acceptance Criteria:**
    1.  `TrustBuilderBar` component created.
    2.  `Services` component created (in `<section id="servicii">`), wrapped with appropriate heading (e.g., `<h2>Servicii Instalații Oferite în Iași</h2>`).
    3.  "Services" link scrolls to this section.
    4.  Displays a responsive grid of service cards.
    5.  Each card uses semantic HTML (e.g., `<h3>` for service title).
    6.  Each card has **text content written to naturally include relevant keywords** (e.g., "Instalații sanitare complete în Iași", "Reparații urgențe instalații termice").

**Story 2.2: About Me & Portfolio Sections (with Image SEO)**
* **As a** user / search engine,
* **I want** to learn about the plumber and see high-quality, optimized images of their work,
* **so that** I build trust and the images contribute to SEO.
* **Acceptance Criteria:**
    1.  `AboutMe` component created (in `<section id="despre">` with `<h2>Despre Mine - Daniel Pascal</h2>`).
    2.  "About" link scrolls to this section.
    3.  Contains photo (`next/image` with `alt="Daniel Pascal - Instalator Autorizat Iași"`) and bio (using keywords).
    4.  `Portfolio` component created (in `<section id="portofoliu">` with `<h2>Portofoliu Lucrări Instalații</h2>`).
    5.  Displays image grid/carousel.
    6.  All portfolio images use `next/image` and have **unique, descriptive Romanian `alt` tags** (e.g., `alt="Înlocuire centrală termică apartament Iași"`).

**Story 2.3: Dynamic FAQ Section (with SEO Content)**
* **As a** user / search engine,
* **I want** to find answers to common questions written naturally with relevant keywords,
* **so that** my queries are resolved and the page ranks for question-based searches.
* **Acceptance Criteria:**
    1.  `FAQ` component created (in `<section id="faq">` with `<h2>Întrebări Frecvente - Instalator Iași</h2>`).
    2.  Displays accordion-style Q&A.
    3.  Implemented as a client component ("use client").
    4.  **Questions and answers are written to naturally incorporate keywords** (e.g., Q: "Cât costă o intervenție de urgență la instalații în Iași?").

---

## Epic 3: Contact Form, Schema & Deployment

**Goal:** Implement the contact form, add **`LocalBusiness` structured data for enhanced local SEO**, finalize metadata, and deploy.

**Story 3.1: Contact Form & WhatsApp Integration**
* **As a** user,
* **I want** to send a message via a contact form,
* **so that** I can request a quote (`cere ofertă`).
* **Acceptance Criteria:**
    1.  `ContactForm` component created (in `<section id="contact">` with `<h2>Contact / Cere Ofertă Instalator Iași</h2>`).
    2.  "Contact" link scrolls to this section.
    3.  Form includes Name, Phone, Message fields with validation (React Hook Form).
    4.  WhatsApp deep link constructed with encoded message.
    5.  Clicking submit opens WhatsApp with prefilled message.
    6.  On validation failure, show error messages.
    7.  Disclaimer present.

**Story 3.2: Implement LocalBusiness Schema**
* **As a** search engine,
* **I want** to read structured data about the local business,
* **so that** I can display rich results and better understand the business's details (location, services, hours).
* **Acceptance Criteria:**
    1.  A new component (e.g., `SchemaOrg.tsx`) is created.
    2.  This component generates a JSON-LD `<script type="application/ld+json">` tag.
    3.  The JSON-LD contains valid `LocalBusiness` schema (or a subtype like `Plumber`).
    4.  Schema includes **accurate and NAP-consistent** details: `@type`, `name`, `address` (with `addressLocality: Iași`), `telephone`, `openingHoursSpecification`, `image`, `url`, `priceRange` (optional), `description` (using keywords).
    5.  The `SchemaOrg` component is included in the root `layout.tsx` so the script tag appears in the `<head>` of the page.
    6.  The generated schema validates correctly using the Schema Markup Validator and Google Rich Results Test.

**Story 3.3: Final SEO Metadata, Footer & Deploy**
* **As a** developer,
* **I want** to finalize SEO tags, add a footer, and deploy the live site,
* **so that** the site is fully optimized and publicly accessible.
* **Acceptance Criteria:**
    1.  Root `layout.tsx` is updated with the **final, keyword-rich Romanian `<title>` and `<meta description>`**.
    2.  A `Footer` component is created, including NAP details (Name, Address, Phone) in plain text.
    3.  Site is successfully deployed to Vercel via GitHub.
    4.  Static build (`next build`) runs without errors.
    5.  All functionality re-tested on the live Vercel URL.
    6.  Live URL passes Google's Mobile-Friendly Test.

---

## Checklist Results Report

* This PRD has been checked against the `pm-checklist` (internally). It incorporates the SEO requirements and is ready for architecture.

---

## Next Steps

**Architect Prompt**
* This PRD provides requirements for the **SEO-focused**, static PascalConfort SPA. Create the Fullstack Architecture, ensuring implementation details cover:
    * Next.js static export setup (`output: 'export'`).
    * Tailwind CSS configuration for the design system.
    * **Implementation of technical SEO elements: semantic HTML structure in components, dynamic metadata generation in `layout.tsx`, image optimization with `next/image`, and inclusion of the `LocalBusiness` JSON-LD schema script.**
    * Client-side state management for Emergency Mode.
    * WhatsApp deep-link pattern.

---
