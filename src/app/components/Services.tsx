'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ImageWithFallback } from '@/lib/ImageWithFallback';
import { Home, Wrench, Hammer, Drill, Droplets, Wind, Zap, Leaf, Clock } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
Home,
Wrench,
Hammer,
Drill,
Droplets,
Wind,
Zap,
Leaf,
Clock,
};

type ServiceItem = {
title: string;
description: string;
image: string;
icon?: string;
features?: string[];
};

export default function Services({
items,
title,
subtitle,
}: {
items?: Record<string, ServiceItem>;
title?: string;
subtitle?: string;
}) {
const safeItems = items ?? {};

return (
<section className="py-20 px-4 bg-black">
<div className="max-w-6xl mx-auto">
  <div className="text-center mb-16">
    {title && (
      <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
        {title}
      </h2>
    )}
    {subtitle && (
      <p className="text-xl text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
    )}
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {Object.entries(safeItems).map(([key, service]: [string, ServiceItem]) => {
      const Icon = service.icon && iconMap[service.icon] ? iconMap[service.icon] : Wrench;
      return (
        <Card key={key} className="bg-zinc-900 border-zinc-800 overflow-hidden">
          <div className="relative h-48">
            <ImageWithFallback
              src={service.image}
              alt={service.title}
              className="object-cover w-full h-full"
            />
            <div className="absolute top-4 left-4">
              <Icon className="w-8 h-8 text-primary" />
            </div>
          </div>
          <CardHeader>
            <CardTitle className="text-white text-xl font-semibold">
              {service.title}
            </CardTitle>
            {service.description && (
              <CardDescription className="text-gray-400">
                {service.description}
              </CardDescription>
            )}
          </CardHeader>
          <CardContent>
            {service.features && service.features.length > 0 && (
              <ul className="list-disc pl-5 text-gray-300">
                {service.features.map((feature: string, idx: number) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      );
    })}
  </div>
</div>
</section>
);
}