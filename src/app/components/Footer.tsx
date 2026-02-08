import { Separator } from "@/components/ui/separator";
import { BUSINESS_INFO, SERVICES } from "@/lib/constants";
import { Hammer } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  GoogleIcon,
} from "@/components/ui/social-icons";

type FooterDict = {
  description?: string;
  servicesList?: string[];
  guaranteesList?: string[];
  servicesTitle?: string;
  contactTitle?: string;
  businessInfoTitle?: string;
  followUs?: string;
  allRightsReserved?: string;
  privacyPolicy?: string;
  termsOfService?: string;
  licenseInfo?: string;
  labels?: {
    phone?: string;
    email?: string;
    serviceArea?: string;
    hours?: string;
    oib?: string;
    iban?: string;
  };
};

export default function Footer({ dict }: { dict?: FooterDict }) {
  const description = dict?.description ?? BUSINESS_INFO.description;
  const servicesList = dict?.servicesList ?? SERVICES;
  const guaranteesList = dict?.guaranteesList ?? BUSINESS_INFO.guarantees;
  const servicesTitle = dict?.servicesTitle ?? "Services";
  const contactTitle = dict?.contactTitle ?? "Contact";
  const businessInfoTitle = dict?.businessInfoTitle ?? "Business Info";
  const followUs = dict?.followUs ?? "Follow Us";
  const allRightsReserved = dict?.allRightsReserved ?? "All rights reserved.";
  const privacyPolicy = dict?.privacyPolicy ?? "Privacy Policy";
  const termsOfService = dict?.termsOfService ?? "Terms of Service";
  const licenseInfo = dict?.licenseInfo ?? "License Info";
  const labels = {
    phone: dict?.labels?.phone ?? "Phone:",
    email: dict?.labels?.email ?? "Email:",
    serviceArea: dict?.labels?.serviceArea ?? "Service Area:",
    hours: dict?.labels?.hours ?? "Hours:",
  };

  return (
    <footer className="bg-zinc-950 text-white py-12 px-4 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Business Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Hammer className="w-6 h-6" />
              <span className="font-bold text-lg">{BUSINESS_INFO.name}</span>
            </div>
            <p className="text-sm text-gray-400">
              {description}
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold">{servicesTitle}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {servicesList.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">{contactTitle}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>{labels.phone} <a className="text-green-500 hover:underline font-semibold" href={`tel:${BUSINESS_INFO.phone}`}>{BUSINESS_INFO.phone}</a></li>
              <li>{labels.email} <a className="text-green-500 hover:underline font-semibold" href={`mailto:${BUSINESS_INFO.email}`}>{BUSINESS_INFO.email}</a></li>
              <li>{labels.serviceArea} {BUSINESS_INFO.serviceArea}</li>
              <li>{labels.hours} {BUSINESS_INFO.hours}</li>
            </ul>
          </div>

          {/* Business Details */}
          <div className="space-y-4">
            <h3 className="font-semibold">{businessInfoTitle}</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              {guaranteesList.map((guarantee) => (
                <li key={guarantee}>{guarantee}</li>
              ))}
            </ul>

            {/* Social Media Links */}
            <div className="pt-4">
              <h4 className="font-semibold text-sm mb-3">{followUs}</h4>
              <div className="flex gap-3">
                <a
                  href={BUSINESS_INFO.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href={BUSINESS_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={BUSINESS_INFO.socials.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Leave us a Google Review"
                >
                  <GoogleIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
          <p>© 2025 {BUSINESS_INFO.name}. {allRightsReserved}</p>
          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-primary-foreground transition-colors"
            >
              {privacyPolicy}
            </a>
            <a
              href="#"
              className="hover:text-primary-foreground transition-colors"
            >
              {termsOfService}
            </a>
            <a
              href="#"
              className="hover:text-primary-foreground transition-colors"
            >
              {licenseInfo}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
