export type PositionProps = {
  position: string;
};

const Position = ({ position }: PositionProps) => {
  const PositionMap: { [key: string]: string } = {
    top: "https://s-lol-web.op.gg/assets/images/positions/01-icon-01-lol-icon-position-top.svg?v=1724034092925",
    jug: "https://s-lol-web.op.gg/assets/images/positions/01-icon-01-lol-icon-position-jng.svg?v=1724034092925",
    mid: "https://s-lol-web.op.gg/assets/images/positions/01-icon-01-lol-icon-position-mid.svg?v=1724034092925",
    bot: "https://s-lol-web.op.gg/assets/images/positions/01-icon-01-lol-icon-position-bot.svg?v=1724034092925",
    sup: "https://s-lol-web.op.gg/assets/images/positions/01-icon-01-lol-icon-position-sup.svg?v=1724034092925",
  };

  return (
    <div className="w-6 h-6">
      <img className="w-full h-full" src={PositionMap[position]} alt="" />
    </div>
  );
};

export default Position;
