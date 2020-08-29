const router = require("express").Router();
const equipmentController = require("../../controllers/equipmentController");

// Matches with "/api/users/all"
router.route("/all/:id")
  .get(equipmentController.findAllOwnedBy);
// Matches with "/api/users"
  router.route("/")
  .post(equipmentController.create);
// Matches with "/api/users/:id"
router
  .route("/:id")
  .put(equipmentController.update)
  .delete(equipmentController.delete);
  

module.exports = router;
