const express = require("express");
const {
  getTravelData,
  createTravelData,
} = require("../services/travel.services");

const travelRoute = express.Router();

travelRoute.get("/getTravelInfo", getTravelData);
travelRoute.post("/createTravelInfo", createTravelData);

module.exports = { travelRoute };

