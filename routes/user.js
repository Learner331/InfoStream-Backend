const express = require("express");

const {
  handleLoginUser,
  handleCreateNewUser,
  TokenValidator
} = require("../controllers/authentication/user");

const router = express.Router();

router.route("/").post(handleCreateNewUser);
router.route("/login").post(handleLoginUser);
router.route("/validate").post(TokenValidator);
// router.route("/getArticles/:category").get(handleGetArticles);

module.exports = router;