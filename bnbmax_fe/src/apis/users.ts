import axiosInstance from "@/apis/axiosInstance";
import { urls } from "@/utils/constants/urls";

export const usersApi = {
  getAll(params?: string) {
    return axiosInstance.get(`${urls.USERS}?${params}`);
  },
};
