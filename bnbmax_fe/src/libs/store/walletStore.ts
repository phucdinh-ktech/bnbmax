import { create } from "zustand";

type WalletStore = {
  addressWallet?: string;
  balance: string;
  walletConnect: (address: string) => void;
  balanceAmount: (amount: string) => void;
};

const useWalletStore = create<WalletStore>(set => ({
  addressWallet: undefined,
  balance: "0",
  walletConnect: address => set({ addressWallet: address }),
  balanceAmount: amount => set({ balance: amount }),
}));

export default useWalletStore;
