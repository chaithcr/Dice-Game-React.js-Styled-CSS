import styled from 'styled-components'

function Rules() {
  return (
    <RuleBox>
      <h3>How to play dice game</h3>
      <p>
        Select any number<br />
        Click on dice image<br />
        After click on dice, if selected number is equal to dice number you will get same point as dice <br />
        If you get wrong guess then 2 points will be deducted 
      </p>
    </RuleBox>
  );
}

export default Rules;

const RuleBox = styled.div`
  width: 500px;
  height: 140px;
  background-color: #bd9aa0;
  margin-left: 70vh;
  margin-bottom: 30px;
  border-radius: 10px;
  padding: 10px;
  display:flex;
  align-item:center;

  h3 {
    margin: 10px 0;
    font-size: 22px;
    font-weight: 500;
  }

  p {
    margin: 10px 0;
    font-size: 12px;
    font-weight: 400;
  }
`;
