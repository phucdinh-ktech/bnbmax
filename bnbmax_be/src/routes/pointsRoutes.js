const express = require("express");
const { createWallet } = require("../controllers/pointsController");
const router = express.Router();

router.post("/", createWallet);

module.exports = router;
