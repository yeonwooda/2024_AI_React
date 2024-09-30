type CafeEventProps = {
  coffeeName: string;
  coffeeAmount: number;
  click: () => void;
};

const CafeEvent = ({ coffeeName, coffeeAmount, click }: CafeEventProps) => {
  return (
    <span onClick={click}>
      {coffeeName}:{coffeeAmount}
    </span>
  );
};

export default CafeEvent;
