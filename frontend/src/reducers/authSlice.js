import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


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

      console.log("datacehck" ,data.success)

      if(data.success){
        toast.success( "Signed Up ", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          });

        window.location = "http://localhost:3000"

       
      }
    } catch (error) {
      console.log("error while connecting to backend " , error.message)
    }
  }
);


export const signInUser = createAsyncThunk("signIn" , async({userName, password}) => {
/* 
  try {
 */
    const data = {userName , password}
    
    /* const config = {
      headers: {
        "Content-Type" : 'text/plain',
      },
    }; */
    const response = await fetch("http://localhost:5000/api/signIn", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data)
    })


    const jsonResponse = await response.json();

    console.log("response " ,jsonResponse)
 

    console.log("response message" ,  jsonResponse.message)

    toast.error( jsonResponse.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });

    if(jsonResponse.success){
      toast.success( "Logged In ", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
      window.location = `http://localhost:3000/home/${userName}`
    }

   /*  jsonResponse.then((result) => {
      console.log("resulte" , result.success);

      console.log("resulte" , result.message); // This will log the result of the fulfilled promise

      if(result.success === true){
        window.location = "http://localhost:3000/home"
      }

    }); */
  
 /*    console.log("request payloaddd ", {userName ,password} )
    const response = await axios.post(
      "http://localhost:5000/api/signIn",
      {
        userName: userName,
        password: password,
      },
      config
    );

    const logInData = response.data; // Correctly accessing the data property from the response
    
     console.log("Response from server:", logInData);  */

   
/*   } catch (error) {
    console.log("error while signin in " , error.message)
  } */
})

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

       /*  return {
          ...state,
          loading: false,
          status: "succeeded",
          success: true,
          userInfo: action.payload,
        }; */
        state.loading = false;
        state.status = "succeeded";
        state.success = true; // registration successful
        state.userInfo = action.payload

        console.log("action" , action)

        console.log("action payload " , action.payload)

   //     state.userToken = action.payload.token;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(signInUser.pending, (state) => {
        state.loading = true;
        state.status = "loading";
        state.error = null;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.loading = false;
        state.status = "succeeded";
        state.success = true; // registration successful
        state.userInfo = action.payload;
        console.log("payload" , action)
       
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.loading = false;
        state.status = "failed";
        state.error = action.error.message;
       
      });
  },
});

export default authSlice.reducer;
