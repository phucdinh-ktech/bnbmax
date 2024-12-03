// src/routes/invitationRoutes.js
const express = require("express");
const { sharePoints } = require("../controllers/invitationController");
const router = express.Router();

router.get("/", sharePoints);

module.exports = router;
