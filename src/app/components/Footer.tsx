import { Separator } from "@/components/ui/separator";
import { BUSINESS_INFO, SERVICES } from "@/lib/constants";
import { Hammer } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  XIcon,
  YouTubeIcon,
} from "@/components/ui/social-icons";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Business Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Hammer className="w-6 h-6" />
              <span className="font-bold text-lg">{BUSINESS_INFO.name}</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              {BUSINESS_INFO.description}
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold">Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              {SERVICES.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Phone: <a className="text-accent hover:underline font-semibold" href={`tel:${BUSINESS_INFO.phone}`}>{BUSINESS_INFO.phone}</a></li>
              <li>Email: <a className="text-accent hover:underline font-semibold" href={`mailto:${BUSINESS_INFO.email}`}>{BUSINESS_INFO.email}</a></li>
              <li>Service Area: {BUSINESS_INFO.serviceArea}</li>
              <li>Hours: {BUSINESS_INFO.hours}</li>
            </ul>
          </div>

          {/* Business Details */}
          <div className="space-y-4">
            <h3 className="font-semibold">Business Info</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              {BUSINESS_INFO.guarantees.map((guarantee) => (
                <li key={guarantee}>{guarantee}</li>
              ))}
            </ul>

            {/* Social Media Links */}
            <div className="pt-4">
              <h4 className="font-semibold text-sm mb-3">Follow Us</h4>
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
                  href={BUSINESS_INFO.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Follow us on Twitter"
                >
                  <XIcon className="w-4 h-4" />
                </a>
                <a
                  href={BUSINESS_INFO.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Subscribe to our YouTube channel"
                >
                  <YouTubeIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
          <p>© 2025 {BUSINESS_INFO.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-primary-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-primary-foreground transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-primary-foreground transition-colors"
            >
              License Info
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
