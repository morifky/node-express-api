const express        = require("express");
const router         = express.Router();
const userController = require("../controllers/users");

/* Register routes */
router.post("/register",userController.registerUser)

/* login routes */
router.post("/login",userController.login)

/* logout routes */
router.get("/logout",userController.logout)

module.exports = router;