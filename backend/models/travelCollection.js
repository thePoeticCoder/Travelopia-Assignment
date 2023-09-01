const { default: mongoose } = require("mongoose");

const travelDataSchema = mongoose.Schema({
  phoneNo:{type: Number, required: true},
  startingPoint :{ type: String, required: true },
  destination: { type: String, required: true },
  totalTravellers: { type: Number, required: true },
  Budget: { type: Number, required: true },
  rating:{type:Number,required:false}
});

const TravelCollection = mongoose.model("travel", travelDataSchema, );


module.exports = { TravelCollection };