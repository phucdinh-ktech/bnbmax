import { Spin } from "antd";
import { ethers } from "ethers";
import { useState } from "react";
import toast from "react-hot-toast";

import svgs from "@/assets/svgs";
import useAbiStore from "@/libs/store/abiStore";

const Withdraw = () => {
  const { enhancedStakingContract } = useAbiStore();
  const [loading, setLoading] = useState<boolean>(false);
  const handleWithdraw = async () => {
    setLoading(true);
    try {
      const amount = ethers.parseEther("0.01");
      await enhancedStakingContract?.withdraw(amount);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log("error withdraw", error);
      toast.error(`Rút tiền thất bại: ${error?.reason}`);
    }
    setLoading(false);
  };
  return (
    <button
      className="w-fit min-w-[180px] h-fit flex gap-4 items-center bg-white hover:bg-primary text-sm lg:text-base text-black px-5 lg:px-8 py-3 rounded-xl"
      onClick={handleWithdraw}
    >
      {loading && <Spin size="default" />}
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
