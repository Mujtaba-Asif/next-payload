const { cmsApi } = require("@/config/api");

class GlobalController {
  static async getHeader() {
    try {
      const response = await cmsApi.read("/globals/header");
      return response;
    } catch (error) {
      return error;
    }
  }
  static async getFooter() {
    try {
      const response = await cmsApi.read("/globals/footer");
      return response;
    } catch (error) {
      return error;
    }
  }
}

export default GlobalController;
