import { Request, Response } from "express";
import asyncHandler from "express-async-handler";

exports.get_all = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).send("All characters sent");
});

exports.get = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).send("Character sent");
});

exports.post = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).send("Character made.");
});

exports.put = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).send("Character updated.");
});

exports.delete = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).send("Character deleted.");
});