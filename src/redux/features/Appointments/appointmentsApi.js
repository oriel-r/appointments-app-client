/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const appointmentsApi = createApi({
  reducerPath: `appointmentsApi`,
  baseQuery: fetchBaseQuery({ baseUrl: process.env.BASE_URL }),
  endpoints: (builder) => ({
    cancelAppointment: builder.mutation({
      query: (id) => ({
        url: `appointments/cancel/${id}`,
        method: `PUT`,
      }),
    }),

    createAppointment: builder.mutation({
      query: (appointmentData) => ({
        url: `appointments/schedule/`,
        method: `POST`,
        body: appointmentData,
      }),
    }),
  }),
});

export const { useCancelAppointmentMutation, useCreateAppointmentMutation } =
  appointmentsApi;
