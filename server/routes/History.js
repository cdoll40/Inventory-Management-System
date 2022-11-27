const express = require("express");
const router = express.Router();
const { History } = require("../models");

router.get("/", async (req, res) => {
    const listOfHistory = await History.findAll()
    const recentHistory = listOfHistory.slice(-5)

    res.json(recentHistory)
});

router.post("/", async (req, res) => {
    const history = req.body
    History.create(history)
});

module.exports = router;