import { useContext } from "react";
import isVictory from "./isVictory";
import { GlobalContext } from "../App";

export function victoryNumber() {
  const min = 0;
  const max = 100;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function createArr(size) {
  const arr = [];
  const { text, setText, victoryIndex, setClicks, clicks } =
    useContext(GlobalContext);
  console.log("victoryIndex: ", victoryIndex);

  for (let i = 1; i <= size; i++) {
    arr.push(
      <div
        key={`${i}`}
        id={`${i}`}
        onClick={(e) => {
          isVictory({ e, victoryIndex, setClicks, clicks, text, setText });
        }}
      ></div>,
    );
  }
  return arr;
}
