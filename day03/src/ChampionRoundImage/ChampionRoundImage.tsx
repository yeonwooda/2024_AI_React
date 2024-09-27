export type ChampionRoundImageProps = {
  ChampionRoundImagee: string;
};

const ChampionRoundImage = ({
  ChampionRoundImagee,
}: ChampionRoundImageProps) => {
  return (
    <div className="w-6 h-6">
      <img
        className="w-full h-full object-cover rounded-full"
        src={ChampionRoundImagee}
        alt=""
      />
    </div>
  );
};

export default ChampionRoundImage;
