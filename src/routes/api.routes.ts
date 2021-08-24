import { Router } from "express";
import * as PhraseController from "../controllers/PhraseController";

const routes = Router();

routes.get("/frases", PhraseController.getAll);
routes.post("/frases", PhraseController.create);

routes.get("/frases/:id", PhraseController.getOne);
routes.put("/frases/:id", PhraseController.edit);

export default routes;
