
module.exports = (sequelize, DataTypes) => {
    
    // Create table named Users
    const History = sequelize.define("History", {
        cat_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        change: {
            type: DataTypes.STRING,
            allowNull: true
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        justify: {
            type: DataTypes.STRING,
            allowNull: true
        },
        
    })

    return History;
}