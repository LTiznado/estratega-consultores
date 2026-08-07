import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") || requestHeaders.get("host") || "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") || (host.includes("localhost") ? "http" : "https");
  const base = new URL(`${protocol}://${host}`);

  return {
    metadataBase: base,
    title: "Estratega Consultores | Reestructuración y consultoría corporativa",
    description: "Consultoría especializada en reestructuración, refinanciación, liquidación y valorización de empresas en Perú.",
    openGraph: {
      title: "Estratega Consultores",
      description: "Decisiones complejas. Estrategias claras.",
      type: "website",
      locale: "es_PE",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "Estratega Consultores — Decisiones complejas. Estrategias claras." }],
    },
    twitter: { card: "summary_large_image", title: "Estratega Consultores", description: "Decisiones complejas. Estrategias claras.", images: ["/og.png"] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es-PE"><body className={geist.variable}>{children}</body></html>;
}
