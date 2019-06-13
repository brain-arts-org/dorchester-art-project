const navQuery = `
  query{
    nav: getNav {
      artistsLink {
        show
        text
      }
      eventsLink {
        show
        text
      }
      externalLinks {
        text
        url
      }
      faqLink {
        show
        text
      }
      galleryLink {
        show
        text
      }
      rentalsLink {
        show
        text
      }
      zineLibLink {
        show
        text
      }
      externalLinks {
        url
        text
      }
    }
  }
`;

export default navQuery;
