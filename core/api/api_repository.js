const axios = require("axios");
const AppConstants = require("../constants/app_constants");

class ApiRepository {
  static async getProjects() {
    try {
      const response = await axios.get(
        AppConstants.BASE_URL + "/api/v1/portfolio/projects"
      );
      return response.data;
    } catch (error) {
      return "error";
    }
  }

  static async getProjectByKey(key) {
    try {
      const response = await axios.get(
        AppConstants.BASE_URL + `/api/v1/portfolio/project?key=${key}`
      );
      return response.data;
    } catch (error) {
      console.log("error ", error);
      return "error";
    }
  }
}
module.exports = ApiRepository;
