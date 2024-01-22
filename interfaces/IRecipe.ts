import { Ingredient } from "./Ingredient";

export interface IRecipe {
  _id: String;
  name: String;
  description: String;
  ingredients: Ingredient[];
  imagePath: String;
  userEmail: String;
  __v: Number;
}
