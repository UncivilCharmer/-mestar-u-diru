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

const en = {
  hero: {
    title: "Handyman Services in Dubrovnik",
    paragraphs: [
      "Thank you for visiting.",
      "My name is Đani, and I'm here to help with all your home maintenance needs.",
      "I specialize in property maintenance for people away, pre-season repairs for rental apartments, and everything from furniture assembly to landscaping.",
      "I believe in being organized, on time, reliable, and honest. Let me take care of the work while you enjoy peace of mind.",
    ],
    bullets: ["Organized", "Reliable & Honest", "Free Estimates"],
    buttons: {
      getFreeQuote: "Get Free Quote",
      call: "Call",
      portfolio: "View Portfolio",
    },
  },

  footer: {
    description: "Your reliable handyman for property maintenance, pre-season repairs, and home improvements. Organized, on time, and honest work you can count on.",
    servicesList: [
      "Property Maintenance",
      "Pre-Season Repairs",
      "Furniture Assembly",
      "Picture Hanging",
      "Silicone/Sealant Work",
      "Moisture & Damp Removal",
      "Electrical Repairs",
      "Landscaping & Gardening",
      "Odd Jobs & Errands",
    ],
    guaranteesList: [
      "Organized & On Time",
      "Free Estimates",
      "Honest & Reliable",
      "100% Satisfaction Guarantee",
    ],
    servicesTitle: "Services",
    contactTitle: "Contact",
    businessInfoTitle: "Business Info",
    followUs: "Follow Us",
    allRightsReserved: "All rights reserved.",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    licenseInfo: "License Info",
    labels: {
      phone: "Phone:",
      email: "Email:",
      serviceArea: "Service Area:",
      hours: "Hours:",
      oib: "OIB:",
      iban: "IBAN:",
    },
  },

  businessInfo: {
    features: [
      "Organized and always on time",
      "Honest and transparent pricing",
      "Free estimates on all projects",
      "Reliable service you can trust",
    ],
    serviceArea: "Dubrovnik Area",
    serviceRadius: "30-mile radius",
    urgencyLevels: [
      { value: "asap", label: "ASAP (within 1-2 days)" },
      { value: "this-week", label: "This Week" },
      { value: "this-month", label: "This Month" },
      { value: "flexible", label: "Flexible" },
    ],
    serviceOptions: [
      { value: "property-maintenance", label: "Property Maintenance (for away owners)" },
      { value: "pre-season", label: "Pre-Season Repairs (rental apartments)" },
      { value: "furniture-assembly", label: "Furniture Assembly" },
      { value: "picture-hanging", label: "Picture Hanging" },
      { value: "silicone", label: "Silicone/Sealant Work" },
      { value: "moisture", label: "Moisture & Damp Fixes" },
      { value: "electrical", label: "Lights / Switches / Outlets" },
      { value: "garden", label: "Landscaping & Gardening" },
      { value: "cleaning", label: "Disinfecting & Deep Cleaning" },
      { value: "other", label: "Other" },
    ],
  },

  services: {
    title: "Services",
    subtitle:
      "Services for apartments and homes — from maintenance to seasonal preparation.",
    items: {
      maintenance: {
        title: "Property Maintenance",
        description: "Ongoing care for your property while you're away.",
        image: "/images/Property%20Maintenance.png",
        icon: "Home",
        features: [
          "Regular inspections",
          "Preventive care",
          "Emergency response",
          "Peace of mind",
        ],
      },
      repairs: {
        title: "Pre-Season Repairs",
        description: "Get your rental apartments ready before the season.",
        image: "/images/Pre%20season%20repairs.png",
        icon: "Wrench",
        features: [
          "Quick turnarounds",
          "Seasonal checkups",
          "Cleaning prep",
          "Tenant-ready",
        ],
      },
      furniture: {
        title: "Furniture Assembly",
        description: "Professional assembly of IKEA, Amazon, and other furniture.",
        image: "/images/Furniture%20assembly.png",
        icon: "Hammer",
        features: [
          "Fast assembly",
          "No leftover parts",
          "Quality hardware",
          "Fully functional",
        ],
      },
      pictures: {
        title: "Picture Hanging",
        description: "Precise hanging of pictures and artwork (straight + safe anchors).",
        image: "/images/Photos.png",
        icon: "Drill",
        features: [
          "Precision placement",
          "Wall-safe drilling",
          "Proper anchoring",
          "Level and straight",
        ],
      },
      silicone: {
        title: "Silicone / Sealant Work",
        description: "Clean sealing for bathrooms and kitchens (mold-resistant finish).",
        image: "/images/Silicone.png",
        icon: "Droplets",
        features: [
          "Clean application",
          "Waterproof sealing",
          "Mold prevention",
          "Long-lasting",
        ],
      },
      moisture: {
        title: "Moisture & Damp Fixes",
        description: "Identify and reduce moisture problems before they become damage.",
        image: "/images/Vlaga.png",
        icon: "Wind",
        features: [
          "Diagnosis",
          "Ventilation fixes",
          "Drying solutions",
          "Prevention advice",
        ],
      },
      lights: {
        title: "Lights / Switches / Outlets",
        description: "Replace and install everyday electrical fittings safely.",
        image: "/images/Lights.png",
        icon: "Zap",
        features: [
          "Safe installation",
          "Quick service",
          "Common replacements",
          "Clean finish",
        ],
      },
      garden: {
        title: "Landscaping & Gardening",
        description: "Keep your outdoor space tidy and well-maintained.",
        image: "/images/land.png",
        icon: "Leaf",
        features: [
          "Lawn care",
          "Seasonal work",
          "Cleanup services",
          "Simple garden improvements",
        ],
      },
      cleaning: {
        title: "Disinfecting & Deep Cleaning",
        description: "Thorough cleaning and disinfecting for a healthier space.",
        image: "/images/Cleaning.png",
        icon: "Clock",
        features: [
          "Deep cleaning",
          "Disinfection",
          "Bathrooms & kitchens",
          "Turnover-ready",
        ],
      },
    } satisfies Record<string, ServiceItem>,
  },

  partners: {
    title: "Our Proud Partner",
    subtitle: "Our mission is to find a team of reliable people you can always count on.",
    becomePartner: {
      title: "Become a Partner!",
      description: "If you offer services in the Dubrovnik area and want to collaborate with a reliable team, feel free to reach out. We're looking for quality professionals who share our values: punctuality, quality, and customer satisfaction.",
      cta: "Contact Us",
    },
    items: {
      luka: {
        name: "Luka",
        title: "Meet Luka",
        service: "Air Conditioning Deep Clean",
        description: "In partnership with a trusted local professional, we offer comprehensive deep cleaning of air conditioning units, focusing on removing moisture, dirt, and unpleasant odors.\n\nThe cleaning is performed thoroughly and carefully, with protection for your space and equipment, without interfering with system operation or servicing.\n\nThis service is ideal for anyone seeking cleaner air, a more comfortable space, and regularly maintained AC, especially in apartments and frequently used spaces.",
        image: "/images/daniluka.JPG",
        features: [
          "Deep AC cleaning",
          "Dirt and odor removal",
          "Better air quality and efficiency",
        ],
      },
    },
  },

  contact: {
    title: "Request a Service",
    subtitle:
      "Get a free quote for your handyman needs. We respond to all requests within 24 hours.",

    infoTitle: "Contact Information",
    infoSubtitle: "Get in touch with us directly",

    whyTitle: "Why Choose Us?",

    formTitle: "Service Request Form",
    formSubtitle: "Fill out the form below and we'll get back to you with a quote",

    labels: {
      name: "Name *",
      contact: "Contact (Phone / Email or both) *",
      urgency: "How urgent is this?",
      service: "Type of Service Needed",
      description: "Project Description",
    },

    placeholders: {
      name: "Enter your name",
      contact: "Enter phone number or email",
      urgency: "Select urgency level",
      service: "Select a service",
      description:
        "Please describe your project in detail. Include any specific requirements, materials needed, or timeline preferences.",
    },

    submit: "Submit Request",

    requiredHint:
      "* Required fields. We'll contact you within 24 hours to discuss your project and provide a free estimate.",

    validationRequired: "Please fill in all required fields",
    success: "Request submitted successfully! We'll contact you within 24 hours.",

    marketingConsent: "I want to receive updates about new services and offers",
    privacyNotice: "By submitting this form, you agree to our Privacy Policy.",

    smallText: {
      callAnytime: "Call or text anytime",
      emailForQuotes: "Email for quotes",
      emergency: "Emergency service available",
      serving: "Serving",
    },
  } satisfies ContactDict,

  portfolio: {
    title: "Our Work",
    subtitle: "See examples of our completed projects - before and after",
    before: "Before",
    after: "After",
    projects: {
      "bathroom-renovation": {
        title: "Bathroom Renovation",
        description: "Complete bathroom remodel with new tiles and fixtures",
      },
      "electrical-repair": {
        title: "Electrical Work",
        description: "Replaced old switches and outlets, installed LED lighting",
      },
      "furniture-assembly": {
        title: "Furniture Assembly",
        description: "Custom kitchen and cabinet installation",
      },
      "moisture-removal": {
        title: "Moisture & Mold Removal",
        description: "Moisture treatment, mold prevention and finishing",
      },
      "painting-work": {
        title: "Painting Work",
        description: "Wall smoothing, filling and painting walls and ceilings",
      },
      "garden-cleanup": {
        title: "Garden & Landscaping",
        description: "Cleanup, pruning and outdoor space improvements",
      },
    },
  },

  privacy: {
    title: "Privacy Policy",
    lastUpdated: "Last updated: February 2026",
    sections: [
      {
        heading: "1. Introduction",
        paragraphs: [
          "SVOJ ĐIR, Handyman Services, owned by Đani Cumeljan (\"we\", \"our\", \"business\") respects your privacy. This policy explains how we collect and use your personal data when you use our website and contact form.",
        ],
      },
      {
        heading: "2. What data we collect",
        paragraphs: [
          "Through our contact form, we collect the following data:",
        ],
        list: [
          "Full name",
          "Email address or phone number (your choice)",
          "Service type and project details you submit",
          "IP address (automatically, for security purposes)",
        ],
      },
      {
        heading: "3. Why we collect data",
        paragraphs: [
          "We use your data exclusively for:",
        ],
        list: [
          "Responding to your inquiry and scheduling appointments",
          "Providing free estimates",
          "Possible communication about similar or additional services we offer - only with your consent and only until you request to opt out of such communications",
        ],
      },
      {
        heading: "4. Sharing data with third parties",
        paragraphs: [
          "We do not sell or rent your data.",
          "Your data is processed by Formspree (formspree.io), a contact form processing service. Formspree has its own privacy policy in compliance with GDPR.",
        ],
      },
      {
        heading: "5. How long we keep data",
        paragraphs: [
          "We keep your data as long as necessary to respond to your inquiry or for 12 months after the last communication, unless you request earlier deletion.",
        ],
      },
      {
        heading: "6. Your rights (GDPR)",
        paragraphs: [
          "You have the right to:",
        ],
        list: [
          "Request access to your data",
          "Request correction of inaccurate data",
          "Request deletion of your data",
          "Opt out of marketing communications about additional services at any time",
          "File a complaint with the Data Protection Agency",
        ],
      },
      {
        heading: "7. Data security",
        paragraphs: [
          "We protect your data with reasonable technical and organizational security measures.",
        ],
      },
    ],
    contact: {
      heading: "Contact for privacy questions",
      text: "If you have questions about this policy or wish to exercise your rights, contact us:",
    },
  },
};

export default en;
