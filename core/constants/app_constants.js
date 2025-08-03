class AppConstants {
  static ACCESS_TOKEN_SECRET = "6HlEbB2S6sSGmxaA3HArg3RqaIADqUbY";
  static CANAL_MOBIL = "MOBIL";
  static REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;
  static PORT = 3000;
  static BASE_URL = "http://localhost:" + AppConstants.PORT + "/";
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
}
module.exports = AppConstants;
