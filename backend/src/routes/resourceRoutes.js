const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const { createResource, getResources } = require("../controllers/resourceController");
const roleMiddleware = require("../middleware/roleMiddleware");

router.post("/", auth,roleMiddleware, role("ADMIN"), createResource);
router.get("/", auth,roleMiddleware,getResources);

module.exports = router;
