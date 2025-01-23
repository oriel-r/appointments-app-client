/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: `usersApi`,
  baseQuery: fetchBaseQuery({ baseUrl: process.env.BASE_URL }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (userData) => ({
        url: `users/login`,
        method: `POST`,
        body: userData,
      }),
    }),

    registerUser: builder.mutation({
      query: (newUserData) => ({
        url: `users/register/`,
        method: `POST`,
        body: newUserData,
      }),
    }),

    getUserById: builder.query({
      query: (id) => `users/${id}`,
    }),
  }),
});

export const {
  useLoginUserMutation,
  useGetUserByIdQuery,
  useRegisterUserMutation,
} = usersApi;
