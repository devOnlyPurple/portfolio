const { body } = require("express-validator");

const updateImageValidation = [
  // upload.single("image"), // ⬅️ important : parser le FormData et fichier
  body("canal_key").notEmpty().withMessage("Le canal est requis"),
  //   body("cinema_uuid").notEmpty().withMessage("Le pays du cinema est requis"),
  body("image").custom((_, { req }) => {
    if (!req.file) {
      throw new Error("Le fichier image est requis");
    }
    const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
    if (!allowedTypes.includes(req.file.mimetype)) {
      throw new Error("Le fichier doit être une image (jpeg, png, gif,webp)");
    }
    return true;
  }),
];

module.exports = {
  updateImageValidation,
};
