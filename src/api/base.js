import axios from "axios";

const JSON_SERVER_URL = "http://localhost:5000";

export const baseApi = axios.create({
  baseURL: JSON_SERVER_URL,
});
