import { ImageWithFallback } from "@/lib/ImageWithFallback";
import { HeroButtons } from "./HeroButtons";

type HeroDict = {
  title?: string;
  paragraphs?: string[];
  bullets?: string[];
  buttons?: {
    getFreeQuote?: string;
    call?: string;
    portfolio?: string;
  };
};

export default function Hero({ dict }: { dict?: HeroDict }) {
  const title = dict?.title ?? "Handyman Services in Dubrovnik";

  const paragraphs =
    dict?.paragraphs ?? [
      "Thank you for visiting.",
      "My name is Đani, and I'm here to help with all your home maintenance needs.",
      "I specialize in property maintenance for people away, pre-season repairs for rental apartments, and everything from furniture assembly to landscaping.",
      "I believe in being organized, on time, reliable, and honest. Let me take care of the work while you enjoy peace of mind.",
    ];

  const bullets =
    dict?.bullets ?? ["Organized", "Reliable & Honest", "Free Estimates"];

  const buttons = {
    getFreeQuote: dict?.buttons?.getFreeQuote ?? "Get Free Quote",
    call: dict?.buttons?.call ?? "Call",
    portfolio: dict?.buttons?.portfolio ?? "Our Work",
  };

  return (
    <section className="relative bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-white">{title}</h1>

          <div className="space-y-4 text-xl text-gray-300">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <HeroButtons getFreeQuote={buttons.getFreeQuote} call={buttons.call} portfolio={buttons.portfolio} />

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6 text-sm text-gray-400 items-start sm:items-center">
            {bullets.map((b, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                {b}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <ImageWithFallback
            src="/images/hero.jpg.png"
            alt="Professional handyman with tools"
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
