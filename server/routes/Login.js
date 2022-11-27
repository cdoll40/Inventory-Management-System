/*
    sequelize is used here for getting and posting to db
    functions using sequelize should be async
*/

const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { User } = require("../models");

router.get("/", (req, res) => {
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user });
    } else {
        res.send({ loggedIn: false });
    }
});
  
router.post("/", async (req, res) => {
    const password = req.body.password;

    const users = await User.findAll({ where: {username: req.body.username}})    
        if (users !== null) {
            bcrypt.compare(password, users[0].password, (error, response) => {
            if (response) {
                req.session.user = users;
                console.log(req.session.user);
                res.send(users);
            } else {
                res.send({ message: "Wrong username/password combination!" });
            }
            });
        } else {
            res.send({ message: "User doesn't exist" });
        }
        
});

module.exports = router;