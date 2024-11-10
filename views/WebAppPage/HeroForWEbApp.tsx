import Image from "next/image";

import styled from 'styled-components';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import { media } from 'utils/media';
import ImageHeroWeb from "../../public/WebAppHero.png"

export default function HeroForWEbApp() {

  return (
    <HeroWrapper>
      <Contents>
        <CustomOverTitle>Grow your business with our service</CustomOverTitle>
        <Heading>Welcome to Solid InTech  Crafting Digital Experiences</Heading>
        <Description>
        At Solid InTech, we specialize in creating custom, innovative websites that bring your vision to life. With years of experience in web development, design, and digital strategy, we help businesses build a strong online presence that stands out.        </Description>
      </Contents>
      <ImageContainer>
      <Image alt="Logo" src={ImageHeroWeb}/>
      </ImageContainer>
    </HeroWrapper>
  );
}

const HeroWrapper = styled(Container)`
  display: flex;
  padding-top: 7rem;
justify-content: space-between;


  ${media('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const Contents = styled.div`
  flex: 1;
  max-width: 60rem;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;

    max-width: 45rem;

  ${media('<=desktop')} {
    margin-top: 2rem;
    justify-content: center;
      max-width: 80%;
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  font-size: 6.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;
  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;
