import images from "@/assets/images";
import svgs from "@/assets/svgs";
import WrapperCardLevel from "@/components/common/WrapperCardLevel";

const SectionLevels = () => {
  return (
    <section
      id="levels"
      className="relative w-full lg:gap-24 lg:bg-none bg-no-repeat bg-right-top px-5 lg:px-10 py-20 lg:py-48"
      style={{ backgroundImage: `url(${images.bgTotal})` }}
    >
      <div className="w-full flex flex-col items-center gap-14 max-w-[1280px] mx-auto">
        <div className="relative w-full container flex flex-col-reverse lg:flex-row gap-5 lg:gap-20 items-center">
          <div className="w-full lg:w-3/5 flex flex-col gap-32 lg:gap-14">
            <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between gap-5 px-5 lg:px-0">
              <div className="flex flex-col gap-3 lg:gap-5">
                <h3 className="lg:text-2xl text-primary font-semibold">
                  {" "}
                  Total Commissions{" "}
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
          </div>
        </div>
        <WrapperCardLevel />
      </div>
    </section>
  );
};

export default SectionLevels;
