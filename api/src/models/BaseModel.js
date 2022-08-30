import { DataTypes } from "sequelize";
import { sequelize } from "../config";

const BaseModel = sequelize.define(
  'tableName',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
);

export default BaseModel;