"use client";

import { useMemo, useState } from "react";
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
    fullName?: string;
    email?: string;
    phone?: string;
    urgency?: string;
    service?: string;
    description?: string;
  };

  placeholders?: {
    fullName?: string;
    email?: string;
    phone?: string;
    urgency?: string;
    service?: string;
    description?: string;
  };

  submit?: string;

  requiredHint?: string;

  validationRequired?: string;
  success?: string;

  // mali opisi uz info kartice (opcionalno)
  smallText?: {
    callAnytime?: string;
    emailForQuotes?: string;
    emergency?: string;
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
        fullName: dict?.labels?.fullName ?? "Full Name *",
        email: dict?.labels?.email ?? "Email Address *",
        phone: dict?.labels?.phone ?? "Phone Number *",
        urgency: dict?.labels?.urgency ?? "How urgent is this?",
        service: dict?.labels?.service ?? "Type of Service Needed *",
        description: dict?.labels?.description ?? "Project Description",
      },

      placeholders: {
        fullName: dict?.placeholders?.fullName ?? "Enter your full name",
        email: dict?.placeholders?.email ?? "Enter your email",
        phone: dict?.placeholders?.phone ?? BUSINESS_INFO.phone,
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

      smallText: {
        callAnytime: dict?.smallText?.callAnytime ?? "Call or text anytime",
        emailForQuotes: dict?.smallText?.emailForQuotes ?? "Email for quotes",
        emergency: dict?.smallText?.emergency ?? "Emergency service available",
      },
    };
  }, [dict]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    description: "",
    urgency: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.service) {
      toast.error(t.validationRequired);
      return;
    }

    toast.success(t.success);

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      description: "",
      urgency: "",
    });
  };

  return (
    <section id="contact-form" className="py-20 px-4 bg-black">
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
                  <Phone className="w-5 h-5 text-orange-600" />
                  <div>
                    <p className="font-medium text-white hover:underline">
                      <a href={`tel:${BUSINESS_INFO.phone}`}>{BUSINESS_INFO.phone}</a>
                    </p>
                    <p className="text-sm text-gray-400">{t.smallText.callAnytime}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-orange-600" />
                  <div>
                    <p className="font-medium text-white hover:underline">
                      <a href={`mailto:${BUSINESS_INFO.email}`}>{BUSINESS_INFO.email}</a>
                    </p>
                    <p className="text-sm text-gray-400">{t.smallText.emailForQuotes}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-orange-600" />
                  <div>
                    <p className="font-medium text-white">Serving {businessInfo?.serviceArea ?? BUSINESS_INFO.serviceArea}</p>
                    <p className="text-sm text-gray-400">{businessInfo?.serviceRadius ?? BUSINESS_INFO.serviceRadius}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-orange-600" />
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
                      <span className="w-1.5 h-1.5 bg-orange-600 rounded-full" />
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
                        {t.labels.fullName}
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder={t.placeholders.fullName}
                        className="bg-zinc-800 border-zinc-700 text-white placeholder-gray-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">
                        {t.labels.email}
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder={t.placeholders.email}
                        className="bg-zinc-800 border-zinc-700 text-white placeholder-gray-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white">
                        {t.labels.phone}
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder={t.placeholders.phone}
                        className="bg-zinc-800 border-zinc-700 text-white placeholder-gray-500"
                        required
                      />
                    </div>

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
                    <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)} required>
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

                  <Button type="submit" size="lg" className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                    {t.submit}
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
