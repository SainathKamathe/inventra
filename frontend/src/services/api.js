import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8000/api",
});

export const fetchDashboardData = async () => {
  const response = await api.get("/data");
  return response.data;
};

export default api;
