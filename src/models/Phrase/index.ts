import { Model, DataTypes } from "sequelize";
import { sequelize } from "../../config/db_mysql";
// import { ResponseCreate } from "./types";

interface PhraseInstance extends Model {
  id: number;
  author: string;
  txt: string;
}

const Phrase = sequelize.define<PhraseInstance>(
  "Phrase",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    author: {
      type: DataTypes.STRING,
    },
    txt: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "phrases",
    timestamps: false,
  }
);

export default {
  async getAll(): Promise<PhraseInstance[]> {
    const phrases = await Phrase.findAll();
    return phrases;
  },

  async getById(id: number): Promise<PhraseInstance> {
    const phrase = await Phrase.findOne({ where: { id: id } });

    if (phrase) {
      return phrase;
    } else {
      throw new Error();
    }
  },

  async create(txt: string, author: string): Promise<PhraseInstance> {
    return await Phrase.create({ author, txt });
  },

  async edit(id: string, txt: string) {
    let phrase = await this.getById(+id);

    if (!phrase) throw new Error();

    phrase.txt = txt;
    phrase.save();

    return {
      message: "Frase editada com sucesso",
    };
  },
};
