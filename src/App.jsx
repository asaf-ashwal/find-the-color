import "./App.css";
import Header from "./component/Header/index";
import Layout from "./component/Layout/index";
import Footer from "./component/Footer/index";
import { createContext, useRef, useState } from "react";
import { createArr, victoryNumber } from "./functions/utilsFunc.jsx";

export const GlobalContext = createContext();

function App() {
  const victoryIndex = useRef(victoryNumber()).current;
  console.log("the winning number: ",victoryIndex);
  
  const [clicks, setClicks] = useState(0);
  const [text, setText] = useState("Keep Searching!");
  const [arr, setArr] = useState(createArr());
  return (
    <GlobalContext.Provider
      value={{ clicks, setClicks, text, setText, victoryIndex,arr ,setArr }}
    >
      <Header />
      <Layout />
      <Footer />
      
    </GlobalContext.Provider>
  );
}

export default App;
