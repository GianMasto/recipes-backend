import express from "express";
import { check } from 'express-validator'

import {
  recipesGET,
  recipesPOST,
  recipesPUT,
  recipesDELETE,
} from "../controllers/recipes";
import { validateJWT } from "../middlewares/validateJWT";
import { validateFields } from "../middlewares/validateFields";

const router = express.Router();

router.get("/", validateJWT, recipesGET);

router.post("/add", recipesPOST);

router.put("/edit/:_id", recipesPUT);

router.delete("/delete/:_id", recipesDELETE);

export default router;
