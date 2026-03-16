import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

import { SITE_NAME, SITE_DESCRIPTION, SITE_URL, CONTACT, SOCIAL_LINKS } from "@/lib/constants";

// ===== FONTS =====
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// ===== SEO GLOBAL METADATA =====
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  title: {
    default: `${SITE_NAME} - Economize até 30% na sua conta de energia`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "economia de energia",
    "energia renovável",
    "energia solar",
    "energia limpa",
    "créditos de energia",
    "conta de luz",
    "PagLuz",
    "economia conta de luz",
    "energia sustentável",
    "gerador de energia",
    "consumidor de energia",
    "Santa Catarina",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: SITE_NAME,
    title: `${SITE_NAME} - Economize até 30% na sua conta de energia`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} - Economize até 30% na sua conta de energia`,
    description: SITE_DESCRIPTION,
  },
  icons: {
    icon: "/assets/favicon.svg",
    apple: "/assets/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#030303",
  width: "device-width",
  initialScale: 1,
};

// ===== ROOT LAYOUT =====
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-dark-bg text-white" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": SITE_NAME,
              "url": SITE_URL,
              "logo": `${SITE_URL}/assets/logo.svg`,
              "description": SITE_DESCRIPTION,
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": `+55${CONTACT.phoneRaw.substring(2)}`,
                "contactType": "customer service",
                "areaServed": "BR",
                "availableLanguage": "Portuguese"
              },
              "sameAs": [
                SOCIAL_LINKS.facebook,
                SOCIAL_LINKS.instagram,
                SOCIAL_LINKS.linkedin
              ]
            })
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
