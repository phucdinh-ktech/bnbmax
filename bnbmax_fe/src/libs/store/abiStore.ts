import { ethers } from "ethers";
import { create } from "zustand";

import { enhancedStakingContract } from "@/libs/ABI/stakingContract";

type AbiStore = {
  enhancedStakingContract?: ethers.Contract;
};

const useAbiStore = create<AbiStore>(() => ({
  enhancedStakingContract: enhancedStakingContract,
}));
export default useAbiStore;
