const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user");
const PhotosController = require("../controllers/photos");

router.post("/register", UserController.register);

router.post("/login", UserController.login);

router.get("./photos", UserController.photos);

module.exports = router;
