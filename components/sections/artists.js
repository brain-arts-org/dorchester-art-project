import React, { Component } from "react";
import styled from "styled-components";
import { getImageUrl } from "takeshape-routing";
import {
  Container,
  Section,
  Grid,
  MediaQueries,
  ButtonLink,
  Img,
  Colors,
  H2,
  H3,
  H6
} from "../../style";

const ArtistGrid = styled(Grid)`
  padding-top: 40px;
`;

const ArtistColumn = styled.div`
  grid-column: span 3;
  text-align: center;
  margin-bottom: 30px;

  ${MediaQueries.MEDIUM} {
    grid-column: span 4;
  }

  ${MediaQueries.SMALL} {
    grid-column: span 12;
  }
`;

const ArtistImage = styled(Img)`
  border-radius: 100%;
  max-width: 180px;
`;

const ArtistName = styled(H6)`
  margin-top: 15px;

  a {
    color: ${Colors.WHITE};

    &:visited {
      color: ${Colors.WHITE};
    }
  }
`;

const CTAContainer = styled.div`
  width: 100%;
  text-align: right;
  margin: 20px 0 10px;

  ${MediaQueries.SMALL} {
    text-align: center;
  }
`;

const CTA = styled(ButtonLink)``;

const Artists = ({ data, artists }) => (
  <Section id="section-artists" data={data}>
    <Container>
      <H2>{data.title}</H2>
      <ArtistGrid>
        {artists.map((artist, index) => (
          <ArtistColumn key={index}>
            <ArtistImage src={getImageUrl(artist.photo.path)} />
            <ArtistName>
              {artist.url && <a href={artist.url}>{artist.name}</a>}
              {!artist.url && artist.name}
            </ArtistName>
          </ArtistColumn>
        ))}
      </ArtistGrid>
      <CTAContainer>
        <CTA href={data.ctaLink}>{data.ctaText}</CTA>
      </CTAContainer>
    </Container>
  </Section>
);

export default Artists;
