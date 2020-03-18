import React from "react";
import styled from "styled-components";
import Markdown from "../markdown";
import {
  Section,
  Container,
  Grid,
  P,
  H2,
  MediaQueries,
  ButtonLink
} from "../../style";

const InfoBox = styled.div`
  grid-column: span 6;
  padding: 30px;
  background-color: rgba(0, 0, 0, 0.8);
  min-height: 400px;

  ${MediaQueries.SMALL} {
    grid-column: span 12;
    order: 2;
    padding: 30px 25px;
    margin: 30px 0;
  }
`;

const OpenSpace = styled.div`
  grid-column: span 6;
  display: flex;
  flex-direction: column;
  justify-content: right;

  ${MediaQueries.SMALL} {
    grid-column: span 12;
    order: 1;
    justify-content: center;
  }
`;

const Title = styled(H2)`
  text-align: right;
  flex-grow: 1;

  ${MediaQueries.SMALL} {
    text-align: center;
  }
`;

const CTA = styled(ButtonLink)`
  align-self: flex-end;
  margin: 0;

  ${MediaQueries.SMALL} {
    display: none;
  }
`;

const MobileCTAContainer = styled.div`
  display: none;
  text-align: center;
  width: 100%;

  ${MediaQueries.SMALL} {
    display: block;
  }
`;

const MobileCTA = styled(ButtonLink)``;

const Rentals = ({ data }) => (
  <Section id="section-rentals" data={data}>
    <Container>
      <Grid>
        <InfoBox>
          <Markdown source={data.mainText} />
        </InfoBox>
        <OpenSpace>
          <Title>{data.title}</Title>
          <CTA href={data.ctaLink}>{data.ctaText}</CTA>
        </OpenSpace>
      </Grid>
      <MobileCTAContainer>
        <MobileCTA href={data.ctaLink} target="_blank">
          {data.ctaText}
        </MobileCTA>
      </MobileCTAContainer>
    </Container>
  </Section>
);

export default Rentals;
