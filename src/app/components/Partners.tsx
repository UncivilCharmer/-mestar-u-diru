"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ImageWithFallback } from "@/lib/ImageWithFallback";
import { Check, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS_INFO } from "@/lib/constants";

type PartnerItem = {
  name: string;
  title: string;
  service: string;
  description: string;
  image: string;
  features: string[];
};

type BecomePartner = {
  title: string;
  description: string;
  cta: string;
};

export default function Partners({
  items,
  title,
  subtitle,
  becomePartner,
}: {
  items?: Record<string, PartnerItem>;
  title?: string;
  subtitle?: string;
  becomePartner?: BecomePartner;
}) {
  const safeItems = items ?? {};
  const entries = Object.entries(safeItems);
  const firstPartner = entries.length > 0 ? entries[0][1] : null;

  return (
    <section className="py-12 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
            {title ?? "Our Partners"}
          </h2>
          {subtitle ? (
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {subtitle}
            </p>
          ) : null}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Partner Card - Left */}
          {firstPartner ? (
            <Card className="overflow-hidden border-gray-800 bg-gray-900/50 backdrop-blur">
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={firstPartner.image}
                  alt={firstPartner.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: '50% 35%' }}
                />
              </div>
              <div className="p-6">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">
                  {firstPartner.service}
                </p>
                <h3 className="text-xl font-bold text-white mb-3">
                  {firstPartner.title}
                </h3>
                <div className="text-sm text-gray-300 leading-relaxed mb-4 space-y-3">
                  {firstPartner.description.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
                <ul className="space-y-2">
                  {firstPartner.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-gray-300 text-sm"
                    >
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ) : null}

          {/* Become Partner CTA - Right */}
          {becomePartner ? (
            <Card className="border-gray-800 bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur flex flex-col justify-center">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {becomePartner.title}
                </h3>
                <p className="text-base text-gray-300 leading-relaxed mb-6">
                  {becomePartner.description}
                </p>
                <div className="space-y-3">
                  <Button
                    asChild
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    <a href={`tel:${BUSINESS_INFO.phone}`}>
                      <Phone className="w-4 h-4 mr-2" />
                      {becomePartner.cta}
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-gray-600 text-gray-300 hover:bg-gray-800"
                  >
                    <a href={`mailto:${BUSINESS_INFO.email}`}>
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : null}
        </div>
      </div>
    </section>
  );
}
