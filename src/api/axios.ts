import { useAuthStore } from "@/stores/auth.store";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/api/v1",
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  // const { token } = useAuthStore();
  const { token } = useAuthStore.getState();

  if (!token) {
    return config;
  }
  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

export default api;
