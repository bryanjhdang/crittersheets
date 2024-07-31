import { Request, Response } from "express";
import asyncHandler from "express-async-handler";

exports.get = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).send("Character sent");
});

exports.create = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).send("Character made.");
});

exports.update = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).send("Character updated.");
});

exports.delete = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).send("Character deleted.");
});