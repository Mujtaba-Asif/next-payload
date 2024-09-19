import axios from "axios";

const payloadClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api`,
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YzZlNDIwNDE2OTA0ZjlmZjllMjBhYSIsImNvbGxlY3Rpb24iOiJ1c2VycyIsImVtYWlsIjoibXVqdGFiYUBlYXJseWJpcmRsYWJzLmlvIiwiaWF0IjoxNzI0MzE4NjczLCJleHAiOjE3MjQzMjU4NzN9.vBGga8kmPc2OtVVzhA4lezUkwu98qzDFssREhWw2XT0`,
  },
});

export const cmsApi = {
  create: async (endpoint, data) => {
    try {
      const response = await payloadClient.post(endpoint, data);
      return response?.data;
    } catch (error) {
      console.error("Failed to create:", error);
      throw error;
    }
  },

  read: async (endpoint) => {
    try {
      const response = await payloadClient.get(endpoint);
      return response?.data;
    } catch (error) {
      console.error("Failed to fetch data:", error);
      throw error;
    }
  },

  update: async (endpoint, data) => {
    try {
      const response = await payloadClient.put(endpoint, data);
      return response?.data;
    } catch (error) {
      console.error("Failed to update:", error);
      throw error;
    }
  },

  delete: async (endpoint) => {
    try {
      const response = await payloadClient.delete(endpoint);
      return response?.data;
    } catch (error) {
      console.error("Failed to delete:", error);
      throw error;
    }
  },
};
