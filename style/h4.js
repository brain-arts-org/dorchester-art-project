import styled from "styled-components";
import MediaQueries from "./mediaQueries";
import Colors from "./colors";

const H4 = styled.h4`
  font-family: ChronicRegular;
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 15px;
  text-align: center;
  ${MediaQueries.SMALL} {
  }
`;

export default H4;
