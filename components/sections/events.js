import React, { Component } from "react";
import styled from "styled-components";
import Moment from "react-moment";
import {
  Container,
  Section,
  Grid,
  MediaQueries,
  Colors,
  Label,
  P,
  H2,
  H3,
  H4,
  H6
} from "../../style";

const EventsContainer = styled(Container)`
  position: relative;
`;

const EventLabel = styled(Label)`
  left: -40px;
`;

const NoEvents = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  padding: 30px;
`;

const WeekSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
  flex-wrap: wrap;
  padding-top: 40px;
  margin-bottom: 60px;
`;

const WeekEvent = styled.div`
  grid-row: span 1;
  border: 2px solid ${Colors.TEAL};
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;

  &:last-child {
    margin-right: 0;
  }

  ${MediaQueries.MEDIUM} {
    width: 100%;
    box-sizing: border-box;
    grid-column: span 2;
  }

  ${MediaQueries.SMALL} {
    width: 100%;
    box-sizing: border-box;
    grid-column: span 4;
  }
`;

const WeekTitle = styled.div`
  flex-grow: 1;
`;

const ArtistList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
`;

const Artist = styled.li`
  font-size: 14px;
  margin-bottom: 5px;
`;

const WeekDetails = styled.div`
  display: flex;
  margin-top: 20px;
`;

const Price = styled.div`
  flex: 1;
`;

const EventLink = styled.div`
  flex: 1;
  text-align: right;
  a {
    color: ${Colors.WHITE};

    &:visited {
      color: ${Colors.WHITE};
    }
  }
`;

const UpcomingSection = styled.div`
  padding: 40px 0 0;
  margin-top: 20px;
  background-color: rgba(0, 0, 0, 0.8);
  grid-column: span 9;
  grid-column: span 12;
`;

const UpcomingRow = styled.div`
  display: flex;
  padding: 20px 30px;
  border-bottom: 1px solid #4a4a4a;

  ${MediaQueries.SMALL} {
    width: 100%;
    box-sizing: border-box;
    padding: 20px 25px;
    flex-wrap: wrap;
  }
`;

const UpcomingDate = styled.div`
  flex: 2;
  padding-right: 5px;

  ${MediaQueries.SMALL} {
    flex: 1 0 100%;
    margin-bottom: 10px;
    padding: 0;
  }
`;

const UpcomingTitleSection = styled.div`
  flex: 4;
  padding-left: 5px;
  padding-right: 5px;

  ${MediaQueries.SMALL} {
    flex: 1 0 100%;
    margin-bottom: 10px;
    padding: 0;
  }
`;

const UpcomingTitle = styled.span`
  font-weight: 700;
`;

const UpcomingDetails = styled.div`
  flex: 1;
  text-align: right;
  padding: left: 5px;

  ${MediaQueries.SMALL} {
    flex: 1 0 100%;
    margin-bottom: 10px;
    padding: 0;
    text-align: left;
  }

  p {
    margin-bottom: 5px;
  }

  a {
    color: ${Colors.WHITE};

    &:visited {
      color: ${Colors.WHITE};
    }
  }
`;

class Events extends Component {
  filterEvents(events, weekly) {
    const today = new Date();
    const nextWeek = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 7
    );
    const filteredEvents = events.filter(event => {
      if (weekly) {
        return new Date(event.datetime) < nextWeek;
      } else {
        return new Date(event.datetime) >= nextWeek;
      }
    });

    return filteredEvents.sort((a, b) => (a.datetime < b.datetime ? -1 : 1));
  }

  renderInlineArtists(artists) {
    return artists.map(artist => artist.name).join(", ");
  }

  render() {
    const { data, events } = this.props;
    const weeklyEvents = this.filterEvents(events, true);
    const upcomingEvents = this.filterEvents(events, false);
    return (
      <Section id="section-events" data={data}>
        <EventsContainer>
          <H2>{data.title}</H2>
          {events.length === 0 && (
            <NoEvents>
              <P>No events are currently scheduled. Check back soon!</P>
            </NoEvents>
          )}
          {weeklyEvents.length > 0 && (
            <>
              <EventLabel tilt>
                <H3>{data.thisWeekLabel}</H3>
              </EventLabel>
              <WeekSection>
                {weeklyEvents.map((event, index) => (
                  <WeekEvent key={index}>
                    <WeekTitle>
                      <H4>
                        <Moment
                          date={event.datetime}
                          format="dddd M/D @ h:mm A"
                        />
                      </H4>
                      <H6>{event.title}</H6>
                      {event.artists && (
                        <ArtistList>
                          {event.artists.map((artist, index) => (
                            <Artist key={index}>{artist.name}</Artist>
                          ))}
                        </ArtistList>
                      )}
                    </WeekTitle>
                    <WeekDetails>
                      <Price>
                        <P>{event.price ? `$${event.price}` : "Free"}</P>
                      </Price>
                      <EventLink>
                        <P>
                          {event.url && (
                            <a href={event.url}>{event.linkText || "More"}</a>
                          )}
                        </P>
                      </EventLink>
                    </WeekDetails>
                  </WeekEvent>
                ))}
              </WeekSection>
            </>
          )}
          {upcomingEvents.length > 0 && (
            <>
              <EventLabel>
                <H3>{data.upcomingLabel}</H3>
              </EventLabel>
              <Grid>
                <UpcomingSection>
                  {upcomingEvents.map((event, index) => (
                    <UpcomingRow key={index}>
                      <UpcomingDate>
                        <Moment
                          date={event.datetime}
                          format="dddd M/D @ h:mm A"
                        />
                      </UpcomingDate>
                      <UpcomingTitleSection>
                        <UpcomingTitle>{event.title}</UpcomingTitle>
                        {event.artists &&
                          `: ${this.renderInlineArtists(event.artists)}`}
                      </UpcomingTitleSection>
                      <UpcomingDetails>
                        <P>{event.price ? `$${event.price}` : "Free"}</P>
                        <P>
                          {event.url && (
                            <a href={event.url}>{event.linkText || "More"}</a>
                          )}
                        </P>
                      </UpcomingDetails>
                    </UpcomingRow>
                  ))}
                </UpcomingSection>
              </Grid>
            </>
          )}
        </EventsContainer>
      </Section>
    );
  }
}

export default Events;
