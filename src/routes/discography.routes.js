/* ===== SETUP ===== */
const express = require("express");
const router = express.Router();
const controller = require("../controllers/discography.controller");

/* ===== ROUTES ===== */
router.get("/search", controller.getBySearch);
router.get("/:artist_id", controller.getByArtist);

module.exports = router;
