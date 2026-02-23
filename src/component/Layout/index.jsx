import React from "react";
import style from "./style.module.css";
import { createArr } from "../../functions/utilsFunc";

function index() {
  const size = 100;
  const arr = createArr(size);
  return <main>{arr}</main>;
}

export default index;
