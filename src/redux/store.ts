import { configureStore } from "@reduxjs/toolkit";
import { teacherApi } from "./services/teacherApi";

export const store = configureStore({
  reducer: {
    [teacherApi.reducerPath]: teacherApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(teacherApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;