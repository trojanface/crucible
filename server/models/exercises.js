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
        equipmentRequired: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    })


    return Exercises;
}
