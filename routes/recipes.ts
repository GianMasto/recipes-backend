import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("GET recipes");
});

router.post("/", (req: Request, res: Response) => {
  res.send("POST recipes");
});

router.put("/", (req: Request, res: Response) => {
  res.send("PUT recipes");
});

router.delete("/", (req: Request, res: Response) => {
  res.send("DELETE recipes");
});

export default router;
