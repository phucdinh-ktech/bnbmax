import svgs from "@/assets/svgs";
import CardLevel from "@/components/common/CardLevel";

const WrapperCardLevel = () => {
  const dataLevel = [
    {
      icon: svgs.level1,
      text: "8% Level 1 ()",
      iconSize: true,
    },
    {
      icon: svgs.level2,
      text: "5% Level 2 ()",
      iconSize: true,
    },
    {
      icon: svgs.level3,
      text: "2% Level 3 ()",
      iconSize: false,
    },
  ];
  return (
    <div className="relative w-full container grid grid-cols-1 lg:grid-cols-3 gap-6">
      {dataLevel.map((level, index) => (
        <CardLevel
          key={index}
          icon={level.icon}
          text={level.text}
          iconSize={level.iconSize}
        />
      ))}
    </div>
  );
};

export default WrapperCardLevel;
