// REPLACE ENTIRE FILE: src/lib/locales/en.ts
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
    title: "What I Do",
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
      fullName: "Full Name *",
      email: "Email Address",
      phone: "Phone Number",
      urgency: "How urgent is this?",
      service: "Type of Service Needed *",
      description: "Project Description",
    },

    placeholders: {
      fullName: "Enter your full name",
      email: "Enter your email",
      phone: "",
      urgency: "Select urgency level",
      service: "Select a service",
      description:
        "Please describe your project in detail. Include any specific requirements, materials needed, or timeline preferences.",
    },

    submit: "Submit Request",

    requiredHint:
      "* Required fields. Please provide email or phone (or both). We'll contact you within 24 hours to discuss your project and provide a free estimate.",

    validationRequired: "Please fill in all required fields and provide email or phone number",
    success: "Request submitted successfully! We'll contact you within 24 hours.",

    smallText: {
      callAnytime: "Call or text anytime",
      emailForQuotes: "Email for quotes",
      emergency: "Emergency service available",
    },
  } satisfies ContactDict,
};

export default en;
