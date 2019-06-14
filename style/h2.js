import styled from "styled-components";
import MediaQueries from "./mediaQueries";
import Colors from "./colors";

const H2 = styled.h2`
  font-family: ChronicRegular;
  font-weight: 700;
  font-size: 70px;
  color: ${Colors.TEAL};
  text-transform: uppercase;
  text-shadow: 2px 2px 4px #000000;
  text-align: center;

  ${MediaQueries.SMALL} {
    font-size: 50px;
  }
`;

export default H2;
