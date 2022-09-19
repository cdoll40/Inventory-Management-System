/*
    Inventory.js creates a table in the db named Perishable
    More tables can be created
    module.exports exports the data to the db 
    the objects such as productName, productDescription, productCount are the columns of the table

    *** TODO:
    *** INVENTORY WILL BE A TABLE THAT CONTAINS THE FOUR TYPES OF INVENTORY ITEMS,
    *** THE FOUR TYPES OF ITEMS WILL BE SEPERATE TABLES ASSOCIATED WITH THE INVENTORY TABLE
*/

module.exports = (sequelize, DataTypes) => {
    
    // Create table named Perishable
    const Perishable = sequelize.define("Perishable", {
        productName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        productDescription: {
            type: DataTypes.STRING,
            allowNull: false
        },
        productCount: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })

    return Perishable
}