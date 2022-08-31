import { DataTypes } from "sequelize";
import { sequelize } from "../config";

const Tarefa = sequelize.define(
  'tarefas',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    descriao: {
      type:DataTypes.TEXT,
      allowNUll: false
    },
    concluida: {
      type: DataTypes.BOOLEAN,
      allowNUll: false,
      defaultValue: false
    }
  },
  {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
);

export default Tarefa;