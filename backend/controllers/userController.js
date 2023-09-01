const express = require("express");
const {
  getUserData,
  createUser,
} = require("../services/user.service");

const userRoute = express.Router();

userRoute.get("/getUser", getUserData);
userRoute.post("/createUser", createUser);

module.exports = { userRoute };

