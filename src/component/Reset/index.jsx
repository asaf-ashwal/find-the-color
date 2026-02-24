import React, { useContext } from "react";
import "./style.css";
import { GlobalContext } from "../../App";
import { createArr, createcolor, victoryNumber } from "../../functions/utilsFunc";

function index() {
  console.log("in button");
  const { setMainColor,setVictoryIndex, victoryIndex, setClicks, setText, setArr } =
    useContext(GlobalContext);
  function handleClick() {
    setMainColor(createcolor())
    setVictoryIndex(victoryNumber());
    setClicks(0);
    setText("Keep Searching!");
    setArr(createArr());
  }
  return (
    <button onClick={handleClick} className="reaset-button">
      Reset game
    </button>
  );
}

export default index;
