import React, { createContext, useContext } from "react";
import PropTypes from "prop-types";
import { useMatrixDimension } from "../hooks/index";

export const MatrixDimensionContext = createContext();
export const MatrixDimensionProvider = ({ children }) => {
  const { dimension, setDimension } = useMatrixDimension();

  return (
    <MatrixDimensionContext.Provider value={{ dimension, setDimension }}>
      {children}
    </MatrixDimensionContext.Provider>
  );
};

export const useMatrixDimensionValue = () => useContext(MatrixDimensionContext);

MatrixDimensionProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
