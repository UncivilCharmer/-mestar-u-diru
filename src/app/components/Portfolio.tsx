"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { PORTFOLIO_PROJECTS } from "@/lib/constants";
import { ImageWithFallback } from "@/lib/ImageWithFallback";

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
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-zinc-900">{title}</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        {/* Portfolio Grid - Masonry style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_PROJECTS.map((project) => {
            const projectData = dict?.projects?.[project.id];
            const isShowingAfter = showAfter[project.id] ?? false;
            
            return (
              <div
                key={project.id}
                className="group cursor-pointer"
                onClick={() => toggleImage(project.id)}
              >
                {/* Image Container */}
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-green-500">
                  <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                    {/* Before Image */}
                    <div
                      className={`absolute inset-0 transition-opacity duration-700 ${
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
                      className={`absolute inset-0 transition-opacity duration-700 ${
                        isShowingAfter ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <ImageWithFallback
                        src={project.afterImage}
                        alt={`${projectData?.title ?? project.id} - ${afterLabel}`}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Before/After Badge */}
                    <div className={`absolute top-4 left-4 px-4 py-2 rounded-full text-sm font-bold shadow-lg transition-all duration-300 ${
                      isShowingAfter 
                        ? "bg-green-600 text-white" 
                        : "bg-zinc-800 text-white"
                    }`}>
                      {isShowingAfter ? afterLabel : beforeLabel}
                    </div>

                    {/* Click Hint Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">
                            Klikni za {isShowingAfter ? beforeLabel.toLowerCase() : afterLabel.toLowerCase()}
                          </span>
                          <svg 
                            className="w-6 h-6 animate-pulse" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-5 bg-white">
                    <h3 className="font-bold text-lg mb-2 text-zinc-900">
                      {projectData?.title ?? project.id}
                    </h3>
                    {projectData?.description && (
                      <p className="text-sm text-gray-600 leading-relaxed">{projectData.description}</p>
                    )}
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Info Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            {dict?.subtitle?.includes("prije") 
              ? "💡 Klikni na bilo koju sliku da vidiš transformaciju prije/poslije"
              : "💡 Click on any image to see the before/after transformation"}
          </p>
        </div>
      </div>
    </section>
  );
}
