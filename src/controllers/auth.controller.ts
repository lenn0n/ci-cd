require("dotenv").config()
import { NextFunction, Request, Response } from "express";
const jwt = require("jsonwebtoken")

const login = (req: Request, res: Response) => {
  const username = req.body.username;
  const user = {
    username
  }

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  return res.status(200).json({
    access: accessToken
  })
}

const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  console.log("???");
  
  const token = authHeader && authHeader?.split(' ')[1];
  if (token == null) return res.status(401).json({ message: "You are not authorized to access this endpoint." });
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err: any, user: any) => {
    console.log("AAAAAAAAAAAAAAA")
    if (err) return res.status(401).json({ message: "Unathorized user."});

    next()
  })
}

export {
  authenticateToken,
  login
}