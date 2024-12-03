import images from "@/assets/images";
import svgs from "@/assets/svgs";
import useWindowSize from "@/utils/functions/useSizeWindow";

const SectionReferral = () => {
  const { width } = useWindowSize();
  return (
    <section
      id="referral"
      className="relative w-full h-full flex flex-col items-center bg-[#131313] lg:bg-transparent bg-no-repeat bg-right bg-cover lg:bg-[length:calc(40vw_+_80px)_100%] px-5 lg:px-10 py-20"
      style={{
        backgroundImage:
          width >= 1024
            ? `url(${images.bgReferralDesktop})`
            : `url(${images.bgReferralMobile})`,
      }}
    >
      <div className="relative w-full max-w-[1280px] mx-auto flex flex-col-reverse lg:flex-row gap-5 lg:gap-20 items-center">
        <div className="w-full lg:w-[calc(50%-40px)] flex flex-col gap-4">
          <h2 className="text-2xl font-bold"> Your referral link </h2>
          <hr className="w-14" />
          <p className="text-gray-400">
            At
            <b>BNBMAX</b>, we offer an additional income stream through our{" "}
            <b>Referral Marketing Program</b>. This program features three
            rewarding levels: Level 1 provides an 8% commission, Level 2 offers
            a 5% commission, and Level 3 grants a 2% commission. Simply share
            your unique referral link with others, and watch your earnings grow
            as they join and invest. Start sharing today and maximize your
            income potential with BNBMAX!
          </p>
          <div className="w-fit max-w-full flex items-center gap-5 bg-[#1D1D1D] bg-opacity-75 px-3 py-1.5 lg:py-2.5 rounded-2xl lg:mt-6">
            <span className="max-w-full text-sm px-2 truncate">
              https://www.bnbmax.org/?up=null
            </span>
            <button className="group w-10 lg:w-12 h-10 lg:h-12 p-[12px_11px] flex shrink-0 items-center justify-center bg-white/20 rounded-xl duration-300">
              <img src={svgs.copy} className="w-full h-full" />
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default SectionReferral;
