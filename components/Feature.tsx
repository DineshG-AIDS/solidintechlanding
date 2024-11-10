import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 4rem;
  padding-bottom: 4rem;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 640px) {
    max-width: 640px;
  }
  @media (min-width: 768px) {
    max-width: 100%;
    padding-left: 6rem;
    padding-right: 6rem;
  }
  @media (min-width: 1024px) {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const LeftSection = styled.div`
  width: 100%;
  @media (min-width: 1024px) {
    width: 50%;
  }
`;

const RightSection = styled.div`
  width: 100%;
  @media (min-width: 1024px) {
    width: 50%;
  }
`;

const Title = styled.h2`
  max-width: 24rem;
  margin-bottom: 1.5rem;
  font-family: sans-serif;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.25;
  color: #111827;
  @media (min-width: 640px) {
    font-size: 2.25rem;
  }
  @media (min-width: 1024px) {
    max-width: 32rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #4b5563;
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  margin-bottom: 1rem;
  border-radius: 50%;
  background-color: #f1f5f9;
`;

const Icon = styled.svg`
  width: 1.75rem;
  height: 1.75rem;
  color: #6b21a8;
`;

const Item = styled.div`
  margin-bottom: 2rem;
`;

const ItemTitle = styled.h6`
  margin-bottom: 0.5rem;
  font-weight: 600;
  line-height: 1.25;
`;

const ItemDescription = styled.p`
  margin-bottom: 1rem;
  font-size: 0.875rem;
  color: #111827;
`;

const List = styled.ul`
  margin-bottom: 1rem;
  margin-left: -0.25rem;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  font-size: 1rem;
  color: #4b5563;
`;

const ListIcon = styled.svg`
  width: 1.25rem;
  height: 1.25rem;
  margin-top: -0.125rem;
  color: #6b21a8;
`;

const LearnMoreLink = styled.a`
  display: inline-flex;
  align-items: center;
  font-weight: 600;
  transition: color 0.2s ease-in-out;
  color: #6b21a8;
  &:hover {
    color: #4c1d95;
  }
`;

export const Feature: React.FC = () => {
  return (
    <Container>
      <FlexContainer>
        <LeftSection>
          <Title>To conquer the space you must trust.</Title>
        </LeftSection>
        <RightSection>
          <Paragraph>
            For those who have seen the Earth from space, and for the hundreds and perhaps thousands more who will, the experience most certainly changes your perspective.
          </Paragraph>
        </RightSection>
      </FlexContainer>
      <div className="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <Item>
          <IconWrapper>
            <Icon strokeLinecap="round" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="13" fill="none" r="9" stroke="currentColor" />
              <path
                d=" M21.955,18.005c1.089,2.145,1.378,3.816,0.622,4.572C20.92,24.234,14.799,20.799,9,15S-0.234,3.08,1.423,1.423 C2.18,0.666,3.853,0.956,6,2.047"
                stroke="currentColor"
                fill="none"
              />
            </Icon>
          </IconWrapper>
          <ItemTitle>Our planet</ItemTitle>
          <ItemDescription>
            We choose to go to the moon, not because its easy, but because its hard.
          </ItemDescription>
          <List>
            <ListItem>
              <ListIcon stroke="currentColor" viewBox="0 0 52 52">
                <polygon strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23" />
              </ListIcon>
              Earth
            </ListItem>
            <ListItem>
              <ListIcon stroke="currentColor" viewBox="0 0 52 52">
                <polygon strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23" />
              </ListIcon>
              Space
            </ListItem>
            <ListItem>
              <ListIcon stroke="currentColor" viewBox="0 0 52 52">
                <polygon strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23" />
              </ListIcon>
              Humans
            </ListItem>
          </List>
          <LearnMoreLink href="/">Learn more</LearnMoreLink>
        </Item>
        {/* Repeat similar structure for other items */}
      </div>
    </Container>
  );
};
