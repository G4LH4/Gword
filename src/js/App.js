import React from "react";
import StyledTextArea from "./components/StyledTextArea";
import StyledOutputIframe from "./components/StyledOutputIframe";

const App = () => {
  return (
    <div className="app">
      <div className="textArea">
        <StyledTextArea id="html" placeholder="HTML"></StyledTextArea>
        <StyledTextArea id="css" placeholder="CSS"></StyledTextArea>
        <StyledTextArea id="js" placeholder="JS"></StyledTextArea>
      </div>
      <div className="output">
        <StyledOutputIframe srcDoc="" id="iframe"></StyledOutputIframe>
        <p id="results"></p>
      </div>
    </div>
  );
};

export default App;
