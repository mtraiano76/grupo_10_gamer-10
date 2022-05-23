const sequelize = require("sequelize");

module.exports = (sequelize, dataTypes) => {

    const category = sequelize.define('Categories',
        {
            id: {
                type: dataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: dataTypes.STRING
            }
        },
        {
            tableName: 'categories',
        });

    return category;
}