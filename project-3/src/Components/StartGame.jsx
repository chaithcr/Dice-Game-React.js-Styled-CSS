import styled from "styled-components";
import { Button } from "./Styled/Button";   // ✅ added

function StartGame({ toggle }) {
  return (
    <Container>
      <div className="imag">
        <img src="/images/dices.png" alt="dice img" />
      </div>

      <Content>
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </Content>
    </Container>
  );
}


export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  .imag{
    filter: drop-shadow(4px 8px 4px darkgrey) ;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-shadow:  4px 4px 4px grey;
  
  h1 {
    font-size: 96px;
    white-space: nowrap;
  }
`;

