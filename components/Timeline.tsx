import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';

// Styled Components
const ListContainer = styled.ol`
  display: flex;
  flex-direction: column;
  margin: 10rem;
  margin-top: 12rem;
  align-items: center;
  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const ListItem = styled.li`
  position: relative;
  margin-bottom: 1.5rem;
  @media (min-width: 640px) {
    margin-bottom: 0;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Connector = styled.div`
  display: none;
  @media (min-width: 640px) {
    display: flex;
    width: 100%;
    height: 0.125rem;
    background-color: #e5e7eb;
  }
`;

const ItemContent = styled.div`
  margin-top: 0.75rem;
  @media (min-width: 640px) {
    padding-end: 2rem;
  }
`;

const IconContainer = styled.div`
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background-color: #bfdbfe;
  border-radius: 50%;
  font-size: 1.5rem;
  @media (min-width: 640px) {
    box-shadow: 0 0 0 2px #f3f4f6, 0 0 0 6px #111827;
  }
`;

const Title = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: #1f2937;
  margin-top: 1rem;
`;

const Description = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: #6b7280;
  margin-top: 1rem;
`;

const Icon = () => (
  <svg width="10" height="10" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
  </svg>
);

interface Step {
  title: string;
  description: string;
}

interface TimelineProps {
  steps: Step[];
}

const Timeline: React.FC<TimelineProps> = ({ steps }) => (
  <>
  
    <SectionTitle>Our Process</SectionTitle>
    <ListContainer>
      {steps.map((step, index) => (
        <ListItem key={index}>
          <ItemWrapper>
            <IconContainer>
              <Icon />
            </IconContainer>
            <Connector />
          </ItemWrapper>
          <ItemContent>
            <Title>{step.title}</Title>
            <Description>{step.description}</Description>
          </ItemContent>
        </ListItem>
      ))}
    </ListContainer>
  </>
);

export default Timeline;
