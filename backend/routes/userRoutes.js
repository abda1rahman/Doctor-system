const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDoctorController,
  bookAppointmentController,
  bookingAvailabilityController,
  userAppointmentsController,
} = require("../controllers/userCtr");
const authMiddleware = require("../middleware/authMiddleware");

//router
const router = express.Router();
//LOGIN || POST
router.post("/login", loginController);

//REGISTER || POST
router.post("/register", registerController);

//Auth || POST
router.post("/getUserData", authMiddleware, authController);

//Apply Doctor || POST
router.post("/apply-doctor", authMiddleware, applyDoctorController);

//Notifiaction Doctor || POST
router.post(
  "/get-all-notification",
  authMiddleware,
  getAllNotificationController
);

//Notifiaction Delete || POST
router.post(
  "/delete-all-notification",
  authMiddleware,
  deleteAllNotificationController
);

//GET ALL DOCTOR
router.post("/getAllDoctor", authMiddleware, getAllDoctorController);

// BOOK APPOINTMENT
router.post("/book-appointment", authMiddleware, bookAppointmentController);

// Booking Availability
router.post(
  "/booking-availability",
  authMiddleware,
  bookingAvailabilityController
);

//Appointments List
router.get('/user-appointments', authMiddleware, userAppointmentsController)
module.exports = router;
