
import { useState } from "react";
import styled from "styled-components";
const NumberSelector = ({setError, error,selectedNumber, setSelectedNumber}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  const NumberSelectorHandler=(value)=>{
    setSelectedNumber(value);
    setError("");
  }

  return (
    <NumberSelectorContainer>
        <p className="error">{error}</p>
      <div className="flex">
        {arrNumber.map((value) => (
          <Box
            isSelect={value === selectedNumber}   // use strict equality
            key={value}                           // use value as key (unique)
            onClick={()=>NumberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

/* Styled components */
const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end; /* use 'flex-end' (not 'end') */

  .flex {
    display: flex;
    gap: 24px;
  }

  p {
    font-size: 24px;
    font-weight: 700;
    margin-top: 12px;
  }
  .error{
    color: red;
    font-size: 24px;
    font-weight: 400;
  }
`;

const Box = styled.div`
  width: 72px;
  height: 72px;
  font-size: 24px;
  font-weight: 700;
  display: grid;
  place-items: center;
  border: 2px solid black; /* slightly stronger border */
  background-color: ${(props) => (props.isSelect ? "black" : "white")};
  color: ${(props) => (props.isSelect ? "white" : "black")};
  cursor: pointer;
  user-select: none;
`;
