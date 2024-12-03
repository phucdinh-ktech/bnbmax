import { Button } from "antd";
import clsx from "clsx";

import svgs from "@/assets/svgs";

const Header = () => {
  const isLogin = false;
  return (
    <div className="w-full px-5 lg:px-10 z-40">
      <div className="max-w-[1280px] mx-auto flex justify-between items-center h-20 md:h-28">
        <div className="flex gap-20 xl:gap-24">
          <a
            href="/"
            className="w-[208px] h-[52.23px] hidden lg:block duration-300"
          >
            <img src={svgs.bnbLogoDesktop} className="w-full h-full" />
          </a>
          <a
            href="/"
            className="w-[80px] h-[30.3px] block lg:hidden duration-300"
          >
            <img src={svgs.bnbLogoMobile} className="w-full h-full" />
          </a>

          <ul className="hidden lg:flex items-center gap-6 xl:gap-16 duration-300">
            <li className="text-base hover:text-secondary-hover">
              <a href="#buy-coin" className="p-4 text-white">
                Buy coin
              </a>
            </li>
            <li className="text-base hover:text-secondary-hover">
              <a href="#reward" className="p-4 text-white">
                Reward
              </a>
            </li>
            <li className="text-base hover:text-secondary-hover">
              <a href="#referral" className="p-4 text-white">
                Referral
              </a>
            </li>
            <li className="text-base  hover:text-secondary-hover">
              <a href="#levels" className="p-4 text-white">
                Levels
              </a>
            </li>
          </ul>
        </div>

        <div className="flex justify-end items-center gap-2">
          <Button
            className={clsx(
              "border-styles-disable text-xs h-[32px] lg:h-[48px] md:text-sm lg:text-base font-medium whitespace-nowrap px-6 lg:px-10 py-2 md:py-2.5 lg:py-3 rounded-md md:rounded-lg lg:rounded-xl duration-300",
              isLogin
                ? "bg-gray-400 hover:!bg-slate-400 !text-white"
                : "bg-secondary hover:!bg-primary !text-white"
            )}
          >
            {isLogin ? "0xB3D70...dd990" : "Connect wallet"}
          </Button>
          <div className="block lg:hidden size-[32px] p-2">
            <img
              src={svgs.moreVer}
              alt="more-icons"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
