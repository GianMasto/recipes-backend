import express from "express";

import authRouter from "./auth";
import recipesRouter from "./recipes";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/recipes", recipesRouter);

export default router;
