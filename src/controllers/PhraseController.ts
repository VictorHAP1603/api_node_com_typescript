import { Request, Response } from "express";

import Phrase from "../models/Phrase";

export const getAll = async (req: Request, res: Response) => {
  try {
    const phrases = await Phrase.getAll();
    return res.json(phrases);
  } catch (err) {
    console.error(err);
    return res.status(400).json({
      error: "Não foi possível conectar ao banco de dados",
    });
  }
};

export const getOne = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const phrase = await Phrase.getById(+id);
    return res.json(phrase);
  } catch (err) {
    return res.status(400).json({
      error: "A frase não existe",
    });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    let { txt, author } = req.body;

    author = author ? author : "Desconhecido";

    if (!txt.trim()) {
      return res
        .status(400)
        .json({ error: "É necessário que envie uma frase" });
    }

    const newPhrase = await Phrase.create(txt, author);
    return res.status(201).json(newPhrase);
  } catch (err) {
    console.error(err);
  }
};

export const edit = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { txt } = req.body;

    if (!txt.trim()) {
      return res
        .status(400)
        .json({ error: "É necessário que envie uma frase" });
    }

    const phrase = await Phrase.edit(id, txt);
    return res.json(phrase);
  } catch (err) {
    console.error(err);
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const phrase = await Phrase.remove(id);

    return res.json(phrase);
  } catch (err) {
    return res.status(400).json({
      message: "Não foi possível excluir a frase",
    });
  }
};
