import "./globals.css";
import { site } from "@/lib/site";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#090a0c",
};

export const metadata = {
  metadataBase: new URL(site.url),
  title: "Garage MV Mécanique | Mécanique Générale & Dépannage à Castres (81)",
  description: "Garage MV Mécanique à Castres (81). Vincent vous accueille pour vos révisions complètes, mécanique générale, prise de rendez-vous en ligne et dépannages d'urgence pour vacanciers et gens de passage. Note 4.9/5 (48 avis).",
  keywords: [
    "Garage MV Mécanique",
    "garage castres",
    "mécanique castres",
    "dépannage urgence castres",
    "vacanciers dépannage castres",
    "pompe à eau castres",
    "crevaison castres",
    "révision voiture castres",
    "49 chemin des meules",
    "vincent mv mécanique"
  ],
  authors: [{ name: "Garage MV Mécanique - Vincent" }],
  robots: "index, follow",
  openGraph: {
    title: "Garage MV Mécanique Castres | Révisions & Dépannages d'Urgence",
    description: "Vincent vous accueille au 49 Chemin des Meules à Castres. Révision complète, mécanique générale, dépannage rapide vacanciers et prise de RDV en ligne. 4.9/5 sur Google.",
    url: site.url,
    siteName: "Garage MV Mécanique",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Garage MV Mécanique Castres"
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
