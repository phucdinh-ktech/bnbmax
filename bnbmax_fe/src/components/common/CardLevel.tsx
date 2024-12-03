import clsx from "clsx";

interface ICardLevelProps {
  icon: string;
  text: string;
  iconSize?: boolean;
}

const CardLevel = (props: ICardLevelProps) => {
  const { icon, text, iconSize } = props;
  return (
    <div className="flex items-center gap-8 py-4 lg:py-5 px-8 bg-card-levels border-[0.2px] border-solid border-[rgba(255, 255, 255, .3)] rounded-[13px]">
      <div className="w-10 lg:w-16 h-10 lg:h-16 flex items-center justify-center bg-primary rounded-[10px]">
        <img
          src={icon}
          alt="level-icon"
          className={clsx(
            iconSize ? "size-[24px] lg:w-[33px] lg:h-[37px]" : "w-full h-full"
          )}
        />
      </div>
      <span>{text}</span>
    </div>
  );
};

export default CardLevel;
