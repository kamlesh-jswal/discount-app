import { API } from "@/constants/api";
import { apiService } from "@/services/apiService";
import { Restaurant, RestaurantListResponse } from "../types/restaurant";

// export const restaurantService = {
//     getRestaurants: () =>
//         apiService.get(API.RESTAURANTS.LIST),

//     getRestaurantById: (id: string) =>
//         apiService.get(API.RESTAURANTS.DETAILS(id)),
// };


export const restaurantService = {
    getRestaurants: async (): Promise<Restaurant[]> => {
        const response =
            await apiService.get<RestaurantListResponse>(
                API.RESTAURANTS.LIST
            );

        return response.data.listings;
    },

    getRestaurantById: (id: string) =>
        apiService.get<Restaurant>(
            API.RESTAURANTS.DETAILS(id)
        ),
};