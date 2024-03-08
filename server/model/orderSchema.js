const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  username: { type: String },
  order: { type: Array },
});

module.exports = mongoose.model("order", orderSchema);
