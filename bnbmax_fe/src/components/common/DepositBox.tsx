import clsx from "clsx";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { enhancedStakingContract } from "@/libs/ABI/stakingContract";
import useWalletStore from "@/libs/store/walletStore";
interface IDepositBoxProps {
  className?: string;
}
const DepositBox = (props: IDepositBoxProps) => {
  const { className } = props;

  const { addressWallet } = useWalletStore();
  const [invest, setInvest] = useState<string>("0");
  const [totalDeposit, setTotalDeposit] = useState<string>("0");

  const handleDeposit = async () => {
    if (!addressWallet) {
      toast.error("Vui lòng kết nối Wallet!");
      return;
    }

    try {
      const valueUint256 = ethers.parseEther(invest);
      console.log("valueUint256", valueUint256);
      await enhancedStakingContract.stake(valueUint256);
      toast.error("Gửi tiền thành công");
    } catch (error) {
      console.log("error deposit", error);
      toast.error(`Gửi tiền thất bại: ${error}`);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await enhancedStakingContract.totalStaked();
        setTotalDeposit(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div
      className={clsx(
        "flex-col gap-4 relative z-40 bg-box shadow-box-shadow max-w-[416px] w-full p-4 py-6 md:py-14 px-6 md:px-9 border border-white border-opacity-30 rounded-xl",
        className
      )}
    >
      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
        <div className="w-full flex flex-col md:items-center gap-4 p-5 border border-white border-opacity-30 rounded-xl">
          <span className="text-primary">Total Deposit</span>
          <hr className="w-14" />
          <span className="text-2xl font-bold">
            {totalDeposit.toString()} BNB{" "}
          </span>
        </div>
        <div className="w-full flex flex-col md:items-center gap-4 p-5 border border-white border-opacity-30 rounded-xl">
          <span className="text-primary">Total Withdraw</span>
          <hr className="w-14" />
          <span className="text-2xl font-bold">0 BNB </span>
        </div>
      </div>
      <div className="w-full h-14 flex p-2.5 border border-white focus-within:border-primary border-opacity-30 rounded-xl duration-300">
        <input
          placeholder="Min invest: 0.05 BNB"
          className="w-full appearance-none bg-transparent focus:outline-none px-5"
          onChange={e => {
            const value = e.target.value;
            if (Number.isFinite(Number(value))) {
              setInvest(value);
            }
          }}
          value={invest}
        />
        <button className="h-full flex shrink-0 items-center justify-center bg-secondary hover:bg-primary text-sm px-4 rounded-lg duration-300">
          BNB
        </button>
      </div>
      <div className="w-72 flex gap-1 justify-center p-1 border border-white border-opacity-30 rounded-full mx-auto">
        <button className="text-[#ffffff80] font-semibold text-xs py-1 px-2">
          10%
        </button>
        <button className="text-[#ffffff80] font-semibold text-xs py-1 px-2">
          25%
        </button>
        <button className="text-[#ffffff80] font-semibold text-xs py-1 px-2">
          50%
        </button>
        <button className="text-[#ffffff80] font-semibold text-xs py-1 px-2">
          75%
        </button>
        <button className="text-[#ffffff80] font-semibold text-xs py-1 px-2">
          Max
        </button>
      </div>
      <p className="text-[10px] text-white text-opacity-50 font-semibold text-center">
        Your balance 0 BNB
      </p>
      <button
        className="w-full bg-primary hover:lg:bg-white hover:lg:text-primary font-semibold py-3 px-5 rounded-xl duration-300"
        onClick={handleDeposit}
      >
        Deposit
      </button>
    </div>
  );
};

export default DepositBox;
