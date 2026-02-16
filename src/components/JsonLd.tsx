import { SITE } from "@/lib/constants";

export function LegalServiceJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: SITE.name,
    description: SITE.slogan,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Paseo de la Reforma 250",
      addressLocality: "Ciudad de México",
      addressCountry: "MX",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
