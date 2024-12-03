import svgs from "@/assets/svgs";
import DepositBox from "@/components/common/DepositBox";
import InfoBuyCoin from "@/components/common/InfoBuyCoin";

const SectionBuyCoin = () => {
  return (
    <>
      <section
        className="w-full relative px-10 flex flex-col-reverse lg:flex-col justify-end items-center md:justify-center gap-5 h-[81svh] md:h-[calc(100svh-80px)] bg-bottom bg-repeat-x lg:bg-none lg:px-10 pt-44 pb-0 lg:pb-40"
        style={{ backgroundImage: `url(${svgs.heroPattern})` }}
        id="buy-coin"
      >
        <div className="max-w-[1280px] w-full mx-auto mb-[10%]">
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-20 lg:gap-5">
            <InfoBuyCoin />
            <DepositBox className="hidden lg:flex" />
          </div>
        </div>

        <div className="lg:absolute lg:top-[22%] lg:right-[42%] lg:translate-x-1/2 max-w-[60%] lg:max-w-none">
          <img
            src={svgs.heroShape}
            alt="here-shape-icon"
            className="w-full h-full"
          />
        </div>
        <a
          href="#levels"
          className="lg:absolute left-[calc(50%_-_22px)] bottom-[-22px] w-11 h-11 p-[14px] hidden lg:flex items-center justify-center bg-white hover:bg-primary rounded-full animate-bounce duration-300"
        >
          <img src={svgs.arrowDown} className="w-full h-full" />
        </a>

        <a
          href="#levels"
          className="absolute bottom-12 w-11 h-11 p-[14px] flex lg:hidden items-center justify-center bg-white hover:bg-primary rounded-full animate-bounce mt-2 duration-300"
        >
          <img src={svgs.arrowDown} className="w-full h-full" />
        </a>
      </section>
      <div className="flex lg:hidden px-6 py-20">
        <DepositBox className="flex" />
      </div>
    </>
  );
};

export default SectionBuyCoin;
