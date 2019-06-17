import React from "react";
import styled from "styled-components";
import { Section, Container, H2, H6, P, Colors } from "../../style";

const Questions = styled.div`
  padding-top: 40px;
  h6,
  p {
    color: ${Colors.BLACK};
  }
`;

const Question = styled.div`
  margin-bottom: 40px;
`;

const FAQ = ({ data }) => (
  <Section data={data}>
    <Container>
      <H2>{data.title}</H2>
      <Questions>
        {data.questions.map((question, index) => (
          <Question>
            <H6>{question.question}</H6>
            <P>{question.answer}</P>
          </Question>
        ))}
      </Questions>
    </Container>
  </Section>
);

export default FAQ;
