export type ChampionImageProps = {
  championImage: string;
};

const ChampionImage = ({ championImage }: ChampionImageProps) => {
  return (
    <div className="w-8 h-8">
      <img className="w-full h-full object-cover" src={championImage} alt="" />
    </div>
  );
};

export default ChampionImage;
