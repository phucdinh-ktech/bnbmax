import { ethers } from "ethers";
import toast from "react-hot-toast";

import EnhancedStaking_ABI from "../../../EnhancedStaking_ABI.json";

const ENHANCED_STAKING_ADDRESS = "0x3c8DF1798DEAbb84B67fc8488CdDeDe9FE2d949E";

async function getSignerAndContract() {
  console.log("getSignerAndContract");
  try {
    // Check if window.ethereum is available
    if (typeof window.ethereum === "undefined") {
      toast.error("Vui lòng tải Metamask!");
    }

    const provider = new ethers.BrowserProvider(window.ethereum);

    // Request account access if necessary
    await window.ethereum.request({ method: "eth_requestAccounts" });

    const signer = await provider.getSigner();

    const enhancedStakingContract = new ethers.Contract(
      ENHANCED_STAKING_ADDRESS,
      EnhancedStaking_ABI,
      signer
    );

    return enhancedStakingContract;
  } catch (error) {
    console.error("Error initializing the contract or signer:", error);
    toast.error("Vui lòng tải Metamask!");
  }
}

export const enhancedStakingContract = await getSignerAndContract();
