import { Request, Response } from "express";
import bcrypt from "bcryptjs";

import { User } from "../models/User";
import { generateJWT } from "../helpers/generateJWT";

export const authLoginPOST = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        error: {
          message: "INVALID_EMAIL",
        },
      });
    }

    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(400).json({
        error: {
          message: "INVALID_PASSWORD",
        },
      });
    }

    const idToken = await generateJWT(user.id);

    res.json({
      email: user.email,
      idToken,
      expiresIn: "3600",
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

export const authSignupPOST = async (req: Request, res: Response) => {
  let { email, password } = req.body;

  const salt = bcrypt.genSaltSync();
  password = bcrypt.hashSync(password, salt);

  await new User({ email, password }).save();

  res.json({
    email,
  });
};
