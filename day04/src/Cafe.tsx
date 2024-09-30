import { useState } from "react";
import CafeEvent from "./CafeEvent";

const Cafe = () => {
  const [coffee, setCoffee] = useState({
    americano: { amount: 0, price: 1000 },
    latte: { amount: 0, price: 1500 },
    vanilla: { amount: 0, price: 2000 },
  });

  const changeAmericano = () => {
    setCoffee((prev) => {
      return {
        ...prev,
        americano: { amount: prev.americano.amount + 1, price: 1000 },
      };
    });
  };

  const changeLatte = () => {
    setCoffee((prev) => {
      return {
        ...prev,
        latte: { amount: prev.latte.amount + 1, price: 1500 },
      };
    });
  };

  const changeVanilla = () => {
    setCoffee((prev) => {
      return {
        ...prev,
        vanilla: { amount: prev.vanilla.amount + 1, price: 2000 },
      };
    });
  };

  return (
    <div className="flex gap-5">
      <CafeEvent
        click={changeAmericano}
        coffeeName={"아메리카노"}
        coffeeAmount={coffee.americano.amount}
      />
      <CafeEvent
        click={changeLatte}
        coffeeName={"라떼"}
        coffeeAmount={coffee.latte.amount}
      />
      <CafeEvent
        click={changeVanilla}
        coffeeName={"바닐라"}
        coffeeAmount={coffee.vanilla.amount}
      />
      <span>
        총 가격 :
        {coffee.americano.amount * coffee.americano.price +
          coffee.latte.amount * coffee.latte.price +
          coffee.vanilla.amount * coffee.vanilla.price}
      </span>
    </div>
  );
};

export default Cafe;
