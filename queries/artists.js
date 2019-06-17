const artistsQuery = `
  artists: getArtistList {
    items {
      name
      photo {
        path
      }
      url
    }
  }
`;

export default artistsQuery;
