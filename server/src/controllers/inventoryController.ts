import { Request, Response } from "express";
import asyncHandler from "express-async-handler";

exports.get_all = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).send("Inventory sent");
});

exports.get = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).send("Inventory sent");
});

exports.create = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).send("Inventory made.");
});

exports.delete = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).send("Inventory deleted.");
});