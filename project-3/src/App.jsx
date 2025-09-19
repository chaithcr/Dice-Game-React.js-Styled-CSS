import { useState } from "react";
import "./app.css"
import GamePlay from "./Components/GamePlay";
import StartGame from "./Components/StartGame";
function App() {
  const[isGameStarted,setIsGameStarted]=useState(false);
  const toggleGameStart=()=>{
   setIsGameStarted((prev)=>!prev);
  }
  return (
    <>
    {isGameStarted ? <GamePlay/> : <StartGame toggle={toggleGameStart}/>}
   </>
  );
}

export default App;
