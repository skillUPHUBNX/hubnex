// Define the type for each WhyChooseUsCard
interface CardInfo {
  id: number;
  label: string;
  text: string;
}

// Define the props for the component
interface WhyChooseUsCardProps {
  cardInfo: CardInfo;
}

const WhyChooseUsCard: React.FC<WhyChooseUsCardProps> = ({ cardInfo }) => {
  return (
    <div className="space-y-7 my-6 bg-white rounded-lg p-6">
      <span className="bg-[#BBDEFB] text-[#1976D2] px-2 py-2 font-bold text-xs sm:text-sm rounded-sm">
        {cardInfo.id}
      </span>
      <h2 className="font-bold text-[22px] leading-[26px] sm:text-[24px] sm:leading-[28px]">
        {cardInfo.label}
      </h2>
      <p className="font-normal text-[16px] leading-[26px] sm:text-base sm:leading-[30px]">
        {cardInfo.text}
      </p>
    </div>
  );
};

export default WhyChooseUsCard;
