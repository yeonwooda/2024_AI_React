export type TierProps = {
  tierNum: number;
};

const Tier = ({ tierNum }: TierProps) => {
  const TierMap: { [key: number]: string } = {
    1: "https://s-lol-web.op.gg/images/icon/icon-tier-1.svg?v=1724034092925",
    2: "https://s-lol-web.op.gg/images/icon/icon-tier-2.svg?v=1724034092925",
    3: "https://s-lol-web.op.gg/images/icon/icon-tier-3.svg?v=1724034092925",
    4: "https://s-lol-web.op.gg/images/icon/icon-tier-4.svg?v=1724034092925",
    5: "https://s-lol-web.op.gg/images/icon/icon-tier-5.svg?v=1724034092925",
  };
  return (
    <div className="w-6 h-6">
      <img className="w-full h-full" src={TierMap[tierNum]} alt="" />
    </div>
  );
};

export default Tier;
