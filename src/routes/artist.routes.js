/* ===== SETUP ===== */
const express = require("express");
const router = express.Router();
const controller = require("../controllers/artist.controller");

/* ===== ROUTES ===== */
router.get("/", controller.getAll);
router.get("/search", controller.getBySearch);
router.post("/", controller.addNew);
router.put("/:id", controller.updateExisting);
router.delete("/:id", controller.deleteExisting);

module.exports = router;
