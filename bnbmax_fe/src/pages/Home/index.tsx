import SectionBuyCoin from "@/components/common/SectionBuyCoin";
import SectionReferral from "@/components/common/SectionReferral";
import SectionReward from "@/components/common/SectionReward";

const Home = () => {
  return (
    <div className="w-full h-full text-white">
      <SectionBuyCoin />
      <SectionReward />
      <SectionReferral />
    </div>
  );
};

export default Home;
