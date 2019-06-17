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
  H4
} from "../../style";

const EventsContainer = styled(Container)`
  position: relative;
`;

const EventLabel = styled(Label)`
  left: -40px;
`;

const WeekSection = styled.div`
  display: flex;
  padding-top: 40px;
  margin-bottom: 60px;
  ${MediaQueries.SMALL} {
    flex-direction: column;
  }
`;

const WeekEvent = styled.div`
  flex: 1;
  border: 2px solid ${Colors.TEAL};
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  padding: 20px;
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }

  ${MediaQueries.SMALL} {
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 20px;
  }
`;

const UpcomingSection = styled.div`
  padding: 40px 0 0;
  margin-top: 20px;
  background-color: rgba(0, 0, 0, 0.8);
  grid-column: span 9;
  ${MediaQueries.SMALL} {
    grid-column: span 12;
  }
`;

const UpcomingRow = styled.div`
  display: flex;
  padding: 20px 30px;
  border-bottom: 1px solid #4a4a4a;

  ${MediaQueries.SMALL} {
    width: 100%;
    box-sizing: border-box;
    padding: 20px 25px;
  }
`;

const UpcomingDate = styled.div`
  flex: 1;
  padding-right: 5px;
`;

const UpcomingTitle = styled.div`
  flex: 1;
  padding-left: 5px;
`;

class Events extends Component {
  filterEvents(events, weekly) {
    const today = new Date();
    const nextWeek = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 7
    );
    return events.filter(event => {
      if (weekly) {
        return new Date(event.datetime) < nextWeek;
      } else {
        return new Date(event.datetime) >= nextWeek;
      }
    });
  }
  render() {
    const { data, events } = this.props;
    const weeklyEvents = this.filterEvents(events, true);
    const upcomingEvents = this.filterEvents(events, false);
    return (
      <Section id="section-events" data={data}>
        <EventsContainer>
          <H2>{data.title}</H2>
          <EventLabel tilt>
            <H3>{data.thisWeekLabel}</H3>
          </EventLabel>
          <WeekSection>
            {weeklyEvents.map((event, index) => (
              <WeekEvent key={index}>
                <H4>
                  <Moment date={event.datetime} format="dddd M/D @ h:mm A" />
                </H4>
                <P>{event.title}</P>
              </WeekEvent>
            ))}
          </WeekSection>
          <EventLabel>
            <H3>{data.upcomingLabel}</H3>
          </EventLabel>
          <Grid>
            <UpcomingSection>
              {upcomingEvents.map((event, index) => (
                <UpcomingRow key={index}>
                  <UpcomingDate>
                    <Moment date={event.datetime} format="dddd M/D @ h:mm A" />
                  </UpcomingDate>
                  <UpcomingTitle>{event.title}</UpcomingTitle>
                </UpcomingRow>
              ))}
            </UpcomingSection>
          </Grid>
        </EventsContainer>
      </Section>
    );
  }
}

export default Events;
