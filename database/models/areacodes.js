const sequelize = require("sequelize");

module.exports = (sequelize, dataTypes) => {

    const areacode = sequelize.define('AreaCodes',
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
            tableName: 'areacodes',
        });

    return areacode;
}