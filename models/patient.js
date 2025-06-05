const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../config/db");

class Patient extends Model {}

Patient.init(
  {
    name: { type: DataTypes.STRING, allowNull: false },
    age: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    sequelize,
    modelName: "Patient",
    tableName: "patients",
    timestamps: true,
  }
);

module.exports = Patient;
