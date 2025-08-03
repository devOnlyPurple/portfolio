const express = require("express");
const router = express.Router();
const validations = require("../../core/validations/image_validation");
const { validationResult } = require("express-validator");
const Common = require("../../core/common/common");
const { uploadImage } = require("../../core/services/cloudinary_services");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads/images"); // adapte le chemin
  },
  filename: (req, file, cb) => {
    const ext = file.originalname.split(".").pop();
    cb(null, `${Date.now()}.${ext}`);
  },
});
const upload = multer({ storage });
router.get("/", async (req, res) => {
  try {
    res.json({
      success: true,
      message: "image cinema mise à jour avec succès",
      data: "APi/list",
    });
  } catch (error) {
    console.error("Erreur SQL :", error);
    return res.status(500).json({ success: false, message: error.message });
  }
});

router.post(
  "/upload_file",
  upload.single("image"),
  validations.updateImageValidation,

  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          errors: errors.array().map((err) => Common.errorModel(err)),
        });
      }
      if (!req.file) {
        return res
          .status(400)
          .json({ success: false, message: "Image obligatoire" });
      }
      const result = await uploadImage(req.file.path, { folder: "portfolio" });
      res.json({ url: result.secure_url });
    } catch (error) {
      console.error("Erreur SQL :", error);
      return res.status(500).json({ success: false, message: error.message });
    }
  }
);
module.exports = router;
