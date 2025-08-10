require("dotenv").config();
const nodemailer = require("nodemailer");
const path = require("path");
const fs = require("fs");

class EmailService {
  constructor() {
    // Créer un transporteur (Transporter)
    this.transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: process.env.MAIL_ENCRYPTION === "ssl", // Vérifie si l'encryption est SSL
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });
  }

  // Fonction pour envoyer l'email
  async sendEmail(visitorEmail, subject, title, content) {
    try {
      // Charger le template HTML
      const templatePath = path.join(__dirname, "emails", "email.html");
      let htmlTemplate = fs.readFileSync(templatePath, "utf-8");

      // Remplacer les placeholders par les valeurs dynamiques
      htmlTemplate = htmlTemplate
        .replace("{{titre}}", title)
        .replace("{{content}}", content);

      // Définir les options de l'email

      const myMail = process.env.MAIL_FROM_ADDRESS;
      const mailOptions = {
        from: `${process.env.MAIL_FROM_NAME} <${process.env.MAIL_FROM_ADDRESS}>`, // ton adresse (expéditeur autorisé)
        to: myMail, // ta boîte où tu reçois les messages
        replyTo: visitorEmail, // email du visiteur pour répondre facilement
        subject: subject,
        html: htmlTemplate,
      };
      // Envoyer l'email
      const info = await this.transporter.sendMail(mailOptions);
      console.log("Email envoyé: " + info.response);
      return true;
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email:", error);
      return false;
    }
  }
}

module.exports = EmailService;
