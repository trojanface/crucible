module.exports = function (sequelize, DataTypes) {
    const Equipment = sequelize.define("equipment", {
        equipment_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        minWeight: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        maxWeight: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        increment: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        ownedBy: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    })


    return Equipment;
}
