import { CSSProperties } from "react";

type ButtonProps = {
  borderRadius: "Hard" | "Smooth" | "Circle";
  backgroundColor: "Primary" | "Hover" | "Deactive";
};

const Button = ({ borderRadius, backgroundColor }: ButtonProps) => {
  const borderRadiusMap = {
    Hard: "0px",
    Smooth: "10px",
    Circle: "32px",
  };

  const backgroundColorMap = {
    Primary: "#205bf3",
    Hover: "#478df5",
    Deactive: "#979797",
  };

  const ButtonStyle: CSSProperties = {
    borderRadius: borderRadiusMap[borderRadius],
    backgroundColor: backgroundColorMap[backgroundColor],
    color: "white",
    padding: "10px 42px",
    border: "none",
    fontSize: "32px",
  };

  return <button style={ButtonStyle}>Button</button>;
};
export default Button;
