import { CSSProperties } from "react";
import Circle from "./Circle";

const GridLayoutCircle = () => {
  const girdStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(5,1fr)",
    gap: "10px",
  };
  return (
    <section style={girdStyle}>
      {[
        "#1abc9c",
        "#16a085",
        "#f1c40f",
        "#e74c3c",
        "#d35400",
        "#8e44ad",
        "#9b59b6",
        "#d35400",
        "#3498db",
        "#34495e",
      ].map((v) => (
        <Circle backgroundColor={v} />
      ))}
    </section>
  );
};

export default GridLayoutCircle;
