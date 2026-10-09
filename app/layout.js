import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import { site } from "../lib/site";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "ServicePro — Billing, Inventory & Repair Service Management Software for Electronics Shops",
    template: "%s | ServicePro by BUYP Technologies",
  },
  description: site.description,
  keywords: [
    "service centre management software",
    "mobile repair shop software India",
    "electronics shop billing software",
    "repair shop inventory management",
    "service ticket software",
    "GST billing software for electronics store",
    "laptop repair shop software",
    "ServicePro BUYP",
  ],
  authors: [{ name: "BUYP Technologies Pvt. Ltd." }],
  openGraph: {
    title: "ServicePro — Run Your Service Centre Smarter",
    description: site.description,
    url: site.url,
    siteName: "ServicePro",
    images: ["/images/brand/logo-full.png"],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ServicePro — Run Your Service Centre Smarter",
    description: site.description,
    images: ["/images/brand/logo-full.png"],
  },
  icons: {
    icon: "/images/brand/logo-icon.png",
    shortcut: "/images/brand/logo-icon.png",
    apple: "/images/brand/logo-icon.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.company.legalName,
  url: site.url,
  logo: `${site.url}/images/brand/logo-full.png`,
  email: site.company.email,
  telephone: site.company.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "158, S.M Complex",
    addressLocality: "Tenkasi",
    addressRegion: "Tamil Nadu",
    postalCode: "627811",
    addressCountry: "IN",
  },
  sameAs: [site.company.linkedin, site.company.instagram],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ServicePro",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: site.description,
  url: site.url,
  offers: [
    { "@type": "Offer", name: "Starter Plan", price: "399", priceCurrency: "INR", priceValidUntil: "2027-12-31" },
    { "@type": "Offer", name: "Growth Plan", price: "2199", priceCurrency: "INR", priceValidUntil: "2027-12-31" },
    { "@type": "Offer", name: "Pro Business Plan", price: "3999", priceCurrency: "INR", priceValidUntil: "2027-12-31" },
  ],
  publisher: {
    "@type": "Organization",
    name: site.company.legalName,
  },
  areaServed: "IN",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('servicepro-theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-white font-sans antialiased transition-colors dark:bg-slate-950">
        <JsonLd data={organizationSchema} />
        <JsonLd data={softwareSchema} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
