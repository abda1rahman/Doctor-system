const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
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
router.post("/get-all-notification", authMiddleware, getAllNotificationController)

//Notifiaction Delete || POST 
router.post("/delete-all-notification", authMiddleware, deleteAllNotificationController)

module.exports = router;
