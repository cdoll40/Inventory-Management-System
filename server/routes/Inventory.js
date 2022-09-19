/*
    sequelize is used here for getting and posting to db
    functions using sequelize should be async
*/

const express = require("express");
const router = express.Router();
const { Perishable } = require("../models");

router.get("/", async (req, res) => {
    const listOfTest = await Perishable.findAll()
    res.json(listOfTest)
});

router.post("/", async (req, res) => {
    const post = req.body
    await Perishable.create(post)
    res.json(post)
});

module.exports = router;