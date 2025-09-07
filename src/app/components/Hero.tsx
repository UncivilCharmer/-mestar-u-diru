import { ImageWithFallback } from '@/lib/ImageWithFallback';
import { HeroButtons } from './HeroButtons';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-background to-secondary/20 py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
            Professional Handyman Services
          </h1>
          <p className="text-xl text-muted-foreground">
            Quality repairs and improvements for your home. Licensed, insured, and committed to excellence with over 15 years of experience.
          </p>
          <HeroButtons />
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              Licensed & Insured
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              Same Day Service
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              100% Satisfaction Guarantee
            </div>
          </div>
        </div>
        <div className="relative">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1581166397057-235af2b3c6dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5keW1hbiUyMHRvb2xzJTIwY29uc3RydWN0aW9uJTIwd29ya2VyfGVufDF8fHx8MTc1NzI1NTEyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Professional handyman with tools"
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}