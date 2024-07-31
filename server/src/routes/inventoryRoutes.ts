import express, { Router } from "express";

const inventoryRouter: Router = express.Router();
const controller = require("../controllers/characterController");

inventoryRouter.post("/", controller.create);

export { inventoryRouter };