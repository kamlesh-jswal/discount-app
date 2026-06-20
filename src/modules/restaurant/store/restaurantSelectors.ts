import { RootState } from "@/redux/store";

export const selectRestaurants = (
    state: RootState
) => state.restaurant.restaurants;

export const selectRestaurantLoading = (
    state: RootState
) => state.restaurant.loading;

// export const selectRestaurantPagination = (
//     state: RootState
// ) => state.restaurant.pagination;

export const selectSelectedRestaurant = (
    state: RootState
) => state.restaurant.selectedRestaurant;