import React from "react";
import styled from "styled-components";
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
  padding-bottom: 200px;

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
  <Section data={data}>
    <Container>
      <Grid>
        <InfoBox>
          <P>{data.mainText}</P>
        </InfoBox>
        <OpenSpace>
          <Title>{data.title}</Title>
          <CTA href={data.ctaLink}>{data.ctaText}</CTA>
        </OpenSpace>
      </Grid>
      <MobileCTAContainer>
        <MobileCTA href={data.ctaLink}>{data.ctaText}</MobileCTA>
      </MobileCTAContainer>
    </Container>
  </Section>
);

export default Rentals;
