import React from "react";
import styled from "styled-components";
import { getImageUrl } from "takeshape-routing";
import {
  Container,
  Section,
  Grid,
  MediaQueries,
  Img,
  Colors,
  P,
  H2,
  H3,
  H4
} from "../../style";

const MainGrid = styled(Grid)`
  padding-top: 10px;
`;

const GalleryGrid = styled(Grid)`
  grid-column-gap: 20px;
`;

const Label = styled.span`
  background-color: ${Colors.BLACK};
  padding: 10px 60px;
  width: auto;
  position: absolute;

  ${MediaQueries.SMALL} {
    display: block;
    padding: 10px 0;
    transform: none;
    width: 180px;
    left: 50%;
    margin-left: -90px;
    text-align: center;
  }
`;

const OnViewBox = styled.div`
  margin-top: 20px;
  padding: 50px 30px 30px;
  background-color: rgba(0, 0, 0, 0.8);
  grid-column: span 9;
  position: relative;

  ${MediaQueries.SMALL} {
    grid-column: span 12;
    order: 2;
    padding-top: 60px;
  }
`;

const OnViewLabel = styled(Label)`
  top: -20px;
  left: -50px;
  transform: rotate(-10deg);
`;

const TitleSection = styled.div`
  grid-column: span 3;
  text-align: right;

  ${MediaQueries.SMALL} {
    order: 1;
    grid-column: span 12;
    text-align: center;
    margin-bottom: 50px;
  }
`;

const UpcomingBox = styled.div`
  margin-top: 50px;
  padding: 50px 30px 30px;
  background-color: rgba(0, 0, 0, 0.8);
  grid-column: span 9;
  position: relative;

  ${MediaQueries.SMALL} {
    grid-column: span 12;
    order: 3;
    padding-top: 60px;
  }
`;

const UpcomingLabel = styled(Label)`
  top: -20px;
  left: -50px;
`;

const UpcomingSpacer = styled.div`
  grid-column: span 3;
`;

const Column = styled.div`
  grid-column: span ${({ full }) => (full ? 12 : 6)};
  ${MediaQueries.SMALL} {
    grid-column: span 12;

    img {
      margin-bottom: 20px;
    }
  }
`;

const GalleryDisplay = ({ exhibit }) => (
  <GalleryGrid>
    {exhibit.image && (
      <Column>
        <Img src={getImageUrl(exhibit.image.path)} />
      </Column>
    )}
    <Column full={!exhibit.image}>
      <H4>{exhibit.exhibitName}</H4>
      <P>{exhibit.exhibitBlurb}</P>
    </Column>
  </GalleryGrid>
);

const Gallery = ({ data }) => (
  <Section id="section-gallery" data={data}>
    <Container>
      <MainGrid>
        <OnViewBox>
          <OnViewLabel>
            <H3>{data.onViewExhibit.label}</H3>
          </OnViewLabel>
          <GalleryDisplay exhibit={data.onViewExhibit} />
        </OnViewBox>
        <TitleSection>
          <H2>{data.title}</H2>
        </TitleSection>
        <UpcomingSpacer />
        <UpcomingBox>
          <UpcomingLabel>
            <H3>{data.upcomingExhibit.label}</H3>
          </UpcomingLabel>
          <GalleryDisplay exhibit={data.upcomingExhibit} />
        </UpcomingBox>
      </MainGrid>
    </Container>
  </Section>
);

export default Gallery;
