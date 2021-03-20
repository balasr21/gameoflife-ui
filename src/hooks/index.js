import { useState } from "react";

export const useMatrixDimension = () => {
  const [dimension, setDimension] = useState({
    row: 20,
    column: 20,
  });

  return { dimension, setDimension };
};
