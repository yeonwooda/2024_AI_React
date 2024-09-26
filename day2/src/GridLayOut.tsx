import { CSSProperties } from "react";
import Button from "./Button";

type GridLayOutProps = {
  repeatNumber: number;
};

const GridLayOut = ({ repeatNumber }: GridLayOutProps) => {
  const girdStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${repeatNumber},1fr)`,
    gap: "30px",
  };

  const arr = ["Primary", "Hover", "Deactive"];
  const arr2 = ["Hard", "Smooth", "Circle"];

  return (
    <section style={girdStyle}>
      {/* {arr.map((v) => {
        arr2.map((v) => {
          <Button backgroundColor={v} borderRadius={v} />;
        });
      })} */}
    </section>
  );
};

export default GridLayOut;
