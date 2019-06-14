import styled from "styled-components";
import { getImageUrl } from "takeshape-routing";

const Section = styled.section`
  background: ${({ data }) =>
    data.backgroundImage
      ? `url(${getImageUrl(data.backgroundImage.path)}) no-repeat center center`
      : "transparent"};
  background-size: cover;
  padding: 50px 0 30px;
`;

export default Section;
