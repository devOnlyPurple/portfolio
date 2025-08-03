const express = require("express");
const AppConstants = require("./core/constants/app_constants");

const port = process.env.PORT || AppConstants.PORT;
const app = express();
app.use(express.static("public"));
app.use(express.json());
const file = require("./controllers/cloud/file_controllers");
app.use("/api/v1/file", file);

app.listen(port, () => {
  console.log(`Serveur en marche sur http://localhost:${port}`);
});
