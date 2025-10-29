import Script from 'next/script';
import { Plumber, WithContext } from 'schema-dts';

const jsonLd: WithContext<Plumber> = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  "name": "CONFORT INSTAL",
  "image": ["https://confort-instal.ro/images/logo.png"],
  "@id": "https://confort-instal.ro",
  "url": "https://confort-instal.ro",
  "telephone": "+40752399616",
  "description": "Instalator sanitar și termic în Iași. Intervenții rapide pentru urgențe, reparații, montaj centrale. Seriozitate și Garanție.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Strada Ion Creangă 15",
    "addressLocality": "Iași",
    "postalCode": "700123",
    "addressCountry": "RO"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 47.1621,
    "longitude": 27.5885
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": "09:00",
      "closes": "14:00"
    }
  ],
  "sameAs": [
    // Add social media links when available
  ],
  "areaServed": {
    "@type": "City",
    "name": "Iași"
  },
  "priceRange": "$$"
};

export function SchemaOrg() {
  return (
    <Script
      id="jsonld-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}