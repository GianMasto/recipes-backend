import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/User";
import { IUser } from "../interfaces/IUser";

export const validateJWT = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.query.auth;
    if (!token) {
      return res.status(401).json({
        error: {
          message: "There is no token",
        },
      });
    }

    const { _id } = jwt.verify(
      token as string,
      process.env.SECRET as string,
    ) as IUser;

    const user = await User.findById(_id);

    if (!user) {
      return res.status(401).json({
        error: {
          message: "Invalid user",
        },
      });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      error: {
        message: "Invalid Token",
      },
    });
  }
};
