const { TravelCollection } = require("../models/travelCollection");

const createTravelData = async (req, res) => {
  try {
    const travelData = new TravelCollection(req.body);
    await travelData.save();
    res.status(201).json(travelData);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

const getTravelData = async (req, res) => {
  try {
	const phone = req.query.phoneNo;
    const travelData = await TravelCollection.find( { phoneNo: phone} );
    res.json(travelData);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

const getAllTravelData = async (req, res) => {
  try {
    const travelData = await TravelCollection.find();
    res.json(travelData);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

module.exports = { createTravelData, getAllTravelData,getTravelData };