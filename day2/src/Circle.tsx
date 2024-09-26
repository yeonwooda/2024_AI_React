import { CSSProperties } from "react";

type CircleProps = {
  backgroundColor: string;
};

const Circle = ({ backgroundColor }: CircleProps) => {
  const CircleStyle: CSSProperties = {
    backgroundColor,
    width: "100px",
    height: "100px",
    borderRadius: "9999px",
    display: "grid",
    gridTemplateColumns: "repeat(5,1fr)",
  };

  return <div style={CircleStyle}></div>;
};
export default Circle;
