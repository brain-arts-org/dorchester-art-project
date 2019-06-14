import styled from "styled-components";
import MediaQueries from "./mediaQueries";
import Colors from "./colors";

const H3 = styled.h3`
  display: inline;
  font-family: ChronicRegular;
  font-weight: 700;
  font-size: 30px;
  color: ${Colors.TEAL};
  text-transform: uppercase;
  text-shadow: 2px 2px 4px #000000;
  margin-block-start: 0;
  margin-block-end: 0;

  ${MediaQueries.SMALL} {
  }
`;

export default H3;
