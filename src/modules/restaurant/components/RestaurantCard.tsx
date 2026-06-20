"use client";

import Image from "next/image";

import { Star } from "lucide-react";

import { Restaurant } from "../types/restaurant";
import AppImage from "@/components/common/Image/AppImage";

interface Props {
  restaurant: Restaurant;
}

export default function RestaurantCard({ restaurant }: Props) {
  return (
    <div
      className="
        overflow-hidden
        rounded-3xl
        border
        bg-white
        shadow-sm
        transition
        hover:shadow-lg
      "
    >
      {/* Image */}

      <div className="relative h-56 w-full">
        {/* <Image
          src={
            restaurant.restaurantImages?.[0] ||
            "/images/restaurant-placeholder.jpg"
          }
          alt={restaurant.name}
          fill
          className="object-cover"
        /> */}
        <AppImage
          src={restaurant.restaurantImages?.[0]}
          alt={restaurant.name}
          fill
        />
        <div
          className="
            absolute
            bottom-4
            left-4
            text-3xl
            font-bold
            text-white
            drop-shadow-lg
          "
        >
          {restaurant.name}
        </div>

        <div
          className="
            absolute
            bottom-4
            right-4
            flex
            items-center
            gap-1
            rounded-full
            bg-emerald-500
            px-3
            py-1
            text-sm
            font-semibold
            text-white
          "
        >
          <Star size={14} fill="white" />
          {restaurant.googleRating}
        </div>
      </div>

      {/* Content */}

      <div className="p-4">
        <div className="flex justify-between">
          <div
            className="
              max-w-[70%]
              truncate
              text-sm
              text-gray-600
            "
          >
            {restaurant.cuisines.join(" • ")}
          </div>

          <div className="font-medium">₹{restaurant.priceForTwo} for two</div>
        </div>

        <div className="mt-2 flex justify-between">
          <div
            className="
              max-w-[70%]
              truncate
              text-gray-500
            "
          >
            {restaurant.address}
          </div>

          <div className="text-gray-500">3.5 km</div>
        </div>

        {/* Reserve Table */}

        <div className="mt-4">
          <button
            className="
              rounded-full
              bg-gray-100
              px-4
              py-2
              text-sm
              font-medium
            "
          >
            Reserve a Table
          </button>
        </div>

        {/* Offer */}

        <div
          className="
            mt-4
            flex
            items-center
            justify-between
            rounded-full
            bg-emerald-500
            px-5
            py-3
            text-white
          "
        >
          <span>Instant 10% off on walk-in</span>

          <span>+1 more</span>
        </div>

        {/* Extra Offer */}

        <div
          className="
            mt-4
            text-sm
            font-medium
            text-indigo-600
          "
        >
          Extra additional 10% off on desserts
        </div>
      </div>
    </div>
  );
}
