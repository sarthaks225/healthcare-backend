const express = require("express");
const router = express.Router();
const patientController = require("../controllers/patientController");
const authMiddleware = require("../middleware/authMiddleware");

// Route to add a new patient
router.post("/", authMiddleware.verifyToken, patientController.createPatient);

// Route to get all patients
router.get("/", patientController.getAllPatients);

// Route to get a patient by ID
router.get("/:id", patientController.getPatientById);

// Route to update a patient by ID
router.put("/:id", authMiddleware.verifyToken, patientController.updatePatient);

// Route to delete a patient by ID
router.delete(
  "/:id",
  authMiddleware.verifyToken,
  patientController.deletePatient
);

module.exports = router;
