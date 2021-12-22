import React from "react";
import styled from "styled-components";

const StyledDivHeader = styled.div`
  background-color: #8a8a8a;
  padding: 5px;
  height: 100vh;
  color: #ccd1d1;
`;

const StyledH1Header = styled.h1`
  font-size: 2em;
`;

const StyledNavHeader = styled.nav`
  list-style: none;
  text-align: center;
  align-items: center;
  margin-top: 50%;
`;

const StyledLi = styled.li`
  margin-top: 70px;
`;

const StyledA = styled.a`
  font-size: 1.6em;
  text-decoration: none;
  color: rgb(204, 209, 209);
  cursor: pointer;
  background-color: #9a9a9a;
  padding: 10px;
  border-radius: 5px;

  &:hover {
    color: #9a9a9a;
    background-color: rgb(204, 209, 209);
    transition: 0.6s;
  }
`;

const StyledHeader = () => {
  return (
    <StyledDivHeader>
      {/* <img src="../../../public/setting.png" /> */}
      <StyledH1Header>Logo & username</StyledH1Header>
      <StyledNavHeader>
        <StyledLi>
          <StyledA onClick={() => console.log("Click!")}>lorem</StyledA>
        </StyledLi>
        <StyledLi>
          <StyledA onClick={() => console.log("Click!")}>lorem</StyledA>
        </StyledLi>
        <StyledLi>
          <StyledA onClick={() => console.log("Click!")}>lorem</StyledA>
        </StyledLi>
      </StyledNavHeader>
    </StyledDivHeader>
  );
};

export default StyledHeader;
