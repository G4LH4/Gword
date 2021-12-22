import styled from "styled-components";

const DivStyledTarea = styled.textarea`
  display: flex;
  font-size: 16px;
  margin: 0 auto;
  padding: 15px;
  width: 98.8%;
  resize: none;
  outline: none;
  overflow: auto;
  color: #fff;
  font-family: "Roboto", sans-serif;

  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  @media (min-width: 980px) {
    height: 88.1vh;
  }
`;

export default DivStyledTarea;
