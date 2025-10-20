
-----

# PascalConfort UI/UX Specification

## Introduction

This document defines the user experience goals, information architecture, user flows, and visual design specifications for PascalConfort, focusing on high trust, rapid conversion, and supporting **strong local SEO for `instalator Iași`**. The design must be clean, modern, sleek, and innovative.

### Overall UX Goals & Principles

**Target User Personas**

  * **"The Emergency User":** Mobile-first, urgent need, searches "`urgență instalații Iași`". Values speed, clarity, immediate contact.
  * **"The Planner":** Mobile/Desktop, research-focused, searches "`instalator autorizat Iași`". Values professionalism, service details, visual proof (gallery).

**Usability Goals**

  * **Ease of Contact:** Single tap call/WhatsApp from anywhere.
  * **Clarity:** Instantly understand services and credibility. **Content must clearly target relevant keywords.**
  * **Trust:** Professional design, real photos, clear credentials.
  * **Innovation:** Smooth interactions, helpful Emergency Mode.

**Design Principles**

1.  **Conversion First:** Prioritize Call/WhatsApp button visibility/usability.
2.  **Symmetry & Space:** Grid-based layout builds subconscious trust.
3.  **Authenticity:** Real photos only, with **SEO-friendly `alt` text**.
4.  **Mobile is Master:** Perfect mobile rendering is non-negotiable.
5.  **SEO-Supportive Content:** Design must accommodate **keyword-rich text naturally**.

**Change Log**
| Date       | Version | Description                   | Author           |
| :--------- | :------ | :---------------------------- | :--------------- |
| 2025-10-19 | 1.1     | Added SEO content considerations | Sally (UX Expert) |
| 2025-10-19 | 1.0     | Initial UI/UX Spec based on PRD | Sally (UX Expert) |

-----

## Information Architecture (IA)

**Site Map / Scroll Order**

```mermaid
graph TD
    A[Header (Sticky)] --> B(Hero Section - <h1>);
    B --> C(Trust-Builder Bar);
    C --> D(Services Section - <section id='servicii'>, <h2>);
    D --> E(About Me Section - <section id='despre'>, <h2>);
    E --> F(Portfolio / Gallery - <section id='portofoliu'>, <h2>);
    F --> G(FAQ Section - <section id='faq'>, <h2>);
    G --> H(Contact Form Section - <section id='contact'>, <h2>);
    H --> I(Footer);

    A -- Nav Link --> D;
    A -- Nav Link --> E;
    A -- Nav Link --> H;
```

*(Note: Added semantic heading levels for SEO)*

**Navigation Structure**

  * **Primary (Sticky Header):** Logo, Scroll Links (Servicii, Despre, Contact), Emergency Toggle, WhatsApp Button, Call Button. Uses `<nav>`.

-----

## User Flows

**(Flows remain the same as previous version, focusing on Call/WhatsApp/Form conversion)**

-----

## Wireframes & Mockups

  * **Primary Design Files:** In-code via Tailwind CSS. No external design files.
  * **Key Layouts:** Emphasis on symmetrical grids (2-col mobile, 3/4-col desktop for Services/Gallery), generous padding, clear visual hierarchy. **Headings (`<h1>`-`<h3>`) must be used correctly for SEO structure.**

-----

## Component Library / Design System

  * **Design System Approach:** Tailwind CSS utility-first.
  * **Core Components:** `Button`, `ServiceCard`, `GalleryImage`, `AccordionItem`, `Section`. **Components must render semantic HTML (e.g., ServiceCard title uses `<h3>`).**

-----

## Branding & Style Guide

  * **Color Palette:** Deep Blue (`blue-900`), White (`#FFFFFF`), Light Gray (`gray-100`), Accent Orange/Gold (`orange-500`), Emergency Red (`red-600`), Text Gray (`gray-900`).
  * **Typography:** `font-sans` (Inter/Poppins via `next/font`). Clear hierarchy using Tailwind `text-` utilities (e.g., `text-5xl` for `<h1>`, `text-3xl` for `<h2>`).
  * **Iconography:** Heroicons.
  * **Spacing:** Standard Tailwind scale. Layouts use `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.

-----

## Accessibility Requirements

  * **Compliance Target:** WCAG 2.1 Level AA.
  * **Key Requirements:** Keyboard navigation, sufficient color contrast, visible focus states, **semantic HTML structure**, **Romanian `alt` text for all images**.

-----

## Responsiveness Strategy

  * **Breakpoints:** Standard Tailwind (sm, md, lg, xl).
  * **Adaptation:** Mobile-first single column, transitioning to multi-column grids on larger screens. Sticky header adapts height/padding. Tap targets remain large on mobile.

-----

## Animation & Micro-interactions

  * **Principles:** Subtle, professional, performance-focused.
  * **Animations:** Scroll-reveal (AOS/Framer Motion), smooth scroll, subtle button hovers, smooth accordion expand/collapse.

-----

## Performance Considerations

  * **Goals:** Lighthouse Performance \> 95. Near-instant load.
  * **Strategies:** Next.js `<Image>` optimization, `next/font`, static export.

-----

## Next Steps

**Immediate Actions**

1.  Proceed to `Fullstack Architecture Mode`.

**Design Handoff Checklist**

  * [x] Flows documented
  * [x] Components identified
  * [x] Accessibility defined
  * [x] Responsive strategy clear
  * [x] Branding defined
  * [x] Performance goals set
  * [x] **SEO considerations (semantic HTML, alt text, content structure) noted.**

-----

