const homeQuery = `
  query {
    getHomePage {
      artistsSection {
        backgroundImage {
          path
        }
        ctaLink
        ctaText
        title
      }
      coverSection {
        backgroundImage {
          path
        }
        blurb
      }
      eventsSection {
        backgroundImage {
          path
        }
        disclaimer
        thisWeekLabel
        title
        upcomingLabel
      }
      faqSection {
        questions {
          answer
          question
        }
        title
      }
      gallerySection {
        backgroundImage {
          path
        }
        onViewExhibit {
          exhibitBlurb
          exhibitName
          image {
            path
          }
          label
        }
        title
        upcomingExhibit {
          exhibitBlurb
          exhibitName
          image {
            path
          }
          label
        }
      }
      rentalsSection {
        backgroundImage {
          path
        }
        ctaLink
        ctaText
        mainText
        title
      }
      zineLibSection {
        backgroundImage {
          path
        }
        mainText
        title
      }
    }
  }
`;

export default homeQuery;
