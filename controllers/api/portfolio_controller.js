const express = require("express");
const router = express.Router();
const Common = require("../../core/common/common");
const ApiRepository = require("../../core/api/api_repository");
const { validationResult } = require("express-validator");
const validations = require("../../core/validations/mail_validation");
const EmailService = require("../../core/services/email_services");
const emailService = new EmailService();
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

router.get("/projects", async (req, res) => {
  try {
    const allProjects = await Common.getProjects(); // <-- s'assurer que c'est async
    const limitedProjects = allProjects.slice(0, 3); // <-- ne garde que les 2 premiers

    res.json({
      success: true,
      message: "Liste des projets - Accueil",
      data: limitedProjects,
    });
  } catch (error) {
    console.error("Erreur SQL :", error);
    return res.status(500).json({ success: false, message: error.message });
  }
});

router.get("/project", async (req, res) => {
  try {
    const projectKey = req.query.key;
    if (!projectKey) {
      return res.status(401).json({
        success: false,
        message: "Veuillez renseigner la clé du projet",
      });
    }
    const projects = await ApiRepository.getProjectsAll();
    if (projects == "error") {
      return res.status(422).json({
        success: false,
        message: "Une erreur s'est produite",
      });
    }

    const project = projects.data.find((p) => p.key === parseInt(projectKey));

    if (!project) {
      return res
        .status(404)
        .json({ success: false, message: "Projet non trouvé" });
    }
    return res.json({ success: true, data: project });
  } catch (error) {
    console.error("Erreur SQL :", error);
    return res.status(500).json({ success: false, message: error.message });
  }
});

router.get("/projects/all", async (req, res) => {
  try {
    res.json({
      success: true,
      message: "Projets all",
      data: Common.getProjects(),
    });
  } catch (error) {
    console.error("Erreur  :", error);
    return res.status(500).json({ success: false, message: error.message });
  }
});
router.post("/send_mail", validations.sendMailValidation, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array().map((err) => Common.errorModel(err)),
      });
    }

    let { email, canal_key, content, subject, title, name } = req.body;

    const sendMail = await emailService.sendEmail(
      email,
      subject,
      title,
      content
    );

    if (!sendMail) {
      return res.status(422).json({
        success: false,
        message:
          "Une erreur s'est produite lors de l'envoie du mail! veuillez réessayer",
        //   data: userResult,
      });
    }

    const data = {
      name: name,
      content: content,
      subject: subject,
      mail: email,
      title: title,
    };
    res.json({
      success: true,
      message: "Mail envoyé avec succès",
      data: data,
    });
  } catch (error) {
    console.error("Erreur  :", error);
    return res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
