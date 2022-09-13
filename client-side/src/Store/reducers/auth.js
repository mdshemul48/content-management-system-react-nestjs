/* eslint-disable no-undef */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  token: "",
  loading: false,
};

// this will read the token from local storage. decode and check if login expires or not.
//  if login expires it will remove token from local storage.
const userToken = localStorage.getItem("userInfo");
if (userToken) {
  const userInfoAndToken = JSON.parse(userToken);
  initialState.token = userInfoAndToken.token;
  initialState.user = userInfoAndToken.user;
}

const reducers = {
  login: (state, action) => {
    const { token, user } = action.payload;
    state.user = user;
    state.token = token;
    return state;
  },
  logout: (state) => {
    state.user = "";
    state.token = "";
    return state;
  },
};

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers,
});

export const { login, logout } = authReducer.actions;

export default authReducer.reducer;
