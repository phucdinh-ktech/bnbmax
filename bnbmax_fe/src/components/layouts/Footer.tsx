import svgs from "@/assets/svgs";

const Footer = () => {
  return (
    <footer className="relative z-30 w-full flex flex-col items-center px-5 lg:px-10">
      <div className="w-full flex flex-col items-center max-w-[1280px] mx-auto gap-5 lg:gap-8">
        <a
          href="#"
          className="w-11 h-11 flex items-center p-[14px] justify-center bg-white hover:bg-primary rounded-full duration-300"
        >
          <img src={svgs.arrowDown} className="w-full h-full rotate-180" />
        </a>
        <div className="w-36 lg:w-80 lg:mt-2">
          <img src={svgs.logoFooter} alt="Logo" className="w-full h-full" />
        </div>
        <p className="text-sm lg:text-base text-white text-opacity-50 lg:leading-loose text-center">
          <b>BNBMAX</b> uses <b>AI-driven</b> arbitrage trading to generate
          income. Our advanced algorithms identify market inefficiencies,
          ensuring consistent profits. Join us and let our technology work for
          your financial growth!
        </p>
        <a
          href="https://t.me/bnb_max"
          className="bg-card-levels border-[0.2px] border-solid border-[rgba(255, 255, 255, .3)] rounded-[13px] group w-fit lg:w-80 max-w-full flex items-center justify-center gap-5 px-4 lg:px-5 py-2 lg:py-3 lg:mt-3"
        >
          <div className="w-[37px] h-[40px]">
            <img src={svgs.telegram} className="w-full h-full" />
          </div>
          <span className="group-hover:text-primary duration-300">
            Telegram Channel
          </span>
        </a>
        <p className="text-sm lg:text-base text-white text-opacity-50 lg:leading-loose text-center">
          Tòa nhà K-TECH, số 165 đường D5, phường 25, quận Bình Thạnh
        </p>
        <div className="relative z-40 w-12 lg:w-auto h-[94px] lg:mt-28">
          <img
            src={svgs.bnbFooter}
            alt="bnb-footer"
            className="w-full h-full"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
