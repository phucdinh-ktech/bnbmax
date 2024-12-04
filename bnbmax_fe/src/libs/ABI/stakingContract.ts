import { ethers } from "ethers";

import EnhancedStaking_ABI from "../../../EnhancedStaking_ABI.json";

const ENHANCED_STAKING_ADDRESS = "0x3c8DF1798DEAbb84B67fc8488CdDeDe9FE2d949E";
const provider = new ethers.BrowserProvider(window.ethereum);
const signer = await provider.getSigner();

export const enhancedStakingContract = new ethers.Contract(
  ENHANCED_STAKING_ADDRESS,
  EnhancedStaking_ABI,
  signer
);
