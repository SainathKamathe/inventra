import api from "./api";
export const getInventoryStatus = async () => (await api.get("/inventory/status")).data;
