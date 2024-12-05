import axiosInstance from "@/apis/axiosInstance";
import { urls } from "@/utils/constants/urls";

export const usersApi = {
  getAll(params?: string) {
    return axiosInstance.get(`${urls.USERS}?${params}`);
  },

  point(wallet_address: string) {
    return axiosInstance.post(urls.POINTS, { wallet_address });
  },
  inviteUser(senderWallet: string, receiverWallet: string) {
    return axiosInstance.get(
      `${urls.INVITE_USER}?senderWallet=${senderWallet}&receiverWallet=${receiverWallet}`
    );
  },
};
