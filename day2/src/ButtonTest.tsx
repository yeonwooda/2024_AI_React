import { CSSProperties } from "react";

type ButtonCSS = { color: string; padding: string };
type ButtonText = { text: string };

type ButtonProps = ButtonCSS & ButtonText;

// type ButtonProps = {
//   color: string;
//   padding: string;
//   text: string;
// };

const ButtonTest = ({ color, padding, text }: ButtonProps) => {
  const buttonStyle: CSSProperties = {
    color,
    padding,
  };

  return <button style={buttonStyle}>{text}</button>;
};

export default ButtonTest;
