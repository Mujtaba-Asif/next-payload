const { cmsApi } = require("@/config/api");

class PagesController {
  static async get() {
    try {
      const response = await cmsApi.read(
        "/pages?where[slug][not_equals]=index"
      );
      return response;
    } catch (error) {
      return error;
    }
  }
  static async getSingle({ slug, locale }) {
    try {
      const response = await cmsApi.read(
        `/pages?where[slug][equals]=${slug}&locale=${locale ?? "en"}`
      );
      return response;
    } catch (error) {
      return error;
    }
  }
  static async getIndex({ locale = "en" }) {
    try {
      const response = await cmsApi.read(
        `/pages?where[slug][equals]=index&locale=${locale ?? "en"}`
      );
      return response;
    } catch (error) {
      return error;
    }
  }
}

export default PagesController;
