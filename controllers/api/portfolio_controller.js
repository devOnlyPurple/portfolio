const express = require("express");
const router = express.Router();
const Common = require("../../core/common/common");
const ApiRepository = require("../../core/api/api_repository");

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
    res.json({
      success: true,
      message: "image cinema mise à jour avec succès",
      data: Common.getProjects(),
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
    const projects = await ApiRepository.getProjects();
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

module.exports = router;
