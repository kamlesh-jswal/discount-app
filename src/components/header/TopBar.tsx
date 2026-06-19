"use client";

import Link from "next/link";

const TopBar = () => {
  return (
    <div className="flex h-16 items-center justify-between border-b px-6">
      <Link href="/" className="text-2xl font-bold">
        Discount App
      </Link>

      <div className="mx-8 flex-1">
        <input
          type="text"
          placeholder="Search products, services, restaurants..."
          className="w-full rounded-lg border px-4 py-2 outline-none"
        />
      </div>

      <div className="flex items-center gap-6">
        <Link href="/cart">Cart</Link>
        <Link href="/orders">Orders</Link>
        <Link href="/profile">Profile</Link>
      </div>
    </div>
  );
};

export default TopBar;
