import styled from "styled-components";
import MediaQueries from "./mediaQueries";
import Colors from "./colors";

const Label = styled.span`
  background-color: ${Colors.BLACK};
  padding: 10px 60px;
  width: auto;
  position: absolute;
  transform: ${({ tilt }) => (tilt ? "rotate(-10deg)" : "none")};

  ${MediaQueries.SMALL} {
    display: block;
    padding: 10px 0;
    transform: none;
    width: 180px;
    left: 50%;
    margin-left: -90px;
    text-align: center;
  }
`;

export default Label;
