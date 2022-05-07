const express = require("express");
const router = express.Router();

// Controller
const { insertPhoto } = require("../controllers/PhotoController");

// Middleware
const { photoInsertValidation } = require("../middlewares/photoValidation");
const authGuard = require("../middlewares/authguard");
const validate = require("../middlewares/handleValidation");
const { imageUpload } = require("../middlewares/imageUpload");

// Routes
router.post(
  "/",
  authGuard,
  imageUpload.single("image"),
  photoInsertValidation(),
  validate,
  insertPhoto
);

module.exports = router;