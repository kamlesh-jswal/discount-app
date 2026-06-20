import {
    createAsyncThunk,
    createSlice,
} from "@reduxjs/toolkit";

import { restaurantService } from "../services/restaurantService";
import { Restaurant } from "../types/restaurant";

export const fetchRestaurants = createAsyncThunk(
    "restaurant/fetchRestaurants",
    async () => {
        return restaurantService.getRestaurants();
    }
);

export const fetchRestaurantDetails = createAsyncThunk(
    "restaurant/fetchRestaurantDetails",
    async (restaurantId: string) => {
        return restaurantService.getRestaurantById(
            restaurantId
        );
    }
);

interface RestaurantState {
    restaurants: Restaurant[];
    selectedRestaurant: Restaurant | null;
    loading: boolean;
    detailsLoading: boolean;
    error: string | null;

}

const initialState: RestaurantState = {
    restaurants: [],
    selectedRestaurant: null,
    loading: false,
    detailsLoading: false,
    error: null,
};

const restaurantSlice = createSlice({
    name: "restaurant",

    initialState,

    reducers: {
        clearSelectedRestaurant: (state) => {
            state.selectedRestaurant = null;
        },
    },

    extraReducers: (builder) => {
        builder

            .addCase(fetchRestaurants.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(
                fetchRestaurants.fulfilled,
                (state, action) => {
                    state.loading = false;
                    state.restaurants = action.payload;
                }
            )

            .addCase(
                fetchRestaurants.rejected,
                (state, action) => {
                    state.loading = false;
                    state.error =
                        action.error.message ||
                        "Failed to fetch restaurants";
                }
            )

            .addCase(
                fetchRestaurantDetails.pending,
                (state) => {
                    state.detailsLoading = true;
                }
            )

            .addCase(
                fetchRestaurantDetails.fulfilled,
                (state, action) => {
                    state.detailsLoading = false;
                    state.selectedRestaurant =
                        action.payload;
                }
            )

            .addCase(
                fetchRestaurantDetails.rejected,
                (state, action) => {
                    state.detailsLoading = false;
                    state.error =
                        action.error.message ||
                        "Failed to fetch restaurant details";
                }
            );
    },
});

export const {
    clearSelectedRestaurant,
} = restaurantSlice.actions;

export default restaurantSlice.reducer;