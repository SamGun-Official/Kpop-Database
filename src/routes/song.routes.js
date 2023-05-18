/* ===== SETUP ===== */
const express = require("express");
const router = express.Router();
const controller = require("../controllers/song.controller");

/* ===== ROUTES ===== */
router.get("/:discography_id", controller.getByDiscography);
router.get("/search", controller.getBySearch);

module.exports = router;
