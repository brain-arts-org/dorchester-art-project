import footerQuery from "./footer";
import homeQuery from "./home";
import navQuery from "./nav";
import eventsQuery from "./events";

const query = `
  query {
    ${footerQuery}
    ${homeQuery}
    ${navQuery}
    ${eventsQuery}
  }
`;

export default query;
