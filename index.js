const express = require("express");
const AppConstants = require("./core/constants/app_constants");
const axios = require("axios");
const cron = require("node-cron");
const path = require("path");
const port = process.env.PORT || AppConstants.PORT;
const app = express();
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "src")));
app.use(express.json());
const file = require("./controllers/cloud/file_controllers");
const portfolio = require("./controllers/api/portfolio_controller");
const ApiRepository = require("./core/api/api_repository");

app.get("/projects", async (req, res) => {
  const projects = await ApiRepository.getProjects();
  res.json(projects);
});
app.get("/projects/all", async (req, res) => {
  const projects = await ApiRepository.getProjectsAll();
  res.json(projects);
});
app.get("/project", async (req, res) => {
  const key = req.query.key; // récupère la clé envoyée dans l'URL, ex: /project?key=ma_clef
  if (!key) {
    return res.status(401).json({
      success: false,
      message: "Veuillez renseigner la clé du projet",
    });
  }

  const project = await ApiRepository.getProjectByKey(key);
  res.json(project);
});
app.get("/ping", (req, res) => {
  console.log("PING__PING");
  res.status(200).json({ message: "pong" });
});
//start-site
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "index.html"));
});
app.get("/details/project", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "details_project.html"));
});
app.get("/blog/details", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "blog-details.html"));
});
app.get("/all_projects", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "projects.html"));
});
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "contact.html"));
});
//end-site

cron.schedule("*/3 * * * *", async () => {
  try {
    const res = await axios.get(`${AppConstants.BASE_URL}/ping`);
    console.log("Ping envoyé, status:", res.status);
  } catch (error) {
    console.error("Erreur lors du ping :", error);
  }
});
app.use("/api/v1/file", file);
app.use("/api/v1/portfolio", portfolio);

app.listen(port, () => {
  console.log("NODE_ENV:", AppConstants.ENV);
  console.log(`Serveur en marche sur ${AppConstants.BASE_URL}`);
});
