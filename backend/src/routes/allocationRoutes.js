const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

const {
  requestAllocation,
  approveAllocation,
  rejectAllocation,
  getAllocations
  
} = require("../controllers/allocationController");

router.post("/", auth, requestAllocation);
router.get("/", auth, role("ADMIN"), getAllocations);
router.put("/:id/approve", auth, role("ADMIN"), approveAllocation);
router.put("/:id/reject", auth, role("ADMIN"), rejectAllocation);


module.exports = router;
