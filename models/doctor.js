require("dotenv").config();
const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../config/db");

class Doctor extends Model {}

Doctor.init(
  {
    name: { type: DataTypes.STRING, allowNull: false },
    specialty: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: false, unique: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
  },
  {
    sequelize,
    modelName: "Doctor",
    tableName: "doctors",
    timestamps: true,
  }
);

module.exports = Doctor;
