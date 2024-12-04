import images from "@/assets/images";
import Withdraw from "@/components/common/Withdraw";
import WrapperCardLevel from "@/components/common/WrapperCardLevel";
import useWindowSize from "@/utils/functions/useSizeWindow";

const SectionLevels = () => {
  const { width } = useWindowSize();

  return (
    <section
      id="levels"
      className="relative w-full lg:gap-24 lg:bg-none bg-no-repeat bg-right-top px-5 lg:px-10 py-20 lg:py-48"
      style={{ backgroundImage: width < 1024 ? `url(${images.bgTotal})` : "" }}
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
              <Withdraw />
            </div>
          </div>
        </div>
        <WrapperCardLevel />
      </div>
    </section>
  );
};

export default SectionLevels;
