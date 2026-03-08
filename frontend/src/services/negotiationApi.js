import api from "./api";
export const getNegotiations = async () => (await api.get("/negotiation/items")).data;
