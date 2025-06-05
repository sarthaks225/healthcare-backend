const PatientDoctor = require("../models/patientDoctor");
const Doctor = require("../models/doctor");

exports.assignDoctor = async (req, res) => {
  const { patientId, doctorId } = req.body;
  try {
    const mapping = await PatientDoctor.create({ patientId, doctorId });
    res.status(201).json(mapping);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error assigning doctor to patient", error });
  }
};

exports.getAllMappings = async (req, res) => {
  try {
    const mappings = await PatientDoctor.findAll();
    res.status(200).json(mappings);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving mappings", error });
  }
};

exports.getDoctorsForPatient = async (req, res) => {
  const { patientId } = req.params;
  try {
    const mappings = await PatientDoctor.findAll({ where: { patientId } });
    res.status(200).json(mappings);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving doctors for patient", error });
  }
};

exports.removeDoctorFromPatient = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await PatientDoctor.destroy({ where: { id } });
    if (deleted) {
      res.status(200).json({ message: "Mapping deleted successfully" });
    } else {
      res.status(404).json({ message: "Mapping not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting mapping", error });
  }
};
