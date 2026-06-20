export const API = {
    AUTH: {
        LOGIN: "/auth/login",
        REGISTER: "/auth/register",
    },

    RESTAURANTS: {
        LIST: "/listings",
        DETAILS: (id: string) => `/restaurants/${id}`,
    },

    AC_SERVICES: {
        LIST: "/ac-services",
        DETAILS: (id: string) => `/ac-services/${id}`,
    },

    CAKES: {
        LIST: "/cakes",
        DETAILS: (id: string) => `/cakes/${id}`,
    },

    GIFTS: {
        LIST: "/gifts",
        DETAILS: (id: string) => `/gifts/${id}`,
    },
};