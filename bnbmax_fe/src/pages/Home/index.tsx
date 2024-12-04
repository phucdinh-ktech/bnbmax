import { useEffect } from "react";

import images from "@/assets/images";
import SectionBuyCoin from "@/components/common/SectionBuyCoin";
import SectionLevels from "@/components/common/SectionLevels";
import SectionReferral from "@/components/common/SectionReferral";
import SectionReward from "@/components/common/SectionReward";
import Footer from "@/components/layouts/Footer";
const Home = () => {
  useEffect(() => {
    const fetchStakeAmount = async () => {
      try {
        const userAddress = "0x9ab62fD1563c7fE307e342D1924031f88Ea8A30c";
        // const stakeAmount = await enhancedStakingContract.getStake(userAddress);
        console.log(userAddress);
      } catch (error) {
        console.log(error);
      }
    };

    fetchStakeAmount();
  }, []);
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
