import { useState } from "react";

type ablyProps = {
  price: number;
  name: string;
};
const Musinsa = ({ price, name }: ablyProps) => {
  const [num, setNum] = useState(1);

  const changMiuns = () => {
    setNum((prev) => (prev == 1 ? 1 : prev - 1));
  };

  const changePlus = () => {
    setNum((prev) => prev + 1);
  };

  //   const chagnetotal = () => {
  //     setTotal;
  //   };

  return (
    <div style={{ width: "500px" }} className="flex flex-col gap-4">
      <span>{name}</span>
      <div
        style={{ width: "100%" }}
        className="flex gap-3 flex-row justify-between"
      >
        <div className="flex ">
          <button onClick={changMiuns}>-</button>
          <span>{num}</span>
          <button onClick={changePlus}>+</button>
        </div>
        <span>{price * num}</span>
      </div>
      <span>총 개수 </span>
    </div>
  );
};

export default Musinsa;
