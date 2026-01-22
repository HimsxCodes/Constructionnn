export function SchemaMarkup() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "BuildPro Construction",
    image: "https://buildpro.com/logo.png",
    "@id": "https://buildpro.com",
    url: "https://buildpro.com",
    telephone: "+1234567890",
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Construction Ave",
      addressLocality: "Building City",
      addressRegion: "BC",
      postalCode: "12345",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.7128,
      longitude: -74.006,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "16:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/buildpro",
      "https://www.linkedin.com/company/buildpro",
      "https://twitter.com/buildpro",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Construction Services",
    provider: {
      "@type": "LocalBusiness",
      name: "BuildPro Construction",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Construction Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Residential Construction",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial Construction",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Industrial Construction",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Renovation Services",
          },
        },
      ],
    },
  };

  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "450",
    bestRating: "5",
    worstRating: "1",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />
    </>
  );
}
