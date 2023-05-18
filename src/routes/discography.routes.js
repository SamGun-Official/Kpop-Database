/* ===== SETUP ===== */
const express = require("express");
const router = express.Router();
const controller = require("../controllers/discography.controller");

/* ===== ROUTES ===== */
router.get("/", controller.getAll);
router.get("/search", controller.getBySearch);

module.exports = router;
