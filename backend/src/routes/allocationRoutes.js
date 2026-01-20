const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

const {
  requestAllocation,
  approveAllocation,
  getAllocations
} = require("../controllers/allocationController");

router.post("/", auth, requestAllocation);
router.get("/", auth, role("ADMIN"), getAllocations);
router.put("/:id/approve", auth, role("ADMIN"), approveAllocation);

module.exports = router;
