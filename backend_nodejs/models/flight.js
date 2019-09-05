const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const flightSchema = new Schema(
  {
    details: {
       type: ["Mixed"]
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    passengers: {
      type: ["Mixed"]
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Flight", flightSchema);
