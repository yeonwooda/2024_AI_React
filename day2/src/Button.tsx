import { CSSProperties } from "react";

export type ButtonProps = {
  borderRadius: "Hard" | "Smooth" | "Circle";
  backgroundColor: "Primary" | "Hover" | "Deactive";
};

const Button = ({ backgroundColor, borderRadius }: ButtonProps) => {
  const borderRadiusMap = {
    Hard: "0px",
    Smooth: "10px",
    Circle: "50px",
  };

  const backgroundColorMap = {
    Primary: "#205bf6",
    Hover: "#478df5",
    Deactive: "#979797",
  };

  const ButtonStyle: CSSProperties = {
    borderRadius: borderRadiusMap[borderRadius],
    backgroundColor: backgroundColorMap[backgroundColor],
    color: "white",
    padding: "10px 45px",
    border: "none",
    fontSize: "32px",
    marginRight: "10px",
  };

  return <button style={ButtonStyle}>Button</button>;
};

export default Button;
