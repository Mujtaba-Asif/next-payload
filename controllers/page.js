const { cmsApi } = require("@/config/api");

class PagesController {
  static async get() {
    try {
      const response = await cmsApi.read("/pages");
      return response;
    } catch (error) {
      return error;
    }
  }
  static async getSingle(id) {
    try {
      const response = await cmsApi.read(`/pages/${id}`);
      return response;
    } catch (error) {
      return error;
    }
  }
}

export default PagesController;
