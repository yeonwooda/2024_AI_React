export type WinRateProps = {
  winRate: number;
};

const WinRate = ({ winRate }: WinRateProps) => {
  return <span>{winRate}%</span>;
};

export default WinRate;
