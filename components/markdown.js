import React from "react";
import ReactMarkdown from "react-markdown";
import { H6, Img, P } from "../style";

const Markdown = ({ source, paragraphSize, color, dark }) => {
  return (
    <ReactMarkdown
      source={source}
      renderers={{
        paragraph: props => (
          <P {...props} size={paragraphSize} color={color} dark={dark} />
        ),
        heading: H6,
        imageReference: Img
      }}
    />
  );
};

export default Markdown;
