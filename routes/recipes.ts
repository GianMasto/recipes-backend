import express, { Request, Response } from "express";

import { Recipe } from "../models/Recipe";
import { IRecipe } from "../interfaces/IRecipe";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const recipes = await Recipe.find();
  res.send(recipes);
});

router.post("/", async (req: Request<IRecipe>, res: Response) => {
  const newRecipe = new Recipe(req.body);
  res.send(newRecipe);
});

router.put("/", (req: Request, res: Response) => {
  res.send("PUT recipes");
});

router.delete("/", (req: Request, res: Response) => {
  res.send("DELETE recipes");
});

export default router;
