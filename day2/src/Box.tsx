import { CSSProperties } from "react";

type BoxProps = {
  backgroundColor: "pink" | "orange" | "skyblue" | "red";
  Size: "small" | "medium" | "large";
};

const Box = ({ backgroundColor, Size }: BoxProps) => {
  const sizeMap = {
    small: "50px",
    medium: "100px",
    large: "200px",
  };
  const BoxStyle: CSSProperties = {
    backgroundColor,
    width: sizeMap[Size],
    height: sizeMap[Size],
  };
  return <div style={BoxStyle}></div>;
};
export default Box;
