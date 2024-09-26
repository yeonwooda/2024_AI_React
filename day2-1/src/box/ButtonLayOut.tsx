import { CSSProperties } from "react";
import Button from "./Button";

type ButtonLayOutProps = {
  repeat: number;
};

const ButtonLayOut = ({ repeat }: ButtonLayOutProps) => {
  const ButtonLayOutStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${repeat},1fr)`,
    gap: "10px",
  };

  //   const arr = ["Hard", "Smooth", "Circle"];
  //   const arr1 = ["Primary", "Hover", "Deactive"];

  return (
    <section style={ButtonLayOutStyle}>
      <Button backgroundColor="Deactive" borderRadius="Circle" />
      <Button backgroundColor="Hover" borderRadius="Hard" />
      <Button backgroundColor="Primary" borderRadius="Smooth" />
      <Button backgroundColor="Primary" borderRadius="Smooth" />
      <Button backgroundColor="Hover" borderRadius="Hard" />
      <Button backgroundColor="Deactive" borderRadius="Circle" />
      <Button backgroundColor="Deactive" borderRadius="Circle" />
      <Button backgroundColor="Primary" borderRadius="Smooth" />
    </section>
  );
};

export default ButtonLayOut;
