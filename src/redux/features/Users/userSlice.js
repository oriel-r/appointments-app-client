/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: false,
  user: {},
};

const userSlice = createSlice({
  name: `userSlice`,
  initialState,
  reducers: {
    logIn: (state, action) => {
      console.log(action);
      state.login = action.payload.login;
      state.user = action.payload.user;
    },
    logOut: (state) => {
      (state.login = false), (state.user = {});
    },
  },
});

export const { logIn, logOut } = userSlice.actions;
export default userSlice.reducer;
