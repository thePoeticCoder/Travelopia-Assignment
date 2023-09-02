const express = require("express");
const { connection } = require("./db_connection/dbConnection");
const cors = require("cors");
require("dotenv").config();

const { travelRoute } = require("./controllers/travelController");
const { userRoute } = require("./controllers/userController");
const PORT = process.env.PORT || 5949;
const app = express();

app.use(express.json());
app.use(cors());
app.use('/user',userRoute);
app.use('/travel',travelRoute);
app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Database connection established");
  } catch (err) {
    console.log(err);
  }
  console.log(`server started on port ${PORT}`);
});

module.exports = {app}