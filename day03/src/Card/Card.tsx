import ChampionImage, {
  ChampionImageProps,
} from "../ChampionImage/ChampionImage";
import ChampionName, { ChampionNameProps } from "../ChampionName/ChampionName";
import ChampionRoundImage, {
  ChampionRoundImageProps,
} from "../ChampionRoundImage/ChampionRoundImage";
import LankNum, { LankNumProps } from "../LankNum/LankNum";
import Position, { PositionProps } from "../Position/Position";
import RisingNum, { RisingNumProps } from "../RisingNum/RisingNum";
import BanRate, { BanRateProps } from "../Stats/BanRate";
import PickRate, { PickRateProps } from "../Stats/PickRate";
import WinRate, { WinRateProps } from "../Stats/WinRate";
import Tier, { TierProps } from "../Tier/Tier";

export type cardProps = LankNumProps &
  RisingNumProps &
  ChampionImageProps &
  ChampionNameProps &
  TierProps &
  PositionProps &
  WinRateProps &
  PickRateProps &
  BanRateProps &
  ChampionRoundImageProps;

const Card = ({
  lankNum,
  risingNum,
  championImage,
  championName,
  tierNum,
  position,
  winRate,
  pickRate,
  bankRate,
  ChampionRoundImagee,
}: cardProps) => {
  return (
    <article className="w-screen flex ">
      <LankNum lankNum={lankNum} />
      <RisingNum risingNum={risingNum} />
      <ChampionImage championImage={championImage} />
      <ChampionName championName={championName} />
      <Tier tierNum={tierNum} />
      <Position position={position} />
      <WinRate winRate={winRate} />
      <PickRate pickRate={pickRate} />
      <BanRate bankRate={bankRate} />
      <div>
        <ChampionRoundImage ChampionRoundImagee={ChampionRoundImagee} />
      </div>
    </article>
  );
};

export default Card;
