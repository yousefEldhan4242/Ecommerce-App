import { createSlice } from "@reduxjs/toolkit";

const userLoggendInSlice = createSlice({
  initialState: false,
  name: "userLoggedInSlice",
  reducers: {
    setUserLoggedState: (state, action) => {
      return action.payload;
    },
    logOut: (state, action) => {
      return false;
    },
  },
});

export const { setUserLoggedState, logOut } = userLoggendInSlice.actions;
export default userLoggendInSlice.reducer;
