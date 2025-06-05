const Doctor = require("../models/doctor");

const doctorController = {
  addDoctor: async (req, res) => {
    try {
      const { name, specialty, phone, email } = req.body;
      const newDoctor = await Doctor.create({ name, specialty, phone, email });
      res.status(201).json(newDoctor);
    } catch (error) {
      res.status(500).json({ message: "Error adding doctor", error });
    }
  },

  getAllDoctors: async (req, res) => {
    try {
      const doctors = await Doctor.findAll();
      res.status(200).json(doctors);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving doctors", error });
    }
  },

  getDoctorById: async (req, res) => {
    try {
      const doctor = await Doctor.findByPk(req.params.id);
      if (doctor) {
        res.status(200).json(doctor);
      } else {
        res.status(404).json({ message: "Doctor not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error retrieving doctor", error });
    }
  },

  updateDoctor: async (req, res) => {
    try {
      const { name, specialty, phone, email } = req.body;
      const [updated] = await Doctor.update(
        { name, specialty, phone, email },
        {
          where: { id: req.params.id },
        }
      );
      if (updated) {
        const updatedDoctor = await Doctor.findByPk(req.params.id);
        res.status(200).json(updatedDoctor);
      } else {
        res.status(404).json({ message: "Doctor not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error updating doctor", error });
    }
  },

  deleteDoctor: async (req, res) => {
    try {
      const deleted = await Doctor.destroy({
        where: { id: req.params.id },
      });
      if (deleted) {
        res.status(204).send();
      } else {
        res.status(404).json({ message: "Doctor not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error deleting doctor", error });
    }
  },
};

module.exports = doctorController;
