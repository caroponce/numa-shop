import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./products/productsSlice";
import categoriesSlice from "./categories/categoriesSlice";
import cartSlice from "./cart/cartSlice";
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import wishiListSlice from "./wishList/wishiListSlice";
import { categoriesApi } from "./categories/api";
import { productsApi } from "./products/api";
import { orderApi } from "./Orders/api";
import authSlice from "./auth/authSlice";
import { authApi } from "./auth/api";
import { profileApi } from "./profile/api";
import { mapsApi } from "./maps/api";
import addressSlice from "./address/addressSlice";
import { favoritesApi } from "./favoritos/api";

export const store = configureStore({
    reducer: {
       products: productsSlice,
       categories: categoriesSlice,
       cart: cartSlice,
       wishList: wishiListSlice,
       auth: authSlice,
       address: addressSlice,
       [categoriesApi.reducerPath]: categoriesApi.reducer,
       [productsApi.reducerPath]: productsApi.reducer,
       [orderApi.reducerPath]: orderApi.reducer,
       [authApi.reducerPath]: authApi.reducer,
       [profileApi.reducerPath]: profileApi.reducer,
       [mapsApi.reducerPath]: mapsApi.reducer,
       [favoritesApi.reducerPath]: favoritesApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categoriesApi.middleware, productsApi.middleware, favoritesApi.middleware, orderApi.middleware, authApi.middleware, profileApi.middleware, mapsApi.middleware)
    
})

setupListeners(store.dispatch);