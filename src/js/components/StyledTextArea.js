import React from "react";
import styled from "styled-components";

const StyledTarea = styled.textarea`
  font-family: "Roboto", sans-serif;
  display: block;
  margin: 0 auto;
  background-color: #ecf0f1;
  width: 50%;
  height: 90vh;
  resize: none;
  outline: none;
  overflow: auto;
  box-shadow: 3px 3px 3px black;
`;

const styledTextarea = (props) => {
  return <StyledTarea></StyledTarea>;
};

export default styledTextarea;
