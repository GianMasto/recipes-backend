import { Ingredient } from "./Ingredient";

export interface IRecipe {
  _id: string;
  name: string;
  description: string;
  ingredients: Ingredient[];
  imagePath: string;
  userEmail: string;
  __v: number;
}
