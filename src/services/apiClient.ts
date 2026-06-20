import axios, {
    AxiosError,
    AxiosInstance,
    InternalAxiosRequestConfig,
} from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const apiClient: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 30000,
    headers: {
        "Content-Type": "application/json",
    },
});

apiClient.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        if (typeof window !== "undefined") {
            const token = localStorage.getItem("accessToken");

            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }

        return config;
    },
    (error: AxiosError) => Promise.reject(error),
);

apiClient.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
        const status = error.response?.status;

        switch (status) {
            case 401:
                console.error("Unauthorized");
                break;

            case 403:
                console.error("Forbidden");
                break;

            case 404:
                console.error("Resource not found");
                break;

            case 500:
                console.error("Internal server error");
                break;

            default:
                break;
        }

        return Promise.reject(error);
    },
);

export default apiClient;