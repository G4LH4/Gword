import React, { useState } from "react";
import configIcon from "../../../public/setting.png";
import { DivSettingsPage } from "./DivSettingsPage";
import styled from "styled-components";

const CreateSettings = () => {
  const [enabled, setEnabled] = useState(true);

  const className = enabled ? "enabled" : "disabled";

  const handleClick = (e) => {
    e.preventDefault();

    setEnabled(!enabled); // True = disabled
  };

  const StyledSettingsIMG = styled.img`
    position: relative;
    width: 4%;
    display: flex;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(50px);
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(8px);
    align-items: center;

    &:hover {
      transition: 0.5s;
      background-color: rgba(255, 255, 255, 0.11);
    }
  `;

  return (
    <>
      <a href="" onClick={(e) => handleClick(e)}>
        <StyledSettingsIMG src={configIcon} id="settings" />
      </a>
      <DivSettingsPage status={className} />
    </>
  );
};
export default CreateSettings;
