/*
    sequelize is used here for getting and posting to db
    functions using sequelize should be async
*/

const express = require("express");
const router = express.Router();
const { Inventory } = require("../models");

router.get("/", async (req, res) => {
    const listOfTest = await Inventory.findAll()
    res.json(listOfTest)
});

router.post("/", async (req, res) => {
    const post = req.body
    await Inventory.create(post)
    res.json(post)
});

router.get("/byId/:id", async (req, res) => {
    const id = req.params.id
    const post = await Inventory.findByPk(id)
    res.json(post)
})

module.exports = router;