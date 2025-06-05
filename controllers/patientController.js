const Patient = require("../models/patient"); // <-- Add this line at the top

exports.createPatient = async (req, res) => {
  const { name, age, medicalHistory } = req.body;
  try {
    const newPatient = await Patient.create({ name, age });
    res.status(201).json(newPatient);
  } catch (error) {
    res.status(500).json({ message: "Error creating patient", error });
  }
};

exports.getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.findAll();
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving patients", error });
  }
};

exports.getPatientById = async (req, res) => {
  const { id } = req.params;
  try {
    const patient = await Patient.findByPk(id);
    if (patient) {
      res.status(200).json(patient);
    } else {
      res.status(404).json({ message: "Patient not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error retrieving patient", error });
  }
};

exports.updatePatient = async (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;
  try {
    const patient = await Patient.findByPk(id);
    if (patient) {
      patient.name = name;
      patient.age = age;
      await patient.save();
      res.status(200).json(patient);
    } else {
      res.status(404).json({ message: "Patient not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating patient", error });
  }
};

exports.deletePatient = async (req, res) => {
  const { id } = req.params;
  try {
    const patient = await Patient.findByPk(id);
    if (patient) {
      await patient.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Patient not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting patient", error });
  }
};
