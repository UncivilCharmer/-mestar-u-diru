// Business contact information and constants
export const BUSINESS_INFO = {
  name: "Meštar u Điru",
  phone: "(385) 99 830 6086",
  email: "info@mestaruđiru.com",
  serviceArea: "Dubrovnik Area",
  serviceRadius: "30-mile radius",
  hours: "Mon-Sat: 7AM-7PM",
  experience: "15+ years",
  description: "Professional handyman services for over 15 years. Licensed, insured, and committed to quality workmanship.",
  guarantees: [
    "Licensed & Insured",
    "Free Estimates",
    "Emergency Service Available", 
    "100% Satisfaction Guarantee"
  ],
  features: [
    "15+ years of experience",
    "Licensed and fully insured", 
    "Free estimates on all projects",
    "100% satisfaction guarantee"
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
  "General Repairs",
  "Plumbing Services", 
  "Electrical Work",
  "Painting & Finishing",
  "Carpentry Work",
  "Home Maintenance"
] as const;

// Service options for form dropdown
export const SERVICE_OPTIONS = [
  { value: "general-repairs", label: "General Repairs" },
  { value: "plumbing", label: "Plumbing Services" },
  { value: "electrical", label: "Electrical Work" },
  { value: "painting", label: "Painting & Finishing" },
  { value: "carpentry", label: "Carpentry Work" },
  { value: "maintenance", label: "Home Maintenance" },
  { value: "other", label: "Other (describe below)" }
] as const;

// Urgency levels for form
export const URGENCY_LEVELS = [
  { value: "emergency", label: "Emergency (same day)" },
  { value: "urgent", label: "Urgent (within 3 days)" },
  { value: "normal", label: "Normal (within a week)" },
  { value: "flexible", label: "Flexible (anytime)" }
] as const;
