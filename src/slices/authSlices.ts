import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./api/authApi";
import { RootState } from "../app/store";

const initialState = {
  value: { access_token: "", error: "", isLogged: false },
  status: "idle",
};

export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }: { username: string; password: string }) => {
    const response = await loginUser({ username, password });
    localStorage.setItem("access_token", response.data.access_token);
    return response.data;
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (data: {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  }) => {
    const response = await registerUser(data);
    localStorage.setItem("access_token", response.data.access_token);
    return response.data;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    closeErrorModal: (state) => {
      state.value = { ...state.value, error: "" };
    },
    resetAuth: (state) => {
      state.value = { ...state.value, access_token: "", error: "" };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = { ...action.payload, error: "", isLogged: true };
      })
      .addCase(login.rejected, (state) => {
        state.status = "err";
        state.value = {
          ...state.value,
          access_token: "",
          error: "Invalid email or password",
        };
      })
      .addCase(register.pending, (state) => {
        state.status = "loading";
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = { ...action.payload, error: "" };
      })
      .addCase(register.rejected, (state) => {
        state.status = "err";
        state.value = {
          ...state.value,
          error: "Error or Email Already in Use",
        };
      });
  },
});

export const { closeErrorModal } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth.value;

export default authSlice.reducer;
