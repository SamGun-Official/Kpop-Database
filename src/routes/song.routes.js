/* ===== SETUP ===== */
const express = require("express");
const router = express.Router();
const controller = require("../controllers/song.controller");

/* ===== ROUTES ===== */
router.get("/search", controller.getBySearch);
router.get("/:discography_id", controller.getByDiscography);

module.exports = router;
