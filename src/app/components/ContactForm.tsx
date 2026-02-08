"use client";

import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

type ContactDict = {
  title?: string;
  subtitle?: string;

  infoTitle?: string;
  infoSubtitle?: string;

  whyTitle?: string;

  formTitle?: string;
  formSubtitle?: string;

  labels?: {
    name?: string;
    contact?: string;
    urgency?: string;
    service?: string;
    description?: string;
  };

  placeholders?: {
    name?: string;
    contact?: string;
    urgency?: string;
    service?: string;
    description?: string;
  };

  submit?: string;

  requiredHint?: string;

  validationRequired?: string;
  success?: string;

  marketingConsent?: string;
  privacyNotice?: string;

  // mali opisi uz info kartice (opcionalno)
  smallText?: {
    callAnytime?: string;
    emailForQuotes?: string;
    emergency?: string;
    serving?: string;
  };
};

type BusinessInfoDict = {
  features?: string[];
  serviceArea?: string;
  serviceRadius?: string;
  urgencyLevels?: Array<{ value: string; label: string }>;
  serviceOptions?: Array<{ value: string; label: string }>;
};

export default function ContactForm({ dict, businessInfo }: { dict?: ContactDict; businessInfo?: BusinessInfoDict }) {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'hr';

  const t = useMemo(() => {
    return {
      title: dict?.title ?? "Request a Service",
      subtitle:
        dict?.subtitle ??
        "Get a free quote for your handyman needs. We respond to all requests within 24 hours.",

      infoTitle: dict?.infoTitle ?? "Contact Information",
      infoSubtitle: dict?.infoSubtitle ?? "Get in touch with us directly",

      whyTitle: dict?.whyTitle ?? "Why Choose Us?",

      formTitle: dict?.formTitle ?? "Service Request Form",
      formSubtitle:
        dict?.formSubtitle ??
        "Fill out the form below and we'll get back to you with a quote",

      labels: {
        name: dict?.labels?.name ?? "Name *",
        contact: dict?.labels?.contact ?? "Contact (Phone / Email or both) *",
        urgency: dict?.labels?.urgency ?? "How urgent is this?",
        service: dict?.labels?.service ?? "Type of Service Needed",
        description: dict?.labels?.description ?? "Project Description",
      },

      placeholders: {
        name: dict?.placeholders?.name ?? "Enter your name",
        contact: dict?.placeholders?.contact ?? "Enter phone number or email",
        urgency: dict?.placeholders?.urgency ?? "Select urgency level",
        service: dict?.placeholders?.service ?? "Select a service",
        description:
          dict?.placeholders?.description ??
          "Please describe your project in detail. Include any specific requirements, materials needed, or timeline preferences.",
      },

      submit: dict?.submit ?? "Submit Request",

      requiredHint:
        dict?.requiredHint ??
        "* Required fields. We'll contact you within 24 hours to discuss your project and provide a free estimate.",

      validationRequired: dict?.validationRequired ?? "Please fill in all required fields",
      success:
        dict?.success ??
        "Request submitted successfully! We'll contact you within 24 hours.",

      marketingConsent: dict?.marketingConsent ?? "I want to receive updates about new services and offers",
      privacyNotice: dict?.privacyNotice ?? "By submitting this form, you agree to our Privacy Policy.",

      smallText: {
        callAnytime: dict?.smallText?.callAnytime ?? "Call or text anytime",
        emailForQuotes: dict?.smallText?.emailForQuotes ?? "Email for quotes",
        emergency: dict?.smallText?.emergency ?? "Emergency service available",
        serving: dict?.smallText?.serving ?? "Serving",
      },
    };
  }, [dict]);

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    service: "",
    description: "",
    urgency: "",
  });

  const [marketingConsent, setMarketingConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.contact) {
      toast.error(t.validationRequired);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mkovnpnv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          contact: formData.contact,
          service: formData.service,
          description: formData.description,
          urgency: formData.urgency,
          marketingConsent: marketingConsent 
            ? "✅ DA - Korisnik ŽELI primati obavijesti o novim uslugama i promotivnim ponudama!" 
            : "Ne",
          _subject: `New Service Request from ${formData.name}`,
        }),
      });

      if (response.ok) {
        toast.success(t.success);
        setFormData({
          name: "",
          contact: "",
          service: "",
          description: "",
          urgency: "",
        });
        setMarketingConsent(false);
      } else {
        toast.error("Failed to submit request. Please try again or contact us directly.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to submit request. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="py-12 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{t.title}</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-white">{t.infoTitle}</CardTitle>
                <CardDescription className="text-gray-400">{t.infoSubtitle}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-yellow-500" />
                  <div>
                    <p className="font-medium text-white hover:underline">
                      <a href={`tel:${BUSINESS_INFO.phone}`}>{BUSINESS_INFO.phone}</a>
                    </p>
                    <p className="text-sm text-gray-400">{t.smallText.callAnytime}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-yellow-500" />
                  <div>
                    <p className="font-medium text-white hover:underline">
                      <a href={`mailto:${BUSINESS_INFO.email}`}>{BUSINESS_INFO.email}</a>
                    </p>
                    <p className="text-sm text-gray-400">{t.smallText.emailForQuotes}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-yellow-500" />
                  <div>
                    <p className="font-medium text-white">{t.smallText.serving} {businessInfo?.serviceArea ?? BUSINESS_INFO.serviceArea}</p>
                    <p className="text-sm text-gray-400">{businessInfo?.serviceRadius ?? BUSINESS_INFO.serviceRadius}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-yellow-500" />
                  <div>
                    <p className="font-medium text-white">{BUSINESS_INFO.hours}</p>
                    <p className="text-sm text-gray-400">{t.smallText.emergency}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="font-semibold text-white mb-2">{t.whyTitle}</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  {(businessInfo?.features ?? BUSINESS_INFO.features).map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Request Form */}
          <div className="lg:col-span-2">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-white">{t.formTitle}</CardTitle>
                <CardDescription className="text-gray-400">{t.formSubtitle}</CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">
                        {t.labels.name}
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder={t.placeholders.name}
                        className="bg-zinc-800 border-zinc-700 text-white placeholder-gray-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact" className="text-white">
                        {t.labels.contact}
                      </Label>
                      <Input
                        id="contact"
                        value={formData.contact}
                        onChange={(e) => handleInputChange("contact", e.target.value)}
                        placeholder={t.placeholders.contact}
                        className="bg-zinc-800 border-zinc-700 text-white placeholder-gray-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="urgency" className="text-white">
                        {t.labels.urgency}
                      </Label>
                      <Select value={formData.urgency} onValueChange={(value) => handleInputChange("urgency", value)}>
                        <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white">
                          <SelectValue placeholder={t.placeholders.urgency} />
                        </SelectTrigger>
                        <SelectContent>
                          {(businessInfo?.urgencyLevels ?? []).map((level) => (
                            <SelectItem key={level.value} value={level.value}>
                              {level.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-white">
                      {t.labels.service}
                    </Label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                      <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white">
                        <SelectValue placeholder={t.placeholders.service} />
                      </SelectTrigger>
                      <SelectContent>
                        {(businessInfo?.serviceOptions ?? []).map((service) => (
                          <SelectItem key={service.value} value={service.value}>
                            {service.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-white">
                      {t.labels.description}
                    </Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      placeholder={t.placeholders.description}
                      className="bg-zinc-800 border-zinc-700 text-white placeholder-gray-500"
                      rows={4}
                    />
                  </div>

                  {/* Marketing Consent Checkbox */}
                  <div className="flex items-start gap-3 py-4">
                    <input
                      type="checkbox"
                      id="marketingConsent"
                      checked={marketingConsent}
                      onChange={(e) => setMarketingConsent(e.target.checked)}
                      className="mt-1 w-4 h-4 rounded border-zinc-700 bg-zinc-800 text-green-600 focus:ring-green-500"
                    />
                    <label htmlFor="marketingConsent" className="text-sm text-gray-300 cursor-pointer">
                      {t.marketingConsent ?? "Želim primati obavijesti o novim uslugama i ponudama"}
                    </label>
                  </div>

                  {/* Privacy Notice */}
                  <p className="text-xs text-gray-400 text-center pb-4">
                    {locale === 'hr' ? (
                      <>
                        Pritiskom na gumb prihvaćate{" "}
                        <Link href="/hr/privacy" className="text-green-500 hover:underline">
                          Politiku privatnosti
                        </Link>
                        .
                      </>
                    ) : (
                      <>
                        By submitting this form, you agree to our{" "}
                        <Link href="/en/privacy" className="text-green-500 hover:underline">
                          Privacy Policy
                        </Link>
                        .
                      </>
                    )}
                  </p>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : t.submit}
                  </Button>

                  <p className="text-sm text-gray-400 text-center">{t.requiredHint}</p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
