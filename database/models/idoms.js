const sequelize = require("sequelize");

module.exports = (sequelize, dataTypes) => {

    const idiom = sequelize.define('Idioms',
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
            tableName: 'users',
        });

    return idiom;
}