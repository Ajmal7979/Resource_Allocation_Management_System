const mongoose = require("mongoose");

const allocationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  resource: { type: mongoose.Schema.Types.ObjectId, ref: "Resource" },
  status: {
    type: String,
    enum: ["PENDING", "APPROVED", "REJECTED"],
    default: "PENDING"
  }
});

module.exports = mongoose.model("Allocation", allocationSchema);
