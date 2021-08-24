import express, { Request, Response } from "express";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";

import routes from "./routes/api.routes";

dotenv.config();

const server = express();

server.use(
  cors({
    // origin: "https://resttesttest.com",
    
  })
);

server.use(express.static(path.join(__dirname, "../public")));
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use(routes);
// server.use('/api', routes); // para ter o /api como prefixo em todas as rotas

server.listen(process.env.PORT);
