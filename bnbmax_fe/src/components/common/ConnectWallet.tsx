import { Button } from "antd";
import clsx from "clsx";
import toast from "react-hot-toast";

import { usersApi } from "@/apis/users";
import svgs from "@/assets/svgs";
import useWalletStore from "@/libs/store/walletStore";
import variables from "@/utils/constants/variables";
import shortenAddress from "@/utils/functions/shortenAddress ";

interface IConnectWalletButtonProps {
  isShow?: boolean;
  type?: "header" | "page";
}
const ConnectWalletButton = (props: IConnectWalletButtonProps) => {
  const { isShow = true, type = "page" } = props;
  const isLogin = false;
  const { walletConnect, addressWallet } = useWalletStore();
  const connectWallet = async () => {
    if (addressWallet) {
      console.log("Đã kết nối Wallet", addressWallet);
      return;
    }
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const address = accounts[0];

        try {
          await usersApi.point(address);
        } catch (error) {
          console.log("error point: ", error);
        }
        localStorage.setItem(variables.LOCAL_STORAGE_ADDRESS, address);
        walletConnect(address);
        toast.success("Kết nối Wallet thành công!");
      } catch (error) {
        console.error("Kết nối MetaMask thất bại:", error);
        toast.error(`Kết nối MetaMask thất bại: ${error}`);
      }
    } else {
      toast.error(`Vui lòng cài đặt MetaMask.`);
    }
  };

  if (type === "page" && !isShow) return;

  if (type === "page" && isShow)
    return (
      <button className="w-fit flex gap-4 items-center bg-primary hover:bg-secondary text-white px-10 py-3 rounded-xl duration-300">
        <span> Connect Wallet </span>
        <div className="w-[20px] h-[10px]">
          <img
            src={svgs.arrowRight}
            alt="arrow-right-icon"
            className="w-full h-full"
          />
        </div>
      </button>
    );

  return (
    <Button
      className={clsx(
        "border-styles-disable text-xs h-[32px] lg:h-[48px] md:text-sm lg:text-base font-medium whitespace-nowrap px-6 lg:px-10 py-2 md:py-2.5 lg:py-3 rounded-md md:rounded-lg lg:rounded-xl duration-300",
        isLogin
          ? "bg-gray-400 hover:!bg-slate-400 !text-white"
          : "bg-secondary hover:!bg-primary !text-white"
      )}
      onClick={connectWallet}
    >
      {addressWallet ? shortenAddress(addressWallet) : "Connect wallet"}
    </Button>
  );
};

export default ConnectWalletButton;
