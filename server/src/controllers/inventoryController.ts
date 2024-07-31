import { Request, Response } from "express";
import asyncHandler from "express-async-handler";

exports.get = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).send("Inventory sent");
});

exports.create = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).send("Inventory made.");
});

exports.update = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).send("Inventory updated.");
});

exports.delete = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).send("Inventory deleted.");
});