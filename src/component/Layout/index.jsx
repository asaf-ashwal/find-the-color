import React, { useContext, useState } from "react";
import style from "./style.module.css";
import { GlobalContext } from "../../App";
import Cell from "../Cell/index";

function index() {
  const { arr } = useContext(GlobalContext);
  return (
    <main>
      {arr.map((v, i) => (
        <Cell key={i} i={i} />
      ))}
    </main>
  );
}

export default index;
