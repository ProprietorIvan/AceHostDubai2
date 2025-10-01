import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preconnect to domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Font optimization */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* Font display optimization */
              @font-face {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 300;
                font-display: swap;
              }
              @font-face {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
              }
              @font-face {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 500;
                font-display: swap;
              }
              @font-face {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 600;
                font-display: swap;
              }
              @font-face {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 700;
                font-display: swap;
              }
            `,
          }}
        />

        {/* Preload critical assets */}
        <link rel="preload" href="/logo.png" as="image" />

        {/* Add favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="google-site-verification"
          content="UmTMmjHtW3Q_-Uzi8WXxrPgE2YBsv0RXCQuB_Y"
        />
        
        {/* Additional metadata for search engines */}
        <meta name="application-name" content="AceHost Whistler" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        
        {/* OpenGraph metadata for social sharing and search results */}
        <meta property="og:site_name" content="AceHost Whistler" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://acehost.ca/logo.png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:alt" content="AceHost Whistler Logo" />
        
        {/* Twitter Card data */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image" content="https://acehost.ca/logo.png" />

        {/* Enable DNS prefetching */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Google Sitelinks Search Box */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://acehost.ca/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://acehost.ca/properties?search={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
