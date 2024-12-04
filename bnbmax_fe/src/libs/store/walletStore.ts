import { create } from "zustand";

import variables from "@/utils/constants/variables";

type WalletStore = {
  addressWallet?: string;
  walletConnect: (address: string) => void;
};

const local_address =
  localStorage.getItem(variables.LOCAL_STORAGE_ADDRESS) || undefined;

const useWalletStore = create<WalletStore>(set => ({
  addressWallet: local_address,
  walletConnect: address => set({ addressWallet: address }),
}));

export default useWalletStore;
