import { Request, Response } from "express";

import { IRecipe } from "../interfaces/IRecipe";
import { Recipe } from "../models/Recipe";

export const recipesGET = async (req: Request, res: Response) => {
  const recipes = await Recipe.find();
  res.send(recipes);
};

export const recipesPOST = async () => {
  async (req: Request<IRecipe>, res: Response) => {
    const { name, description, ingredients, imagePath } = req.body;

    await new Recipe({ name, description, ingredients, imagePath }).save();
    res.json({
      msg: "Store recipe ok",
    });
  };
};

export const recipesPUT = async (req: Request, res: Response) => {
  await Recipe.findByIdAndUpdate(req.params._id, req.body);

  res.json({
    msg: "Delete recipe ok",
  });
};

export const recipesDELETE = async (req: Request, res: Response) => {
  const { _id } = req.params;

  await Recipe.deleteOne({ _id });

  res.json({
    msg: "Delete recipe ok",
  });
};
