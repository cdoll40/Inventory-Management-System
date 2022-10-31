/*
    login.js is the model for the table that could hold credentials
    Subject to change
    currently just trying to setup a login system, mainly the front end section
    -Kody B
*/

module.exports = (sequelize, DataTypes) => {
    
    // Create table named Users
    const User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
    })

    return User;
}