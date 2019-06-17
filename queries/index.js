import footerQuery from "./footer";
import homeQuery from "./home";
import navQuery from "./nav";
import eventsQuery from "./events";
import artistsQuery from "./artists";

const query = `
  query {
    ${footerQuery}
    ${homeQuery}
    ${navQuery}
    ${eventsQuery}
    ${artistsQuery}
  }
`;

export default query;
