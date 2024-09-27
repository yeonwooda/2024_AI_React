export type BanRateProps = {
  bankRate: number;
};

const BanRate = ({ bankRate }: BanRateProps) => {
  return <span>{bankRate}%</span>;
};
export default BanRate;
