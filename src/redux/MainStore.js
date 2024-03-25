import { configureStore } from "@reduxjs/toolkit";
import GlobalStatesSlice from "./slices/GlobalStatesSlice";
import  ApisSlice  from "./slices/APIs";
export const MainStore = configureStore({
  reducer: {
    global: GlobalStatesSlice,
    apis: ApisSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
