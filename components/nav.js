import React, { Component } from "react";
import Link from "next/link";
import styled from "styled-components";
import A from "react-anchor-link-smooth-scroll";
import { Colors, Container, MediaQueries } from "../style";

const NavWrapper = styled.div`
  width: 100%;
  background-color: ${Colors.BLACK};
`;

const NavContainer = styled(Container)`
  padding: 20px 0 40px;
  position: relative;

  ${MediaQueries.SMALL} {
    width: 100%;
  }
`;

const NavLogo = styled.img`
  width: 200px;

  ${MediaQueries.SMALL} {
    display: block;
    margin: 0 auto;
  }
`;

const ToggleContainer = styled.div`
  position: absolute;
  bottom: -10px;
  width: 100%;
  display: none;

  ${MediaQueries.SMALL} {
    display: block;
  }
`;

const NavToggle = styled.button`
  transform: perspective(10px) rotateY(-1deg);
  padding: 5px 20px;
  color: ${Colors.WHITE};
  background-color: ${Colors.OFF_BLACK};
  outline: none;
  border: none;
  font-size: 14px;
  text-transform: uppercase;
  display: block;
  margin: 0 auto;
  cursor: pointer;

  &:hover {
    background-color: ${Colors.TEAL};
  }
`;

const NavLinks = styled.ul`
  display: flex;
  position: absolute;
  bottom: -7px;

  ${MediaQueries.SMALL} {
    padding-top: ${({ open }) => (open ? "20px" : 0)};
    position: static;
    width: 100%;
    height: ${({ open }) => (open ? "275px" : 0)};
    overflow: hidden;
    flex-direction: column;
    transition: height 0.5s, padding-top 0.5s;
  }
`;

const NavLink = styled.li`
  transform: perspective(10px) rotateY(-1deg);
  margin-right: 20px;
  margin-top: ${({ isOffset }) => (isOffset ? "-5px" : 0)};
  a {
    background-color: ${Colors.OFF_BLACK};
    padding: 5px 20px;
    color: ${Colors.WHITE};
    text-decoration: none;
    font-size: 14px;
    text-transform: uppercase;
    &:hover {
      background-color: ${Colors.TEAL};
    }
  }

  ${MediaQueries.SMALL} {
    width: 100%;
    transform: none;
    margin-top: 0;
    margin-right: 0;
    text-align: center;

    a {
      display: block;
      padding: 20px 0;
      width: 100%;
      background-color: transparent;
    }
  }
`;

const DEFAULT_LINKS = ["gallery", "events", "artists", "rentals", "zineLib"];

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  toggle = () => {
    this.setState({
      open: !this.state.open
    });
  };
  render() {
    const { data } = this.props;
    const { open } = this.state;
    return (
      <NavWrapper>
        <NavContainer>
          <NavLogo src="/static/images/dap_logo.png" />
          <ToggleContainer>
            <NavToggle onClick={this.toggle}>
              {open ? "Close" : "Menu"}
            </NavToggle>
          </ToggleContainer>
          <NavLinks open={open}>
            {DEFAULT_LINKS.map((section, index) => {
              if (!data[`${section}Link`].show) {
                return null;
              }
              return (
                <NavLink key={index} isOffset={false}>
                  <A href={`#section-${section}`}>
                    {data[`${section}Link`].text}
                  </A>
                </NavLink>
              );
            })}
          </NavLinks>
        </NavContainer>
      </NavWrapper>
    );
  }
}

export default Nav;
