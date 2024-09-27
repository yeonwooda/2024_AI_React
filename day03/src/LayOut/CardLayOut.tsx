import Card from "../Card/Card";
import { championRankingList } from "../data";

const CardLayOut = () => {
  return (
    <main className="w-screen h-screen">
      <section className="w-full max-w-5xl m-auto">
        {championRankingList.map((v) => (
          <Card
            lankNum={v.positionTierData.rank}
            risingNum={v.positionTierData.rank_prev}
            championImage={v.image_url}
            championName={v.name}
            tierNum={v.positionTier}
            position={v.positionName}
            winRate={v.positionWinRate}
            pickRate={v.positionPickRate}
            bankRate={v.positionBanRate}
            ChampionRoundImagee={v.champion.image_url}
          />
        ))}
      </section>
    </main>
  );
};
export default CardLayOut;
