import express, { Request, Response } from "express";

import { Recipe } from "../models/Recipe";
import { IRecipe } from "../interfaces/IRecipe";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const recipes = await Recipe.find();
  res.send(recipes);
});

router.post("/", async (req: Request<IRecipe>, res: Response) => {
  const { name, description, ingredients, imagePath } = req.body

  const newRecipe = await new Recipe({ name, description, ingredients, imagePath }).save();
  res.send(newRecipe);
});

router.put("/", (req: Request, res: Response) => {
  res.send("PUT recipes");
});

router.delete("/", async (req: Request, res: Response) => {
  const {_id} = req.body
  
  const deletedRecipe = await Recipe.deleteOne({_id})

  res.send(deletedRecipe)
});

export default router;
