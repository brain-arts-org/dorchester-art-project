const eventQuery = `
  events: getEventList {
    items {
      datetime
      title
      url
    }
  }
`;

export default eventQuery;
