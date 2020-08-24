module.exports = function (sequelize, DataTypes) {
    const ExerciseStats = sequelize.define("exerciseStats", {
        exSta_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        exercise: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        stage: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        weight: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fails: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    })


    return ExerciseStats;
}
