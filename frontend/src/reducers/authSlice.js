import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  loading: false,
  status : "idle",
  userInfo: {}, // for user object
  userToken: null, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
};

const backendUrl = "http://localhost:5000";

export const registerUser = createAsyncThunk(
  "register",
  async ({ userName, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post(`${backendUrl}/api/signUp`, { userName, password }, config);
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder){
    builder
    .addCase(registerUser.pending, (state) => {
        state.loading = true
        state.status = "loading";
        state.error = null
      })
    .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false
        state.status = "succeeded";
        state.success = true // registration successful
      })
    .addCase(registerUser.rejected, (state, action) => {
        state.loading = false
        state.status = "failed";
        state.error = action.error.message;
      })  

    
     
  }
});

export default authSlice.reducer;
