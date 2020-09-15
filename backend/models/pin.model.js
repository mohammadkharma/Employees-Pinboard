const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const pinSchema = new Schema(
  {
    employeeName: { type: String, require: true },
    description: { type: String, require: true },
    date: { type: Date, require: true },
  },
  {
    timestamps: true,
  }
);

const Pin = mongoose.model("Pin", pinSchema);

module.exports = Pin;
