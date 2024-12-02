import svgs from "@/assets/svgs";
import DepositBox from "@/components/common/DepositBox";
import InfoBuyCoin from "@/components/common/InfoBuyCoin";

const SectionBuyCoin = () => {
  return (
    <>
      <section
        className="w-full relative px-10 flex flex-col justify-end items-center md:justify-center h-[calc(100svh-80px)] md:h-[calc(100svh-80px)] bg-no-repeat bg-cover bg-bottom lg:bg-none lg:px-10 pt-44 pb-0 lg:pb-40"
        style={{ backgroundImage: `url(${svgs.heroPattern})` }}
      >
        <div className="max-w-[1280px] w-full mx-auto mb-[10%]">
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-20 lg:gap-5">
            <InfoBuyCoin />
            <DepositBox className="hidden lg:flex" />
          </div>
        </div>
        <div className="absolute top-[19%] left-[50%] translate-x-[-50%] translate-y-[-50%] lg:right-[30%] lg:top-auto lg:bottom-[15%] lg:translate-x-1 lg:translate-y-1 max-w-[60%] size-[360px] mx-auto">
          <img
            src={svgs.heroShape}
            alt="here-shape-icon"
            className="w-full h-full"
          />
        </div>
        <a
          href="#"
          className="lg:absolute left-[calc(50%_-_22px)] bottom-[-22px] w-11 h-11 p-[17.5px_16px] hidden lg:flex items-center justify-center bg-white hover:bg-primary rounded-full animate-bounce duration-300"
        >
          <img src={svgs.arrowDown} className="w-full h-full" />
        </a>
        <a
          href="#"
          className="w-11 h-11 p-[17.5px_16px] flex lg:hidden items-center justify-center bg-white hover:bg-primary rounded-full mb-14 animate-bounce mt-2 duration-300"
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
