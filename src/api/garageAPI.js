import api from "./axiosConfig";

export const getAllGarages = async () => {
  try {
    const response = await api.get(import.meta.env.VITE_GARAGE_API);
    return response;
  } catch (error) {
    if (import.meta.env.VITE_LOG_API_CALLS === "true") {
      console.error("Garage API Error:", error);
    }
    throw error;
  }
};

export const createGarage = async (garageData) => {
  try {
    return await api.post(import.meta.env.VITE_GARAGE_API, garageData);
  } catch (error) {
    throw error;
  }
};

// Add other CRUD operations similarly...
