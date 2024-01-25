import express from "express";
import { body, param } from "express-validator";

import {
  recipesGET,
  recipesPOST,
  recipesPUT,
  recipesDELETE,
} from "../controllers/recipes";
import { validateJWT, validateFields, recipeExists } from "../middlewares";

const router = express.Router();

router.get("/", [validateJWT], recipesGET);

router.post(
  "/add",
  [
    validateJWT,
    body("name", "Name is mandatory").not().isEmpty(),
    body("description", "Description is mandatory").not().isEmpty(),
    body("ingredients", "ingredients are mandatory").not().isEmpty(),
    body("imagePath", "Image is mandatory").not().isEmpty(),
    validateFields,
  ],
  recipesPOST,
);

router.put(
  "/edit/:_id",
  [
    validateJWT,
    param("_id", "Missing id").not().isEmpty(),
    param("_id", "Invalid id").isMongoId(),
    param("_id", "Recipe does not exists").custom(recipeExists),
    validateFields,
  ],
  recipesPUT,
);

router.delete(
  "/delete/:_id",
  [
    validateJWT,
    param("_id", "Missing id").notEmpty(),
    param("_id", "Invalid id").isMongoId(),
    param("_id", "Recipe does not exists").custom(recipeExists),
    validateFields,
  ],
  recipesDELETE,
);

export default router;
