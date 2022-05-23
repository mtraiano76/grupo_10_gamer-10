const sequelize = require("sequelize");

module.exports = (sequelize, dataTypes) => {

    const documenttype = sequelize.define('DocumentTypes',
        {
            id: {
                type: dataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            description: {
                type: dataTypes.STRING
            }
        },
        {
            tableName: 'users',
        });

    return documenttype;
}