import React from "react";
import styled from "styled-components";
import { Section, Container, Grid, MediaQueries, H2, P } from "../../style";

const OpenSpace = styled.div`
  grid-column: span 6;

  ${MediaQueries.SMALL} {
    grid-column: span 12;
  }
`;

const Title = styled(H2)`
  text-align: left;

  ${MediaQueries.SMALL} {
    text-align: center;
  }
`;

const InfoBox = styled.div`
  grid-column: span 6;
  padding: 30px;
  background-color: rgba(0, 0, 0, 0.8);
  min-height: 400px;

  ${MediaQueries.SMALL} {
    grid-column: span 12;
    padding: 30px 25px;
    margin: 30px 0;
  }
`;

const ZineLib = ({ data }) => (
  <Section data={data}>
    <Container>
      <Grid>
        <OpenSpace>
          <Title>{data.title}</Title>
        </OpenSpace>
        <InfoBox>
          <P>{data.mainText}</P>
        </InfoBox>
      </Grid>
    </Container>
  </Section>
);

export default ZineLib;
