require("dotenv").config();
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/**
 * Upload un fichier sur Cloudinary
 * @param {string} filePath Chemin local du fichier
 * @param {object} options Options Cloudinary (ex: dossier)
 * @returns {Promise<object>} Résultat de l’upload
 */
function uploadImage(filePath, options = {}) {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(filePath, options, (error, result) => {
      if (error) reject(error);
      else resolve(result);
    });
  });
}

module.exports = {
  uploadImage,
};
