import { Recipe } from "../models/Recipe";
import { User } from "../models/User";

export const emailAlreadyExists = async (email: string) => {
  const emailResult = await User.findOne({ email });
  if (emailResult) {
    throw new Error("Email is already registered");
  }
};

export const recipeExists = async (_id: string) => {
  const recipeResult = await Recipe.findOne({ _id });
  if (!recipeResult) {
    throw new Error("Recipe does not exists");
  }
};
