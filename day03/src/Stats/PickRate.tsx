export type PickRateProps = {
  pickRate: number;
};

const PickRate = ({ pickRate }: PickRateProps) => {
  return <span>{pickRate}%</span>;
};

export default PickRate;
