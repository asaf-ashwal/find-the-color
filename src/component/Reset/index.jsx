import React, { useContext } from "react";
import "./style.css";
import { GlobalContext } from "../../App";
import { createArr, createcolor, victoryNumber,reasetState } from "../../functions/utilsFunc";

function index() {
  console.log("in button");
  const { setMainColor,setVictoryIndex, setClicks, setText, setArr } =
    useContext(GlobalContext);
  function handleClick() {
 reasetState({ setMainColor,setVictoryIndex, setClicks, setText, setArr })
  }
  return (
    <button onClick={handleClick} className="reaset-button">
      Reset game
    </button>
  );
}

export default index;
