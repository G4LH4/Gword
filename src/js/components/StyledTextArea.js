import React from "react";
import styled from "styled-components";

const StyledTarea = styled.textarea`
  font-family: "Roboto", sans-serif;
  display: flex;
  margin: 0 auto;
  padding: 10px;
  background-color: #ecf0f1;
  width: 50%;
  height: 84vh;
  resize: none;
  outline: none;
  overflow: auto;
  box-shadow: 3px 3px 3px black;
`;

const HandleTextArea = (e) => {
  console.log(checkCapitalWord(e));
};

const checkCapitalWord = (e) => {
  if (e.includes(".")) {
    const splitWord = e.trim().split(".");

    if (splitWord[0] === "" || splitWord[1] === "") return;

    const capitalWord = splitWord[1].trim().split("");

    if (capitalWord[0] === capitalWord[0].toLowerCase()) {
      capitalWord[0].toLowerCase();

      const p = document.createElement("p");
      p.textContent = "Error: its lowerCase";

      return p;
    } else {
      console.log("Its uppercase!");
    }
  }
};

const styledTextarea = () => {
  return (
    <StyledTarea onChange={(e) => HandleTextArea(e.target.value)}></StyledTarea>
  );
};

export default styledTextarea;
