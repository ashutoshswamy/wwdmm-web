import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/app/components/layout/nav-bar";
import { SiteFooter } from "@/app/components/layout/site-footer";
import { headquarters, contact } from "@/lib/data";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const siteUrl = "https://worldwideedigital.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "World Widee Digital Media Marketing (WWD)",
    template: "%s - WWD",
  },
  description:
    "World Widee Digital pairs two decades of media, PR and journalism experience with a working global trade desk - digital marketing, celebrity promotion, import/export and event curation, run out of Maharashtra, India.",
  keywords: [
    "PR agency",
    "media agency",
    "celebrity promotion",
    "influencer marketing",
    "import export agency India",
    "global trade",
    "digital marketing agency Mumbai",
  ],
  openGraph: {
    title: "World Widee Digital Media Marketing - Media, PR & Global Trade",
    description:
      "Two decades of media and PR experience, one working bridge to global trade. Digital marketing, celebrity promotion, import/export and event curation from Maharashtra, India.",
    url: siteUrl,
    siteName: "World Widee Digital",
    type: "website",
    images: [{ url: "/og-image.png", width: 1730, height: 909 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "World Widee Digital Media Marketing - Media, PR & Global Trade",
    description:
      "Two decades of media and PR experience, one working bridge to global trade.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "World Widee Digital Media Marketing",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}/logo.png`,
  description:
    "PR, media, celebrity promotion, import/export and event curation agency based in Maharashtra, India.",
  email: contact.email,
  telephone: contact.phones[0],
  address: {
    "@type": "PostalAddress",
    streetAddress: headquarters.line1,
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  sameAs: [],
};

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('wwdmm-theme');
    if (stored === 'dark') document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <NavBar />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
