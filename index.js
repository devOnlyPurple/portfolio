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
app.get("/ping", (req, res) => {
  console.log("PING__PING");
  res.status(200).json({ message: "pong" });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "index.html"));
});

cron.schedule("*/3 * * * *", async () => {
  try {
    const res = await axios.get(`${AppConstants.BASE_URL}/ping`);
    console.log("Ping envoyé, status:", res.status);
  } catch (error) {
    console.error("Erreur lors du ping :", error);
  }
});
app.use("/api/v1/file", file);

app.listen(port, () => {
  console.log("NODE_ENV:", AppConstants.ENV);
  console.log(`Serveur en marche sur ${AppConstants.BASE_URL}`);
});
