import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./api/authApi";
import { RootState } from "../app/store";

const initialState = {
  value: { access_token: "", error: "", success: "", isLogged: false },
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
  async ({ username, password }: { username: string; password: string }) => {
    const response = await registerUser({ username, password });
    localStorage.setItem("access_token", response.data.access_token);
    return response.data;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    closeModal: (state) => {
      state.value = { ...state.value, error: "", success: "" };
    },
    resetAuth: (state) => {
      state.value = {
        ...state.value,
        access_token: "",
        error: "",
        success: "",
        isLogged: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = {
          ...action.payload,
          error: "",
          isLogged: true,
          success: "",
        };
      })
      .addCase(login.rejected, (state) => {
        state.status = "error";
        state.value = {
          ...state.value,
          access_token: "",
          error: "Invalid email or password",
        };
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = {
          ...action.payload,
          error: "",
          success: "Account created successfully",
        };
      })
      .addCase(register.rejected, (state) => {
        state.status = "error";
        state.value = {
          ...state.value,
          error: "Email already exists",
        };
      });
  },
});

export const { closeModal } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth.value;

export default authSlice.reducer;
