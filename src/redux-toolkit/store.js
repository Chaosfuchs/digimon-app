import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { digimonApi } from "./api";

export const store = configureStore({
  reducer: {
    [digimonApi.reducerPath]: digimonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(digimonApi.middleware),
});

setupListeners(store.dispatch);
