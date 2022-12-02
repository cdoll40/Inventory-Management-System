
module.exports = (sequelize, DataTypes) => {
    
    const Image = sequelize.define("Image", {
        image: {
            type: DataTypes.BLOB,
            allowNull: false
        }        
    })

    return Image;
}