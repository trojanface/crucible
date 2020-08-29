const db = require("../models");
const { sequelize } = require("../models");

// Defining methods for the userController
module.exports = {
  findAllOwnedBy: function (req, res) {
    console.log('searching')
    if (req.user) {//checking if user is validated
      db.equipment.findAll({
        where: { isActive: true, ownedBy: req.params.id },
        attributes: ['equipment_id','name','type','minWeight','maxWeight','increment']
      })
        .then(dbModel => {
          res.json(dbModel)
        })
        .catch(err => res.status(422).json(err));
    }
  },
  update: function (req, res) {
    if (req.user) {//checking if user is validated
      return sequelize.transaction(function (dbTransaction) {//places sql query in a transaction
        return db.equipment
          .update(req.body, {
            where: {
              user_id: req.params.id
            }
          }, { transaction: dbTransaction })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      })

    }
  },
  delete: function (req, res) {
    if (req.user) {//checking if user is validated
      return sequelize.transaction(function (dbTransaction) {//places sql query in a transaction
        return db.equipment
          .update({ isActive: false }, {
            where: {
              user_id: req.params.id
            }
          }, { transaction: dbTransaction })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      })

    }
  },
  create: function (req, res) {
    console.log(req.body)
      return sequelize.transaction(function (dbTransaction) {//places sql query in a transaction
        return db.equipment
          .create(req.body, { transaction: dbTransaction })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      })

    }
  
};
