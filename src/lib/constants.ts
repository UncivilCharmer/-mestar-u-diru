// Business contact information and constants
export const BUSINESS_INFO = {
  name: "Meštar u Điru",
  phone: "(385) 99 830 6086",
  email: "info.mestarudiru@gmail.com",
  serviceArea: "Dubrovnik Area",
  serviceRadius: "30-mile radius",
  hours: "Mon-Sat: 7AM-7PM",
  experience: "15+ years",
  description: "Your reliable handyman for property maintenance, pre-season repairs, and home improvements. Organized, on time, and honest work you can count on.",
  guarantees: [
    "Organized & On Time",
    "Free Estimates",
    "Honest & Reliable", 
    "100% Satisfaction Guarantee"
  ],
  features: [
    "Organized and always on time",
    "Honest and transparent pricing", 
    "Free estimates on all projects",
    "Reliable service you can trust"
  ],
  socials: {
    facebook: "https://facebook.com/handymanpro",
    instagram: "https://instagram.com/handymanpro", 
    twitter: "https://twitter.com/handymanpro",
    youtube: "https://youtube.com/@handymanpro"
  }
} as const;

// Services offered
export const SERVICES = [
  "Property Maintenance",
  "Pre-Season Repairs", 
  "Furniture Assembly",
  "Picture Hanging",
  "Silicone/Sealant Work",
  "Moisture & Damp Removal",
  "Electrical Repairs",
  "Landscaping & Gardening",
  "Odd Jobs & Errands"
] as const;

// Service options for form dropdown
export const SERVICE_OPTIONS = [
  { value: "property-maintenance", label: "Property Maintenance (for away owners)" },
  { value: "pre-season", label: "Pre-Season Repairs (rental apartments)" },
  { value: "furniture-assembly", label: "Furniture Assembly" },
  { value: "picture-hanging", label: "Picture Hanging" },
  { value: "silicone", label: "Silicone/Sealant Work" },
  { value: "moisture", label: "Moisture & Damp Removal" },
  { value: "electrical", label: "Lights/Switches/Outlets" },
  { value: "landscaping", label: "Landscaping & Gardening" },
  { value: "odd-jobs", label: "Odd Jobs & Errands" },
  { value: "other", label: "Other (describe below)" }
] as const;

// Urgency levels for form
export const URGENCY_LEVELS = [
  { value: "emergency", label: "Emergency (same day)" },
  { value: "urgent", label: "Urgent (within 3 days)" },
  { value: "normal", label: "Normal (within a week)" },
  { value: "flexible", label: "Flexible (anytime)" }
] as const;
