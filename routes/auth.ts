import express from "express";
import { check } from "express-validator";

import { authLoginPOST, authSignupPOST } from "../controllers/auth";
import { validateFields, emailAlreadyExists } from "../middlewares";

const router = express.Router();

router.post(
  "/login",
  [
    check("email", "Email is mandatory").notEmpty(),
    check("password", "Password is mandatory").notEmpty(),
    validateFields,
  ],
  authLoginPOST,
);

router.post(
  "/signup",
  [
    check("email", "Email is mandatory").notEmpty(),
    check("email", "Invalid email").isEmail(),
    check("password", "Password is mandatory").notEmpty(),
    check("password", "Password must be at least 6 characters long").isLength({
      min: 6,
    }),
    check("email").custom(emailAlreadyExists),
    validateFields,
  ],
  authSignupPOST,
);

export default router;
