import styled from "styled-components";
import { getImageUrl } from "takeshape-routing";

const Section = styled.section`
  background: ${({ section }) =>
    section
      ? `url(${getImageUrl(
          section.backgroundImage.path
        )}) no-repeat center center`
      : "transparent"};
  background-size: cover;
`;

export default Section;
