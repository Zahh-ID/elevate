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
  keywords: [
    "Elevate", "Elevate Web3", "Web3 Infrastructure", "Blockchain Solutions", "Smart Contract Architecture", 
    "Cosmos Ecosystem", "Solana Development", "EVM Development", "DeFi Protocol Design", "Liquidity Systems",
    "Cross-Chain Integration", "Blockchain Data Infrastructure", "Web3 Consulting", "Crypto Engineering",
    "Creative Studio", "Digital Strategy", "Brand Strategy", "Indonesia Web3", "Syzzhd", "Elevate Indonesia", "Elevate indo", "Elevate Your Bussiness", "Elevate Build", "Elevate Your Bussiness", "Elevate your idea"  ],
  authors: [{ name: "Elevate Team", url: "https://elevate.syzzhd.web.id" }],
  creator: "Elevate Web3 Solutions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: "Elevate | Premium Web3 Infrastructure & Solutions",
    description: "A specialized Web3 studio delivering research-driven smart contract architecture, cross-chain infrastructure, and DeFi mechanics for ambitious protocols.",
    siteName: "Elevate Web3 Solutions",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Elevate Web3 Protocol Engineering",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elevate | Premium Web3 Infrastructure",
    description: "Smart contract architecture, cross-chain infrastructure, and DeFi solutions.",
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
              "name": "Elevate Web3 Solutions",
              "image": `${baseUrl}/og-image.png`,
              "description": "Specialized Web3 engineering studio focused on protocol design, DEX mechanics, and cross-chain infrastructure.",
              "url": baseUrl,
              "logo": `${baseUrl}/favicon/apple-touch-icon.png`,
              "sameAs": [
                "https://twitter.com/elevatedevs",
                "https://github.com/elevatedevs",
                "https://instagram.com/elevate.devs",
                "https://tiktok.com/@elevate.devs"
              ],
              "serviceType": ["Smart Contract Development", "Blockchain Infrastructure", "DeFi Consulting", "Protocol Architecture"]
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
