import { useState } from 'react';
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import styled from 'styled-components';
import RoleDice from './RoleDice';
import { Button } from './Styled/Button';
import { OutlineButton } from './Styled/Button';
import Rules from './Rules';

function GamePlay() {
  const [Score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState('');
  const [ShowRules, setShowRules] = useState(false);

  const getRandomArbitrary = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    if (!selectedNumber) {
      setError('You have not selected any number');
      return;
    }
    setError('');
    const randomNumber = getRandomArbitrary(1, 7);
    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };

  const ResetScore = () => {
    setScore(0);
  };

  return (
    <MainContainer>
      <div className="Top_section">
        <TotalScore Score={Score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>

      <RoleDice currentDice={currentDice} rollDice={rollDice} />

      <div className="btns">
        <OutlineButton onClick={ResetScore}>Reset</OutlineButton>

        <Button onClick={() => setShowRules((prev) => !prev)}>
          {ShowRules ? 'Hide' : 'Show'} Rules
        </Button>
      </div>

      {ShowRules && <Rules />}
    </MainContainer>
  );
}

export default GamePlay;

const MainContainer = styled.div`
  height: 100vh;
  box-sizing: border-box;
  padding-top: 70px;

  .Top_section {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .btns {
    width: 220px;
    height: 110px;
    margin-top: 20px; /* space below dice */
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto; /* center buttons horizontally */
  }
`;