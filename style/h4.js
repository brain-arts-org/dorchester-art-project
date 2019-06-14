import styled from "styled-components";
import MediaQueries from "./mediaQueries";
import Colors from "./colors";

const H4 = styled.h4`
  font-family: DinAlternate;
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 10px;
  ${MediaQueries.SMALL} {
  }
`;

export default H4;
