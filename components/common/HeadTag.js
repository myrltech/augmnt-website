import React from "react";
import Head from "next/head";

export default function HeadTag({
  pageTitle,
  pageDescription,
  keywords,
  canonical,
  ogType,
  ogImage,
  ogTitle,
  ogDesription,
  ogSiteName,
}) {
  return (
    <Head>
      {/* title */}
      <title>{pageTitle}</title>

      {/* description */}
      <meta name="description" content={pageDescription} />

      {/* keywords */}
      <meta name="keywords" content={keywords} />

      {/* robots */}
      <meta name="robots" content="index,follow" />

      {/* og tags */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:width" content="600" />
      <meta property="og:image:height" content="300" />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDesription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={ogSiteName} />
      {/* canonical */}
      <link rel="canonical" href={canonical} />

      {/* favicon icon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

HeadTag.defaultProps = {
  pageTitle: "Augmnt",
  description: "Augmnt",
  keywords: "Nextjs",
  canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/`,
  // canonical: "http://slack.augmnt.team/",
  ogType: "website",
  ogImage:
    "https://res.cloudinary.com/sls/image/upload/v1646974581/augmnt/augmnt-logo_braq4j.png",
  ogTitle: "Augmnt",
  ogDesription: "Augmnt",
  ogSiteName: "slack.augmnt.team",
};
