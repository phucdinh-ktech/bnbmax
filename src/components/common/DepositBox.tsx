import clsx from "clsx";

interface IDepositBoxProps {
  className?: string;
}
const DepositBox = (props: IDepositBoxProps) => {
  const { className } = props;
  return (
    <div
      className={clsx(
        "flex-col gap-4 relative z-40 bg-box shadow-box-shadow max-w-[416px] w-full p-4 py-6 md:py-14 px-6 md:px-9 border border-white border-opacity-30 rounded-xl",
        className
      )}
    >
      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
        <div className="w-full flex flex-col md:items-center gap-4 p-5 border border-white border-opacity-30 rounded-xl">
          <span className="text-primary">Total Deposit</span>
          <hr className="w-14" />
          <span className="text-2xl font-bold">0 BNB </span>
        </div>
        <div className="w-full flex flex-col md:items-center gap-4 p-5 border border-white border-opacity-30 rounded-xl">
          <span className="text-primary">Total Withdraw</span>
          <hr className="w-14" />
          <span className="text-2xl font-bold">0 BNB </span>
        </div>
      </div>
      <div className="w-full h-14 flex p-2.5 border border-white focus-within:border-primary border-opacity-30 rounded-xl duration-300">
        <input
          placeholder="Min invest: 0.05 BNB"
          className="w-full appearance-none bg-transparent focus:outline-none px-5"
        />
        <button className="h-full flex shrink-0 items-center justify-center bg-secondary hover:bg-primary text-sm px-4 rounded-lg duration-300">
          BNB
        </button>
      </div>
      <div className="w-72 flex gap-1 justify-center p-1 border border-white border-opacity-30 rounded-full mx-auto">
        <button className="text-[#ffffff80] font-semibold text-xs py-1 px-2">
          10%
        </button>
        <button className="text-[#ffffff80] font-semibold text-xs py-1 px-2">
          25%
        </button>
        <button className="text-[#ffffff80] font-semibold text-xs py-1 px-2">
          50%
        </button>
        <button className="text-[#ffffff80] font-semibold text-xs py-1 px-2">
          75%
        </button>
        <button className="text-[#ffffff80] font-semibold text-xs py-1 px-2">
          Max
        </button>
      </div>
      <p className="text-[10px] text-white text-opacity-50 font-semibold text-center">
        Your balance 0 BNB
      </p>
      <button className="w-full bg-primary hover:bg-white hover:text-primary font-semibold py-3 px-5 rounded-xl duration-300">
        Deposit
      </button>
    </div>
  );
};

export default DepositBox;
