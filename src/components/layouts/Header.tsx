import { Button } from "antd";

import svgs from "@/assets/svgs";

const Header = () => {
  return (
    <div className="w-full px-5 lg:px-10 z-40">
      <div className="max-w-[1280px] mx-auto flex justify-between items-center h-20 md:h-28">
        <div className="flex gap-20 xl:gap-24">
          <a href="#" className="w-[208px] h-[52.23px] hidden lg:block">
            <img src={svgs.bnbLogoDesktop} className="w-full h-full" />
          </a>
          <a href="#" className="w-[80px] h-[30.3px] block lg:hidden">
            <img src={svgs.bnbLogoMobile} className="w-full h-full" />
          </a>

          <ul className="hidden lg:flex items-center gap-6 xl:gap-16 xl:p-4 text-white">
            <li className="text-base hover:text-secondary-hover">
              <a href="#">Buy coin</a>
            </li>
            <li className="text-base hover:text-secondary-hover">
              <a href="#">Reward</a>
            </li>
            <li className="text-base hover:text-secondary-hover">
              <a href="#">Referral</a>
            </li>
            <li className="text-base  hover:text-secondary-hover">
              <a href="#">Levels</a>
            </li>
          </ul>
        </div>

        <Button className="border-styles-disable bg-secondary hover:!bg-primary !text-white text-xs h-[32px] lg:h-[48px] md:text-sm lg:text-base font-medium whitespace-nowrap px-6 lg:px-10 py-2 md:py-2.5 lg:py-3 rounded-md md:rounded-lg lg:rounded-xl duration-300">
          Connect wallet
        </Button>
      </div>
    </div>
  );
};

export default Header;
