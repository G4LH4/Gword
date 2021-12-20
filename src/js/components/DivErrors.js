import React from "react";
import styled from "styled-components";

const CreateDivErrorsPage = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  color: #000;
  width: 100vh;
  height: 90vh;
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

export const DivErrors = (props) => {
  return (
    <CreateDivErrorsPage className={props.status}>
      <StyledH1>Errors</StyledH1>
      {props.content}
    </CreateDivErrorsPage>
  );
};
