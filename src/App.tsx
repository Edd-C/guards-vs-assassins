import React from "react";
import "./theme/App.scss";

import Board from "./components/Board";
import WelcomeText from "./components/WelcomeText";

function App() {
  return (
    <div className="App">
      <WelcomeText />
      <Board />
    </div>
  );
}

export default App;
