import { CSSProperties } from "react";

type BoxProps = {
  width: string;
  height: string;
  bg: "red" | "blue" | "orange" | "green";
  text: string;
};

const Box = (props: BoxProps) => {
  const boxStyle: CSSProperties = {
    width: props.width,
    height: props.height,
    backgroundColor: props.bg,
  };

  return <div style={boxStyle}>{props.text}</div>;
};

export default Box;
