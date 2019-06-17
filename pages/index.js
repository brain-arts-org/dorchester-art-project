import React from "react";
import Layout from "../layouts/default";
import { Cover, Gallery, Events, Artists } from "../components/sections";
import TakeShape from "../api/takeshape";
import query from "../queries";

const Home = ({ navData, footerData, pageData, events, artists }) => (
  <Layout navData={navData} footerData={footerData}>
    <Cover data={pageData.coverSection} />
    <Gallery data={pageData.gallerySection} />
    <Events data={pageData.eventsSection} events={events} />
    <Artists data={pageData.artistsSection} artists={artists} />
  </Layout>
);

Home.getInitialProps = async function() {
  const data = await TakeShape.getContent(query);
  return {
    navData: data.nav,
    footerData: data.footer,
    pageData: data.homePage,
    events: data.events.items,
    artists: data.artists.items
  };
};

export default Home;
