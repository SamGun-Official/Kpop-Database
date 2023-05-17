/* ===== SETUP ===== */
const express = require("express");
const router = express.Router();
const controller = require("../controllers/member.controller");

/* ===== ROUTES ===== */
router.get("/:artist_id", controller.getByArtist);

module.exports = router;
