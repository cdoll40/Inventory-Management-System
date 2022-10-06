/*
    
*/

module.exports = (sequelize, DataTypes) => {
    
   
    const Inventory = sequelize.define("Inventory", {
        perishable: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        frozen: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        produce: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        dried: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })

    return Inventory
}