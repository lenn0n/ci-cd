require("dotenv").config()
import { NextFunction, Request, Response } from "express";
const jwt = require("jsonwebtoken")

const login = (req: Request, res: Response) => {
  const password = req.body.password;

  if (btoa(password) !==  btoa(process.env.PASSWORD as string)){
    return res.status(401).json({ message: "Unathorized user."});
  }

  const user = {
    password
  }

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  return res.status(200).json({
    access: accessToken
  })
}

const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  
  const token = authHeader && authHeader?.split(' ')[1];
  if (token == null) return res.status(401).json({ message: "You are not authorized to access this endpoint." });
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err: any, user: any) => {
    if (err) return res.status(401).json({ message: "Unathorized user."});

    next()
  })
}

export {
  authenticateToken,
  login
}