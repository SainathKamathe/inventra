import api from "./api";
export const getBillingSummary = async () => (await api.get("/billing/summary")).data;
