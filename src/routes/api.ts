import { Router, Request, Response } from "express";
import * as HomeController from "../controllers/HomeController";

const routes = Router();

routes.get("/", HomeController.index);

routes.get("/name/:name", HomeController.getName);

export default routes;
