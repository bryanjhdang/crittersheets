import express, { Router } from "express";

const characterRouter: Router = express.Router();
const controller = require("../controllers/characterController");

// GET request for list of all Characters
characterRouter.get("/", controller.get_all);

// GET request for one Character
characterRouter.get("/:id", controller.get);

// POST request to create Character
characterRouter.post("/", controller.post);

// PUT request to update Character
characterRouter.put("/:id", controller.put);

// DELETE request to delete Character
characterRouter.delete("/:id", controller.delete);

export { characterRouter };