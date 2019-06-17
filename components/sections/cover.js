import React from "react";
import styled from "styled-components";
import { Container, Section, Grid, MediaQueries, P } from "../../style";

const CoverSection = styled(Section)`
  padding: 200px 0 50px;

  ${MediaQueries.SMALL} {
    padding: 50px 0;
  }
`;

const CoverTextBox = styled.div`
  padding: 40px 30px;
  background-color: rgba(0, 0, 0, 0.8);
  grid-column: span 8;

  ${MediaQueries.SMALL} {
    grid-column: span 12;
    padding: 40px 25px;
  }
`;

const Cover = ({ data }) => (
  <CoverSection id="section-cover" data={data}>
    <Container>
      <Grid>
        <CoverTextBox>
          <P>{data.blurb}</P>
        </CoverTextBox>
      </Grid>
    </Container>
  </CoverSection>
);

export default Cover;
