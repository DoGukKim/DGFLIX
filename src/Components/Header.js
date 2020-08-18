import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

// styled-components
const GnbWrap = styled.header`
  width: 100%;
`;
const Gnb = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
`;
const Logo = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color: red;
  letter-spacing: 0.028em;
`;
const GnbList = styled.ul`
  display: flex;
  align-items: center;
`;
const GnbItem = styled.li`
  &:not(:last-child) {
    margin: 0 10px 0 0;
  }
  width: 100px;
  height: 60px;
  border-bottom: 2px solid ${props => (props.current ? "red" : "transparent")};
  transition: 0.25s cubic-bezier(0.4, 0, 0.2, 1);
`;
const GnbLink = styled(Link)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  font-size: ${props => (props.logo ? "30px" : "16px")};
  font-weight: 600;
  color: ${props => (props.logo ? "red" : "#fff")};
`;
const Header = ({ location: { pathname } }) => {
  return (
    <>
      <GnbWrap>
        <Gnb>
          <Logo>
            <GnbLink to="/" aria-label="Logo" logo>
              DGFLIX
            </GnbLink>
          </Logo>
          <GnbList>
            <GnbItem current={pathname === "/"}>
              <GnbLink to="/">Movies</GnbLink>
            </GnbItem>
            <GnbItem current={pathname === "/tv"}>
              <GnbLink to="/tv">TV</GnbLink>
            </GnbItem>
            <GnbItem current={pathname === "/search"}>
              <GnbLink to="/search">Search</GnbLink>
            </GnbItem>
          </GnbList>
        </Gnb>
      </GnbWrap>
    </>
  );
};

export default withRouter(Header);
