import express, { Router } from "express";

const inventoryRouter: Router = express.Router();
const controller = require("../controllers/characterController");

// GET request for list of all Items
inventoryRouter.get("/", controller.get_all);

// GET request for one Item
inventoryRouter.get("/", controller.get);

// POST request to create Item
inventoryRouter.post("/", controller.create);

// DELETE request to delete Item
inventoryRouter.delete("/", controller.delete);

export { inventoryRouter };