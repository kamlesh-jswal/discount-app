"use client";

import Link from "next/link";
import Navigation from "./Navigation";
import LocationSelector from "./LocationSelector";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="flex h-16 items-center gap-8 px-6">
        <Link href="/" className="text-2xl font-bold text-orange-500">
          DiscountApp
        </Link>

        <LocationSelector />

        <Navigation />
      </div>
    </header>
  );
};

export default Header;
