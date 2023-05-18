/* ===== SETUP ===== */
const express = require("express");
const router = express.Router();
const controller = require("../controllers/profile.controller");

/* ===== ROUTES ===== */
router.get("/:artist_id", controller.getByArtist);
router.get("/fetch/:artist_id", controller.getOnlyFirst);

module.exports = router;
