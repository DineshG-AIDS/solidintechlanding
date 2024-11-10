import NextImage from 'next/image';
import React from 'react';
import styled, { keyframes } from 'styled-components';
import Container from 'components/Container';
import { media } from 'utils/media';

export default function Partners() {
  const scrollToNextSection = () => {
    window.scrollBy({
      top: window.innerHeight / 1, 
      behavior: 'smooth',
    });
  };

  return (
    <PartnersWrapper>
      <Title>Scroll Down</Title>
      <ImageWrapper onClick={scrollToNextSection}>
        <AnimatedArrow src={'/partners/icons8-down-arrow-96.png'} width={35} height={35} alt="Scroll Down Icon" />
      </ImageWrapper>
    </PartnersWrapper>
  );
}

const Title = styled.h3`
  font-size: 1.3rem;
  letter-spacing: 0.02em;
  line-height: 0;
  text-transform: uppercase;
  margin-bottom: 2rem;
  text-align: center;
  opacity: 0.8;
  padding-bottom: 20px;
  cursor: default;

  ${media('<=desktop')} {
    line-height: 1.5;
  }
`;

const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  animation: ${bounceAnimation} 2s infinite; // Adds a subtle bouncing animation
  &:hover {
    transform: scale(1.1); // Slightly enlarge the icon on hover
    transition: transform 0.3s;
  }
`;

const AnimatedArrow = styled(NextImage)`
  width: 35px;
  height: 35px;
  transition: transform 0.3s;
`;

const PartnersWrapper = styled(Container)`
  .swiper-wrapper {
    will-change: transform;
    transition-timing-function: linear;
    margin-top: 0.5rem;
    user-select: none;
  }

  .swiper-slide {
    opacity: 0.8;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
  }
`;
