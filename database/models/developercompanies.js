const sequelize = require("sequelize");

module.exports = (sequelize, dataTypes) => {

    const developercompany = sequelize.define('DeveloperCompanies',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING
            },
        },
        {
            tableName: 'developercompanies',
        });

    return user;
}