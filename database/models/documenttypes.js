const sequelize = require("sequelize");

module.exports = (sequelize, dataTypes) => {

    const documenttype = sequelize.define('DocumentTypes',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            description: {
                type: DataTypes.STRING
            }
        },
        {
            tableName: 'users',
        });

    return documenttype;
}