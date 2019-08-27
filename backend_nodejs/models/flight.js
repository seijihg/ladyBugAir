const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const flightSchema = new Schema(
  {
    journeys: {
      type: ["Mixed"]
    },
    disclosures: {
      type: ["Mixed"]
    },
    bagDisclosures: {
      type: ["Mixed"]
    },
    penalties: {
      type: ["Mixed"]
    },
    passengers: {
      type: ["Mixed"]
    },
    totalPrice: {
      amount: {
        type: "Number"
      },
      currencyCode: {
        type: "String"
      }
    },
    bookingId: {
      type: "String"
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    airlines: {
      type: Schema.Types.ObjectId,
      ref: 'Airline',
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Flight", flightSchema);
