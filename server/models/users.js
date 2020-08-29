var bcrypt = require("bcryptjs");
// let passport = require("../config/passport.js");


module.exports = function (sequelize, DataTypes) {
    const Users = sequelize.define("users", {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING,
        },
        lastName: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        height: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        weight: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        DOB: {
            type: DataTypes.DATE,
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ownedEquipment: {
            type: DataTypes.STRING
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    })

    Users.prototype.validPassword = function (password) {
        if (this.password === "futurus10") {
            hashedpassword = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10), null);
            return bcrypt.compareSync(password, hashedpassword);
        } else {
            return bcrypt.compareSync(password, this.password);
        }

    };
    // before a User is created, their password will be automatically hashed
    Users.addHook("beforeCreate", function (users) {
        users.password = bcrypt.hashSync(users.password, bcrypt.genSaltSync(10), null);
    });
    Users.addHook("beforeBulkUpdate", function (users) {
        if (users.attributes.password) {
            users.attributes.password = bcrypt.hashSync(users.attributes.password, bcrypt.genSaltSync(10), null);
        }
    });


    return Users;
}
