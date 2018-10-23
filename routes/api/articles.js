const router = require("express").Router();

const arCon = require("../../controllers/arCon");

//home page route
router.route("/")
    //display all stored in db
    .get(arCon.findAll)
    .post(arCon.create);

//search via id
router.route(":/id")
    .get(arCon.findById)
    .put(arCon.update)
    .delete(arCon.remove);

module.exports = router;