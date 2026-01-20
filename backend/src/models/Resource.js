const mongoose = require("mongoose");

const resourceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  isAllocated: { type: Boolean, default: false }
});

module.exports = mongoose.model("Resource", resourceSchema);
