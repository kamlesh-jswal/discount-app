import apiClient from "./apiClient";

export type QueryParams = Record<
    string,
    string | number | boolean | undefined | null
>;

export const apiService = {
    async get<T>(
        url: string,
        params?: QueryParams,
    ): Promise<T> {
        const response = await apiClient.get<T>(url, {
            params,
        });

        return response.data;
    },

    async post<TRequest, TResponse>(
        url: string,
        data?: TRequest,
    ): Promise<TResponse> {
        const response = await apiClient.post<TResponse>(
            url,
            data,
        );

        return response.data;
    },

    async put<TRequest, TResponse>(
        url: string,
        data?: TRequest,
    ): Promise<TResponse> {
        const response = await apiClient.put<TResponse>(
            url,
            data,
        );

        return response.data;
    },

    async patch<TRequest, TResponse>(
        url: string,
        data?: TRequest,
    ): Promise<TResponse> {
        const response = await apiClient.patch<TResponse>(
            url,
            data,
        );

        return response.data;
    },

    async delete<TResponse>(
        url: string,
    ): Promise<TResponse> {
        const response = await apiClient.delete<TResponse>(
            url,
        );

        return response.data;
    },
};