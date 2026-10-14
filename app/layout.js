import "./globals.css";
import { site } from "@/lib/site";

export const metadata = {
  title: "HM Auto 24 | Garage Mécanique & Diagnostic Rapide à Bergerac",
  description: "Garage automobile HM Auto 24 à Bergerac. Diagnostic immédiat à la valise, mécanique générale, remplacement de batterie à domicile, réactivité et devis clair sans attente.",
  keywords: [
    "HM Auto 24",
    "garage bergerac",
    "mécanique bergerac",
    "diagnostic auto bergerac",
    "dépannage batterie domicile bergerac",
    "réparation voiture 24",
    "39 route pierre pinson"
  ],
  authors: [{ name: "HM Auto 24" }],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title: "HM Auto 24 | Votre Garage Automobile à Bergerac",
    description: "Diagnostic immédiat, mécanique générale toutes marques et dépannage à domicile sur Bergerac.",
    url: site.url,
    siteName: "HM Auto 24",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "HM Auto 24 Bergerac"
      }
    ],
    locale: "fr_FR",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
