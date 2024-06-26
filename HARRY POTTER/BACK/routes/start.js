// const express = require("express");
import express from "express";
// const UsersController = require("../controllers/UsersController");
import UsersController from "../controllers/UsersController.js";
import AuthentificationController from "../controllers/AuthentificationController.js";
import AuthentificationMiddleWare from "../middlewares/AuthentificationMiddleWare.js";

const router = express.Router();

router.get("/users", UsersController.index);
router.post("/users", UsersController.store);
router.put("/users/:id", UsersController.update);
router.delete("/users/:id", UsersController.destroy);
router.get("/users/:id", UsersController.show);
router.get(
    "/getMyProfile",
    AuthentificationMiddleWare.authentification,
    UsersController.getMyProfile
);
router.post("/login", AuthentificationController.login);

// module.exports = router;
export default router;
