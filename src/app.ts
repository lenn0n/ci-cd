import express, { NextFunction, Request, Response } from "express"
import routes from "@routes/api-routes"
import cors from 'cors';
import path from "path";

require('dotenv').config();

const app = express();
const expressParseOptions = {
  limit: '500mb',
};

app.use(express.json(expressParseOptions));
app.use(cors());
app.use(express.static(path.join(__dirname, "frontend", "build")));
app.use("/api", routes);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.sendFile(path.join(__dirname, "frontend", "build", req.originalUrl));
});

app.listen(process.env.SERVER_PORT, ()=> {
  console.info(`API Server is now running on port ${process.env.SERVER_PORT}.`)
})