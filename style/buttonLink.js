import styled from "styled-components";
import Colors from "./colors";

const ButtonLink = styled.a`
  display: inline;
  width: auto;
  padding: 10px 20px;
  color: ${Colors.WHITE};
  background-color: ${Colors.BLACK};
  outline: none;
  border: none;
  font-size: 14px;
  text-transform: uppercase;
  margin: 0 auto;
  cursor: pointer;
  font-family: ChronicRegular;
  font-size: 16px;
  text-decoration: none;

  &:hover {
    background-color: ${Colors.TEAL};
  }
`;

export default ButtonLink;
