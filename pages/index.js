import React from "react";
import Layout from "../layouts/default";
import { Cover, Gallery } from "../components/sections";
import TakeShape from "../api/takeshape";
import { homeQuery, navQuery, footerQuery } from "../queries";
import {
  Container,
  Section,
  Grid,
  MediaQueries,
  Img,
  P,
  H2,
  H3,
  H4
} from "../style";

const Home = ({ navData, footerData, pageData }) => (
  <Layout navData={navData} footerData={footerData}>
    <Cover data={pageData.coverSection} />
    <Gallery data={pageData.gallerySection} />
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
