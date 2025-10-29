import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { SchemaOrg } from "./components/SchemaOrg";
import { EmergencyProvider } from "./components/EmergencyProvider";
import { TransitionOverlay } from "./components/TransitionOverlay";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CONFORT INSTAL - Instalator Iași",
  description: "Instalator sanitar și termic în Iași. Intervenții rapide pentru urgențe, reparații, montaj centrale. Seriozitate și Garanție. Sună Acum!",
  keywords: "instalator Iași, urgențe instalații Iași, instalații sanitare Iași, instalații termice Iași, montaj centrale Iași, reparații instalații Iași",
  authors: [{ name: "CONFORT INSTAL" }],
  icons: {
    icon: "/images/portfolio/Confort-Instal_Yellow_Logo.png",
    apple: "/images/portfolio/Confort-Instal_Yellow_Logo.png",
  },
  openGraph: {
    title: "CONFORT INSTAL - Instalator Iași",
    description: "Instalator sanitar și termic în Iași. Intervenții rapide pentru urgențe, reparații, montaj centrale.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CONFORT INSTAL - Instalator Iași",
    description: "Instalator sanitar și termic în Iași. Intervenții rapide pentru urgențe, reparații, montaj centrale.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <head>
        <SchemaOrg />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased font-sans`}
      >
        <EmergencyProvider>
          {children}
          <TransitionOverlay />
        </EmergencyProvider>
      </body>
    </html>
  );
}
