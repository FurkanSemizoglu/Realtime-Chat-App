const User = require("../models/user.js");
const bcrypt = require("bcrypt");
const jwtToken = require("jsonwebtoken");
const { createSecretToken } = require("../util/secretToken.js");

const register = async (req, res) => {
  try {
    const { userName, password } = req.body;

    const existingUser = await User.findOne({ userName });

    if (existingUser) {
      return res.json({
        message: "User already exist",
      });
    }

    const user = await User.create({ userName, password });

    //    const newUser = new User({userName,password});
    //    const token = createSecretToken(newUser._id)

    if (user) {
      console.log("User created");
      res.status(201).json({
        message: "User signed up succesfully",
        success: true,
        _id: user._id,
        userName: user.userName,
        token: createSecretToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("Failed to create new user");
    }
    //     const result = await newUser.save()
  } catch (error) {
    console.log("erroe", error.message);
    res.status(404).json({
      message: error.message,
    });
  }
};

const LogIn = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });

    if (!user) {
      return res.status(400).json({
        error: "User not found",
      });
    }
    const isPasswordMatch = await user.matchPassword(password);

    if (!isPasswordMatch) {
      return res.status(400).json({
        error: "Invalid password",
      });
    }

    if (user && isPasswordMatch) {
      return res.status(201).json({
        message: "User signed in succesfully",
        success: true,
        _id: user._id,
        userName: user.userName,
        token: createSecretToken(user._id),
      });
    }
  } catch (error) {
    console.log("erroe", error.message);
    return res.status(404).json({
      message: error.message,
      succes : false
    });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

module.exports = {
  register,
  LogIn,
  getUsers,
};
