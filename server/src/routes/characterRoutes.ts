import express, { Router } from "express";

const characterRouter: Router = express.Router();
const controller = require("../controllers/characterController");

characterRouter.post("/", controller.create);

export { characterRouter };