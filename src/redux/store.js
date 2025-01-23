/** @format */

import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/Users/userSlice";
import { usersApi } from "./features/Users/userApi";
import { appointmentsApi } from "./features/Appointments/appointmentsApi.js";

const store = configureStore({
  reducer: {
    userSlice: usersReducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [appointmentsApi.reducerPath]: appointmentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      usersApi.middleware,
      appointmentsApi.middleware
    ),
});

export default store;
