import { Router } from "express";
import { NextFunction, Request, Response } from "express";

const router = Router();

const welcome = async (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({ message: "Welcome to CI/CD" })
}

const welcome2 = async (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({ message: "Welcome to CI/CD 2" })
}

router.get("/", welcome)
router.get("/test", welcome2)

export default router;