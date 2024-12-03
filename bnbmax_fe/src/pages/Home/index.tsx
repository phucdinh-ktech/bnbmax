import SectionBuyCoin from "@/components/common/SectionBuyCoin";
import SectionReward from "@/components/common/SectionReward";

const Home = () => {
  return (
    <div className="w-full h-full text-white">
      <SectionBuyCoin />
      <SectionReward />
    </div>
  );
};

export default Home;
