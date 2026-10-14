/**
 * Informations réelles HM Auto 24 - Bergerac
 */
export const site = {
  name: "HM Auto 24",
  tagline: "Mécanique générale & Diagnostic rapide à Bergerac",
  phone: "07 83 23 28 35",
  phoneHref: "tel:0783232835",
  phoneDisplay: "07 83 23 28 35",
  whatsappHref: "https://wa.me/33783232835",
  address: "39 Route Pierre Pinson",
  postalCode: "24100",
  city: "Bergerac",
  fullAddress: "39 Route Pierre Pinson, 24100 Bergerac",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=39+Route+Pierre+Pinson+Bergerac",
  rating: {
    score: "5.0",
    max: "5",
    reviewsCount: 7,
    source: "Avis vérifiés Google",
  },
  hours: [
    { days: "Lundi – Vendredi", hours: "09h00 – 19h00" },
    { days: "Samedi", hours: "09h00 – 14h00" },
    { days: "Dimanche", hours: "Fermé" },
  ],
  advantages: [
    {
      title: "Diagnostic Immédiat",
      desc: "Prise en charge sans attendre 1 semaine. Recherche de panne rapide à la valise.",
      badge: "Zéro attente",
      icon: "zap"
    },
    {
      title: "Dépannage & Déplacement",
      desc: "Intervention possible à domicile pour batterie, démarrage et petites pannes.",
      badge: "À domicile",
      icon: "truck"
    },
    {
      title: "Minutie & Transparence",
      desc: "Devis clair avant toute intervention. Aucune mauvaise surprise sur la facture.",
      badge: "100% Transparent",
      icon: "shield"
    },
    {
      title: "Réactivité Maximale",
      desc: "Disponibilité 6j/7, réponse rapide au téléphone et accueil soigné.",
      badge: "6j / 7",
      icon: "clock"
    }
  ],
  services: [
    {
      id: "mecanique",
      title: "Mécanique Générale",
      subtitle: "Entretien complet & réparations",
      desc: "Distribution, embrayage, vidange, amortisseurs, échappement, roulements. Toutes marques.",
      image: "/images/atelier.jpg",
      tags: ["Distribution", "Embrayage", "Vidange & Filtres", "Suspensions"]
    },
    {
      id: "diagnostic",
      title: "Diagnostic Électronique",
      subtitle: "Recherche de panne immédiate",
      desc: "Lecture des voyants moteur, test des capteurs, analyse calculateurs et effacement des défauts.",
      image: "/images/diagnostic.jpg",
      tags: ["Valise multimarque", "Voyant moteur", "Capteurs", "Batterie & Alternateur"]
    },
    {
      id: "freinage",
      title: "Freinage & Liaison au Sol",
      subtitle: "Sécurité & tenue de route",
      desc: "Remplacement disques et plaquettes, purge liquide de frein, vérification trains roulants et rotules.",
      image: "/images/freinage.jpg",
      tags: ["Disques & Plaquettes", "Purge liquide", "Rotules", "Amortisseurs"]
    },
    {
      id: "domicile",
      title: "Dépannage & Batterie à Domicile",
      subtitle: "Sur Bergerac et environs",
      desc: "Véhicule immobilisé ? Déplacement rapide pour changement de batterie, test de charge ou démarrage d'urgence.",
      image: "/images/hero.jpg",
      tags: ["Pose batterie à domicile", "Test alternateur", "Dépannage local", "Bergerac et alentours"]
    }
  ],
  testimonials: [
    {
      author: "Julien M.",
      rating: 5,
      comment: "Remplacement de batterie fait directement à mon domicile en un temps record. Très professionnel, courtois et arrangeant. Je recommande les yeux fermés !",
      date: "Il y a 2 semaines"
    },
    {
      author: "Karine D.",
      rating: 5,
      comment: "Diagnostic fait tout de suite alors que tous les autres garages me demandaient d'attendre 10 jours. Problème résolu dans l'après-midi, tarif très honnête.",
      date: "Il y a 1 mois"
    },
    {
      author: "Sofiane B.",
      rating: 5,
      comment: "Mécanicien minutieux et passionné. Prend le temps d'expliquer ce qui ne va pas sans pousser à la consommation. Enfin un garage de confiance sur Bergerac.",
      date: "Il y a 3 semaines"
    }
  ]
};
