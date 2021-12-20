import styled from "styled-components";
import React from "react";
import "../../css/style.css";

const CreateDivSettingsPage = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  color: #000;
  width: 100vh;
  height: 86vh;
  font-family: "Roboto", sans-serif;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(50px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(8px);
`;

const StyledH1 = styled.h1`
  padding-top: 10px;
  font-size: 2em;
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
  text-align: center;
`;

const StyledDivFont = styled.div`
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(50px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(8px);
  width: 120px;
  margin: 14px;
  padding: 14px;
  border-radius: 10px;
  margin-top: 10px;
`;

export const DivSettingsPage = (props) => {
  return (
    <CreateDivSettingsPage id="settingsPage" className={props.status}>
      <StyledH1>Settings</StyledH1>
      <StyledDivFont>
        <h3>Fonts</h3>
        <select name="select">
          <option value="value1">Fonts</option>
          <option value="value2">Value2</option>
          <option value="value3">Value3</option>
        </select>
      </StyledDivFont>
      <StyledDivFont>
        <h3>Fonts</h3>
        <select name="select">
          <option value="value1">Fonts</option>
          <option value="value2">Value2</option>
          <option value="value3">Value3</option>
        </select>
      </StyledDivFont>
      <StyledDivFont>
        <h3>Fonts</h3>
        <select name="select">
          <option value="value1">Fonts</option>
          <option value="value2">Value2</option>
          <option value="value3">Value3</option>
        </select>
      </StyledDivFont>
    </CreateDivSettingsPage>
  );
};
