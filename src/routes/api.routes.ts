import { Request, Response, Router } from "express";
import * as PhraseController from "../controllers/PhraseController";

const routes = Router();

routes.get("/frases", PhraseController.getAll);
routes.post("/frases", PhraseController.create);

routes.get("/frases/:id", PhraseController.getOne);
routes.put("/frases/:id", PhraseController.edit);

routes.delete("/frases/:id", PhraseController.remove);

routes.use((req: Request, res: Response) => {
  return res.status(404).json({ message: "Rota não encontrada" });
});

export default routes;
