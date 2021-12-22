import React from "react";
import StyledTextarea from "./components/StyledTextarea";

const App = () => {
  return (
    <div className="app">
      <div className="paper">
        <div className="header">
          <h1>GWORD</h1>
          <nav>
            <li>
              <a href="">Options</a>
            </li>
            <li>
              <a href="">Save file</a>
            </li>
            <li>
              <a href="">Open file</a>
            </li>
          </nav>
        </div>
        <StyledTextarea></StyledTextarea>
      </div>
    </div>
  );
};

export default App;
