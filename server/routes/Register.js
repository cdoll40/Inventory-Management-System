/*
    sequelize is used here for getting and posting to db
    functions using sequelize should be async
*/

const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const { User } = require("../models");

router.post("/", async (req, res) => {
    //const username = req.body.username;
    const password = req.body.password;
    const userReg = req.body

    bcrypt.hash(password, saltRounds, (err, hash) => {
    
        userReg.password = hash
        User.create(userReg)
        if (err) {
        console.log(err);
        }
        // Register.query(
        // "INSERT INTO users (username, password) VALUES (?,?)",
        // [username, hash],
        // (err, result) => {
        //     console.log(err);
        // }
        // );
    });
    
});

module.exports = router;