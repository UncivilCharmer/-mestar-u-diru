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
import {
  Home,
  Wrench,
  Hammer,
  Drill,
  Droplets,
  Wind,
  Zap,
  Leaf,
  Clock,
} from "lucide-react";

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
  icon?: string; // must be string like "Home"
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
  const entries = Object.entries(safeItems);

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {title ?? "What I Do"}
          </h2>
          {subtitle ? (
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {subtitle}
            </p>
          ) : null}
        </div>

        {entries.length === 0 ? (
          <p className="text-center text-gray-500">
            No services found in dictionary.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {entries.map(([key, service]) => {
              const Icon =
                service.icon && iconMap[service.icon]
                  ? iconMap[service.icon]
                  : Wrench;

              return (
                <Card
                  key={key}
                  className="bg-zinc-900 border-zinc-800 overflow-hidden"
                >
                  <div className="relative h-48">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-orange-600 p-2 rounded-full">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-white">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-2">
                      {(service.features ?? []).map((f, j) => (
                        <li
                          key={j}
                          className="text-sm text-gray-400 flex gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
