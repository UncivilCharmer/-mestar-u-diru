// REPLACE ENTIRE FILE: src/lib/locales/hr.ts
type ServiceItem = {
  title: string;
  description: string;
  image: string;
  icon: string;
  features: string[];
};

type ContactDict = {
  title: string;
  subtitle: string;

  infoTitle: string;
  infoSubtitle: string;

  whyTitle: string;

  formTitle: string;
  formSubtitle: string;

  labels: {
    fullName: string;
    email: string;
    phone: string;
    urgency: string;
    service: string;
    description: string;
  };

  placeholders: {
    fullName: string;
    email: string;
    phone: string;
    urgency: string;
    service: string;
    description: string;
  };

  submit: string;

  requiredHint: string;

  validationRequired: string;
  success: string;

  smallText: {
    callAnytime: string;
    emailForQuotes: string;
    emergency: string;
  };
};

const hr = {
  hero: {
    title: "Usluge kućnog majstora u Dubrovniku",
    paragraphs: [
      "Bok, ja sam Đani.",
      "Ako vam treba majstor koji se javlja, dolazi i rješava problem, na pravom ste mjestu.",
      "Radim sitne popravke, završne građevinske radove i redovno održavanje domova, apartmana i kuća za odmor.",
      "Rješavam sve ono što se često odgađa, od manjih kvarova i popravaka do pripreme prostora prije i nakon sezone.",
      "Javite se ako vam treba meštar na kojega možete računati.",
    ],
    bullets: ["Organiziran", "Pouzdan i pošten", "Besplatna procjena"],
    buttons: {
      getFreeQuote: "Pošaljite upit",
      call: "Zovi",
    },
  },

  footer: {
    description: "Pouzdan majstor za održavanje nekretnina, predsezonske popravke i poboljšanja doma. Organizirano i na vrijeme, meštar kojemu možete vjerovati.",
    servicesList: [
      "Održavanje nekretnine",
      "Predsezonski popravci",
      "Sastavljanje namještaja",
      "Vješanje slika",
      "Silikoniranje / brtvljenje",
      "Vlaga i plijesan",
      "Rasvjeta / prekidači / utičnice",
      "Vrt i okućnica",
      "Dezinfekcija i dubinsko čišćenje",
    ],
    servicesTitle: "Usluge",
    contactTitle: "Kontakt",
    businessInfoTitle: "Informacije",
    followUs: "Pratite nas",
    allRightsReserved: "Sva prava pridržana.",
    privacyPolicy: "Politika privatnosti",
    termsOfService: "Uvjeti korištenja",
    licenseInfo: "Licencne informacije",
    labels: {
      phone: "Telefon:",
      email: "Email:",
      serviceArea: "Područje rada:",
      hours: "Radno vrijeme:",
      oib: "OIB:",
      iban: "IBAN:",
    },
  },

  businessInfo: {
    features: [
      "Organiziran i uvijek na vrijeme",
      "Iskreno i transparentno cijenenje",
      "Besplatne procjene za sve projekte",
      "Pouzdana usluga kojoj možete vjerovati",
    ],
    serviceArea: "Područje Dubrovnika",
    serviceRadius: "Radius od 50 km",
    urgencyLevels: [
      { value: "asap", label: "Što prije (u roku 1-2 dana)" },
      { value: "this-week", label: "Ovaj tjedan" },
      { value: "this-month", label: "Ovaj mjesec" },
      { value: "flexible", label: "Fleksibilno" },
    ],
    serviceOptions: [
      { value: "property-maintenance", label: "Održavanje nekretnine (za vlasnike koji su odsutni)" },
      { value: "pre-season", label: "Predsezonski popravci (apartmani za najam)" },
      { value: "furniture-assembly", label: "Sastavljanje namještaja" },
      { value: "picture-hanging", label: "Vješanje slika" },
      { value: "silicone", label: "Silikoniranje / brtvljenje" },
      { value: "moisture", label: "Vlaga i plijesan" },
      { value: "electrical", label: "Rasvjeta / prekidači / utičnice" },
      { value: "garden", label: "Vrt i okućnica" },
      { value: "cleaning", label: "Dezinfekcija i dubinsko čišćenje" },
      { value: "other", label: "Ostalo" },
    ],
  },

  services: {
    title: "Što radim",
    subtitle:
      "Usluge za apartmane i kuće — od održavanja do pripreme prije sezone.",
    items: {
      maintenance: {
        title: "Održavanje nekretnine",
        description: "Redovita briga dok ste odsutni (kontrole i sitni popravci).",
        image: "/images/Property%20Maintenance.png",
        icon: "Home",
        features: [
          "Redovite kontrole",
          "Preventivna briga",
          "Hitne intervencije",
          "Mir u glavi",
        ],
      },
      repairs: {
        title: "Predsezonski popravci",
        description: "Priprema apartmana prije dolaska gostiju.",
        image: "/images/Pre%20season%20repairs.png",
        icon: "Wrench",
        features: [
          "Brza realizacija",
          "Sezonske provjere",
          "Priprema za čišćenje",
          "Spremno za najam",
        ],
      },
      furniture: {
        title: "Sastavljanje namještaja",
        description: "Profesionalno sastavljanje IKEA i ostalog namještaja.",
        image: "/images/Furniture%20assembly.png",
        icon: "Hammer",
        features: ["Brzo sastavljanje", "Bez viška dijelova", "Čvrsto i uredno", "Sve funkcionalno"],
      },
      pictures: {
        title: "Vješanje slika",
        description: "Precizno bušenje i sidrenje (ravno, sigurno, čisto).",
        image: "/images/Photos.png",
        icon: "Drill",
        features: ["Točno pozicioniranje", "Pravilni tiplovi", "Ravno i uredno", "Za sve vrste zida"],
      },
      silicone: {
        title: "Silikoniranje / brtvljenje",
        description: "Uredno brtvljenje kupaonica i kuhinja.",
        image: "/images/Silicone.png",
        icon: "Droplets",
        features: ["Čista linija", "Vodonepropusno", "Prevencija plijesni", "Dugotrajno"],
      },
      moisture: {
        title: "Vlaga i plijesan",
        description: "Dijagnostika i smanjenje vlage prije većih šteta.",
        image: "/images/Vlaga.png",
        icon: "Wind",
        features: ["Utvrdimo uzrok", "Ventilacija", "Sušenje/zaštita", "Savjet za prevenciju"],
      },
      lights: {
        title: "Rasvjeta / prekidači / utičnice",
        description: "Zamjena i ugradnja uobičajenih kućnih elemenata rasvjete.",
        image: "/images/Lights.png",
        icon: "Zap",
        features: ["Sigurna ugradnja", "Brza usluga", "Čisto zatvaranje", "Standardne zamjene"],
      },
      garden: {
        title: "Vrt i okućnica",
        description: "Uređenje i održavanje malih vrtova i okućnice.",
        image: "/images/land.png",
        icon: "Leaf",
        features: ["Košnja i čišćenje", "Sezonski radovi", "Odvoz zelenog otpada", "Jednostavna uređenja"],
      },
      cleaning: {
        title: "Dezinfekcija i dubinsko čišćenje",
        description: "Temeljito čišćenje i dezinfekcija (idealno za turnover).",
        image: "/images/Cleaning.png",
        icon: "Clock",
        features: ["Dubinsko čišćenje", "Dezinfekcija", "Kupaonice i kuhinje", "Spremno za goste"],
      },
    } satisfies Record<string, ServiceItem>,
  },

  contact: {
    title: "Zatraži uslugu",
    subtitle:
      "Pošalji upit i dobij besplatnu procjenu. Odgovaramo na sve upite u roku od 24 sata.",

    infoTitle: "Kontakt informacije",
    infoSubtitle: "Javi se direktno",

    whyTitle: "Zašto baš mi?",

    formTitle: "Upit za uslugu",
    formSubtitle: "Ispuni obrazac i javimo se s procjenom",

    labels: {
      fullName: "Ime i prezime *",
      email: "Email adresa",
      phone: "Broj telefona",
      urgency: "Koliko je hitno?",
      service: "Vrsta usluge *",
      description: "Opis posla",
    },

    placeholders: {
      fullName: "Upiši ime i prezime",
      email: "Upiši email",
      phone: "",
      urgency: "Odaberi hitnost",
      service: "Odaberi uslugu",
      description:
        "Opiši što treba napraviti. Napiši detalje, lokaciju (npr. Lapad), rok i imaš li materijal.",
    },

    submit: "Pošalji upit",

    requiredHint:
      "* Obavezna polja. Unesi email ili broj telefona (ili oboje). Javljamo se u roku od 24 sata radi dogovora i besplatne procjene.",

    validationRequired: "Molim ispuni sva obavezna polja i email ili broj telefona",
    success: "Upit je poslan! Javit ćemo se u roku od 24 sata.",

    smallText: {
      callAnytime: "Zovi ili pošalji poruku",
      emailForQuotes: "Email za ponude",
      emergency: "Moguće hitne intervencije",
    },
  } satisfies ContactDict,
};

export default hr;
