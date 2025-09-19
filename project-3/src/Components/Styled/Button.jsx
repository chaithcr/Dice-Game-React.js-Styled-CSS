import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 18px;
  color: white;
  background-color: black;
  border: 1px solid transparent;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  width: 220px;
  display: flex;             
  justify-content: center;   
  align-items: center;       
  transition: all 0.3s ease; 
  align-self: flex-end; 

  &:hover {
    background-color: grey;
    color: white;
    border: 1px solid black;
    transform: scale(1.1);
  }
`;
 export const OutlineButton = styled(Button)`
 background-color: white;
 border: 1px solid black;
 color: black;
  &:hover {
    background-color: black;
    color: white;
    border: 1px solid transparent;
    transform: scale(1.1);
  }
`;
