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
    name: string;
    contact: string;
    urgency: string;
    service: string;
    description: string;
  };

  placeholders: {
    name: string;
    contact: string;
    urgency: string;
    service: string;
    description: string;
  };

  submit: string;

  requiredHint: string;

  validationRequired: string;
  success: string;

  marketingConsent: string;
  privacyNotice: string;

  smallText: {
    callAnytime: string;
    emailForQuotes: string;
    emergency: string;
    serving: string;
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
      portfolio: "Pogledaj radove",
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
    guaranteesList: [
      "Organiziran i na vrijeme",
      "Besplatna procjena",
      "Pošten i pouzdan",
      "100% jamstvo zadovoljstva",
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
    serviceArea: "Dubrovnika",
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
    title: "Usluge",
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
          "Sigurnost",
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
        description: "Dijagnostika, sanacija i prevencija problema s vlagom.",
        image: "/images/Vlaga.png",
        icon: "Wind",
        features: ["Utvrdimo uzrok", "Sušenje i ventilacija", "Sanacija zidova", "Savjet za prevenciju"],
      },
      lights: {
        title: "Rasvjeta / prekidači / utičnice",
        description: "Zamjena i ugradnja rasvjete, prekidača i utičnica.",
        image: "/images/Lights.png",
        icon: "Zap",
        features: ["Zamjena žarulja i lampi", "Učvršćivanje prekidača / utičnica", "Zamjena prekidača / utičnica", "Sigurna izvedba"],
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
        description: "Temeljito čišćenje i dezinfekcija (idealno za smjene gostiju).",
        image: "/images/Cleaning.png",
        icon: "Clock",
        features: ["Dubinsko čišćenje", "Dezinfekcija", "Kupaonice i kuhinje", "Spremno za goste"],
      },
    } satisfies Record<string, ServiceItem>,
  },

  partners: {
    title: "Naš ponosan partner",
    subtitle: "Naša misija je naći tim pouzdanih ljudi na koje uvijek možete računati.",
    becomePartner: {
      title: "Postani partner!",
      description: "Ako nudiš usluge na području Dubrovnika i želiš surađivati s pouzdanim timom, slobodno se javi. Tražimo kvalitetne stručnjake koji dijele naše vrijednosti: točnost, kvalitetu i zadovoljstvo klijenata.",
      cta: "Kontaktiraj nas",
    },
    items: {
      luka: {
        name: "Luka",
        title: "Upoznajte Luku",
        service: "Dubinsko čišćenje klime",
        description: "U suradnji s provjerenim lokalnim partnerom nudimo dubinsko čišćenje klima uređaja, usmjereno na uklanjanje vlage, nečistoća i neugodnih mirisa.\n\nČišćenje se provodi temeljito i pažljivo, uz zaštitu prostora i uređaja, bez zahvata u rad sustava i bez servisiranja.\n\nOva usluga namijenjena je svima koji žele čišći zrak, ugodniji prostor i redovno održavanu klimu, posebno u apartmanima i prostorima koji se često koriste.",
        image: "/images/daniluka.JPG",
        features: [
          "Dubinsko čišćenje klime",
          "Uklanjanje nečistoća i mirisa",
          "Bolja kvaliteta zraka i učinkovitost",
        ],
      },
    },
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
      name: "Ime *",
      contact: "Kontakt (telefon / email ili oboje) *",
      urgency: "Koliko je hitno?",
      service: "Vrsta usluge",
      description: "Opis posla",
    },

    placeholders: {
      name: "Upiši ime",
      contact: "Upiši broj telefona ili email",
      urgency: "Odaberi hitnost",
      service: "Odaberi uslugu",
      description:
        "Opiši što treba napraviti. Napiši detalje, lokaciju (npr. Lapad), rok i imaš li materijal.",
    },

    submit: "Pošalji upit",

    requiredHint:
      "* Obavezna polja. Javljamo se u roku od 24 sata radi dogovora i besplatne procjene.",

    validationRequired: "Molim ispuni sva obavezna polja",
    success: "Upit je poslan! Javit ćemo se u roku od 24 sata.",

    marketingConsent: "Želim primati obavijesti o novim uslugama i promotivnim ponudama",
    privacyNotice: "Pritiskom na gumb prihvaćate Politiku privatnosti.",

    smallText: {
      callAnytime: "Zovi ili pošalji poruku",
      emailForQuotes: "Email za ponude",
      emergency: "Moguće hitne intervencije",
      serving: "Pokrivamo područje",
    },
  } satisfies ContactDict,

  portfolio: {
    title: "Naši Radovi",
    subtitle: "Pogledaj primjere naših završenih projekata - prije i poslije",
    before: "Prije",
    after: "Poslije",
    projects: {
      "bathroom-renovation": {
        title: "Renovacija kupaonice",
        description: "Kompletna obnova kupaonice s keramikom i sanitarijama",
      },
      "electrical-repair": {
        title: "Električne instalacije",
        description: "Zamjena starih prekidača i utičnica, postavljanje LED rasvjete",
      },
      "furniture-assembly": {
        title: "Sastavljanje namještaja",
        description: "Montaža kuhinje i ormarića po mjeri",
      },
      "moisture-removal": {
        title: "Sanacija vlage i plijesni",
        description: "Uklanjanje vlage, obrada protiv plijesni i završna obrada",
      },
      "painting-work": {
        title: "Soboslikarski radovi",
        description: "Glačanje, kitanje i bojanje zidova i stropova",
      },
      "garden-cleanup": {
        title: "Uređenje vrta i okućnice",
        description: "Čišćenje, obrezivanje i uređenje vanjskog prostora",
      },
    },
  },

  privacy: {
    title: "Politika Privatnosti",
    lastUpdated: "Zadnje ažurirano: Veljača 2026",
    sections: [
      {
        heading: "1. Uvod",
        paragraphs: [
          "SVOJ ĐIR, Obrt za usluge, vl. Đani Cumeljan (\"mi\", \"naš\", \"obrt\") poštuje vašu privatnost. Ova politika objašnjava kako prikupljamo i koristimo vaše osobne podatke kada koristite našu web stranicu i kontakt formu.",
        ],
      },
      {
        heading: "2. Koje podatke prikupljamo",
        paragraphs: [
          "Kroz kontakt formu prikupljamo sljedeće podatke:",
        ],
        list: [
          "Ime i prezime",
          "Email adresa ili broj telefona (po vašem izboru)",
          "Vrsta usluge i detalji projekta koje nam pošaljete",
          "IP adresa (automatski, radi sigurnosti)",
        ],
      },
      {
        heading: "3. Zašto prikupljamo podatke",
        paragraphs: [
          "Vaše podatke koristimo isključivo za:",
        ],
        list: [
          "Odgovor na vaš upit i dogovor oko termina",
          "Izradu besplatne procjene cijene",
          "Moguću komunikaciju o sličnim ili dodatnim uslugama koje nudimo - samo ako ste dali pristanak i samo dok ne zatražite isključenje iz takvih komunikacija",
        ],
      },
      {
        heading: "4. Dijeljenje podataka s trećim stranama",
        paragraphs: [
          "Ne prodajemo niti iznajmljujemo vaše podatke.",
          "Vaše podatke obrađuje Formspree (formspree.io), usluga za procesiranje kontakt formi. Formspree ima vlastitu politiku privatnosti u skladu sa GDPR-om.",
        ],
      },
      {
        heading: "5. Koliko dugo čuvamo podatke",
        paragraphs: [
          "Vaše podatke čuvamo dok je potrebno za odgovor na upit ili 12 mjeseci nakon zadnje komunikacije, osim ako ne zatražite ranije brisanje.",
        ],
      },
      {
        heading: "6. Vaša prava (GDPR)",
        paragraphs: [
          "Imate pravo:",
        ],
        list: [
          "Zatražiti uvid u vaše podatke",
          "Zatražiti ispravak netočnih podataka",
          "Zatražiti brisanje vaših podataka",
          "Odustati od komunikacija o dodatnim uslugama (marketing) u bilo kojem trenutku",
          "Uložiti prigovor Agenciji za zaštitu osobnih podataka (azop.hr)",
        ],
      },
      {
        heading: "7. Sigurnost podataka",
        paragraphs: [
          "Vaše podatke čuvamo uz razumne tehničke i organizacijske mjere zaštite.",
        ],
      },
    ],
    contact: {
      heading: "Kontakt za pitanja o privatnosti",
      text: "Ako imate pitanja o ovoj politici ili želite ostvariti svoja prava, kontaktirajte nas:",
    },
  },
};

export default hr;
