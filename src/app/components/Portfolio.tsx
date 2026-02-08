"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { PORTFOLIO_PROJECTS } from "@/lib/constants";
import { ImageWithFallback } from "@/lib/ImageWithFallback";
import { ChevronLeft, ChevronRight } from "lucide-react";

type PortfolioDict = {
  title?: string;
  subtitle?: string;
  before?: string;
  after?: string;
  projects?: {
    [key: string]: {
      title: string;
      description: string;
    };
  };
};

export default function Portfolio({ dict }: { dict?: PortfolioDict }) {
  const title = dict?.title ?? "Our Work";
  const subtitle = dict?.subtitle ?? "See examples of our completed projects - before and after";
  const beforeLabel = dict?.before ?? "Before";
  const afterLabel = dict?.after ?? "After";

  // State to track which image is showing for each project (true = after, false = before)
  const [showAfter, setShowAfter] = useState<{ [key: string]: boolean }>({});

  const toggleImage = (projectId: string) => {
    setShowAfter((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-zinc-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_PROJECTS.map((project) => {
            const projectData = dict?.projects?.[project.id];
            const isShowingAfter = showAfter[project.id] ?? false;
            
            return (
              <Card
                key={project.id}
                className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow duration-300"
                onClick={() => toggleImage(project.id)}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                  {/* Before Image */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      isShowingAfter ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <ImageWithFallback
                      src={project.beforeImage}
                      alt={`${projectData?.title ?? project.id} - ${beforeLabel}`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* After Image */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      isShowingAfter ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <ImageWithFallback
                      src={project.afterImage}
                      alt={`${projectData?.title ?? project.id} - ${afterLabel}`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Before/After Label */}
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {isShowingAfter ? afterLabel : beforeLabel}
                  </div>

                  {/* Toggle Icon */}
                  <div className="absolute bottom-4 right-4 bg-green-600 text-white p-2 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                    {isShowingAfter ? (
                      <ChevronLeft className="w-5 h-5" />
                    ) : (
                      <ChevronRight className="w-5 h-5" />
                    )}
                  </div>

                  {/* Hover Instruction */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 px-4 py-2 rounded-lg text-sm font-medium">
                      Klikni za {isShowingAfter ? beforeLabel.toLowerCase() : afterLabel.toLowerCase()}
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">
                    {projectData?.title ?? project.id}
                  </h3>
                  {projectData?.description && (
                    <p className="text-sm text-gray-600">{projectData.description}</p>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
