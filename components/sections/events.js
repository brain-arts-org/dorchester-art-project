import React, { Component } from "react";
import styled from "styled-components";
import { getImageUrl } from "takeshape-routing";
import Moment from "react-moment";
import {
  Container,
  Section,
  Grid,
  MediaQueries,
  Img,
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

const WeekSection = styled.div`
  display: flex;
  padding-top: 40px;
`;

const WeekLabel = styled(Label)`
  left: -70px;
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
`;
const UpcomingLabel = styled(Label)``;

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
        console.log(new Date(event.datetime));
        console.log(nextWeek > new Date(event.datetime));
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
          <WeekLabel tilt>
            <H3>{data.thisWeekLabel}</H3>
          </WeekLabel>
          <WeekSection>
            {weeklyEvents.map((event, index) => (
              <WeekEvent key={index}>
                <H4>
                  <Moment date={event.datetime} format="dddd D/M @ h:mm A" />
                </H4>
                <P size="small">{event.title}</P>
              </WeekEvent>
            ))}
          </WeekSection>
        </EventsContainer>
      </Section>
    );
  }
}

export default Events;
