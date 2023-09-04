import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { URL_BASE_FIREBASE_REALTIME_DATABASE } from "../../../constants/firrebase";

export const profileApi = createApi({
    reducerPath: 'profileApi',
    baseQuery: fetchBaseQuery({ baseUrl: URL_BASE_FIREBASE_REALTIME_DATABASE }),
    tagTypes: ['Profile'],
    endpoints: (builder) => ({
      getLookPhoto: builder.query({
        query: ({ localId }) => ({
          url: `/users/${localId}.json`,
          method: 'GET',
        }),
      }),
      updateLookPhoto: builder.mutation({
        query: ({ localId, image }) => ({
          url: `/users/${localId}.json`,
          method: 'PATCH',
          body: { profileImage: image },
        }),
      }),
      updateAddress: builder.mutation({
        query: ({ localId, address, location }) => ({
          url: `/users/${localId}.json`,
          method: 'PATCH',
          body: {
            address,
            location },
            
        }),
      }),
     
    }),
  });
  
  export const { useGetLookPhotoQuery, useUpdateLookPhotoMutation, useUpdateAddressMutation } = profileApi;