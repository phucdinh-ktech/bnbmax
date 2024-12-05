import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

import { usersApi } from "@/apis/users";
import images from "@/assets/images";
import SectionBuyCoin from "@/components/common/SectionBuyCoin";
import SectionLevels from "@/components/common/SectionLevels";
import SectionReferral from "@/components/common/SectionReferral";
import SectionReward from "@/components/common/SectionReward";
import Footer from "@/components/layouts/Footer";
import useWalletStore from "@/libs/store/walletStore";
const Home = () => {
  const { addressWallet } = useWalletStore();
  const [searchParams] = useSearchParams();

  const receiverWallet = searchParams.get("up");

  const firstLoadRef = useRef<boolean>(true);
  useEffect(() => {
    const inviteUser = async (
      addressWallet: string,
      receiverWallet: string
    ) => {
      firstLoadRef.current = false;
      try {
        await usersApi.inviteUser(addressWallet, receiverWallet);
      } catch (error) {
        console.log("error invite user: ", error);
      }
    };
    if (receiverWallet && addressWallet && firstLoadRef.current) {
      inviteUser(addressWallet, receiverWallet);
    }
  }, [receiverWallet, addressWallet]);

  return (
    <div className="w-full h-full text-white">
      <SectionBuyCoin />
      <SectionReward />
      <SectionReferral />
      <div className="relative">
        <img
          src={images.bgTotal}
          className="w-[40%] h-[75%] z-1 absolute right-0 top-0 hidden lg:block"
        ></img>
        <SectionLevels />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
