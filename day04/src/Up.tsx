import { useState } from "react";

const Up = () => {
  const [up, setUp] = useState(0);

  const changeUp = () => {
    setUp((prev) => {
      return prev + 1;
    });
  };

  return <button onClick={changeUp}>{up}</button>;
};

export default Up;
