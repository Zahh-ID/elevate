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
    // Brand Core
    "Elevate", "Elevate Studio", "Elevate Digital", "Elevate Agency", "Elevate Web3", "Elevate Devs",
    "Elevate Indonesia", "Elevate Indo", "Elevate Your Business", "Elevate Your Idea", "Elevate Build",
    // Strategy
    "Elevate Creative Direction", "Elevate Technology Strategy", "Elevate Digital Strategy",
    "Elevate Content Strategy", "Elevate Brand Strategy", "Elevate Growth Strategy",
    "Elevate Product Strategy", "Elevate Digital Transformation", "Elevate Business Consulting",
    "Elevate Market Research", "Elevate Innovation Consulting", "Elevate Startup Advisory",
    "Elevate Technical Consulting", "Elevate Go-To-Market Strategy",
    // Creative & Design
    "Elevate Art Direction", "Elevate UX Design", "Elevate UI Design", "Elevate UX/UI Design",
    "Elevate Brand Identity", "Elevate Logo Design", "Elevate Visual Identity",
    "Elevate Graphic Design", "Elevate Illustration", "Elevate Motion Design",
    "Elevate Motion Graphics", "Elevate Animation Studio", "Elevate Micro-Interactions",
    "Elevate Interactive Design", "Elevate Design System", "Elevate Typography Design",
    "Elevate Social Media Design", "Elevate Web Design", "Elevate Landing Page Design",
    "Elevate Dashboard Design", "Elevate App Design",
    // Web & App Development
    "Elevate Web Development", "Elevate Frontend Development", "Elevate Backend Development",
    "Elevate Full Stack Development", "Elevate Mobile Development", "Elevate iOS Development",
    "Elevate Android Development", "Elevate React Development", "Elevate Next.js Development",
    "Elevate Progressive Web App", "Elevate E-Commerce Development", "Elevate Custom Website",
    "Elevate Responsive Web Design", "Elevate API Development", "Elevate SaaS Development",
    "Elevate CMS Development", "Elevate Performance Optimization", "Elevate SEO Optimization",
    // Cloud & Infrastructure
    "Elevate Cloud Infrastructure", "Elevate DevOps", "Elevate CI/CD Pipeline",
    "Elevate Server Management", "Elevate Scalable Infrastructure", "Elevate Microservices",
    "Elevate System Architecture", "Elevate Cloud Migration", "Elevate Database Design",
    // Blockchain & Web3
    "Elevate Blockchain Development", "Elevate Smart Contract Development", "Elevate Web3 Solutions",
    "Elevate DeFi Protocol", "Elevate dApp Development", "Elevate Cosmos Ecosystem",
    "Elevate Solana Development", "Elevate EVM Development", "Elevate Cross-Chain Integration",
    "Elevate Token Development", "Elevate NFT Development", "Elevate Crypto Engineering",
    "Elevate Web3 Consulting", "Elevate DeFi Consulting", "Elevate Decentralized Application",
    // Generic (catch non-branded searches too)
    "Digital Agency", "Digital Agency Indonesia", "Creative Studio", "Design Studio",
    "Web3 Infrastructure", "Blockchain Solutions", "Smart Contract Architecture",
    "DeFi Protocol Design", "Web Development Agency", "Mobile App Agency",
    "Full Service Agency", "Premium Digital Agency", "Tech Studio", "Syzzhd",
    "Creative Agency", "Design Agency Indonesia", "Web Development Indonesia",
    "Brand Identity Agency", "UX/UI Agency", "Motion Design Studio",
  ],
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
