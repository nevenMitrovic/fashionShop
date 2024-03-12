const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  username: { type: String },
  order: { type: Array },
  total: { type: String }
});

module.exports = mongoose.model("order", orderSchema);
