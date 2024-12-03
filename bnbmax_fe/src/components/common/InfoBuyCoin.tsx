import svgs from "@/assets/svgs";

const InfoBuyCoin = () => {
  return (
    <div className="w-[384px] lg:max-w-96 flex flex-col items-center lg:items-start gap-5">
      <h1 className="text-2xl lg:text-4xl font-bold text-center lg:text-start">
        BNBMAX is your direct path to success
      </h1>
      <hr className="w-14" />
      <p className="lg:text-2xl font-semibold text-center lg:text-start">
        Along with the daily bonus
      </p>
      <p className="text-sm lg:text-base -mt-4 text-center lg:text-start">
        1% daily bonus (80% withdrawal + 20% auto compound)
      </p>
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
    </div>
  );
};

export default InfoBuyCoin;
