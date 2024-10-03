// REST API
import express from "express"
import routes from "@routes/api-routes"
import cors from 'cors';
import { 
  authenticateToken
 } from "@controllers/auth.controller";

// GraphQL and Ruru (GUI)
import { createHandler } from "graphql-http/lib/use/express"
import { schema } from "@graphql/schema";
const  { ruruHTML } = require("ruru/server")

require('@utils/custom.console');
require('dotenv').config();

const app = express();
const expressParseOptions = {
  limit: '500mb',
};

app.use(express.json(expressParseOptions));
app.use(cors());
app.use("/api", routes);

// Create and use the GraphQL handler.
app.all("/graphql", authenticateToken, createHandler({ schema }))

// GraphqQL Playground UI
app.get("/", (_req, res) => {
  res.type("html")
  res.end(ruruHTML({ endpoint: "/graphql" }))
})

app.listen(process.env.SERVER_PORT, ()=> {
  console.info(`GraphQL and API Server are now running on port ${process.env.SERVER_PORT}.`)
})