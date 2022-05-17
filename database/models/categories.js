const sequelize = require("sequelize");

module.exports = (sequelize, dataTypes) => {

    const category = sequelize.define('Categories',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING
            }
        },
        {
            tableName: 'categories',
        });

    return category;
}