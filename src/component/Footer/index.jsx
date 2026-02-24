import React, { useContext } from "react";
import style from "./style.module.css";
import { GlobalContext } from "../../App";

function index() {
  const {text,clicks}=useContext(GlobalContext)
  return (
    <footer>
      <section>Click: {clicks}</section>
      <p>{text}</p>
    </footer>
  );
}

export default index;
