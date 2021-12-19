import styled from "styled-components";
import React, { useState } from "react";
import "../../css/style.css";

// TODO: animation to display

const CreateDivSettingsPage = styled.div`
  position: relative;
  margin: 0 auto;
  background-color: #868686;
  color: #fff;
  width: 100vh;
  height: 100vh;
  font-family: "Roboto", sans-serif;
  border-radius: 15px;
`;

const StyledH1 = styled.h1`
  padding-top: 10px;
  font-size: 2em;
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
  text-align: center;
`;

const DivSettingsPage = () => {
  const [enabled, setEnabled] = useState(true);

  return (
    <CreateDivSettingsPage>
      <StyledH1>Settings</StyledH1>
    </CreateDivSettingsPage>
  );
};

export default DivSettingsPage;
