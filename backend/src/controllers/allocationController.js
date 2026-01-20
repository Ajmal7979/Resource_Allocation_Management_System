const Allocation = require("../models/Allocation");
const Resource = require("../models/Resource");

// USER → request allocation
exports.requestAllocation = async (req, res) => {
  const { resourceId } = req.body;

  // prevent duplicate request
  const existing = await Allocation.findOne({
    user: req.user.id,
    resource: resourceId,
    status: { $in: ["PENDING", "APPROVED"] }
  });

  if (existing) {
    return res.status(400).json({ message: "Already requested" });
  }

  const allocation = await Allocation.create({
    user: req.user.id,
    resource: resourceId,
    status: "PENDING"
  });

  res.json(allocation);
};

// ADMIN → approve allocation
exports.approveAllocation = async (req, res) => {
  const allocation = await Allocation.findById(req.params.id).populate("resource");

  if (!allocation) {
    return res.status(404).json({ message: "Allocation not found" });
  }

  allocation.status = "APPROVED";
  await allocation.save();

  allocation.resource.isAllocated = true;
  await allocation.resource.save();

  res.json({ message: "Allocation approved" });
};

// ADMIN → view all allocations
exports.getAllocations = async (req, res) => {
  const allocations = await Allocation.find()
    .populate("resource")
    .populate("user", "name email");

  res.json(allocations);
};
