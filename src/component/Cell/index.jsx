import React, { useContext } from "react";
import { GlobalContext } from "../../App";
import isVictory from "../../functions/isVictory";
import style from "./style.module.css";

function index({ i }) {
  const { arr, setArr, text, setText, victoryIndex, setClicks, clicks } =
    useContext(GlobalContext);
  return (
    <div
      className={`${style[arr[i].class]}`}
      onClick={() => {
        isVictory({
          arr,
          setArr,
          index: i,
          victoryIndex,
          setClicks,
          clicks,
          text,
          setText,
        });
      }}
    >
      {arr[i].text}
    </div>
  );
}

export default index;
