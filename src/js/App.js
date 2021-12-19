import React from "react";
import StyledTextarea from "./components/StyledTextarea";
import CreateASettings from "./components/CreateASettings";
import DivSettingsPage from "./components/DivSettingsPage";

const App = () => {
  return (
    <div className="app">
      <div className="paper">
        <div className="header">
          <CreateASettings className="enabled" />
        </div>
        <DivSettingsPage />
        <StyledTextarea></StyledTextarea>
      </div>
    </div>
  );
};

export default App;
