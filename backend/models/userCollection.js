const { default: mongoose } = require("mongoose");

const userDataSchema = mongoose.Schema({
  name: { type: String, required: true },
  emailId: { type: String, required: true },
  phoneNo:{type: Number, required: true},
  password:{type: String, required:false}
});

const Users = mongoose.model("users", userDataSchema, );
module.exports = { Users };