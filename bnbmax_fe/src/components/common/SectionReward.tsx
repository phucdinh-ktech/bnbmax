import images from "@/assets/images";
import svgs from "@/assets/svgs";

const SectionReward = () => {
  return (
    <>
      <div className="h-5"></div>
      <section
        id="reward"
        className="w-full flex flex-col items-center h-full bg-no-repeat bg-left px-5 lg:px-10 py-24 lg:py-52"
        style={{ backgroundImage: `url(${images.bgReward})` }}
      >
        <div className="w-full max-w-[1280px] mx-auto flex flex-col-reverse lg:flex-row gap-5 lg:gap-20 items-center">
          <div className="w-full flex flex-col justify-between items-start lg:w-3/5 gap-32 lg:gap-14">
            <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between gap-5 px-5 lg:px-0">
              <div className="flex flex-col gap-3 lg:gap-5">
                <h3 className="lg:text-2xl text-primary font-semibold">
                  Your Reward
                </h3>
                <hr className="w-14" />
                <span className="text-3xl lg:text-4xl font-bold">0 BNB </span>
              </div>
              <button className="w-fit min-w-[180px] h-fit flex gap-4 items-center bg-white hover:bg-primary text-sm lg:text-base text-black px-5 lg:px-8 py-3 rounded-xl">
                <span> withdraw Now </span>
                <div className="w-[20px] h-[10px]">
                  <img
                    src={svgs.arrowRightBlack}
                    alt="arrow-right-black"
                    className="w-full h-full"
                  />
                </div>
              </button>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold text-center lg:text-start">
                Reward
              </h2>
              <p className="text-white text-opacity-50 leading-loose text-justify lg:text-start">
                Welcome to <b>BNBMAX</b>, your premier destination for BNB
                cryptocurrency investments! At BNBMAX, we offer a unique
                opportunity to earn a 1% daily profit on your investments. With
                our innovative system, 80% of your daily profit is instantly
                credited to your wallet, while the remaining 20% is reinvested
                to maximize your future earnings. Join us today and experience
                the power of smart investing with BNBMAX, where your financial
                growth is our top priority.
              </p>
            </div>
          </div>

          <div className="w-full max-w-[70%] lg:max-w-none lg:w-2/5 flex flex-col items-center lg:items-end">
            <img src={svgs.rewardShape} alt="reward-shape-icons" />
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionReward;
