/* ===== SETUP ===== */
const express = require("express");
const router = express.Router();
const controller = require("../controllers/jacket.controller");

/* ===== ROUTES ===== */
router.get("/", controller.getAll);

module.exports = router;
