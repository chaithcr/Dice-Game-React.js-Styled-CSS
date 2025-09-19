import React from 'react'
import styled from 'styled-components';

function RoleDice({ currentDice, rollDice }) {   
  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt={`dice${currentDice}`} />
      </div>
      <p>Click on Dice to Roll</p>
    </DiceContainer>
  );
}

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 30pxpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  .dice img{
     width: 250px;    
     height: 250px;
  }

  p {
    font-size: 24px;
    font-weight: 500;
  }
`;
