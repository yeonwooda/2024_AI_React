import { CSSProperties } from "react";
import Circle from "./Circle";

type CircleLayOutProps = {
  repeat: number;
};
const CircleLayOut = ({ repeat }: CircleLayOutProps) => {
  const CircleLayOutStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${repeat},1fr)`,
    gap: "10px",
  };
  return (
    <section style={CircleLayOutStyle}>
      {[
        "#1abc9c",
        "#16a085",
        "#f1c40f",
        "#f39c12",
        "#2ecc71",
        "#d35400",
        "#9b59b6",
      ].map((v) => (
        <Circle backgroundColor={v} />
      ))}
    </section>
  );
};
export default CircleLayOut;
