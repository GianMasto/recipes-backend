import { Request, Response, NextFunction } from "express"
import jwt from 'jsonwebtoken'

export const validateJWT = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.query.auth as string
    if (!token) {
      return res.status(401).json({
        error: {
          message: "There is no token provided",
        },
      })
    }
    
    jwt.verify(token, process.env.SECRET as string)
    next()
  } catch (error) {
    return res.status(401).json({
      error: {
        message: "Invalid Token",
      },
    })
  }
}