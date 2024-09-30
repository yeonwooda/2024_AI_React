import { useState } from "react";

type ablyProps = {
  price: number;
  name: string;
};

const Ably = ({ price, name }: ablyProps) => {
  const [num, setNum] = useState(1);

  const changMiuns = () => {
    setNum((prev) => (prev == 1 ? 1 : prev - 1));
  };

  const changePlus = () => {
    setNum((prev) => prev + 1);
  };

  return (
    <div className="flex flex-row justify-between p-20 w-96 ">
      <span>{name}</span>
      <div>
        <button onClick={changMiuns}>-</button>
        <span>{num}</span>
        <button onClick={changePlus}>+</button>
      </div>
      <span>{price * num}</span>
    </div>
  );
};

export default Ably;
