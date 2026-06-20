export interface RestaurantTiming {
    day: string;
    hours: string;
}

export interface Restaurant {
    id: string;
    restaurant_id: string;

    name: string;
    slug: string;

    heroTitle: string;
    description: string;

    cuisines: string[];

    address: string;

    googleRating: number;
    googleReviewsText: string;

    priceForTwo: number;

    statusText: string;
    opensAtText: string;

    distanceText: string | null;

    restaurantImages: string[];
    menuImages: string[];

    phone: string;
    mapsUrl: string;

    couponCode: string;

    categoryType: string;

    timings: RestaurantTiming[];

    facilities: string[];
    popularDishes: string[];
    termsAndConditions: string[];

    offer_ids: string[];
    offer_weightage: string;

    restaurantName: string | null;
    cuisineLine: string | null;
    locationLine: string | null;

    distance: number | null;
    rating: number | null;

    popularity: number;

    costForTwo: number | null;

    bookingLabel: string | null;

    offers: string | null;
    extraOffer: string | null;

    servesAlcohol: boolean;
    bookTable: boolean;

    cuisineTags: string[];
    amenities: string[];

    pureVeg: boolean;

    createdAt: string;
    updatedAt: string;
}

export interface RestaurantListData {
    listings: Restaurant[];
    pagination: Pagination;
}

export interface RestaurantListResponse {
    message: string;
    success: boolean;
    statusCode: number;
    data: RestaurantListData
}


export interface Pagination {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}

export interface RestaurantListRequest {
    page?: number;
    limit?: number;

    search?: string;

    latitude?: number;
    longitude?: number;

    cuisine?: string;

    pureVeg?: boolean;

    bookTable?: boolean;
}

