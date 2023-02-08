import React from "react";
import SideBar from "./components/side-bar/SideBar";
import Main from "./components/main/main/Main";
import Trends from "./components/trends/Trends";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SideBar />
      <Main />
      <Trends />
    </div>
  );
}

export default App;