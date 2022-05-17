const sequelize = require("sequelize");

module.exports = (sequelize, dataTypes) => {

    const areacode = sequelize.define('AreaCodes',
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
            tableName: 'areacodes',
        });

    return areacode;
}