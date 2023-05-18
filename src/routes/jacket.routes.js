/* ===== SETUP ===== */
const express = require("express");
const router = express.Router();
const controller = require("../controllers/jacket.controller");

/* ===== ROUTES ===== */
router.get("/:discography_id", controller.getByDiscography);

module.exports = router;
