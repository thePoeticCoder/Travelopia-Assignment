const express = require("express");
const {
  getTravelData,
  createTravelData,
  getAllTravelData
} = require("../services/travel.services");

const travelRoute = express.Router();

travelRoute.get("/getTravelInfo", getTravelData);
travelRoute.get("/getAllData", getAllTravelData);
travelRoute.post("/createTravelInfo", createTravelData);

module.exports = { travelRoute };

