const { Users } = require("../models/userCollection");

const createUser = async (req, res) => {
  try {
    const userData = new Users(req.body);
    await userData.save();
    res.status(201).json(userData);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

const getUserData = async (req, res) => {
  try {
	console.log(req.query.phoneNo)
	const phone = req.query.phoneNo;
    const userData = await Users.find( { phoneNo: phone} );
    res.json(userData);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

module.exports = { createUser, getUserData };