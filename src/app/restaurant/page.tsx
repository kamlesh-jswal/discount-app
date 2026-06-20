"use client";

import { useEffect } from "react";

// import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import { fetchRestaurants } from "@/modules/restaurant/store/restaurantSlice";

// import { restaurantSelectors } from "@/modules/restaurant/store/restaurantSelectors";
import RestaurantCard from "@/modules/restaurant/components/RestaurantCard";
// import {
//   selectRestaurantLoading,
//   selectRestaurants,
// } from "@/modules/restaurant/store/restaurantSelectors";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

// import RestaurantCard from "@/modules/restaurant/components/RestaurantCard";

export default function RestaurantPage() {
  const dispatch = useAppDispatch();
  const { restaurants, loading } = useAppSelector((state) => state.restaurant);
  // const loading = useAppSelector(selectRestaurantLoading);

  // const restaurants = useAppSelector(selectRestaurants);

  // const loading = useAppSelector(selectRestaurantLoading);

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [dispatch]);

  if (loading) {
    return <div className="p-6">Loading restaurants...</div>;
  }

  return (
    <div className="p-6">
      <div
        className="
          grid
          grid-cols-1
          gap-6
          md:grid-cols-2
          lg:grid-cols-3
        "
      >
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}
