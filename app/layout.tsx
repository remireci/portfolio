import Header from './components/Header';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import BootstrapTooltip from './components/BootstrapTooltip';
import "./styles/main.css";
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Analytics } from "@vercel/analytics/react"
import CookieBanner from './components/cookieBanner';
import { Suspense } from "react";
import GoogleAnalytics from './components/GoogleAnalytics';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "reciproque",
  description: "web and software development",
  keywords: 'ful stack, cloud based back end, react, next.js, (No)SQL, Belgium, France, Luxembourg, web application development, software engineer, business software, data processing',
  icons: {
    icon: '/favicon.ico',
    // apple: '/apple-icon.png',
    // other: {
    //   rel: 'apple-touch-icon',
    //   url: '/apple-touch-icon.png',
    // },
  },
};

// add JSON-LD structured data
const addJsonLd = () => {
  return {
    __html: `{
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "reciproque | web & software development",
      "alternateName": "it services",
      "url": "https://www.reciproque.eu",
      "logo": "",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+32499167510",
        "contactType": "",
        "areaServed": "BE", "FR", "LU",
        "availableLanguage": "Dutch", "French", "English"
      },
    }  
  };
  `,
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const measurementId = process.env.GOOGLE_ANALYTICS;

  console.log("this is the id", measurementId);

  return (
    <html lang="en">
      <head>
        {/* <title>Reciproque</title>
        <link rel="icon" href="/static/assets/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/static/assets/apple-icon-180x180.png" />
        <link href="/static/main.3f6952e4.css" rel="stylesheet" />
        <link href="/static/styles.css" rel="stylesheet" /> */}

        {/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addJsonLd()}
          key="product-jsonld"
        />
      </head>
      {measurementId && <GoogleAnalytics GA_MEASUREMENT_ID={measurementId} />}
      <body>
        <Suspense fallback={<div>Loading analytics...</div>}>
          <div className='head-container'>
            <div id="site-border-left"></div>
            <div id="site-border-right"></div>
            <div id="site-border-top"></div>
            <div id="site-border-bottom"></div>
            <Header />
            {children}
            <CookieBanner />
            <Analytics />
            <Footer />
            <BootstrapTooltip />
          </div>
          <ToastContainer />
        </Suspense>
      </body>
    </html>
  );
}