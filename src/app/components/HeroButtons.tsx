"use client";

import { Button } from '@/components/ui/button';
import { BUSINESS_INFO } from '@/lib/constants';

export function HeroButtons() {
  const scrollToForm = () => {
    const form = document.getElementById('contact-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Button onClick={scrollToForm} size="lg" className="px-8">
        Get Free Quote
      </Button>
      <a href={`tel:${BUSINESS_INFO.phone}`}>
        <Button variant="outline" size="lg" className="px-8">
          Call {BUSINESS_INFO.phone}
        </Button>
      </a>
    </div>
  );
}