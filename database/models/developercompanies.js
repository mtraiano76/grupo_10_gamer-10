const sequelize = require("sequelize");

module.exports = (sequelize, dataTypes) => {

    const developercompany = sequelize.define('DeveloperCompanies',
        {
            id: {
                type: dataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: dataTypes.STRING
            },
        },
        {
            tableName: 'developercompanies',
        });

    return developercompany;
}