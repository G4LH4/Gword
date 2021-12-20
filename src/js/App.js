import React from "react";
import StyledTextarea from "./components/StyledTextarea";
import CreateSettings from "./components/CreateSettings";
import CreateErrors from "./components/CreateErrors";

const App = () => {
  return (
    <div className="app">
      <div className="paper">
        <div className="header">
          <CreateSettings />
          <CreateErrors />
        </div>
        <StyledTextarea></StyledTextarea>
      </div>
    </div>
  );
};

export default App;
