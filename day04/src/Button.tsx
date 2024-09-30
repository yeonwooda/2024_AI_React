import { useState } from "react";

const Button = () => {
  const [isBtn, setBtn] = useState("마라탕");

  const click = () => {
    setBtn((prev) => {
      return prev + "후루 사주세요 선배!";
    });
  };
  return <button onClick={click}>{isBtn}</button>;
};

export default Button;
