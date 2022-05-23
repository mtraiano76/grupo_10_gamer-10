const sequelize = require("sequelize");

module.exports = (sequelize, dataTypes) => {

    const idiom = sequelize.define('Idioms',
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
            tableName: 'users',
        });

    return idiom;
}