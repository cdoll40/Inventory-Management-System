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

// router.post("/", async (req, res) => {
//     const post = req.body
//     await Inventory.create(post)
//     res.json(post)
// });

router.get("/byId/:id", async (req, res) => {
    const id = req.params.id
    const post = await Inventory.findByPk(id)
    res.json(post)
})

router.post("/", async (req, res) => {
    const invId = req.body.id

    Inventory.findByPk(invId)
        .then((inventory) => {
            inventory.id = invId
            inventory.cat_name = req.body.cat_name
            inventory.count = req.body.count
            inventory.createdAt = req.body.createdAt
            inventory.updatedAt = req.body.updatedAt
            inventory.save()
            // res.redirect('back')
        }).catch((error) => {
            console.log(error)
        })
})

module.exports = router;