import express from "express";

import {
  recipesGET,
  recipesPOST,
  recipesPUT,
  recipesDELETE,
} from "../controllers/recipes";

const router = express.Router();

router.get("/", recipesGET);

router.post("/add", recipesPOST);

router.put("/edit/:_id", recipesPUT);

router.delete("/delete/:_id", recipesDELETE);

export default router;
