import { Schema, model } from "mongoose";
import { IRecipe } from "../interfaces/IRecipe";

const recipeSchema = new Schema<IRecipe>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  ingredients: [
    {
      name: String,
      amount: String,
    },
  ],
  imagePath: { type: String, required: true },
  userEmail: String,
  __v: Number,
});

export const Recipe = model<IRecipe>("Recipe", recipeSchema);
