import React, { Component } from "react";
import styled from "styled-components";
import { getImageUrl } from "takeshape-routing";
import Layout from "../layouts/default";
import TakeShape from "../api/takeshape";
import { homeQuery, navQuery, footerQuery } from "../queries";

const Home = ({ navData, footerData, homeData }) => (
  <Layout navData={navData} footerData={footerData}>
    <h1>Dorchester Art Project</h1>
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
