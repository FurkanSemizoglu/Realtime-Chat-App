import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  loading: false,
  status: "idle",
  userInfo: {}, // for user object
  userToken: null, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
};

const backendUrl = "http://localhost:5000";

export const registerUser = createAsyncThunk("register", async ({ userName, password }) => {
    try {
      console.log("Starting registration process...");
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      console.log("Request payload:", { userName, password });

      console.log("Sending POST request...");
      const {data}  = await axios.post(
       // `${backendUrl}/api/signUp`, 
       "http://localhost:5000/api/signUp", 
        { userName, password },
        config
      );

      console.log("Response from server:", data);
    } catch (error) {
      console.log("error while connecting to backend " , error.message)
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.status = "loading";
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.status = "succeeded";
        state.success = true; // registration successful
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
