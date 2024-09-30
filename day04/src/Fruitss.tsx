type FruitssProps = {
  fruitsName: string;
  fruitAmount: number;
  click: () => void;
};

const Fruitss = ({ fruitAmount, fruitsName, click }: FruitssProps) => {
  return (
    <span onClick={click}>
      {fruitsName}:{fruitAmount}
    </span>
  );
};
export default Fruitss;
