import { Request, Response } from "express";

import { Recipe } from "../models/Recipe";

export const recipesGET = async (req: Request, res: Response) => {
  const recipes = await Recipe.find({ userEmail: req.user.email });
  res.send(recipes);
};

export const recipesPOST = async (req: Request, res: Response) => {
  const { name, description, ingredients, imagePath } = req.body;

  try {
    await new Recipe({
      name,
      description,
      ingredients,
      imagePath,
      userEmail: req.user.email,
    }).save();
  } catch (error) {
    console.log(error);
  }

  res.json({
    msg: "Store recipe ok",
  });
};

export const recipesPUT = async (req: Request, res: Response) => {
  const { name, description, ingredients, imagePath } = req.body;

  await Recipe.findByIdAndUpdate(req.params._id, {
    name,
    description,
    ingredients,
    imagePath,
  });

  res.json({
    msg: "Edit recipe ok",
  });
};

export const recipesDELETE = async (req: Request, res: Response) => {
  const { _id } = req.params;

  await Recipe.deleteOne({ _id });

  res.json({
    msg: "Delete recipe ok",
  });
};
