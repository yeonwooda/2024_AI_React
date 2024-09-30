import { useState } from "react";

const Test = () => {
  const [fruits, setFruits] = useState({ apple: 0, banana: 0, orange: 0 });

  const chagneApple = () => {
    setFruits((prev) => {
      return { ...prev, apple: prev.apple + 1 };
    });
  };

  const changeBanana = () => {
    setFruits((prev) => {
      return { ...prev, banana: prev.banana + 1 };
    });
  };

  const changeOrange = () => {
    setFruits((prev) => {
      return { ...prev, orange: prev.orange + 1 };
    });
  };

  return (
    <div className="flex gap-5">
      <span onClick={chagneApple}>사과 : {fruits.apple} </span>
      <span onClick={changeBanana}>바나나 : {fruits.banana}</span>
      <span onClick={changeOrange}>오렌지 : {fruits.orange}</span>
    </div>
  );
};
export default Test;
