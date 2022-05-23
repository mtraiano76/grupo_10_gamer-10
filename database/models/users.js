const sequelize = require("sequelize");

module.exports = (sequelize, dataTypes) => {

    const user = sequelize.define('Users',
        {
            id: {
                type: dataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: dataTypes.STRING
            },
            lastName: {
                type: dataTypes.STRING
            },
            email: {
                type: dataTypes.STRING
            },
            password: {
                type: dataTypes.STRING
            }
        },
        {
            tableName: 'users',
        });

    return user;
}