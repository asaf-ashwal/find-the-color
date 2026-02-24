import React, { useContext } from "react";
import { GlobalContext } from "../../App";
import styleF from "./style.module.css";

function index({ i }) {
  const {
    mainColor,
    arr,
    setArr,
    text,
    setText,
    victoryIndex,
    setClicks,
    clicks,
  } = useContext(GlobalContext);

  function isVictory() {
    const newArr = [...arr];
    if (newArr[i]?.text) return;
    if (text !== "Keep Searching!") return;
    if (i === victoryIndex) {
      setText("Victory !!!");
      newArr[i] = { class: "von", color: mainColor };
    } else {
      setClicks((prev) => prev + 1);
      newArr[i] = { class: "lost", text: "X" };
      if (Number(clicks) === 98) alert("Player lost .");
    }
    setArr(newArr);
  }

  return (
    <div
      className={`${styleF[arr[i].class]}`}
      style={{ backgroundColor: arr[i].color }}
      onClick={() => {
        isVictory();
      }}
    >
      {arr[i].text}
    </div>
  );
}

export default index;
