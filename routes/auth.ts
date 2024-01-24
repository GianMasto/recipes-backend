import express from "express";

import { authLoginPOST, authSignupPOST } from "../controllers/auth";

const router = express.Router();

router.post("/login", authLoginPOST);

router.post("/signup", authSignupPOST);

export default router;
