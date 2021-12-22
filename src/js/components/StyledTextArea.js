import React from "react";
import styled from "styled-components";

const StyledTarea = styled.textarea`
  font-family: "Roboto", sans-serif;
  display: flex;

  margin: 0 auto;
  padding: 10px;
  background-color: #ecf0f1;
  width: 50%;
  height: 100vh;
  resize: none;
  outline: none;
  overflow: auto;
  box-shadow: 3px 3px 3px black;
`;

const HandleTextArea = (e) => {
  // console.log(checkCapitalWord(e));
  // isn't useful for now
};

const styledTextarea = () => {
  return (
    <StyledTarea onChange={(e) => HandleTextArea(e.target.value)}></StyledTarea>
  );
};

export default styledTextarea;
