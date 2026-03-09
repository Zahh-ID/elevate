import type { Metadata } from "next";
import { Bebas_Neue, Manrope } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

const bebas = Bebas_Neue({ 
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const manrope = Manrope({ 
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const baseUrl = "https://elevate.syzzhd.web.id";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Elevate | Creative Studio & Digital Solutions",
    template: "%s | Elevate"
  },
  description: "A multidisciplinary studio delivering strategy, creative direction, and technology solutions for ambitious brands.",
  keywords: ["Creative Studio", "Digital Strategy", "Web Development", "UX/UI Design", "Art Direction", "Brand Strategy"],
  authors: [{ name: "Elevate Team" }],
  creator: "Elevate",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: "Elevate | Creative Studio & Digital Solutions",
    description: "A multidisciplinary studio delivering strategy, creative direction, and technology solutions for ambitious brands.",
    siteName: "Elevate",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Elevate Creative Studio",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elevate | Creative Studio & Digital Solutions",
    description: "Strategy, creative direction, and technology solutions for ambitious brands.",
    images: ["/og-image.png"],
    creator: "@elevatedevs",
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebas.variable} ${manrope.variable}`}>
      <body className="bg-[#0f0f0f] text-[#fefefe] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
             __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Elevate",
              "image": `${baseUrl}/og-image.png`,
              "description": "A multidisciplinary creative studio delivering strategy, design, and technology solutions.",
              "url": baseUrl,
              "logo": `${baseUrl}/favicon/apple-touch-icon.png`,
              "sameAs": [
                "https://twitter.com/elevatedevs",
                "https://github.com/elevatedevs"
              ],
              "serviceType": ["Creative Direction", "UX/UI Design", "Web Development", "Technology Strategy"]
            })
          }}
        />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
