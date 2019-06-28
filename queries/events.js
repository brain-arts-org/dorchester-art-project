const eventQuery = `
  events: getEventList(
    filter: {
      range: {
        datetime: {
          gte: ${Date.now()}
        }
      }
    }) {
    items {
      artists {
        name
      }
      datetime
      linkText
      price
      title
      url
    }
  }
`;

export default eventQuery;
