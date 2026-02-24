import React, { useContext } from "react";
import "./style.css";
import { GlobalContext } from "../../App";

function index() {
  const { mainColor } = useContext(GlobalContext);
  return (
    <header>
      <h1>
        Find the <span>Secret Color!</span>
        <div style={{ backgroundColor: mainColor }}></div>
      </h1>
    </header>
  );
}

export default index;
