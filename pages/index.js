import React, { Component } from "react";
import styled from "styled-components";
import { getImageUrl } from "takeshape-routing";
import Layout from "../layouts/default";
import TakeShape from "../api/takeshape";
import { homeQuery, navQuery, footerQuery } from "../queries";
import { Container, Section, Grid, MediaQueries, P } from "../style";

const TextBox = styled.div`
  padding: 40px 30px;
  background-color: rgba(0, 0, 0, 0.8);
`;

const CoverSection = styled(Section)`
  padding: 200px 0 50px;

  ${MediaQueries.SMALL} {
    padding: 50px 0;
  }
`;

const CoverTextBox = styled(TextBox)`
  grid-column: span 8;

  ${MediaQueries.SMALL} {
    grid-column: span 12;
  }
`;

const Home = ({ navData, footerData, pageData }) => (
  <Layout navData={navData} footerData={footerData}>
    <CoverSection id="section-cover" section={pageData.coverSection}>
      <Container>
        <Grid>
          <CoverTextBox>
            <P>{pageData.coverSection.blurb}</P>
          </CoverTextBox>
        </Grid>
      </Container>
    </CoverSection>
    <Section id="section-gallery" />
    <Section id="section-events" />
    <Section id="section-artists" />
    <Section id="section-rentals" />
    <Section id="section-zineLib" />
    <Section id="section-faq" />
  </Layout>
);

Home.getInitialProps = async function() {
  const navData = await TakeShape.getContent(navQuery);
  const footerData = await TakeShape.getContent(footerQuery);
  const pageData = await TakeShape.getContent(homeQuery);
  return {
    navData: navData.nav,
    footerData: footerData.footer,
    pageData: pageData.homePage
  };
};

export default Home;
