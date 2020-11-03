module.exports = function (sequelize, DataTypes) {
    return sequelize.define('list', {
        owner_id: DataTypes.INTEGER,
        ingredient: DataTypes.STRING,
        food_id: DataTypes.INTEGER, //MAYBE! check it out
        quantity: DataTypes.INTEGER,
        comment: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })
}