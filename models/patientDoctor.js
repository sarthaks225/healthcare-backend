const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../config/db");

class PatientDoctor extends Model {}

PatientDoctor.init(
  {
    patientId: { type: DataTypes.INTEGER, allowNull: false },
    doctorId: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    sequelize,
    modelName: "PatientDoctor",
    tableName: "patient_doctor_mappings",
    timestamps: true,
  }
);

module.exports = PatientDoctor;
