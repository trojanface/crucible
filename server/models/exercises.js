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
        isPush: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        stage: {
            type: DataTypes.INTEGER,
            defaultValue: 0 //0 is endurance, 1 is hypertrophy, 2 is strength
        },
        weight: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
            allowNull: false
        },
        fails: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        lastCompleted: {
            type: DataTypes.DATE,
            defaultValue: sequelize.NOW
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    })


    return Exercises;
}
