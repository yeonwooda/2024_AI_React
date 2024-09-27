import { GoTriangleUp } from "react-icons/go";
export type RisingNumProps = {
  risingNum: number;
};

const RisingNum = ({ risingNum }: RisingNumProps) => {
  return (
    <span className="text-green-800 text-xs w-11 h-11 flex items-center">
      <GoTriangleUp className="text-green-800 text-2xl" />
      {risingNum}
    </span>
  );
};

export default RisingNum;
