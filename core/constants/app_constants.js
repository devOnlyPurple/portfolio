class AppConstants {
  // Propriétés qui ne dépendent pas de l'env
  static ACCESS_TOKEN_SECRET = "6HlEbB2S6sSGmxaA3HArg3RqaIADqUbY";
  static CANAL_MOBIL = "MOBIL";
  static PORT = 3000;
  // static PUBLIC_URL = "https://portfolio-qaz5.onrender.com";
  static PUBLIC_URL = "https://olalekou-david-sowa.onrender.com";
  static DEFAULT_AVATAR = "default_male_avatar.png";
  static DEFAULT_AVATAR_ADMIN = "default_sad_avatar.png";
  static DEFAULT_WOMAN_ADMIN = "default_female_avatar.png";
  static SEXE_ARRAY = ["1", "2"];
  static COUNTRY_AUTHORIZED_SMS = ["228", "225", "229", "244"];
  static CHANNEL_SEND_CODE = ["sms", "email", "whatsapp"];
  static TYPE_REQUEST = ["registration", "forget"];
  static clientId =
    "1093491753842-dhfv3d35kn38fg5i7a5iues9s0cgfql0.apps.googleusercontent.com";
  static clientSecret = "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";

  // Propriétés dynamiques qui dépendent de l'env
  static get ENV() {
    return process.env.NODE_ENV ?? "PROD";
  }

  static get REFRESH_TOKEN_SECRET() {
    return process.env.REFRESH_TOKEN_SECRET;
  }

  static get BASE_URL() {
    return this.ENV === "DEV"
      ? "http://localhost:" + this.PORT
      : this.PUBLIC_URL;
  }
}

module.exports = AppConstants;
