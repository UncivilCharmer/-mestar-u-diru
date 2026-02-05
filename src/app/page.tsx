import Link from "next/link";
import { Hammer } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center space-y-12">
        <div className="space-y-6">
          <div className="flex justify-center">
            <Hammer className="w-20 h-20 text-green-500" />
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold">Meštar u Điru</h1>
          <p className="text-xl text-gray-400">Handyman & Property Care in Dubrovnik</p>
        </div>

        <div className="space-y-4">
          <p className="text-gray-300">Choose your language / Odaberite jezik</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/en"
              className="group w-full sm:w-64 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-green-500 rounded-lg p-8 transition-all duration-200"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">🇬🇧</div>
              <div className="text-2xl font-semibold">English</div>
            </Link>
            <Link
              href="/hr"
              className="group w-full sm:w-64 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-green-500 rounded-lg p-8 transition-all duration-200"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">🇭🇷</div>
              <div className="text-2xl font-semibold">Hrvatski</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
