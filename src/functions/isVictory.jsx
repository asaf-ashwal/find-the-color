import React, { useContext } from "react";
import { GlobalContext } from "../App";

function isVictory(e) {
  const { victoryIndex, setClicks, clicks } = useContext(GlobalContext);
  if (e.classList.includes("lost")) return false;
  if (clicks === 99) alert("Player lost .");

  // To Do - get real index
  const index = 0;
  if (index === victoryIndex) {
    alert("player von !!! ");
    e.classList = 'von'
  } else {
    setClicks((prev) => prev + 1);
    e.classList = 'lost';
  }
  // return <div>isVictory</div>;
}

export default isVictory;
