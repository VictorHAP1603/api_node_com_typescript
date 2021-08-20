import { Request, Response } from "express";

export const index = (req: Request, res: Response) => {
  return res.status(404).json({
    error: "Endpoint não encontrada",
  });
};

export const getName = (req: Request, res: Response) => {
  const { name } = req.params;

  return res.json({
    name,
  });
};
