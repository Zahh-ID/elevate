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

const baseUrl = "https://zahh-id.github.io/elevate";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Elevate | Premium Web3 Consulting & Engineering",
    template: "%s | Elevate"
  },
  description: "Architecting the future of decentralized finance. Premium Web3 consulting, smart contract engineering, and dApp development for elite protocols.",
  keywords: ["Web3 Consulting", "Smart Contract Development", "DeFi Architecture", "Blockchain Engineering", "Elevate Web3", "Tokenomics Design"],
  authors: [{ name: "Elevate Team" }],
  creator: "Elevate",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: "Elevate | Premium Web3 Consulting & Engineering",
    description: "Architecting the future of decentralized finance. Premium Web3 consulting, smart contract engineering, and dApp development.",
    siteName: "Elevate",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Elevate Premium Web3 Consulting",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elevate | Premium Web3 Consulting & Engineering",
    description: "Architecting the future of decentralized finance. Smart contract engineering and DeFi development.",
    images: ["/og-image.png"],
    creator: "@elevate_web3",
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
              "description": "Premium Web3 consulting and smart contract engineering studio.",
              "url": baseUrl,
              "logo": `${baseUrl}/favicon/apple-touch-icon.png`,
              "sameAs": [
                "https://twitter.com/elevate_web3",
                "https://github.com/elevate-web3"
              ],
              "serviceType": ["Web3 Consulting", "Smart Contract Development", "DeFi Architecture"]
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
