import React, { useEffect } from 'react'
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { useState } from "react";
import { lime } from "@mui/material/colors";
import { Link } from 'react-router-dom';
import { CircularProgress, FilledInput, FormControl, InputLabel, ThemeProvider, createTheme } from "@mui/material";
import backgroundImage from "../extras/bgImage.jpg.jpg";
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../reducers/authSlice';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loading,status, userInfo, userToken,error, success } = useSelector(
    (state) => state.auth
  )

 
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("");

  const onSubmitButton = async(e) => {

    e.preventDefault();
    console.log(userName);
    console.log(password);

   
    console.log("statusss"  , status)
    await dispatch(registerUser({ userName, password }));

    console.log("status2 " , status)
   console.log("userInfoo" , userInfo)
   console.log(userToken)
  
  }

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();     
    };
  
  
    const theme = createTheme({
      palette: {
        main:lime,
        white: '#fff',
      },
    });


    
  return (

    <form onSubmit={(e) => onSubmitButton(e)}>
    <ThemeProvider theme={theme}>
    <div
      className={`justify-center bg-no-repeat bg-cover bg-center  h-[100%] flex justify-center items-center `}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: "100vh",
        backgroundPosition: "center",
      }}
    >
      <div className="w-1/3 h-3/4 flex flex-col  justify-center space-y-5 border border-solid rounded-md border-black bg-[#18545A] bg-opacity-5 backdrop-filter backdrop-blur-sm md:backdrop-blur-lg ">
        <div className="text-2xl text-white font-semibold flex justify-center mb-3">
          SignUp
        </div>

        <div className="textFields w-4/5 flex flex-col items-center ml-14 space-y-4 relative">
          <div className="w-[80%]">
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={((event) => setUserName(event.target.value))}
            />
          </div>
          <div className="w-[80%]">
            <FormControl sx={{ width: "100%" }} variant="outlined"  onChange={((event) => setPassword(event.target.value))} >
              <InputLabel htmlFor="outlined-adornment-password" >
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </div>
        </div>


        <div className="flex justify-center items-center mx-auto w-[65%]">
          <Button 
             style={{
              borderRadius: 15,
              backgroundColor: "#0C2D57",
              padding: "10px 18px",
              fontSize: "14px"
            }}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 1, mb: 2  }}
           
           /*  onClick={(e) => onSubmitButton(e)} */
          >
           {loading ? <CircularProgress /> : "Sign Up"}
          </Button>
          {/* <Button variant="contained">Contained</Button> */}
        </div>
      </div>
    </div>

    </ThemeProvider>

    </form>
   )
}

export default Register