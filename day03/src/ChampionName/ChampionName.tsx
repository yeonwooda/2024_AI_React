export type ChampionNameProps = {
  championName: string;
};

const ChampionName = ({ championName }: ChampionNameProps) => {
  return <span className="font-bold">{championName}</span>;
};

export default ChampionName;
