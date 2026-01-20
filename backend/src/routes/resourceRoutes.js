const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const { createResource, getResources } = require("../controllers/resourceController");

router.post("/", auth, role("ADMIN"), createResource);
router.get("/", auth, getResources);

module.exports = router;
