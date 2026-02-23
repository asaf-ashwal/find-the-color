import "./App.css";
import Header from "./component/Header/index";
import Layout from "./component/Layout/index";
import Footer from "./component/Footer/index";
import { createContext, useState } from "react";
import { victoryNumber } from "./functions/utilsFunc";

export const GlobalContext = createContext();

function App() {
  const victoryIndex = victoryNumber();
  const [clicks, setClicks] = useState(0);
  const [text, setText] = useState("Keep Searching!");
  return (
    <GlobalContext.Provider
      value={{ clicks, setClicks, text, setText, victoryIndex }}
    >
      <Header />
      <Layout />
      <Footer />
    </GlobalContext.Provider>
  );
}

export default App;
