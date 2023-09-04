import { URL_BASE_FIREBASE_REALTIME_DATABASE } from "../../../constants/firrebase";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const favoritesApi = createApi({
    reducerPath: 'favoritesApi',
    baseQuery: fetchBaseQuery({ baseUrl: URL_BASE_FIREBASE_REALTIME_DATABASE}),
    tagTypes: ['Favoritos'],
    endpoints: (builder) => ({
        createWishList: builder.mutation({
            query: (wishList) => ({
                url: `/favoritos.json`,
                method: 'POST',
                body: wishList,
            }),
            invalidatesTags: ['Favoritos']
        }),
        getWishList: builder.query({
            query: () => `/favoritos.json`,
            transformResponse: (response) => {
              if (!response) return [];
              return Object?.keys(response)?.map((key) => ({
                id: key,
                ...response[key],
              }));
            },
            providesTags: ['Favoritos'],
          }),
        }),
})

export const {useCreateWishListMutation, useGetWishListQuery} = favoritesApi;