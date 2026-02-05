"use client";

import { Button } from '@/components/ui/button';
import { BUSINESS_INFO } from '@/lib/constants';

export function HeroButtons({ getFreeQuote = "Get Free Quote", call = "Call" }: { getFreeQuote?: string; call?: string }) {
  const scrollToForm = () => {
    const form = document.getElementById('contact-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Button onClick={scrollToForm} size="lg" className="px-8 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
        {getFreeQuote}
      </Button>
      <a href={`tel:${BUSINESS_INFO.phone}`}>
        <Button variant="outline" size="lg" className="px-8 bg-yellow-400 hover:bg-yellow-500 text-black border-yellow-400 font-semibold">
          {call} {BUSINESS_INFO.phone}
        </Button>
      </a>
    </div>
  );
}