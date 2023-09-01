const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
require("dotenv").config();
const connection =  mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected to DB!'))
    .catch(error => console.log(error))

module.exports = { connection };