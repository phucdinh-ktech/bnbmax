import { ethers } from "ethers";
import toast from "react-hot-toast";

import svgs from "@/assets/svgs";
import { enhancedStakingContract } from "@/libs/ABI/stakingContract";

const Withdraw = () => {
  const handleWithdraw = async () => {
    try {
      const amount = ethers.parseEther("0.01");
      await enhancedStakingContract.withdraw(amount);
    } catch (error) {
      toast.error(`Rút tiền thất bại: ${error}`);
    }
  };
  return (
    <button
      className="w-fit min-w-[180px] h-fit flex gap-4 items-center bg-white hover:bg-primary text-sm lg:text-base text-black px-5 lg:px-8 py-3 rounded-xl"
      onClick={handleWithdraw}
    >
      <span> withdraw Now </span>
      <div className="w-[20px] h-[10px]">
        <img
          src={svgs.arrowRightBlack}
          alt="arrow-right-black"
          className="w-full h-full"
        />
      </div>
    </button>
  );
};

export default Withdraw;
