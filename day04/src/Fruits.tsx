import { useState } from "react";
import Fruitss from "./Fruitss";

// type FruitsProps = {
//   total: number;
// };

const Fruits = () => {
  const [fruits, setFruits] = useState({
    apple: { amount: 0, price: 1000 },
    banana: { amount: 0, price: 1500 },
    orange: { amount: 0, price: 2000 },
  });

  const chagneApple = () => {
    setFruits((prev) => {
      return { ...prev, apple: { amount: prev.apple.amount + 1, price: 1000 } };
    });
  };
  const changeBanana = () => {
    setFruits((prev) => {
      return {
        ...prev,
        banana: { amount: prev.banana.amount + 1, price: 1500 },
      };
    });
  };
  const changeOrange = () => {
    setFruits((prev) => {
      return {
        ...prev,
        orange: { amount: prev.orange.amount + 1, price: 2000 },
      };
    });
  };

  return (
    <div className="flex gap-5">
      <Fruitss
        click={chagneApple}
        fruitsName={"사과"}
        fruitAmount={fruits.apple.amount}
      />
      <Fruitss
        click={changeBanana}
        fruitsName={"바나나"}
        fruitAmount={fruits.banana.amount}
      />
      <Fruitss
        click={changeOrange}
        fruitsName={"오렌지"}
        fruitAmount={fruits.orange.amount}
      />
      <span>
        총 가격 :
        {fruits.apple.amount * fruits.apple.price +
          fruits.banana.amount * fruits.banana.price +
          fruits.orange.amount * fruits.orange.price}
      </span>
    </div>
  );
};

export default Fruits;
