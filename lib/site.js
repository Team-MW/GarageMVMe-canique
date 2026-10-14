/**
 * Informations réelles Garage MV Mécanique - Castres (81)
 * Patron : Vincent
 */
export const site = {
  name: "Garage MV Mécanique",
  fullName: "Garage MV Mécanique - Castres",
  owner: "Vincent",
  tagline: "Mécanique générale, Révisions complètes & Dépannages d'urgence à Castres",
  url: "https://www.mvmecanique-castres.fr",
  phone: "07 85 82 62 12",
  phoneHref: "tel:0785826212",
  phoneDisplay: "07 85 82 62 12",
  whatsappHref: "https://wa.me/33785826212?text=Bonjour%20Vincent%2C%20je%20souhaite%20prendre%20un%20rendez-vous%20ou%20un%20renseignement%20pour%20mon%20v%C3%A9hicule.",
  address: "49 Chemin des Meules",
  postalCode: "81100",
  city: "Castres",
  department: "Tarn (81)",
  fullAddress: "49 Chemin des Meules, 81100 Castres",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=49+Chemin+des+Meules+81100+Castres",
  rating: {
    score: "4.9",
    max: "5",
    reviewsCount: 48,
    source: "Avis vérifiés Google",
  },
  hours: [
    { days: "Lundi – Vendredi", hours: "08h30 – 19h00" },
    { days: "Samedi", hours: "09h00 – 13h00 (Urgences & Dépannages)" },
    { days: "Dimanche", hours: "Urgences sur appel" },
  ],
  advantages: [
    {
      title: "Dépannage Rapide & Vacanciers",
      desc: "Prise en charge d'urgence pour les gens de passage et vacanciers : pompe à eau, crevaison, surchauffe.",
      badge: "Urgences & Vacances",
      icon: "truck"
    },
    {
      title: "Mécanique Générale & Révisions",
      desc: "Révisions complètes toutes marques, distribution, embrayage, freinage dans les règles de l'art.",
      badge: "Toutes marques",
      icon: "wrench"
    },
    {
      title: "Accueil Chaleureux par Vincent",
      desc: "Un accueil très sympa, des explications claires et une vraie écoute humaine pour vous conseiller au mieux.",
      badge: "Patron Vincent",
      icon: "heart"
    },
    {
      title: "Prix Raisonnables & Transparents",
      desc: "Tarifs justes et devis clair sans surprise. Une qualité professionnelle accessible à tous les budgets.",
      badge: "Prix justes",
      icon: "shield"
    }
  ],
  services: [
    {
      id: "mecanique-revisions",
      title: "Mécanique Générale & Révisions",
      subtitle: "Entretien complet & moteur",
      desc: "Révision constructeur complète, vidange filtres, courroie de distribution, embrayage, amortisseurs et échappement.",
      image: "/images/atelier.jpg",
      tags: ["Révision complète", "Courroie & Distribution", "Embrayage", "Vidange & Filtres"]
    },
    {
      id: "depannage-urgence",
      title: "Dépannage d'Urgence & Vacanciers",
      subtitle: "Spécial gens de passage à Castres",
      desc: "Véhicule en panne sur la route des vacances ? Remplacement express pompe à eau, crevaison, démarreur, batterie.",
      image: "/images/hero.jpg",
      tags: ["Pompe à eau", "Crevaison express", "Surchauffe", "Gens de passage"]
    },
    {
      id: "pneumatiques-freins",
      title: "Freinage & Liaison au Sol",
      subtitle: "Sécurité & tenue de route",
      desc: "Remplacement disques et plaquettes de frein, purge liquide de frein, contrôle trains roulants, amortisseurs et géométrie.",
      image: "/images/freinage.jpg",
      tags: ["Plaquettes & Disques", "Purge freins", "Suspensions", "Contrôle sécurité"]
    },
    {
      id: "diagnostic-electronique",
      title: "Diagnostic Électronique & Panne",
      subtitle: "Valise multimarque dernière génération",
      desc: "Voyant moteur allumé ? Diagnostic électronique immédiat pour localiser l'origine exacte de la panne sans perte de temps.",
      image: "/images/diagnostic.jpg",
      tags: ["Valise électronique", "Voyants moteur", "Batterie & Alternateur", "Défauts calculateurs"]
    }
  ],
  testimonials: [
    {
      author: "Marc & Valérie L.",
      rating: 5,
      comment: "Panne de pompe à eau sur la route des vacances près de Castres. Vincent nous a reçus immédiatement avec un accueil d'une gentillesse rare. Diagnostic et réparation faits dans la journée à un tarif très raisonnable. Vacances sauvées !",
      date: "Avis vérifié Google"
    },
    {
      author: "Stéphane D.",
      rating: 5,
      comment: "Crevaison d'urgence alors que j'étais en déplacement professionnel. Vincent a réglé le problème en un clin d'œil avec le sourire et sans abuser sur le prix. Un vrai mécanicien honnête et super sympa.",
      date: "Avis vérifié Google"
    },
    {
      author: "Nathalie B.",
      rating: 5,
      comment: "Révision complète de ma voiture avec changement courroie de distribution. Tout est clair, expliqué de A à Z par Vincent. Prix très corrects par rapport aux grandes concessions. Je recommande le Garage MV Mécanique !",
      date: "Avis vérifié Google"
    },
    {
      author: "Julien M.",
      rating: 5,
      comment: "48 avis et une note méritée de 4.9/5 ! Vincent est à l'écoute, réactif et très compétent. C'est rassurant d'avoir un professionnel pareil sur Castres.",
      date: "Avis vérifié Google"
    }
  ]
};
