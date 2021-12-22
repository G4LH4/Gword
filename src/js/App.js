import React from "react";
import StyledTextarea from "./components/StyledTextarea";
// import Login from "./googleLogin";
import StyledHeader from "./components/StyledHeader";

const App = () => {
  return (
    <div className="app">
      <div className="paper">
        <StyledHeader />
        <StyledTextarea />
      </div>
    </div>
  );
};

export default App;
