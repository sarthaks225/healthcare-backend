const express = require("express");
const router = express.Router();
const controller = require("../controllers/patientDoctorController");
const authMiddleware = require("../middleware/authMiddleware");

// Assign a doctor to a patient
router.post("/", authMiddleware.verifyToken, controller.assignDoctor);

// Get all patient-doctor mappings
router.get("/", controller.getAllMappings);

// Get all doctors assigned to a specific patient
router.get("/:patientId", controller.getDoctorsForPatient);

// Remove a doctor from a patient
router.delete(
  "/:id",
  authMiddleware.verifyToken,
  controller.removeDoctorFromPatient
);

module.exports = router;
