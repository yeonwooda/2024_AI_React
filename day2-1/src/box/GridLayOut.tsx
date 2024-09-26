import { CSSProperties, ReactNode } from "react";

type gridLayOutProps = {
  number: number;
  component: ReactNode;
};

const GridLayOut = ({ component, number }: gridLayOutProps) => {
  const gridLayOutStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${number},1fr)`,
    gap: "30px",
  };
  return <section style={gridLayOutStyle}>{component}</section>;
};
export default GridLayOut;
