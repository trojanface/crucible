module.exports = function (sequelize, DataTypes) {
    const Exercises = sequelize.define("exercises", {
        ex_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        primaryMusc: {
            type: DataTypes.STRING,
            allowNull: false
        },
        secondaryMusc: {
            type: DataTypes.STRING,
            allowNull: true
        },
        isIsolation: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        equipmentRequired: {
            type: DataTypes.STRING,
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


    return Exercises;
}
