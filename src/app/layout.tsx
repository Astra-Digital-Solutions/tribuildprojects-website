import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "Tri Build Projects | Residential Scaffolding & Temporary Fencing Sydney",
    template: "%s | Tri Build Projects",
  },
  description:
    "Tri Build Projects Pty Ltd is Sydney's specialist in residential scaffolding, edge protection, roof access, and temporary fencing. Serving Sydney-wide. Call 0489 150 675.",
  keywords: [
    "residential scaffolding sydney",
    "temporary fencing hire",
    "edge protection sydney",
    "roof access scaffolding",
    "mobile scaffold hire",
    "scaffold erect dismantle sydney",
    "tri build projects",
  ],
  metadataBase: new URL("https://tribuildprojects.com.au"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Tri Build Projects | Residential Scaffolding & Temporary Fencing Sydney",
    description:
      "Expert residential scaffolding, edge protection, roof access, and temporary fencing serving Sydney wide. Safe, compliant, and cost-effective scaffolding solutions.",
    url: "https://tribuildprojects.com.au",
    siteName: "Tri Build Projects",
    locale: "en_AU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  params,
}: Readonly<{
  children: React.ReactNode;
  params?: unknown;
}>) {
  return (
    <html lang="en-AU" className="h-full antialiased dark">
      <head>
        <meta name="theme-color" content="#090d16" />
      </head>
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 scaffold-pattern">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-JHSP5E7J7M"
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-JHSP5E7J7M');
        `}
      </Script>
    </html>
  );
}
