const express = require("express");
const router = express.Router();
const doctorController = require("../controllers/doctorController");
const authMiddleware = require("../middleware/authMiddleware");

// Route to add a new doctor
router.post("/", authMiddleware.verifyToken, doctorController.addDoctor);

// Route to get all doctors
router.get("/", doctorController.getAllDoctors);

// Route to get a doctor by ID
router.get("/:id", doctorController.getDoctorById);

// Route to update a doctor by ID
router.put("/:id", authMiddleware.verifyToken, doctorController.updateDoctor);

// Route to delete a doctor by ID
router.delete(
  "/:id",
  authMiddleware.verifyToken,
  doctorController.deleteDoctor
);

module.exports = router;
