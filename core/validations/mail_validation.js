const { body } = require("express-validator");
const sendMailValidation = [
  body("canal_key").notEmpty().withMessage("Le canal est requis"),
  body("email")
    .notEmpty()
    .withMessage("L'email est requis")
    .isEmail()
    .withMessage("L'email est invalide"),
  body("content")
    .notEmpty()
    .withMessage("Veuillez entrez le contenu de votre mail"),
  body("subject").notEmpty().withMessage("Veuillez renseignez le sujet"),
  body("title").notEmpty().withMessage("Veuillez donnez un titre a votre mail"),
  body("name").notEmpty().withMessage("Veuillez entrez votre Nom"),
];
module.exports = {
  sendMailValidation,
};
