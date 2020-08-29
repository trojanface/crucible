const router = require("express").Router();
const exerciseController = require("../../controllers/exerciseController");

// Matches with "/api/users/all"
router.route("/all/:id")
  .get(exerciseController.findAllOwnedBy);
// Matches with "/api/users"
  router.route("/")
  .post(exerciseController.create);
// Matches with "/api/users/:id"
router
  .route("/:id")
  .put(exerciseController.update)
  .delete(exerciseController.delete);
  

module.exports = router;
