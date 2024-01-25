import express from "express";
import { check } from "express-validator";

import { authLoginPOST, authSignupPOST } from "../controllers/auth";
import { validateFields } from "../middlewares/validateFields";

const router = express.Router();

router.post("/login", [
    check('email', 'Email is mandatory').isEmail(),
    check('password', 'Password is mandatory').not().isEmpty(),
    validateFields
], authLoginPOST);

router.post("/signup", [
  check('email', 'Email is mandatory').isEmail(),
  check('password', 'Password is mandatory').not().isEmpty(),
  validateFields
],authSignupPOST);

export default router;
