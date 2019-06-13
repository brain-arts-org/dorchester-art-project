import React from "react";
import Helmet from "react-helmet";

const Head = ({ siteTitle }) => (
  <Helmet>
    <html lang="en" />
    <title>{siteTitle}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Helmet>
);

export default Head;
