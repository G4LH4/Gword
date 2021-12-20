import React, { useState } from "react";
import errorIcon from "../../../public/error.png";
import { DivErrors } from "./DivErrors";
import styled from "styled-components";

const CreateErrors = () => {
  const [enabled, setEnabled] = useState(true);

  const className = enabled ? "enabled" : "disabled";

  const handleClick = (e) => {
    e.preventDefault();

    setEnabled(!enabled);
  };

  const StyledErrorsIMG = styled.img`
    display: flex;
    position: relative;
    width: 4%;
    border-radius: 10px;

    &:hover {
      transition: 0.5s;
      background-color: rgba(255, 255, 255, 0.11);
    }
  `;

  return (
    <>
      <a href="" onClick={(e) => handleClick(e)}>
        <StyledErrorsIMG src={errorIcon} id="errors" />
      </a>
      <DivErrors status={className} />
    </>
  );
};

export default CreateErrors;
