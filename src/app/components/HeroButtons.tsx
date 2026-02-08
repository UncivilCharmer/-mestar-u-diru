"use client";

import { Button } from '@/components/ui/button';
import { BUSINESS_INFO } from '@/lib/constants';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function HeroButtons({ getFreeQuote = "Get Free Quote", call = "Call", portfolio = "Our Work" }: { getFreeQuote?: string; call?: string; portfolio?: string }) {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'hr';

  const scrollToForm = () => {
    const form = document.getElementById('contact-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Button onClick={scrollToForm} size="lg" className="w-full sm:w-auto px-8 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
        {getFreeQuote}
      </Button>
      <a href={`tel:${BUSINESS_INFO.phone}`} className="w-full sm:w-auto">
        <Button variant="outline" size="lg" className="w-full px-8 bg-yellow-400 hover:bg-yellow-500 text-black border-yellow-400 font-semibold">
          {call} {BUSINESS_INFO.phone}
        </Button>
      </a>
      <Link href={`/${locale}/portfolio`} className="w-full sm:w-auto">
        <Button variant="secondary" size="lg" className="w-full px-8 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold">
          📸 {portfolio}
        </Button>
      </Link>
    </div>
  );
}